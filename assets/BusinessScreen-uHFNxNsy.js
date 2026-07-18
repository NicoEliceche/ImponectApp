import{y as a,p as g,O as J,Y as X,r as p,a1 as Z,F as _,A as ee,D as M,f as P,j as r,m as k,J as re,c as R,x as U,C as se,G as F,z as ae,E as ie,H as te}from"./index-BZYg4alH.js";import{p as oe,a as ne,b as ce,c as le,d as de}from"./pageHeader-CSFyddAi.js";const pe=J`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,h=(e,s)=>e==="success"?s.color.success:e==="warning"?s.color.warning:e==="accent"?s.color.accent:s.color.primary,H=(e,s)=>s.isDark?e==="success"?"rgba(16, 185, 129, 0.12)":e==="warning"?"rgba(245, 158, 11, 0.14)":e==="accent"?"rgba(198, 137, 63, 0.14)":"rgba(0, 85, 128, 0.22)":e==="success"?s.color.successLight:e==="warning"?s.color.warningLight:e==="accent"?s.color.accentFaded:s.color.primaryFaded,ge=e=>{const s=String(e||"").toLowerCase();return s.includes("riesgo")||s.includes("pendiente")||s.includes("optimizar")?"warning":s.includes("borrador")||s.includes("validacion")||s.includes("cotizando")?"accent":s.includes("bloqueado")?"danger":"success"},he=a.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  color: ${({theme:e})=>e.color.text};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,ue=a.header`
  ${oe};
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.6fr);
  align-items: stretch;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,xe=a.div`
  ${ne};
`,me=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,L=a.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,y=a.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`,$e=a.p`
  ${ce};

  svg {
    width: 1rem;
    height: 1rem;
  }
`,je=a.h1`
  ${le};
`,ye=a.p`
  ${de};
  max-width: 52rem;
`,be=a.label`
  min-height: ${({theme:e})=>e.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    font: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,T=a.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,fe=a.nav`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,we=a.button`
  position: relative;
  overflow: hidden;
  min-height: 4.8rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({$active:e,theme:s})=>e?s.color.accent:s.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$active:e,theme:s})=>e?s.isDark?"rgba(198, 137, 63, 0.12)":s.color.accentFaded:s.color.surface};
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({$active:e,theme:s})=>e?s.color.accent:s.color.textSecondary};
  }

  span {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  small {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,ve=a.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,ke=a.span`
  display: block;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`,ze=a.h2`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Ce=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: fit-content;
  min-height: 2rem;
  border: 1px solid ${({theme:e})=>e.color.success};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(16, 185, 129, 0.14)":e.color.successLight};
  color: ${({theme:e})=>e.isDark?"#86efac":e.color.success};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;

  span {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: currentColor;
  }
`,Se=a.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,De=a.article`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 8.5rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({$tone:e,theme:s})=>h(e,s)};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(135deg, ${({$tone:e,theme:s})=>H(e,s)} 0%, ${({theme:e})=>e.color.surface} 62%),
    ${({theme:e})=>e.color.surface};
  animation: ${pe} 0.45s ease both;
`,Me=a.span`
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`,Pe=a.strong`
  color: ${({$tone:e,theme:s})=>h(e,s)};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Re=a.span`
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
`,Ue=a.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Fe=a.article`
  padding: ${({theme:e})=>e.spacing[5]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  span,
  strong,
  small {
    display: block;
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({theme:e})=>e.spacing[3]};
    color: ${({theme:e})=>e.color.accent};
    font-size: ${({theme:e})=>e.typography.size["3xl"]};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  small {
    margin-top: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,o=a.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[5]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,n=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,c=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,l=a.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
`,A=a.span`
  min-height: 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.14)":e.color.accentFaded};
  color: ${({theme:e})=>e.isDark?"#f4c27f":e.color.accentDark};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  white-space: nowrap;
`,B=a.button`
  min-height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    width: 100%;
  }
`,b=a.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`,f=a.table`
  width: 100%;
  min-width: 42rem;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
    border-bottom: 1px solid ${({theme:e})=>e.color.border};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    text-align: left;
    vertical-align: middle;
  }

  th {
    color: ${({theme:e})=>e.color.textTertiary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0;
  }

  td strong {
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  tbody tr {
    transition: background-color 0.2s ease;
  }

  tbody tr:hover {
    background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]};
  }
`,u=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.45rem;
  border-radius: ${({theme:e})=>e.radius.full};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  white-space: nowrap;

  ${({$status:e,theme:s})=>{const i=ge(e);return i==="danger"?g`
        background: ${s.isDark?"rgba(239, 68, 68, 0.16)":s.color.errorLight};
        color: ${s.isDark?"#fecaca":s.color.error};
      `:i==="warning"?g`
        background: ${s.isDark?"rgba(245, 158, 11, 0.18)":s.color.warningLight};
        color: ${s.isDark?"#fde68a":s.color.warning};
      `:i==="accent"?g`
        background: ${s.isDark?"rgba(198, 137, 63, 0.16)":s.color.accentFaded};
        color: ${s.isDark?"#f4c27f":s.color.accentDark};
      `:g`
      background: ${s.isDark?"rgba(16, 185, 129, 0.16)":s.color.successLight};
      color: ${s.isDark?"#86efac":s.color.success};
    `}}
`,He=a(u)`
  ${({$priority:e,theme:s})=>e==="Alta"?g`
        background: ${s.isDark?"rgba(198, 137, 63, 0.16)":s.color.accentFaded};
        color: ${s.isDark?"#f4c27f":s.color.accentDark};
      `:g`
      background: ${s.isDark?"rgba(0, 85, 128, 0.22)":s.color.primaryFaded};
      color: ${s.isDark?"#93c5fd":s.color.primary};
    `}
`,Le=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,C=a.button`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,Te=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,w=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.spacing[3]};
  row-gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({$tone:e,theme:s})=>h(e,s)};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$tone:e,theme:s})=>s.isDark?"rgba(255,255,255,0.035)":H(e,s)};

  svg {
    grid-row: span 2;
    width: 1.25rem;
    height: 1.25rem;
    color: ${({$tone:e,theme:s})=>h(e,s)};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  }
`,Ae=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Be=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }
`,I=a.div`
  height: 0.6rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.08)":e.color.neutral[200]};
`,E=a.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(e,100))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${({$tone:e,theme:s})=>h(e,s)};
  box-shadow: 0 0 1rem ${({$tone:e,theme:s})=>h(e,s)};
  transition: width 0.3s ease;
`,Ee=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ge=a.article`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
`,Oe=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }
`,qe=a.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  span {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  small {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ve=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,$=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({$done:e,theme:s})=>e?s.color.success:s.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$done:e,theme:s})=>e?s.isDark?"rgba(16, 185, 129, 0.12)":s.color.successLight:s.color.surface};
  color: ${({theme:e})=>e.color.text};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: ${({$done:e,theme:s})=>e?s.color.success:s.color.textSecondary};
  }

  span {
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,Ke=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,S=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }
`,Ne=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ye=a.button`
  min-height: 2.5rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,We=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px dashed ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.08)":e.color.accentFaded};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({theme:e})=>e.color.accent};
  }
`,j=[{id:"overview",label:"Comando",icon:Z,subtitle:"Visión ejecutiva"},{id:"finance",label:"Finanzas",icon:_,subtitle:"Caja y presupuesto"},{id:"marketing",label:"Marketing",icon:ee,subtitle:"Gasto y demanda"},{id:"purchases",label:"Compras",icon:M,subtitle:"Capital y proveedores"},{id:"reports",label:"Reportes",icon:P,subtitle:"Informes guardados"}],Qe=[{label:"Disponible compra",value:"US$ 18.400",helper:"Capital operativo",tone:"success"},{label:"Marketing mes",value:"US$ 730",helper:"Meta + Google",tone:"accent"},{label:"Presupuestos activos",value:"17",helper:"5 pendientes",tone:"primary"},{label:"Alertas negocio",value:"3",helper:"2 de prioridad alta",tone:"warning"}],Je=[{area:"Presupuestos",owner:"Nico",objective:"Convertir propuestas pendientes",status:"En curso",priority:"Alta"},{area:"Marketing",owner:"Diego",objective:"Controlar CPL y leads calificados",status:"Controlado",priority:"Media"},{area:"Compras",owner:"Alan",objective:"Reservar caja para carga consolidada",status:"Riesgo bajo",priority:"Alta"},{area:"CRM",owner:"Equipo",objective:"Responder ventanas activas por canal",status:"Operativo",priority:"Media"}],Xe=[{label:"Caja disponible",value:"US$ 18.400",detail:"Saldo operativo para compras",valueTone:"success"},{label:"Comprometido",value:"US$ 9.850",detail:"Pagos y despachos previstos",valueTone:"warning"},{label:"Libre estimado",value:"US$ 8.550",detail:"Después de compromisos",valueTone:"accent"}],Ze=[{concept:"Capital para compra",amount:"US$ 12.000",owner:"Founders",status:"Aprobado",due:"Semana actual"},{concept:"Marketing performance",amount:"US$ 730",owner:"Comercial",status:"En control",due:"Mensual"},{concept:"Despachos / aduana",amount:"US$ 2.150",owner:"Operaciones",status:"Pendiente",due:"7 días"},{concept:"Reserva táctica",amount:"US$ 3.520",owner:"Dirección",status:"Bloqueado",due:"Disponible"}],_e=[{channel:"Meta Ads",budget:"US$ 420",leads:"26",cpl:"US$ 16,15",quality:74,status:"Escalar"},{channel:"Google Search",budget:"US$ 310",leads:"14",cpl:"US$ 22,14",quality:58,status:"Optimizar"},{channel:"Orgánico",budget:"US$ 0",leads:"19",cpl:"US$ 0",quality:86,status:"Sostener"},{channel:"Referidos",budget:"US$ 0",leads:"7",cpl:"US$ 0",quality:92,status:"Priorizar"}],er=[{supplier:"Shenzhen Bright Packing",load:"Cajas térmicas",cbm:"6,40",capital:"US$ 4.860",status:"Cotizando"},{supplier:"Yiwu General Trade",load:"Accesorios varios",cbm:"3,20",capital:"US$ 2.180",status:"Pendiente FOB"},{supplier:"Ningbo Metal Works",load:"Herramientas",cbm:"5,10",capital:"US$ 6.300",status:"Validación"},{supplier:"Guangzhou Textile Co.",load:"Textil liviano",cbm:"2,75",capital:"US$ 1.920",status:"Listo"}],rr=[{name:"Resumen comercial semanal",type:"Ventas",owner:"Nico",date:"14/07/2026",status:"Listo"},{name:"Marketing y demanda",type:"Marketing",owner:"Diego",date:"13/07/2026",status:"Borrador"},{name:"Caja para compras",type:"Finanzas",owner:"Alan",date:"12/07/2026",status:"Pendiente"},{name:"Operaciones críticas",type:"Operación",owner:"Equipo",date:"10/07/2026",status:"Listo"}],sr=["Comercial","Marketing","Finanzas","Compras"],D=e=>String(e||"").toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),""),m=(e,s)=>{const i=D(s).trim();return i?e.filter(x=>D(Object.values(x).join(" ")).includes(i)):e},pr=()=>{const[e,s]=X(),[i,x]=p.useState(""),z=e.get("module")||"overview",d=j.some(t=>t.id===z)?z:"overview",G=j.find(t=>t.id===d)||j[0],O=p.useMemo(()=>m(Je,i),[i]),q=p.useMemo(()=>m(Ze,i),[i]),V=p.useMemo(()=>m(_e,i),[i]),K=p.useMemo(()=>m(er,i),[i]),N=p.useMemo(()=>m(rr,i),[i]),Y=t=>{if(t==="overview"){s({});return}s({module:t})};return r.jsxs(he,{children:[r.jsxs(ue,{children:[r.jsxs(xe,{children:[r.jsxs($e,{children:[r.jsx(k,{}),"Centro de negocio"]}),r.jsx(je,{children:"Negocio Imponect"}),r.jsx(ye,{children:"Caja, marketing, compras y reportes para tomar decisiones comerciales sin mezclarlo con la torre de control diaria."})]}),r.jsxs(me,{children:[r.jsxs(be,{children:[r.jsx(re,{}),r.jsx("input",{type:"search",placeholder:"Buscar en negocio",value:i,onChange:t=>x(t.target.value)})]}),r.jsxs(T,{type:"button",children:[r.jsx(R,{}),"Nuevo reporte"]})]})]}),r.jsx(fe,{children:j.map(t=>{const W=t.icon,Q=d===t.id;return r.jsxs(we,{type:"button",$active:Q,onClick:()=>Y(t.id),children:[r.jsx(W,{}),r.jsxs("span",{children:[r.jsx("strong",{children:t.label}),r.jsx("small",{children:t.subtitle})]})]},t.id)})}),r.jsxs(ve,{children:[r.jsxs("div",{children:[r.jsx(ke,{children:G.label}),r.jsx(ze,{children:ar(d)})]}),r.jsxs(Ce,{children:[r.jsx("span",{}),"Datos operativos"]})]}),d==="overview"&&r.jsx(ir,{rows:O}),d==="finance"&&r.jsx(tr,{rows:q}),d==="marketing"&&r.jsx(or,{rows:V}),d==="purchases"&&r.jsx(nr,{rows:K}),d==="reports"&&r.jsx(cr,{rows:N})]})},ar=e=>e==="finance"?"Caja, presupuesto y compromisos":e==="marketing"?"Demanda, canales y retorno":e==="purchases"?"Compras, proveedores y capital":e==="reports"?"Reportes guardados y generación":"Lectura ejecutiva del negocio",ir=({rows:e})=>r.jsxs(r.Fragment,{children:[r.jsx(Se,{children:Qe.map(s=>r.jsxs(De,{$tone:s.tone,children:[r.jsx(Me,{children:s.label}),r.jsx(Pe,{$tone:s.tone,children:s.value}),r.jsx(Re,{children:s.helper})]},s.label))}),r.jsxs(y,{children:[r.jsxs(o,{children:[r.jsxs(n,{children:[r.jsxs("div",{children:[r.jsx(c,{children:"Frentes activos"}),r.jsx(l,{children:"Responsables, objetivo y prioridad por área"})]}),r.jsx(A,{children:"4 áreas"})]}),r.jsx(b,{children:r.jsxs(f,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Área"}),r.jsx("th",{children:"Responsable"}),r.jsx("th",{children:"Objetivo"}),r.jsx("th",{children:"Estado"}),r.jsx("th",{children:"Prioridad"})]})}),r.jsx("tbody",{children:e.map(s=>r.jsxs("tr",{children:[r.jsx("td",{children:s.area}),r.jsx("td",{children:s.owner}),r.jsx("td",{children:s.objective}),r.jsx("td",{children:r.jsx(u,{$status:s.status,children:s.status})}),r.jsx("td",{children:r.jsx(He,{$priority:s.priority,children:s.priority})})]},`${s.area}-${s.owner}`))})]})})]}),r.jsxs(o,{children:[r.jsx(n,{children:r.jsxs("div",{children:[r.jsx(c,{children:"Mapa de capacidad"}),r.jsx(l,{children:"Lectura compacta para decidir en minutos"})]})}),r.jsxs(Te,{children:[r.jsxs(w,{$tone:"success",children:[r.jsx(k,{}),r.jsx("strong",{children:"Operación controlada"}),r.jsx("span",{children:"CRM y presupuestos con reglas activas."})]}),r.jsxs(w,{$tone:"accent",children:[r.jsx(U,{}),r.jsx("strong",{children:"Conversión a vigilar"}),r.jsx("span",{children:"Empujar propuestas pendientes de envío."})]}),r.jsxs(w,{$tone:"warning",children:[r.jsx(se,{}),r.jsx("strong",{children:"Caja sensible"}),r.jsx("span",{children:"Validar compras antes de comprometer carga."})]})]})]})]})]}),tr=({rows:e})=>r.jsxs(L,{children:[r.jsx(Ue,{children:Xe.map(s=>r.jsxs(Fe,{children:[r.jsx("span",{children:s.label}),r.jsx("strong",{children:s.value}),r.jsx("small",{children:s.detail})]},s.label))}),r.jsxs(y,{children:[r.jsxs(o,{children:[r.jsxs(n,{children:[r.jsxs("div",{children:[r.jsx(c,{children:"Distribución de caja"}),r.jsx(l,{children:"Uso estimado para compras, operación y reserva"})]}),r.jsx(A,{children:"USD"})]}),r.jsxs(Ae,{children:[r.jsx(v,{label:"Compra",value:65,amount:"US$ 12.000",tone:"success"}),r.jsx(v,{label:"Operación",value:18,amount:"US$ 3.330",tone:"warning"}),r.jsx(v,{label:"Reserva",value:17,amount:"US$ 3.070",tone:"accent"})]})]}),r.jsxs(o,{children:[r.jsx(n,{children:r.jsxs("div",{children:[r.jsx(c,{children:"Compromisos"}),r.jsx(l,{children:"Partidas financieras de corto plazo"})]})}),r.jsx(b,{children:r.jsxs(f,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Concepto"}),r.jsx("th",{children:"Monto"}),r.jsx("th",{children:"Responsable"}),r.jsx("th",{children:"Estado"}),r.jsx("th",{children:"Vence"})]})}),r.jsx("tbody",{children:e.map(s=>r.jsxs("tr",{children:[r.jsx("td",{children:s.concept}),r.jsx("td",{children:r.jsx("strong",{children:s.amount})}),r.jsx("td",{children:s.owner}),r.jsx("td",{children:r.jsx(u,{$status:s.status,children:s.status})}),r.jsx("td",{children:s.due})]},`${s.concept}-${s.amount}`))})]})})]})]})]}),or=({rows:e})=>r.jsx(L,{children:r.jsxs(o,{children:[r.jsxs(n,{children:[r.jsxs("div",{children:[r.jsx(c,{children:"Canales de demanda"}),r.jsx(l,{children:"Gasto, leads, CPL y calidad de cada fuente"})]}),r.jsxs(B,{type:"button",children:[r.jsx(F,{}),"Ver campañas"]})]}),r.jsx(Ee,{children:e.map(s=>r.jsxs(Ge,{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:s.channel}),r.jsx(u,{$status:s.status,children:s.status})]}),r.jsxs(qe,{children:[r.jsxs("span",{children:[s.budget,r.jsx("small",{children:"Presupuesto"})]}),r.jsxs("span",{children:[s.leads,r.jsx("small",{children:"Leads"})]}),r.jsxs("span",{children:[s.cpl,r.jsx("small",{children:"CPL"})]})]}),r.jsx(I,{children:r.jsx(E,{$value:s.quality,$tone:s.quality>80?"success":s.quality>65?"accent":"warning"})})]},s.channel))})]})}),nr=({rows:e})=>r.jsxs(y,{children:[r.jsxs(o,{children:[r.jsxs(n,{children:[r.jsxs("div",{children:[r.jsx(c,{children:"Compras en análisis"}),r.jsx(l,{children:"Proveedor, carga, CBM y capital requerido"})]}),r.jsxs(B,{type:"button",children:[r.jsx(M,{}),"Cotizar"]})]}),r.jsx(b,{children:r.jsxs(f,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Proveedor"}),r.jsx("th",{children:"Carga"}),r.jsx("th",{children:"CBM"}),r.jsx("th",{children:"Capital"}),r.jsx("th",{children:"Estado"})]})}),r.jsx("tbody",{children:e.map(s=>r.jsxs("tr",{children:[r.jsx("td",{children:s.supplier}),r.jsx("td",{children:s.load}),r.jsx("td",{children:s.cbm}),r.jsx("td",{children:r.jsx("strong",{children:s.capital})}),r.jsx("td",{children:r.jsx(u,{$status:s.status,children:s.status})})]},`${s.supplier}-${s.load}`))})]})})]}),r.jsxs(o,{children:[r.jsx(n,{children:r.jsxs("div",{children:[r.jsx(c,{children:"Riesgo de compra"}),r.jsx(l,{children:"Checklist antes de confirmar proveedor"})]})}),r.jsxs(Ve,{children:[r.jsxs($,{$done:!0,children:[r.jsx(k,{}),r.jsx("span",{children:"Proveedor validado comercialmente"})]}),r.jsxs($,{$done:!0,children:[r.jsx(U,{}),r.jsx("span",{children:"Costeo con marítimo y aéreo comparado"})]}),r.jsxs($,{children:[r.jsx(ae,{}),r.jsx("span",{children:"Confirmar plazo de producción y entrega"})]}),r.jsxs($,{children:[r.jsx(ie,{}),r.jsx("span",{children:"Definir responsable de seguimiento"})]})]})]})]}),cr=({rows:e})=>r.jsxs(y,{children:[r.jsxs(o,{children:[r.jsx(n,{children:r.jsxs("div",{children:[r.jsx(c,{children:"Generador de reportes"}),r.jsx(l,{children:"Preparado para guardar análisis y descargarlos en PDF"})]})}),r.jsxs(Ke,{children:[r.jsxs(S,{children:[r.jsx("strong",{children:"Tipo de reporte"}),r.jsx(Ne,{children:sr.map(s=>r.jsx(Ye,{type:"button",children:s},s))})]}),r.jsxs(S,{children:[r.jsx("strong",{children:"Contenido"}),r.jsxs(We,{children:[r.jsx(P,{}),r.jsx("span",{children:"Presupuestos, marketing, caja y compras quedan listos para persistencia."})]})]}),r.jsxs(T,{type:"button",children:[r.jsx(R,{}),"Guardar reporte"]})]})]}),r.jsxs(o,{children:[r.jsx(n,{children:r.jsxs("div",{children:[r.jsx(c,{children:"Reportes guardados"}),r.jsx(l,{children:"Historial para consulta y descarga"})]})}),r.jsx(b,{children:r.jsxs(f,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Reporte"}),r.jsx("th",{children:"Tipo"}),r.jsx("th",{children:"Responsable"}),r.jsx("th",{children:"Fecha"}),r.jsx("th",{children:"Estado"}),r.jsx("th",{children:"Acciones"})]})}),r.jsx("tbody",{children:e.map(s=>r.jsxs("tr",{children:[r.jsx("td",{children:s.name}),r.jsx("td",{children:s.type}),r.jsx("td",{children:s.owner}),r.jsx("td",{children:s.date}),r.jsx("td",{children:r.jsx(u,{$status:s.status,children:s.status})}),r.jsx("td",{children:r.jsxs(Le,{children:[r.jsx(C,{type:"button",title:"Ver reporte",children:r.jsx(F,{})}),r.jsx(C,{type:"button",title:"Descargar reporte",children:r.jsx(te,{})})]})})]},`${s.name}-${s.date}`))})]})})]})]}),v=({label:e,value:s,amount:i,tone:x})=>r.jsxs(Be,{children:[r.jsxs(Ie,{children:[r.jsx("span",{children:e}),r.jsx("strong",{children:i})]}),r.jsx(I,{children:r.jsx(E,{$value:s,$tone:x})})]});export{pr as BusinessScreen};
