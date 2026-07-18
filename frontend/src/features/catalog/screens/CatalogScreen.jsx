import React, { useMemo, useState } from 'react';
import {
  IconCatalog,
  IconDownload,
  IconSearch,
  IconShield,
} from '../../../shared/components/Icons';
import * as S from './CatalogScreenStyled';

const catalogImageBaseUrl = 'https://www.imponect.com/assets/catalog_images/';
const catalogOptimizedImageBaseUrl = 'https://www.imponect.com/assets/catalog_images/optimized/';

const sourceCatalogProducts = [
  {
    id: 'IMP_0001',
    image: 'Camara_endoscopica.png',
    title: 'Cámara Endoscópica LCD 4.3”',
    description: 'Cámara portátil con pantalla integrada. Ideal para inspecciones técnicas sin necesidad de smartphone. Sonda rígida de alta resistencia.',
    category: 'Inspección',
    specs: 'Pantalla 4.3" | Bat. Recargable',
    useCases: ['Mecánica automotriz', 'Inspección de cañerías', 'Mantenimiento industrial', 'Detección de fallas en áreas de difícil acceso'],
    details: 'Resolución HD 1080P, 6 luces LED ajustables, cable semirrígido de 5 metros, resistencia al agua IP67.',
  },
  {
    id: 'IMP_0002',
    image: 'PIN_LED_Rueda.png',
    title: 'Luces LED RGB para Rayos',
    description: 'Iluminación decorativa y de seguridad para bicicletas con efecto visual dinámico. Instalación en rayos.',
    category: 'Movilidad',
    specs: 'Resistente al agua | Pilas/Batería',
    useCases: ['Ciclismo nocturno', 'Seguridad vial', 'Personalización de bicicletas', 'Eventos deportivos'],
    details: 'Diferentes modos de luz, fácil instalación sin herramientas, batería de larga duración, visibilidad 360°.',
  },
  {
    id: 'IMP_0003',
    image: 'Linterna_LED.png',
    title: 'Linterna Headlamp COB',
    description: 'Iluminación manos libres de gran angular con sensor de movimiento. Ideal para trabajos de precisión en oscuridad.',
    category: 'Outdoor',
    specs: 'Sensor Movimiento | Gran Angular',
    useCases: ['Camping', 'Senderismo nocturno', 'Reparaciones mecánicas', 'Pesca deportiva'],
    details: 'Tecnología COB LED, 5 modos de iluminación, sensor de gestos para encendido/apagado, recargable vía USB-C.',
  },
  {
    id: 'IMP_0008',
    image: 'Inflador_Portatil_120psi.png',
    title: 'Inflador Portátil 120 PSI',
    description: 'Compresor de aire compacto inteligente. Apto para bicicletas MTB, Ruta y E-bikes con corte automático.',
    category: 'Ciclismo',
    specs: '120 PSI | Display Digital',
    useCases: ['Inflado de neumáticos', 'Bicicletas de alta gama', 'Scooters eléctricos', 'Balones deportivos'],
    details: 'Display digital de alta precisión, batería de 2000mAh, linterna integrada, múltiples picos incluidos.',
  },
  {
    id: 'IMP_0009',
    image: 'Sistema_vacio_neumatico.png',
    title: 'Sistema de Elevación por Vacío',
    description: 'Sistema neumático industrial para levantar, trasladar y posicionar cargas pesadas (vidrio, cajas) de forma segura.',
    category: 'Industrial',
    specs: 'Carga Pesada | Ergonómico',
    useCases: ['Logística', 'Fábricas de vidrio', 'Centros de distribución', 'Líneas de ensamblaje'],
    details: 'Capacidad hasta 150kg, sistema de seguridad anticaída, controles ergonómicos, bajo mantenimiento.',
  },
  {
    id: 'IMP_0010',
    image: 'Chaleco_led_reflectivo.png',
    title: 'Chaleco LED Reflectivo 360°',
    description: 'Visibilidad total nocturna. Tiras de fibra óptica LED con carga USB. Ideal running y ciclismo urbano.',
    category: 'Seguridad',
    specs: 'Carga USB | 3 Modos Luz',
    useCases: ['Running nocturno', 'Ciclismo urbano', 'Seguridad vial', 'Trabajos nocturnos'],
    details: 'Tiras LED ultra-brillantes, tejido transpirable, ajustable para todos los talles, hasta 10 horas de autonomía.',
  },
  {
    id: 'IMP_0011',
    image: 'Estacion_carga_7en1.png',
    title: 'Estación de Carga 7 en 1',
    description: 'Hub de carga rápida inalámbrica 30W. Compatible con todo el ecosistema móvil (Reloj, Auriculares, Celular).',
    category: 'Tecnología',
    specs: 'Carga Rápida | 30W',
    useCases: ['Escritorios de oficina', 'Mesas de luz', 'Estaciones de trabajo', 'Uso familiar'],
    details: 'Carga Qi de 30W, conectores USB-C, lightning y micro-USB, diseño compacto, protección contra sobrecarga.',
  },
  {
    id: 'IMP_EXTRA1',
    image: 'Camara_endoscopica_vision_termica.png',
    title: 'Cámara Endoscópica Térmica',
    description: 'Diagnóstico profesional avanzado. Combina visión visual y térmica para detectar fugas de calor.',
    category: 'Diagnóstico',
    specs: 'Visión Térmica | Profesional',
    useCases: ['Detección de fugas térmicas', 'Inspección eléctrica', 'HVAC', 'Investigación técnica'],
    details: 'Sensor térmico FLIR, doble cámara, pantalla táctil, grabación de video térmico.',
  },
  {
    id: 'IMP_EXTRA2',
    image: 'Tablet_endoscopica_vision_termica.png',
    title: 'Tablet Robusta Industrial',
    description: 'Tablet rugerizada con cámara térmica integrada. Resistente a caídas, agua y polvo.',
    category: 'Industrial',
    specs: 'Rugerizada | Android Ent.',
    useCases: ['Trabajo de campo', 'Minería', 'Petróleo y Gas', 'Construcción'],
    details: 'Certificación IP68, pantalla Gorilla Glass, batería de alta capacidad (8000mAh), GPS de alta precisión.',
  },
  {
    id: 'IMP_EXTRA3',
    image: 'Inflador_Portatil_150psi.png',
    title: 'Inflador Táctico 150 PSI',
    description: 'Potencia superior para vehículos. Interfaz LED y función powerbank.',
    category: 'Automotor',
    specs: '150 PSI | Powerbank',
    useCases: ['Autos y camionetas', 'Motos', 'Situaciones de emergencia', 'Viajes largos'],
    details: 'Presión máxima 150 PSI, función de carga inversa USB, luz SOS integrada, carcasa metálica disipadora de calor.',
  },
];

const getOptimizedCatalogImage = imageName => (
  `${catalogOptimizedImageBaseUrl}${imageName.replace(/\.[^.]+$/, '.webp')}`
);

const getCatalogImageFallback = imageName => `${catalogImageBaseUrl}${imageName}`;

const buildCommercialProfile = product => ({
  b2b: {
    focus: `Producto del catálogo real Imponect para ${product.category.toLowerCase()}. Cotización orientada a mayoristas, distribuidores y tiendas.`,
    price: 'A cotizar',
    priceLabel: 'Precio mayorista',
    margin: 'Margen y escala según volumen',
    volume: 'Consultar MOQ y disponibilidad',
  },
  b2c: {
    focus: `Producto del catálogo real Imponect para venta directa, retail o ecommerce.`,
    price: 'A cotizar',
    priceLabel: 'PVP sugerido',
    margin: 'Promo y envío a definir',
    volume: 'Consultar stock y entrega',
  },
});

const catalogProducts = sourceCatalogProducts.map(product => ({
  id: product.id,
  sku: product.id,
  ean: 'Consultar',
  title: product.title,
  valueProp: product.specs,
  category: product.category,
  status: 'Catálogo real',
  image: getOptimizedCatalogImage(product.image),
  imageFallback: getCatalogImageFallback(product.image),
  galleryLabel: `Casos de uso: ${product.useCases.slice(0, 3).join(', ')}.`,
  problem: `Necesidad detectada en ${product.useCases.slice(0, 2).join(' y ').toLowerCase()}.`,
  solution: product.description,
  sourceImage: product.image,
  details: product.details,
  useCases: product.useCases,
  specs: [
    ['Código', product.id],
    ['Categoría', product.category],
    ['Specs', product.specs],
    ['Detalle', product.details],
  ],
  certifications: ['Ficha web', 'Validación pendiente'],
  packaging: 'Packaging, master carton y condiciones logísticas a confirmar según proveedor y lote.',
  logistics: {
    moq: 'Consultar',
    masterCarton: 'A confirmar',
    leadTime: 'A cotizar',
    route: 'Definir según peso, volumen y urgencia',
  },
  commercial: buildCommercialProfile(product),
}));

const audienceOptions = [
  { id: 'b2b', label: 'B2B', helper: 'Mayoristas, distribuidores y tiendas' },
  { id: 'b2c', label: 'B2C', helper: 'Cliente final, ecommerce y retail' },
];

const trustBlocks = [
  { title: 'Catálogo real', text: 'Productos sincronizados con la web actual de Imponect, sin SKUs demo externos.' },
  { title: 'Ficha educativa', text: 'Cada producto muestra descripción, specs, detalle técnico y casos de uso.' },
  { title: 'Venta asistida', text: 'B2B y B2C cambian el enfoque comercial sin inventar precios.' },
  { title: 'Cotización pendiente', text: 'Precio, packaging y logística quedan listos para completar con datos reales.' },
];

const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const CatalogScreen = () => {
  const [search, setSearch] = useState('');
  const [audience, setAudience] = useState('b2b');

  const filteredProducts = useMemo(() => {
    const query = normalize(search.trim());

    if (!query) return catalogProducts;

    return catalogProducts.filter((product) => {
      const haystack = normalize([
        product.title,
        product.valueProp,
        product.category,
        product.sku,
        product.problem,
        product.solution,
      ].join(' '));

      return haystack.includes(query);
    });
  }, [search]);

  const handleImageError = (event) => {
    const fallbackUrl = event.currentTarget.dataset.fallback;

    if (fallbackUrl && event.currentTarget.src !== fallbackUrl) {
      event.currentTarget.src = fallbackUrl;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <S.ScreenWrapper>
      <S.MainArea>
        <S.Header>
          <S.HeaderCopy>
            <S.Eyebrow>
              <IconCatalog />
              Catálogo comercial
            </S.Eyebrow>
            <S.Title>Catálogo Imponect</S.Title>
            <S.Subtitle>
              Productos importados listos para vender, con fichas educativas, specs, casos de uso y enfoque comercial B2B o B2C.
            </S.Subtitle>
          </S.HeaderCopy>
        </S.Header>

        <S.ControlDock>
          <S.SearchBox>
            <IconSearch />
            <input
              type="search"
              placeholder="Buscar por SKU, producto, problema o categoría..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </S.SearchBox>

          <S.AudienceSwitch aria-label="Tipo de cliente">
            {audienceOptions.map(option => (
              <S.AudienceButton
                key={option.id}
                type="button"
                $active={audience === option.id}
                onClick={() => setAudience(option.id)}
                title={option.helper}
              >
                <strong>{option.label}</strong>
                <span>{option.helper}</span>
              </S.AudienceButton>
            ))}
          </S.AudienceSwitch>

          <S.ExportButton type="button" onClick={handlePrint}>
            <IconDownload />
            Descargar Catálogo PDF
          </S.ExportButton>
        </S.ControlDock>

        <S.CatalogWorkspace>
          <S.ProductColumn>
            <S.ProductGrid>
              {filteredProducts.map(product => {
                const commercial = product.commercial[audience];

                return (
                  <S.ProductCard
                    key={product.id}
                  >
                    <S.ProductImageWrap>
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        data-fallback={product.imageFallback}
                        onError={handleImageError}
                      />
                      <S.ProductBadge>{product.status}</S.ProductBadge>
                    </S.ProductImageWrap>
                    <S.ProductContent>
                      <S.ProductMeta>
                        <span>{product.category}</span>
                        <strong>{product.sku}</strong>
                      </S.ProductMeta>
                      <S.ProductTitle>{product.title}</S.ProductTitle>
                      <S.ValueProp>{product.valueProp}</S.ValueProp>
                      <S.CardProblem>
                        <span>Uso clave</span>
                        <p>{product.problem}</p>
                      </S.CardProblem>
                    </S.ProductContent>
                    <S.CardFooter>
                      <S.PriceBlock>
                        <span>{commercial.priceLabel}</span>
                        <strong>{commercial.price}</strong>
                      </S.PriceBlock>
                      <S.MarginPill>{commercial.margin}</S.MarginPill>
                    </S.CardFooter>
                  </S.ProductCard>
                );
              })}
            </S.ProductGrid>

            {!filteredProducts.length && (
              <S.EmptyState>
                <IconSearch />
                <strong>No hay productos para este filtro</strong>
                <span>Probá con otra categoría o una búsqueda más amplia.</span>
              </S.EmptyState>
            )}
          </S.ProductColumn>
        </S.CatalogWorkspace>

        <S.AuthorityBand>
          {trustBlocks.map(block => (
            <S.TrustCard key={block.title}>
              <IconShield />
              <strong>{block.title}</strong>
              <span>{block.text}</span>
            </S.TrustCard>
          ))}
        </S.AuthorityBand>
      </S.MainArea>
    </S.ScreenWrapper>
  );
};
