import{y as i,O as s,p as h,r as n,j as a,a2 as w,J as g,H as v,m as C}from"./index-BZYg4alH.js";import{p as k,a as j,b as z,c as P,d as I}from"./pageHeader-CSFyddAi.js";const S=s`
  from {
    opacity: 0;
    transform: translateY(0.75rem) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,c=s`
  0% {
    transform: translateX(-145%) skewX(-16deg);
    opacity: 0;
  }

  14% {
    opacity: 0.85;
  }

  62% {
    opacity: 0.7;
  }

  100% {
    transform: translateX(245%) skewX(-16deg);
    opacity: 0;
  }
`,B=s`
  0% {
    box-shadow: 0 0 0 0 var(--catalog-success-ring);
  }

  70% {
    box-shadow: 0 0 0 0.55rem var(--catalog-success-clear);
  }

  100% {
    box-shadow: 0 0 0 0 var(--catalog-success-clear);
  }
`,l=h`
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,b=h`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(
      135deg,
      ${({theme:e})=>e.isDark?"color-mix(in srgb, var(--catalog-panel), white 3%)":e.color.surface} 0%,
      ${({theme:e})=>e.isDark?"color-mix(in srgb, var(--catalog-panel), black 10%)":e.color.neutral[50]} 100%
    );
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 1.5rem color-mix(in srgb, ${({theme:e})=>e.color.accent} 10%, transparent);
`,D=i.div`
  --catalog-panel: ${({theme:e})=>e.color.surface};
  --catalog-accent-soft: color-mix(in srgb, ${({theme:e})=>e.color.accent} 14%, transparent);
  --catalog-primary-soft: color-mix(in srgb, ${({theme:e})=>e.color.primaryLight} 14%, transparent);
  --catalog-success-ring: color-mix(in srgb, ${({theme:e})=>e.color.success} 38%, transparent);
  --catalog-success-clear: color-mix(in srgb, ${({theme:e})=>e.color.success} 0%, transparent);

  position: relative;
  isolation: isolate;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.color.text};
  background: transparent;
`,_=i.main`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,E=i.header`
  ${k};
  display: block;
`,L=i.div`
  ${j};
`,M=i.p`
  ${z};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`,T=i.h1`
  ${P};
  max-width: 54rem;
`,H=i.p`
  ${I};
  max-width: 58rem;
`;i.aside`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?`color-mix(in srgb, ${e.color.accent} 12%, transparent)`:e.color.accentFaded};
`;i.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-height: 2rem;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
`;i.span`
  width: 0.58rem;
  height: 0.58rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.success};
  animation: ${B} 1.8s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;i.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 5.25rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid color-mix(in srgb, ${({theme:e})=>e.color.accent} 55%, transparent);
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({theme:e})=>e.color.accent};
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }
`;const A=i.section`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) minmax(18rem, 0.82fr) auto;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  margin-top: calc(-1 * ${({theme:e})=>e.spacing[3]});
  padding: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    margin-top: calc(-1 * ${({theme:e})=>e.spacing[2]});
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    margin-top: 0;
  }
`,R=i.label`
  position: relative;
  isolation: isolate;
  min-width: 0;
  min-height: ${({theme:e})=>e.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 1rem color-mix(in srgb, ${({theme:e})=>e.color.accent} 8%, transparent);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -30% auto -30% -22%;
    width: 34%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({theme:e})=>e.color.accent} 24%, transparent), transparent);
    filter: blur(0.05rem);
    opacity: 0;
    animation: ${c} 5.6s ease-in-out infinite;
    z-index: 0;
  }

  &:focus-within {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.2rem var(--catalog-accent-soft);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({theme:e})=>e.color.accent};
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  input {
    position: relative;
    z-index: 1;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    font-family: inherit;
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`,U=i.div`
  position: relative;
  isolation: isolate;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 1rem color-mix(in srgb, ${({theme:e})=>e.color.primaryLight} 8%, transparent);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -34% auto -34% -24%;
    width: 38%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({theme:e})=>e.color.primaryLight} 24%, transparent), color-mix(in srgb, ${({theme:e})=>e.color.accent} 18%, transparent), transparent);
    filter: blur(0.05rem);
    opacity: 0;
    animation: ${c} 6.2s ease-in-out 0.8s infinite;
    z-index: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,F=i.button`
  ${l};
  position: relative;
  z-index: 1;
  min-width: 0;
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
  border: 1px solid ${({$active:e,theme:r})=>e?r.color.accent:"transparent"};
  border-radius: ${({theme:e})=>e.radius.sm};
  background: ${({$active:e,theme:r})=>e?r.color.surface:"transparent"};
  color: ${({$active:e,theme:r})=>e?r.color.accent:r.color.textSecondary};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  cursor: pointer;
  text-align: left;

  strong {
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
    line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  }

  &:hover,
  &:focus-visible {
    border-color: ${({theme:e})=>e.color.accent};
    outline: none;
  }
`,O=i.button`
  ${l};
  position: relative;
  isolation: isolate;
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: linear-gradient(135deg, ${({theme:e})=>e.color.accent} 0%, ${({theme:e})=>e.color.accentLight} 100%);
  color: ${({theme:e})=>e.color.textInverse};
  padding: 0 ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 1.1rem var(--catalog-accent-soft);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -45% auto -45% -28%;
    width: 42%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({theme:e})=>e.color.textInverse} 40%, transparent), color-mix(in srgb, ${({theme:e})=>e.color.accentLight} 30%, transparent), transparent);
    filter: blur(0.04rem);
    opacity: 0;
    animation: ${c} 4.8s ease-in-out 1.2s infinite;
    z-index: 0;
  }

  svg {
    position: relative;
    z-index: 1;
    width: 1.05rem;
    height: 1.05rem;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-0.1rem);
    box-shadow: 0 0 1.3rem var(--catalog-accent-soft);
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,V=i.section`
  display: block;
  min-width: 0;
`,G=i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,X=i.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,q=i.article`
  ${l};
  position: relative;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      ${({theme:e})=>e.color.surface} 0%,
      ${({theme:e})=>e.color.surface} 100%
    );
  box-shadow: ${({theme:e})=>e.shadow.sm};
  text-align: left;
  animation: ${S} 0.32s ease both;

  &:hover {
    transform: translateY(-0.18rem);
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: ${({theme:e})=>e.shadow.md}, 0 0 1.4rem var(--catalog-accent-soft);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: 0;
  }
`,x=i.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  border: 1px solid color-mix(in srgb, ${({theme:e})=>e.color.accent} 70%, transparent);
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?`color-mix(in srgb, ${e.color.primaryDark} 82%, transparent)`:e.color.surface};
  color: ${({theme:e})=>e.color.accent};
  padding: 0 ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  white-space: nowrap;
`,W=i.div`
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  background:
    radial-gradient(circle at 50% 30%, ${({theme:e})=>`color-mix(in srgb, ${e.color.accent} ${e.isDark?10:8}%, transparent)`}, transparent 58%),
    ${({theme:e})=>e.color.neutral[100]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: none;
  }

  ${x} {
    position: absolute;
    top: ${({theme:e})=>e.spacing[2]};
    right: ${({theme:e})=>e.spacing[2]};
    backdrop-filter: blur(0.35rem);
  }
`,N=i.div`
  min-width: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
`,Y=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;

  span,
  strong {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,K=i.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,Q=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,J=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.sm};
  background: ${({theme:e})=>e.color.neutral[50]};

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }
`,Z=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
  padding: ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.neutral[50]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
  }
`,ee=i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.lg};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    font-variant-numeric: tabular-nums;
  }
`,ae=i.span`
  max-width: 100%;
  border: 1px solid color-mix(in srgb, ${({theme:e})=>e.color.success} 50%, transparent);
  border-radius: ${({theme:e})=>e.radius.full};
  color: ${({theme:e})=>e.color.success};
  background: color-mix(in srgb, ${({theme:e})=>e.color.success} 12%, transparent);
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  text-align: center;
`,ie=i.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,oe=i.article`
  ${b};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({theme:e})=>e.color.accent};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }
`,te=i.div`
  ${b};
  min-height: 14rem;
  display: grid;
  place-items: center;
  align-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[6]};
  text-align: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({theme:e})=>e.color.accent};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.lg};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
  }
`,re="https://www.imponect.com/assets/catalog_images/",ne="https://www.imponect.com/assets/catalog_images/optimized/",se=[{id:"IMP_0001",image:"Camara_endoscopica.png",title:"Cámara Endoscópica LCD 4.3”",description:"Cámara portátil con pantalla integrada. Ideal para inspecciones técnicas sin necesidad de smartphone. Sonda rígida de alta resistencia.",category:"Inspección",specs:'Pantalla 4.3" | Bat. Recargable',useCases:["Mecánica automotriz","Inspección de cañerías","Mantenimiento industrial","Detección de fallas en áreas de difícil acceso"],details:"Resolución HD 1080P, 6 luces LED ajustables, cable semirrígido de 5 metros, resistencia al agua IP67."},{id:"IMP_0002",image:"PIN_LED_Rueda.png",title:"Luces LED RGB para Rayos",description:"Iluminación decorativa y de seguridad para bicicletas con efecto visual dinámico. Instalación en rayos.",category:"Movilidad",specs:"Resistente al agua | Pilas/Batería",useCases:["Ciclismo nocturno","Seguridad vial","Personalización de bicicletas","Eventos deportivos"],details:"Diferentes modos de luz, fácil instalación sin herramientas, batería de larga duración, visibilidad 360°."},{id:"IMP_0003",image:"Linterna_LED.png",title:"Linterna Headlamp COB",description:"Iluminación manos libres de gran angular con sensor de movimiento. Ideal para trabajos de precisión en oscuridad.",category:"Outdoor",specs:"Sensor Movimiento | Gran Angular",useCases:["Camping","Senderismo nocturno","Reparaciones mecánicas","Pesca deportiva"],details:"Tecnología COB LED, 5 modos de iluminación, sensor de gestos para encendido/apagado, recargable vía USB-C."},{id:"IMP_0008",image:"Inflador_Portatil_120psi.png",title:"Inflador Portátil 120 PSI",description:"Compresor de aire compacto inteligente. Apto para bicicletas MTB, Ruta y E-bikes con corte automático.",category:"Ciclismo",specs:"120 PSI | Display Digital",useCases:["Inflado de neumáticos","Bicicletas de alta gama","Scooters eléctricos","Balones deportivos"],details:"Display digital de alta precisión, batería de 2000mAh, linterna integrada, múltiples picos incluidos."},{id:"IMP_0009",image:"Sistema_vacio_neumatico.png",title:"Sistema de Elevación por Vacío",description:"Sistema neumático industrial para levantar, trasladar y posicionar cargas pesadas (vidrio, cajas) de forma segura.",category:"Industrial",specs:"Carga Pesada | Ergonómico",useCases:["Logística","Fábricas de vidrio","Centros de distribución","Líneas de ensamblaje"],details:"Capacidad hasta 150kg, sistema de seguridad anticaída, controles ergonómicos, bajo mantenimiento."},{id:"IMP_0010",image:"Chaleco_led_reflectivo.png",title:"Chaleco LED Reflectivo 360°",description:"Visibilidad total nocturna. Tiras de fibra óptica LED con carga USB. Ideal running y ciclismo urbano.",category:"Seguridad",specs:"Carga USB | 3 Modos Luz",useCases:["Running nocturno","Ciclismo urbano","Seguridad vial","Trabajos nocturnos"],details:"Tiras LED ultra-brillantes, tejido transpirable, ajustable para todos los talles, hasta 10 horas de autonomía."},{id:"IMP_0011",image:"Estacion_carga_7en1.png",title:"Estación de Carga 7 en 1",description:"Hub de carga rápida inalámbrica 30W. Compatible con todo el ecosistema móvil (Reloj, Auriculares, Celular).",category:"Tecnología",specs:"Carga Rápida | 30W",useCases:["Escritorios de oficina","Mesas de luz","Estaciones de trabajo","Uso familiar"],details:"Carga Qi de 30W, conectores USB-C, lightning y micro-USB, diseño compacto, protección contra sobrecarga."},{id:"IMP_EXTRA1",image:"Camara_endoscopica_vision_termica.png",title:"Cámara Endoscópica Térmica",description:"Diagnóstico profesional avanzado. Combina visión visual y térmica para detectar fugas de calor.",category:"Diagnóstico",specs:"Visión Térmica | Profesional",useCases:["Detección de fugas térmicas","Inspección eléctrica","HVAC","Investigación técnica"],details:"Sensor térmico FLIR, doble cámara, pantalla táctil, grabación de video térmico."},{id:"IMP_EXTRA2",image:"Tablet_endoscopica_vision_termica.png",title:"Tablet Robusta Industrial",description:"Tablet rugerizada con cámara térmica integrada. Resistente a caídas, agua y polvo.",category:"Industrial",specs:"Rugerizada | Android Ent.",useCases:["Trabajo de campo","Minería","Petróleo y Gas","Construcción"],details:"Certificación IP68, pantalla Gorilla Glass, batería de alta capacidad (8000mAh), GPS de alta precisión."},{id:"IMP_EXTRA3",image:"Inflador_Portatil_150psi.png",title:"Inflador Táctico 150 PSI",description:"Potencia superior para vehículos. Interfaz LED y función powerbank.",category:"Automotor",specs:"150 PSI | Powerbank",useCases:["Autos y camionetas","Motos","Situaciones de emergencia","Viajes largos"],details:"Presión máxima 150 PSI, función de carga inversa USB, luz SOS integrada, carcasa metálica disipadora de calor."}],ce=e=>`${ne}${e.replace(/\.[^.]+$/,".webp")}`,le=e=>`${re}${e}`,de=e=>({b2b:{focus:`Producto del catálogo real Imponect para ${e.category.toLowerCase()}. Cotización orientada a mayoristas, distribuidores y tiendas.`,price:"A cotizar",priceLabel:"Precio mayorista",margin:"Margen y escala según volumen",volume:"Consultar MOQ y disponibilidad"},b2c:{focus:"Producto del catálogo real Imponect para venta directa, retail o ecommerce.",price:"A cotizar",priceLabel:"PVP sugerido",margin:"Promo y envío a definir",volume:"Consultar stock y entrega"}}),m=se.map(e=>({id:e.id,sku:e.id,ean:"Consultar",title:e.title,valueProp:e.specs,category:e.category,status:"Catálogo real",image:ce(e.image),imageFallback:le(e.image),galleryLabel:`Casos de uso: ${e.useCases.slice(0,3).join(", ")}.`,problem:`Necesidad detectada en ${e.useCases.slice(0,2).join(" y ").toLowerCase()}.`,solution:e.description,sourceImage:e.image,details:e.details,useCases:e.useCases,specs:[["Código",e.id],["Categoría",e.category],["Specs",e.specs],["Detalle",e.details]],certifications:["Ficha web","Validación pendiente"],packaging:"Packaging, master carton y condiciones logísticas a confirmar según proveedor y lote.",logistics:{moq:"Consultar",masterCarton:"A confirmar",leadTime:"A cotizar",route:"Definir según peso, volumen y urgencia"},commercial:de(e)})),pe=[{id:"b2b",label:"B2B",helper:"Mayoristas, distribuidores y tiendas"},{id:"b2c",label:"B2C",helper:"Cliente final, ecommerce y retail"}],ge=[{title:"Catálogo real",text:"Productos sincronizados con la web actual de Imponect, sin SKUs demo externos."},{title:"Ficha educativa",text:"Cada producto muestra descripción, specs, detalle técnico y casos de uso."},{title:"Venta asistida",text:"B2B y B2C cambian el enfoque comercial sin inventar precios."},{title:"Cotización pendiente",text:"Precio, packaging y logística quedan listos para completar con datos reales."}],u=e=>e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),be=()=>{const[e,r]=n.useState(""),[d,y]=n.useState("b2b"),p=n.useMemo(()=>{const o=u(e.trim());return o?m.filter(t=>u([t.title,t.valueProp,t.category,t.sku,t.problem,t.solution].join(" ")).includes(o)):m},[e]),$=o=>{const t=o.currentTarget.dataset.fallback;t&&o.currentTarget.src!==t&&(o.currentTarget.src=t)},f=()=>{window.print()};return a.jsx(D,{children:a.jsxs(_,{children:[a.jsx(E,{children:a.jsxs(L,{children:[a.jsxs(M,{children:[a.jsx(w,{}),"Catálogo comercial"]}),a.jsx(T,{children:"Catálogo Imponect"}),a.jsx(H,{children:"Productos importados listos para vender, con fichas educativas, specs, casos de uso y enfoque comercial B2B o B2C."})]})}),a.jsxs(A,{children:[a.jsxs(R,{children:[a.jsx(g,{}),a.jsx("input",{type:"search",placeholder:"Buscar por SKU, producto, problema o categoría...",value:e,onChange:o=>r(o.target.value)})]}),a.jsx(U,{"aria-label":"Tipo de cliente",children:pe.map(o=>a.jsxs(F,{type:"button",$active:d===o.id,onClick:()=>y(o.id),title:o.helper,children:[a.jsx("strong",{children:o.label}),a.jsx("span",{children:o.helper})]},o.id))}),a.jsxs(O,{type:"button",onClick:f,children:[a.jsx(v,{}),"Descargar Catálogo PDF"]})]}),a.jsx(V,{children:a.jsxs(G,{children:[a.jsx(X,{children:p.map(o=>{const t=o.commercial[d];return a.jsxs(q,{children:[a.jsxs(W,{children:[a.jsx("img",{src:o.image,alt:o.title,loading:"lazy","data-fallback":o.imageFallback,onError:$}),a.jsx(x,{children:o.status})]}),a.jsxs(N,{children:[a.jsxs(Y,{children:[a.jsx("span",{children:o.category}),a.jsx("strong",{children:o.sku})]}),a.jsx(K,{children:o.title}),a.jsx(Q,{children:o.valueProp}),a.jsxs(J,{children:[a.jsx("span",{children:"Uso clave"}),a.jsx("p",{children:o.problem})]})]}),a.jsxs(Z,{children:[a.jsxs(ee,{children:[a.jsx("span",{children:t.priceLabel}),a.jsx("strong",{children:t.price})]}),a.jsx(ae,{children:t.margin})]})]},o.id)})}),!p.length&&a.jsxs(te,{children:[a.jsx(g,{}),a.jsx("strong",{children:"No hay productos para este filtro"}),a.jsx("span",{children:"Probá con otra categoría o una búsqueda más amplia."})]})]})}),a.jsx(ie,{children:ge.map(o=>a.jsxs(oe,{children:[a.jsx(C,{}),a.jsx("strong",{children:o.title}),a.jsx("span",{children:o.text})]},o.title))})]})})};export{be as CatalogScreen};
