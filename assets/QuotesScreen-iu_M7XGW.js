import{y as n,v as ie,r as u,j as r,x as ce,B,c as de,G as le,H as pe,I as ue,P as F,X as Q,Q as I}from"./index-BZYg4alH.js";import{d as ge,c as be}from"./budgetPdf-BG0U-FJO.js";import{f as he,a as H,m as fe,r as me}from"./quotesApi-B6BlK7Dh.js";import{p as xe,a as $e,b as ye,c as we,d as je}from"./pageHeader-CSFyddAi.js";const X=(e,o)=>o.isDark?e==="success"?"rgba(16, 185, 129, 0.14)":e==="warning"?"rgba(245, 158, 11, 0.16)":e==="info"?"rgba(0, 85, 128, 0.28)":e==="accent"?"rgba(198, 137, 63, 0.18)":"rgba(148, 163, 184, 0.14)":e==="success"?o.color.successLight:e==="warning"?o.color.warningLight:e==="info"?o.color.infoLight:e==="accent"?o.color.accentFaded:o.color.neutral[100],K=(e,o)=>o.isDark?e==="success"?"#a7f3d0":e==="warning"?"#fde68a":e==="info"?"#bfdbfe":e==="accent"?"#f5d0a5":o.color.textSecondary:e==="success"?"#047857":e==="warning"?"#92400e":e==="info"?"#005580":e==="accent"?o.color.accentDark:o.color.textSecondary,C=e=>e==="success"?"success":e==="warning"?"warning":"neutral",ke=n.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198,137,63,0.055)":"rgba(0,51,77,0.035)"} 1px, transparent 1px),
      linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.03)":"rgba(198,137,63,0.035)"} 1px, transparent 1px);
    background-size: 48px 48px;
  }
`,ve=n.header`
  ${xe};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Se=n.div`
  ${$e};
`,Ee=n.p`
  ${ye};
`,ze=n.h1`
  ${we};
`,Ce=n.p`
  ${je};
`,De=n.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`,D=n.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background-color: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.color.accentDark};
    border-color: ${({theme:e})=>e.color.accentDark};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,E=n.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background-color: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`,Pe=n.section`
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 22px rgba(198, 137, 63, 0.1);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
  }
`,Ie=n.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    overflow: visible;
  }
`,Me=n.table`
  width: 100%;
  min-width: 820px;
  text-align: center;
  border-collapse: collapse;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-width: 0;
    display: block;

    thead {
      display: none;
    }

    tbody {
      display: grid;
      gap: ${({theme:e})=>e.spacing[4]};
    }

    tr {
      display: grid;
      gap: ${({theme:e})=>e.spacing[3]};
      padding: ${({theme:e})=>e.spacing[4]};
      border: 1px solid ${({theme:e})=>e.color.border};
      border-radius: ${({theme:e})=>e.radius.md};
      background:
        linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
      box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 20px rgba(198, 137, 63, 0.1);
    }
  }
`,f=n.th`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  color: ${({theme:e})=>e.color.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0;
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.08)":e.color.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  text-align: center;
  white-space: nowrap;
`,m=n.td`
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  color: ${({theme:e})=>e.color.textSecondary};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  text-align: center;
  vertical-align: middle;
  white-space: ${({$nowrap:e})=>e?"nowrap":"normal"};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: 0;
    border-bottom: none;
    text-align: left;
    white-space: normal;

    &::before {
      content: attr(data-label);
      color: ${({theme:e})=>e.color.textTertiary};
      font-size: ${({theme:e})=>e.typography.size.xs};
      font-weight: ${({theme:e})=>e.typography.weight.extrabold};
      text-align: left;
      text-transform: uppercase;
    }
  }
`,Ae=n.span`
  color: ${({theme:e})=>e.color.textTertiary};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Ne=n.span`
  color: ${({theme:e})=>e.color.accent};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Re=n.span`
  display: inline-flex;
  align-items: center;
  min-width: 5.5rem;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({$method:e,theme:o})=>e==="air"?"#60a5fa":o.color.accent};
  color: ${({$method:e,theme:o})=>K(e==="air"?"info":"accent",o)};
  background-color: ${({$method:e,theme:o})=>X(e==="air"?"info":"accent",o)};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`,Te=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
  border: 1px solid ${({$variant:e,theme:o})=>{const a=C(e);return a==="success"?o.color.success:a==="warning"?o.color.warning:o.color.border}};
  background-color: ${({$variant:e,theme:o})=>X(C(e),o)};
  color: ${({$variant:e,theme:o})=>K(C(e),o)};
`,Be=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`,w=n.button`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e,$emphasis:o,$success:a,$undo:l})=>a?e.color.success:l||o?e.color.accent:e.color.border};
  background-color: ${({theme:e})=>e.color.surface};
  color: ${({theme:e,$emphasis:o,$success:a,$undo:l})=>a?e.color.success:l||o?e.color.accent:e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    border-color: ${({theme:e,$success:o})=>o?e.color.success:e.color.accent};
    color: ${({theme:e,$success:o})=>o?e.color.success:e.color.accent};
    background-color: ${({theme:e,$success:o})=>o?e.isDark?"rgba(16, 185, 129, 0.14)":e.color.successLight:e.isDark?"rgba(198, 137, 63, 0.14)":e.color.accentFaded};
  }

  &:disabled {
    opacity: ${({$sent:e})=>e?1:.42};
    cursor: ${({$sent:e})=>e?"default":"not-allowed"};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 14rem;
  gap: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textSecondary};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`,L=n.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: ${({theme:e})=>e.color.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,_=n.form`
  width: min(34rem, 100%);
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background-color: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.xl};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
    border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.md} ${({theme:e})=>e.radius.md};
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,O=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
`,U=n.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,V=n.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,W=n.div`
  border: 1px solid ${({theme:e})=>e.color.error};
  border-radius: ${({theme:e})=>e.radius.md};
  background-color: ${({theme:e})=>e.color.errorLight};
  color: ${({theme:e})=>e.color.error};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;n.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;const Fe=n.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;

  input,
  select {
    height: 2.5rem;
    border-radius: ${({theme:e})=>e.radius.md};
    border: 1px solid ${({theme:e})=>e.color.border};
    background-color: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.text};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    outline: none;
    color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};

    &:focus {
      border-color: ${({theme:e})=>e.color.accent};
      box-shadow: 0 0 0 2px rgba(198, 137, 63, 0.18);
    }
  }
`,G=n.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,Y=new Set(["Borrador","Pendiente de envío"]),j=["WhatsApp","Instagram","Facebook","TikTok","Email","Impreso en mano"],Qe=I("assets/presupuesto-encabezado-v2.png"),He=I("assets/presupuesto-espacio-firma.png"),Le=I("assets/firma_sin_fondo.png"),_e=e=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(Number.isFinite(Number(e))?Number(e):0),Oe=e=>{if(!e)return"-";const o=new Date(e);return Number.isNaN(o.getTime())?"-":new Intl.DateTimeFormat("es-AR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(o)},Ue=e=>e==="Enviado"?"success":e==="Pendiente de envío"?"warning":"neutral",Ve=e=>e==="air"?"Aéreo":"Marítimo",We=e=>{if(!e)return null;if(typeof e=="object")return e;try{return JSON.parse(e)}catch{return null}},Ge=e=>{const o=String(e||"").replace(/^data:application\/pdf;base64,/,""),a=atob(o),l=[],$=1024;for(let g=0;g<a.length;g+=$){const k=a.slice(g,g+$),i=Array.from(k,d=>d.charCodeAt(0));l.push(new Uint8Array(i))}return new Blob(l,{type:"application/pdf"})},J=async e=>{const o=We(e.payload);if(o!=null&&o.form&&(o!=null&&o.sellerForm)&&(o!=null&&o.quote)&&(o!=null&&o.quoteResult))return be({form:o.form,sellerForm:o.sellerForm,productImages:o.productImages||[],quote:o.quote,quoteResult:o.quoteResult,method:o.method||e.method,headerSrc:Qe,signatureStampSrc:He,sellerSignatureSrc:Le});if(e.pdf_base64)return{filename:e.pdf_filename||`presupuesto-${e.id}.pdf`,base64:e.pdf_base64,blob:Ge(e.pdf_base64)};throw new Error("El presupuesto no tiene PDF guardado.")},Ye=()=>{const e=window.open("about:blank","_blank");return e&&(e.opener=null,e.document.title="Presupuesto Imponect",e.document.body.textContent="Generando presupuesto..."),e},Je=(e,o)=>{const a=URL.createObjectURL(e);o?o.location.href=a:window.open(a,"_blank"),window.setTimeout(()=>URL.revokeObjectURL(a),6e4)},er=()=>{var R,T;const e=ie(),[o,a]=u.useState([]),[l,$]=u.useState(!0),[g,k]=u.useState(""),[i,d]=u.useState(""),[p,x]=u.useState({quote:null,channel:j[0],error:""}),[b,y]=u.useState({quote:null,error:""}),v=u.useCallback(async()=>{$(!0),k("");try{const t=await he();a(Array.isArray(t)?t:[])}catch(t){k(t.message||"No se pudieron cargar los presupuestos.")}finally{$(!1)}},[]);u.useEffect(()=>{v()},[v]);const M=u.useMemo(()=>o.map(t=>({...t,isEditable:Y.has(t.status)})),[o]),Z=async t=>{const s=Ye();d(`${t.id}-preview`);try{const c=await H(t.id),h=await J(c);Je(h.blob,s)}catch(c){s&&s.close(),window.alert(c.message||"No se pudo abrir el presupuesto.")}finally{d("")}},q=async t=>{d(`${t.id}-download`);try{const s=await H(t.id),c=await J(s);ge(c)}catch(s){window.alert(s.message||"No se pudo descargar el presupuesto.")}finally{d("")}},ee=t=>{Y.has(t.status)&&e(`/cotizador?id=${t.id}`)},re=t=>{t.status!=="Pendiente de envío"||i||x({quote:t,channel:j[0],error:""})},A=()=>{i||x({quote:null,channel:j[0],error:""})},oe=async t=>{if(t.preventDefault(),!(!p.quote||i)){d(`${p.quote.id}-send`),x(s=>({...s,error:""}));try{const s=await fe(p.quote.id,{sent_channel:p.channel});a(c=>c.map(h=>String(h.id)===String(s.id)?s:h)),x({quote:null,channel:j[0],error:""})}catch(s){x(c=>({...c,error:s.message||"No se pudo confirmar el envío."}))}finally{d("")}}},te=t=>{t.status!=="Enviado"||i||y({quote:t,error:""})},N=()=>{i||y({quote:null,error:""})},ne=async t=>{if(t.preventDefault(),!(!b.quote||i)){d(`${b.quote.id}-return`),y(s=>({...s,error:""}));try{const s=await me(b.quote.id);a(c=>c.map(h=>String(h.id)===String(s.id)?s:h)),y({quote:null,error:""})}catch(s){y(c=>({...c,error:s.message||"No se pudo regresar el presupuesto a pendiente de envío."}))}finally{d("")}}},se=!!p.quote,S=i===`${(R=p.quote)==null?void 0:R.id}-send`,ae=!!b.quote,z=i===`${(T=b.quote)==null?void 0:T.id}-return`;return r.jsxs(ke,{children:[r.jsxs(ve,{children:[r.jsxs(Se,{children:[r.jsxs(Ee,{children:[r.jsx(ce,{}),"Historial comercial"]}),r.jsx(ze,{children:"Presupuestos Imponect"}),r.jsx(Ce,{children:"Controlá presupuestos generados, estados de envío, PDFs descargables y edición de borradores."})]}),r.jsxs(De,{children:[r.jsxs(E,{type:"button",onClick:v,disabled:l,children:[r.jsx(B,{}),"Actualizar"]}),r.jsxs(D,{type:"button",onClick:()=>e("/cotizador"),children:[r.jsx(de,{}),"Nuevo presupuesto"]})]})]}),r.jsx(Pe,{children:l?r.jsxs(P,{children:[r.jsx("strong",{children:"Cargando presupuestos"}),r.jsx("span",{children:"Buscando registros guardados en la base de datos."})]}):g?r.jsxs(P,{children:[r.jsx("strong",{children:"No se pudo cargar la tabla"}),r.jsx("span",{children:g}),r.jsxs(E,{type:"button",onClick:v,children:[r.jsx(B,{}),"Reintentar"]})]}):M.length===0?r.jsxs(P,{children:[r.jsx("strong",{children:"No hay presupuestos guardados"}),r.jsx("span",{children:"Generá uno desde la sección Cotizador para verlo acá."})]}):r.jsx(Ie,{children:r.jsxs(Me,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(f,{children:"ID"}),r.jsx(f,{children:"Razón social cliente"}),r.jsx(f,{children:"Fecha generación"}),r.jsx(f,{children:"Monto"}),r.jsx(f,{children:"Estado"}),r.jsx(f,{children:"Tipo"}),r.jsx(f,{children:"Acciones"})]})}),r.jsx("tbody",{children:M.map(t=>r.jsxs("tr",{children:[r.jsx(m,{$nowrap:!0,"data-label":"ID",children:r.jsxs(Ae,{children:["#",t.id]})}),r.jsx(m,{"data-label":"Razón social cliente",children:r.jsx("strong",{children:t.razon_social_cliente})}),r.jsx(m,{$nowrap:!0,"data-label":"Fecha generación",children:Oe(t.generation_date)}),r.jsx(m,{$nowrap:!0,"data-label":"Monto",children:r.jsx(Ne,{children:_e(t.amount)})}),r.jsx(m,{$nowrap:!0,"data-label":"Estado",children:r.jsx(Te,{$variant:Ue(t.status),children:t.status})}),r.jsx(m,{$nowrap:!0,"data-label":"Tipo",children:r.jsx(Re,{$method:t.method,children:Ve(t.method)})}),r.jsx(m,{$nowrap:!0,"data-label":"Acciones",children:r.jsxs(Be,{children:[r.jsx(w,{type:"button",title:"Ver presupuesto","aria-label":"Ver presupuesto",onClick:()=>Z(t),disabled:i!=="",children:r.jsx(le,{})}),r.jsx(w,{type:"button",title:"Descargar presupuesto","aria-label":"Descargar presupuesto",onClick:()=>q(t),disabled:i!=="",children:r.jsx(pe,{})}),r.jsx(w,{type:"button",title:t.isEditable?"Editar presupuesto":"Solo editable en Borrador o Pendiente de envío","aria-label":"Editar presupuesto",onClick:()=>ee(t),disabled:!t.isEditable||i!=="",$emphasis:t.isEditable,children:r.jsx(ue,{})}),r.jsx(w,{type:"button",title:t.status==="Enviado"?"Presupuesto enviado":t.status==="Pendiente de envío"?"Marcar como enviado":"Solo disponible en Pendiente de envío","aria-label":"Marcar presupuesto como enviado",onClick:()=>re(t),disabled:t.status!=="Pendiente de envío"||i!=="",$success:t.status==="Pendiente de envío"||t.status==="Enviado",$sent:t.status==="Enviado",children:r.jsx(F,{})}),r.jsx(w,{type:"button",title:t.status==="Enviado"?"Regresar a PENDIENTE DE ENVÍO":"Solo disponible en Enviado","aria-label":"Regresar presupuesto a pendiente de envío",onClick:()=>te(t),disabled:t.status!=="Enviado"||i!=="",$undo:t.status==="Enviado",children:r.jsx(Q,{})})]})})]},t.id))})]})})}),se&&r.jsx(L,{onClick:A,children:r.jsxs(_,{onSubmit:oe,onClick:t=>t.stopPropagation(),children:[r.jsx(O,{children:r.jsxs("div",{children:[r.jsx(U,{children:"Confirmar envío"}),r.jsx(V,{children:"Al continuar, se marcará el presupuesto como enviado."})]})}),r.jsxs(Fe,{children:["Enviado por:",r.jsx("select",{value:p.channel,onChange:t=>x(s=>({...s,channel:t.target.value,error:""})),disabled:S,children:j.map(t=>r.jsx("option",{value:t,children:t},t))})]}),p.error&&r.jsx(W,{children:p.error}),r.jsxs(G,{children:[r.jsx(E,{type:"button",onClick:A,disabled:S,children:"Cancelar"}),r.jsxs(D,{type:"submit",disabled:S,children:[r.jsx(F,{}),S?"Confirmando...":"Confirmar envío"]})]})]})}),ae&&r.jsx(L,{onClick:N,children:r.jsxs(_,{onSubmit:ne,onClick:t=>t.stopPropagation(),children:[r.jsx(O,{children:r.jsxs("div",{children:[r.jsx(U,{children:"Regresar a pendiente"}),r.jsx(V,{children:"Al continuar, el presupuesto volverá a PENDIENTE DE ENVÍO y se limpiará la información de envío."})]})}),b.error&&r.jsx(W,{children:b.error}),r.jsxs(G,{children:[r.jsx(E,{type:"button",onClick:N,disabled:z,children:"Cancelar"}),r.jsxs(D,{type:"submit",disabled:z,children:[r.jsx(Q,{}),z?"Confirmando...":"Confirmar regreso"]})]})]})})]})};export{er as QuotesScreen};
