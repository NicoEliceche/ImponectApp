const geminiService = require('./geminiService');
const ragService = require('./ragService');
const oneDriveAgentService = require('./oneDriveAgentService');

const DESTINATIONS = [
  { terms: ['dashboard', 'tablero', 'inicio', 'principal'], path: '/', label: 'Dashboard' },
  { terms: ['documentos', 'documento', 'archivos', 'onedrive'], path: '/documents', label: 'Documentos' },
  { terms: ['email', 'correo', 'mails'], path: '/email', label: 'Email' },
  { terms: ['agentes', 'asistentes', 'ai hub'], path: '/ai-hub', label: 'Agentes / Asistentes' },
  { terms: ['chats', 'crm'], path: '/crm', label: 'Chats / CRM' },
  { terms: ['presupuestos', 'presupuesto'], path: '/quotes', label: 'Presupuestos' },
  { terms: ['cotizador', 'cotizaciones'], path: '/cotizador', label: 'Cotizador' },
  { terms: ['negocio', 'business'], path: '/business', label: 'Negocio' },
  {
    terms: ['clickup', 'tablero principal'],
    url: 'https://app.clickup.com/90133071152/v/g/2ky5k19g-273',
    label: 'ClickUp'
  },
  { terms: ['imponect.com', 'web principal', 'sitio web'], url: 'https://www.imponect.com', label: 'Imponect.com' }
];

const normalize = (value) => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

const latestUserMessage = (messages) => {
  if (!Array.isArray(messages)) return '';
  return String([...messages].reverse().find(message => message?.role === 'user')?.content || '').slice(0, 2000);
};

const extractNamedValue = (message, nouns = []) => {
  const quoted = String(message).match(/["“”']([^"“”']+)["“”']/);
  if (quoted?.[1]) return quoted[1].trim();

  const nounPattern = nouns.length ? `(?:${nouns.join('|')})\\s+` : '';
  const explicitMatch = String(message).match(/(?:llamad[oa]|que se llame|con nombre|nombre)\s+(.+)$/i);
  if (explicitMatch?.[1]) return explicitMatch[1].replace(/[.!?]+$/, '').trim();

  const nounMatch = String(message).match(new RegExp(`${nounPattern}(.+)$`, 'i'));
  const nounValue = nounMatch?.[1]?.replace(/[.!?]+$/, '').trim() || '';
  if (nounValue && !/^(?:en|dentro|para|de|del|a|al)\b/i.test(nounValue)) return nounValue;

  return '';
};

const getDocumentType = (message) => {
  const normalized = normalize(message);
  if (/\b(excel|planilla|xlsx)\b/.test(normalized)) return 'excel';
  if (/\b(texto|txt)\b/.test(normalized)) return 'text';
  return 'word';
};

const normalizeDocumentName = (name, fileType) => {
  const extensions = {
    word: /\.docx?$/i,
    excel: /\.xlsx?$/i,
    text: /\.txt$/i
  };
  return String(name || '')
    .replace(extensions[fileType], '')
    .replace(/[\\/:*?"<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
};

const normalizeFolderName = (name) => String(name || '')
  .replace(/[\\/:*?"<>|]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 120);

const isInstructionRequest = (message) => {
  const normalized = normalize(message);
  return /\b(explicame|instrucciones|pasos)\b/.test(normalized)
    || /\bcomo\b.*\b(usar|crear|buscar|navegar|abrir|guardar|enviar|hacer)\b/.test(normalized);
};

const buildSources = (sections) => sections.map(section => ({
  title: `Guía Imponect: ${section.title}`,
  source: 'platform-guide'
}));

const planCreateAction = (message) => {
  const normalized = normalize(message);
  if (isInstructionRequest(message)) return null;

  const isCreateRequest = /\b(crea|crear|creame|arma|armar|armame|nuevo|nueva|genera|generar)\b/.test(normalized);
  if (!isCreateRequest) return null;

  if (/\bcarpeta\b/.test(normalized)) {
    const name = normalizeFolderName(extractNamedValue(message, ['carpeta']));
    return name
      ? {
          answer: `Voy a crear la carpeta "${name}" en Documentos.`,
          actions: [{ type: 'create_folder', label: `Crear carpeta ${name}`, payload: { name } }]
        }
      : { answer: 'Decime qué nombre querés ponerle a la nueva carpeta.', actions: [] };
  }

  if (/\b(archivo|documento|word|excel|planilla|texto|txt|docx|xlsx)\b/.test(normalized)) {
    const fileType = getDocumentType(message);
    const name = normalizeDocumentName(
      extractNamedValue(message, ['archivo', 'documento', 'word', 'excel', 'planilla', 'texto']),
      fileType
    );
    return name
      ? {
          answer: `Voy a crear el archivo ${fileType === 'excel' ? 'Excel' : fileType === 'text' ? 'de texto' : 'Word'} "${name}" en Documentos.`,
          actions: [{ type: 'create_document', label: `Crear archivo ${name}`, payload: { name, fileType } }]
        }
      : { answer: 'Decime el nombre del archivo que querés crear y si debe ser Word, Excel o texto.', actions: [] };
  }

  return null;
};

const planAppNavigation = (message) => {
  const normalized = normalize(message);
  if (isInstructionRequest(message)) return null;

  const isNavigationRequest = /\b(llevame|llevarme|ir|anda|navega|navegar|abri|abrir|mostrame|mostrar)\b/.test(normalized);
  if (!isNavigationRequest) return null;

  const destination = DESTINATIONS.find(item => item.terms.some(term => normalized.includes(term)));
  if (!destination) return null;

  return {
    answer: `Te llevo a ${destination.label}.`,
    actions: [{
      type: destination.url ? 'open_external' : 'navigate',
      label: `Ir a ${destination.label}`,
      payload: destination.url ? { url: destination.url } : { path: destination.path }
    }]
  };
};

const planDocumentSearch = async (message) => {
  const normalized = normalize(message);
  if (isInstructionRequest(message)) return null;

  const isSearchRequest = /\b(busca|buscar|buscame|encontra|encontrar|llevame|llevarme|abri|abrir|donde esta|ubicacion|ruta)\b/.test(normalized);
  const referencesDocument = /\b(archivo|documento|carpeta|word|excel|planilla|pdf)\b/.test(normalized);
  if (!isSearchRequest || !referencesDocument) return null;

  const query = extractNamedValue(message, ['archivo', 'documento', 'carpeta', 'word', 'excel', 'planilla', 'pdf']);
  if (!query) return { answer: 'Decime el nombre del archivo o carpeta que querés buscar.', actions: [] };

  const results = await oneDriveAgentService.search(1, query);
  if (results.length === 0) {
    return { answer: `No encontré archivos o carpetas que coincidan con "${query}" en Documentos.`, actions: [] };
  }

  const exact = results.find(item => normalize(item.name) === normalize(query)) || results[0];
  const parentId = exact.parentReference?.id;
  const path = exact.folder
    ? `/documents/${encodeURIComponent(exact.id)}`
    : `${parentId ? `/documents/${encodeURIComponent(parentId)}` : '/documents'}?focus=${encodeURIComponent(exact.id)}`;

  return {
    answer: `Encontré "${exact.name}". Te llevo a su ubicación en Documentos.`,
    actions: [{
      type: 'navigate',
      label: `Abrir ubicación de ${exact.name}`,
      payload: { path }
    }],
    matches: results.slice(0, 5).map(item => ({ id: item.id, name: item.name, isFolder: Boolean(item.folder) }))
  };
};

const answerWithRag = async (messages, question, sections) => {
  const context = sections.length
    ? sections.map(section => `### ${section.title}\n${section.text}`).join('\n\n')
    : 'No se recuperaron instrucciones específicas de la guía.';

  const systemInstruction = [
    'Sos el Asistente Imponect, especialista en enseñar a usar Imponect App.',
    'Respondé en español, de forma breve, concreta y operativa.',
    'Usá únicamente el contexto recuperado de la guía para explicar funciones de la plataforma.',
    'Si la guía no contiene la respuesta, decilo claramente.',
    'No afirmes que ejecutaste acciones si no hay una herramienta asociada.'
  ].join(' ');

  try {
    return await geminiService.chat(messages, {
      systemInstruction,
      context,
      enableWebSearch: false
    });
  } catch (error) {
    if (!sections.length) throw error;
    return {
      answer: sections.map(section => `${section.title}: ${section.text}`).join('\n\n').slice(0, 2400),
      sources: [],
      provider: 'local-rag',
      model: 'lexical-retrieval'
    };
  }
};

const chat = async (messages) => {
  const question = latestUserMessage(messages);
  if (!question) throw new Error('La consulta debe terminar con un mensaje del usuario.');

  const sections = ragService.retrieve(question);
  const sources = buildSources(sections);

  const createPlan = planCreateAction(question);
  if (createPlan) return { ...createPlan, sources, mode: 'agent' };

  const documentSearchPlan = await planDocumentSearch(question);
  if (documentSearchPlan) return { ...documentSearchPlan, sources, mode: 'agent' };

  const navigationPlan = planAppNavigation(question);
  if (navigationPlan) return { ...navigationPlan, sources, mode: 'agent' };

  const result = await answerWithRag(messages, question, sections);
  return { ...result, sources: [...sources, ...(result.sources || [])], actions: [], mode: 'rag' };
};

const getCapabilities = () => ({
  rag: true,
  tools: ['navigate', 'open_external', 'search_documents', 'create_document', 'create_folder'],
  destructiveToolsEnabled: false
});

module.exports = { chat, getCapabilities };
