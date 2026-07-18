import{s as Q,t as X,y as o,O as ca,p as da,r as l,j as a,e as Pe,c as la,L as V,J as je,K as pa,Q as ga,R as ke,S as ua,T as ha,U as ma,M as fa,B as J,d as se,P as Le,V as xa,W as ba}from"./index-BZYg4alH.js";const K=async(e,t)=>{const d=(e.headers.get("content-type")||"").includes("application/json")?await e.json().catch(()=>({})):await e.text();if(!e.ok){const b=typeof d=="string"?d:d==null?void 0:d.error;throw new Error(b||t)}return d},$a=async()=>{const e=await Q(X("/api/crm/integrations/whatsapp/status"));return K(e,"No se pudo consultar el estado de WhatsApp.")},ya=async e=>{const t=await Q(X("/api/crm/integrations/whatsapp/manual"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return K(t,"No se pudo guardar la configuración de WhatsApp.")},Ce=async()=>{const e=await Q(X("/api/crm/integrations/whatsapp/test"),{method:"POST"});return K(e,"No se pudo probar la conexión de WhatsApp.")},wa=async()=>{const e=await Q(X("/api/crm/integrations/whatsapp/disconnect"),{method:"POST"});return K(e,"No se pudo desconectar WhatsApp.")},va=ca`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ae={all:"#334155",whatsapp:"#00a884",instagram:"#c13584",facebook:"#1877f2",alibaba:"#ff6a00",made:"#0f62fe",1688:"#ff5000"},Se={synced:"#10b981",syncing:"#f59e0b",warning:"#ef4444"},N=e=>Ae[e]||Ae.all,te=e=>Se[e]||Se.synced,ja=(e,t)=>e==="danger"?t.color.error:e==="success"?t.color.success:e==="warning"?t.color.warning:t.color.info,ka=(e,t)=>t.isDark?e==="danger"?"rgba(239, 68, 68, 0.16)":e==="success"?"rgba(16, 185, 129, 0.14)":e==="warning"?"rgba(245, 158, 11, 0.16)":"rgba(0, 85, 128, 0.22)":e==="danger"?t.color.errorLight:e==="success"?t.color.successLight:e==="warning"?t.color.warningLight:t.color.infoLight,Ca=(e,t)=>t.isDark?e==="danger"?"#fecaca":e==="success"?"#a7f3d0":e==="warning"?"#fde68a":"#bfdbfe":e==="danger"?t.color.error:e==="success"?"#047857":e==="warning"?"#92400e":t.color.info,Aa=o.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  min-height: calc(100vh - 2.5rem);

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.055)":"rgba(0, 51, 77, 0.035)"} 1px, transparent 1px),
      linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.03)":"rgba(198, 137, 63, 0.035)"} 1px, transparent 1px);
    background-size: 46px 46px;
    opacity: 0.8;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
    min-height: auto;
  }
`,Sa=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: ${({theme:e})=>e.spacing[4]};
  background:
    linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.08)":"rgba(198, 137, 63, 0.10)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"rgba(0,51,77,0.06)"} 1px, transparent 1px),
    linear-gradient(135deg, ${({theme:e})=>e.isDark?"rgba(13, 31, 41, 0.92)":"rgba(255,255,255,0.88)"} 0%, ${({theme:e})=>e.color.surface} 100%);
  background-size: 46px 46px, 46px 46px, 100% 100%;
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${va} 6.5s ease-in-out infinite;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,za=o.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  column-gap: ${({theme:e})=>e.spacing[3]};
  row-gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  overflow: visible;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: ${({theme:e})=>e.spacing[1]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,Ma=o.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 2.4rem;
  border: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$active:e,theme:t})=>e?t.isDark?"rgba(198, 137, 63, 0.16)":t.color.accentFaded:t.color.surface};
  color: ${({$active:e,theme:t})=>e?t.color.accent:t.color.text};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  max-width: 100%;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    transform: translateY(-1px);
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.12);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    flex: 0 0 auto;
  }
`,_a=o.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
    transform: translateY(-1px);
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
    flex: 0 0 ${({theme:e})=>e.layout.buttonHeight};
  }
`,ce=o.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$sync:e})=>te(e)};
  box-shadow: 0 0 0 0.2rem ${({$sync:e})=>`${te(e)}22`};
  flex-shrink: 0;
`,Wa=o.span`
  width: 1.65rem;
  height: 1.65rem;
  border-radius: ${({theme:e})=>e.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({$platform:e})=>N(e)};
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Ta=o.span`
  min-width: 1.35rem;
  height: 1.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.primary};
  border: 1px solid ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,Ia=o.div`
  position: relative;
  display: grid;
  grid-template-columns: ${({$chatListWidth:e})=>`${Math.round(Number(e)||400)}px 0.45rem minmax(0, 1fr)`};
  min-height: calc(100vh - 7rem);
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  overflow: hidden;
  cursor: ${({$isResizing:e})=>e?"col-resize":"default"};
  user-select: ${({$isResizing:e})=>e?"none":"auto"};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.025)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
  box-shadow: ${({theme:e})=>e.shadow.md}, 0 0 28px rgba(0, 51, 77, 0.12);

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    cursor: default;
    user-select: auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: auto;
    border-radius: ${({theme:e})=>e.radius.md};
  }
`,Pa=o.aside`
  min-width: 0;
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"#0d1f29":e.color.surface} 0%, ${({theme:e})=>e.isDark?"#111b21":e.color.neutral[50]} 100%);
  display: flex;
  flex-direction: column;
  min-height: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({theme:e})=>e.color.border};
    max-height: 34rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-height: min(42dvh, 24rem);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-height: 18rem;
  }
`,La=o.button`
  position: relative;
  width: 100%;
  min-width: 0.45rem;
  align-self: stretch;
  border: none;
  border-left: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  border-right: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  padding: 0;
  background: ${({$active:e,theme:t})=>e?t.isDark?"rgba(198, 137, 63, 0.24)":t.color.accentFaded:t.isDark?"rgba(255,255,255,0.035)":t.color.neutral[100]};
  cursor: col-resize;
  touch-action: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.13rem;
    height: 3.5rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.accent};
    opacity: ${({$active:e})=>e?1:.38};
    transform: translate(-50%, -50%);
    box-shadow: 0 0 16px rgba(198, 137, 63, 0.22);
  }

  &:hover,
  &:focus-visible {
    border-color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.18)":e.color.accentFaded};
    outline: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Da=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.045)":"rgba(198, 137, 63, 0.06)"};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  }
`,Fa=o.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  color: ${({theme:e})=>e.color.text};
`,Ba=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,x=o.button`
  width: 2.15rem;
  height: 2.15rem;
  min-width: 2.15rem;
  min-height: 2.15rem;
  border: none;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.color.neutral[100]};
    color: ${({theme:e})=>e.color.text};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,Ea=o.label`
  margin: 0 ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[3]};
  height: 2.6rem;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"#202c33":e.color.neutral[100]};
  color: ${({theme:e})=>e.color.textSecondary};
  padding: 0 ${({theme:e})=>e.spacing[4]};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-family: inherit;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: ${({theme:e})=>e.layout.inputHeight};
    margin: 0 ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
  }
`,Na=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[3]};
  overflow-x: auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: 0 ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,U=o.button`
  border: 1px solid ${({$active:e,theme:t})=>e?t.color.success:t.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$active:e,theme:t})=>e?t.color.successLight:"transparent"};
  color: ${({$active:e,theme:t})=>e?t.color.success:t.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  min-height: 2rem;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  white-space: nowrap;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,Ra=o.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]};
`,Oa=o.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$active:e,theme:t})=>e?t.isDark?"rgba(198, 137, 63, 0.12)":t.color.accentFaded:"transparent"};
  color: ${({theme:e})=>e.color.text};
  display: grid;
  grid-template-columns: 3.1rem minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.09)":e.color.accentFaded};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: 4.75rem;
    grid-template-columns: 3rem minmax(0, 1fr) auto;
  }
`,ze=o.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: linear-gradient(135deg, ${({$platform:e})=>N(e)}, ${({theme:e})=>e.color.accent});
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  flex-shrink: 0;
  box-shadow: 0 0 18px ${({$platform:e})=>`${N(e)}44`};
`,Ha=o.img`
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.full};
  object-fit: cover;
  border: 2px solid ${({theme:e})=>e.color.success};
  background: ${({theme:e})=>e.color.surface};
  flex-shrink: 0;
`,qa=o.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,Va=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ua=o.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  font-size: ${({theme:e})=>e.typography.size.base};
`,Ya=o.span`
  flex-shrink: 0;
  color: ${({$unread:e,theme:t})=>e?t.color.success:t.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Ja=o.span`
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Qa=o.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Xa=o.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Ka=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
`,Ga=o.span`
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.neutral[100]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
`,Za=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textTertiary};

  svg {
    width: 1rem;
    height: 1rem;
  }
`,et=o.span`
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.success};
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,at=o.div`
  border-top: 1px solid ${({theme:e})=>e.color.border};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.isDark?"#202c33":e.color.neutral[50]};
`,tt=o.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  strong,
  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
  }
`,nt=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,ot=o.section`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.isDark?"#0b141a":e.color.primaryFaded};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: 58dvh;
  }
`,rt=o.div`
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: 0 ${({theme:e})=>e.spacing[5]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.isDark?"#202c33":e.color.surface};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: auto;
    min-height: ${({theme:e})=>e.spacing[16]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    align-items: flex-start;
  }
`,it=o.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,st=o.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,ct=o.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
`,dt=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-self: flex-start;
  }
`,lt=o.div`
  min-height: 3.25rem;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  border-bottom: 1px solid ${({$tone:e,theme:t})=>ja(e,t)};
  background: ${({$tone:e,theme:t})=>ka(e,t)};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  }
`,pt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$platform:e})=>N(e)};
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  white-space: nowrap;
`,gt=o.p`
  margin: 0;
  color: ${({$tone:e,theme:t})=>Ca(e,t)};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,ut=o.button`
  min-height: 2.15rem;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.color.accentLight};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,ht=o.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  background:
    radial-gradient(circle at 1rem 1rem, ${({$platform:e})=>`${N(e)}16`} 0 0.16rem, transparent 0.17rem),
    linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
  background-size: 2.5rem 2.5rem, auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[3]};
    min-height: 18rem;
  }
`,mt=o.div`
  align-self: center;
  border-radius: ${({theme:e})=>e.radius.full};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,ft=o.div`
  max-width: min(38rem, 78%);
  align-self: ${({$own:e})=>e?"flex-end":"flex-start"};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background: ${({$own:e,theme:t})=>e?"#005c4b":t.color.surface};
  color: ${({$own:e,theme:t})=>e?t.color.textInverse:t.color.text};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 92%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-width: 96%;
  }
`,xt=o.p`
  margin: 0;
  white-space: pre-line;
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,bt=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  opacity: 0.85;
`,$t=o.span`
  color: ${({$status:e})=>e==="read"?"#53bdeb":"currentColor"};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0;
`,De=da`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.1);
  padding: ${({theme:e})=>e.spacing[3]};
  min-width: min(21rem, 100%);

  strong,
  span {
    display: block;
  }

  strong {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  span {
    margin-top: ${({theme:e})=>e.spacing[1]};
    font-size: ${({theme:e})=>e.typography.size.xs};
    opacity: 0.85;
  }
`,yt=o.div`
  ${De}
`,wt=o.span`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.color.error};
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  flex-shrink: 0;
`,vt=o.div`
  ${De}
`,jt=o.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  flex-shrink: 0;
`,kt=o.div`
  min-height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  background: ${({$locked:e,theme:t})=>e?t.isDark?"#2a2418":t.color.neutral[100]:t.isDark?"#202c33":t.color.surface};
  border-top: 1px solid ${({$locked:e,theme:t})=>e?t.color.warning:t.color.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[2]};
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Ct=o.button`
  width: 2.15rem;
  height: 2.15rem;
  min-width: 2.15rem;
  min-height: 2.15rem;
  border: none;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.lg};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,At=o.input`
  flex: 1;
  min-width: 0;
  height: 2.7rem;
  border: none;
  outline: none;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"#2a3942":e.color.neutral[100]};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-family: inherit;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: ${({theme:e})=>e.layout.inputHeight};
    padding: 0 ${({theme:e})=>e.spacing[4]};
  }
`,St=o.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSecondary};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,zt=o.div`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]};
  color: ${({theme:e})=>e.color.textSecondary};
  margin: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  text-align: center;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,Mt=o.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[8]};
  background:
    radial-gradient(circle at 20% 20%, ${({theme:e})=>e.isDark?"rgba(0,168,132,0.16)":"rgba(0,168,132,0.1)"} 0%, transparent 28%),
    linear-gradient(135deg, ${({theme:e})=>e.isDark?"#0b141a":e.color.surface} 0%, ${({theme:e})=>e.isDark?"#111b21":e.color.neutral[50]} 100%);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[5]};
  }
`,_t=o.div`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({$sync:e})=>te(e)};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Wt=o.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,Tt=o.p`
  max-width: 48rem;
  margin: 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed||e.typography.lineHeight.normal};
`,Fe=o.div`
  max-width: 52rem;
  border: 1px solid ${({theme:e})=>e.color.error};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.errorLight};
  color: ${({theme:e})=>e.color.error};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,It=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};
  max-width: 56rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Y=o.div`
  min-width: 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.045)":e.color.surface};
  padding: ${({theme:e})=>e.spacing[4]};

  span,
  strong {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${({theme:e})=>e.color.textTertiary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,Pt=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};
`,de=o.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  background: ${({theme:e})=>e.color.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[5]};
`,le=o.div`
  width: min(100%, 34rem);
  max-height: min(90vh, 42rem);
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};
  display: flex;
  flex-direction: column;
`,Lt=o(le)`
  width: min(100%, 58rem);
`,Dt=o(le)`
  width: min(100%, 62rem);
`,pe=o.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[5]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,ge=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,ue=o.p`
  margin: ${({theme:e})=>e.spacing[2]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Ft=o.div`
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[3]};
`,Bt=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  overflow-y: auto;
`,Et=o.div`
  display: grid;
  grid-template-columns: minmax(13rem, 1.2fr) minmax(20rem, 2fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.color.neutral[50]};

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,Nt=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,Rt=o.strong`
  display: block;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ot=o.span`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Ht=o.div`
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) minmax(8rem, 0.9fr) minmax(8rem, 0.9fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,qt=o.input`
  min-width: 0;
  height: 2.35rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
  }
`,Me=o.select`
  height: 2.35rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  outline: none;
`,Vt=o.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;

  input {
    accent-color: ${({theme:e})=>e.color.accent};
  }
`,Ut=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
`,Be=o.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[5]};
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,he=o.button`
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.accentLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,z=o.button`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.neutral[100]};
    color: ${({theme:e})=>e.color.text};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Yt=o.div`
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Jt=o.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.12)":e.color.accentFaded};
  color: ${({theme:e})=>e.color.text};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    color: ${({theme:e})=>e.color.accent};
  }
`,Qt=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,S=o.label`
  grid-column: ${({$wide:e})=>e?"1 / -1":"auto"};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;

  input {
    width: 100%;
    min-width: 0;
    height: 2.65rem;
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.text};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    text-transform: none;
    outline: none;
    color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};

    &:focus {
      border-color: ${({theme:e})=>e.color.accent};
      box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
    }
  }
`,Xt=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Kt=o.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  text-align: left;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.color.neutral[100]};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({theme:e})=>e.color.success};
  }
`,Ee="imponect.chats.channelFilter",Ne="imponect.chats.connectedAccounts",ne="imponect.chats.listWidth",_e=400,We=320,Te=620,Gt=420,Re=new Set(["connected"]),Zt=new Set(["needs_setup","requires_attention","disconnected"]),en=()=>`imponect-whatsapp-${Date.now().toString(36)}-${Math.random().toString(16).slice(2,8)}`,Oe=[{id:"all",label:"Todo",shortLabel:"Todo",sync:"synced"},{id:"whatsapp",label:"WhatsApp",shortLabel:"WA",sync:"synced"},{id:"instagram",label:"Instagram",shortLabel:"IG",sync:"syncing"},{id:"facebook",label:"Facebook",shortLabel:"FB",sync:"synced"},{id:"alibaba",label:"Alibaba",shortLabel:"AB",sync:"synced"},{id:"made",label:"Made-in-China",shortLabel:"MIC",sync:"warning"},{id:"1688",label:"1688",shortLabel:"1688",sync:"synced"}],an={whatsapp:{open:{locked:!1,tone:"success",badge:"WhatsApp 24h activa",note:"Respuesta libre habilitada porque el cliente escribió dentro de la ventana permitida."},template_required:{locked:!0,tone:"warning",badge:"Template requerido",note:"La ventana de 24h de WhatsApp está vencida. Imponect bloquea mensajes libres para evitar incumplir la política.",actionLabel:"Enviar template aprobado",actionTitle:"Templates aprobados de WhatsApp",actionOptions:["Enviar seguimiento de cotización","Solicitar confirmación de datos","Avisar novedad de presupuesto","Enviar actualización de carga"],placeholder:"Esperando respuesta del cliente o envío de template aprobado"}},instagram:{open:{locked:!1,tone:"success",badge:"Instagram 24h activa",note:"Respuesta libre habilitada por interacción reciente del usuario."},human_agent:{locked:!1,tone:"warning",badge:"Agente humano",note:"Fuera de 24h, pero dentro de la ventana manual extendida de Meta. Solo respuesta humana, sin automatizaciones ni mensajes masivos."},expired:{locked:!0,tone:"danger",badge:"Instagram vencido",note:"Meta no permite mensajes libres para este DM. Hace falta una opción permitida por la plataforma.",actionLabel:"Ver opciones permitidas",actionTitle:"Opciones permitidas por Instagram",actionOptions:["Revisar respuesta humana disponible","Esperar nuevo mensaje del usuario","Asignar a revisión manual"],placeholder:"Chat bloqueado por política de Meta"}},facebook:{open:{locked:!1,tone:"success",badge:"Facebook 24h activa",note:"Respuesta libre habilitada por interacción reciente del usuario."},human_agent:{locked:!1,tone:"warning",badge:"Agente humano",note:"Fuera de 24h, pero dentro de la ventana manual extendida de Meta. Solo respuesta humana, sin automatizaciones ni mensajes masivos."},expired:{locked:!0,tone:"danger",badge:"Messenger vencido",note:"Meta no permite mensajes libres para este chat. Hace falta una opción permitida por la plataforma.",actionLabel:"Ver opciones permitidas",actionTitle:"Opciones permitidas por Facebook",actionOptions:["Revisar respuesta humana disponible","Esperar nuevo mensaje del usuario","Asignar a revisión manual"],placeholder:"Chat bloqueado por política de Meta"}},alibaba:{external_pending:{locked:!1,tone:"info",badge:"Alibaba pendiente",note:"El chat web de Alibaba queda para una etapa posterior. Por ahora este canal funciona como registro operativo."}},made:{trade_messenger:{locked:!1,tone:"info",badge:"Trade Messenger",note:"Made-in-China usa Message Centre y Trade Messenger. No hay API pública de chat confirmada para integrarlo como inbox propio todavía."}},1688:{wangwang_restricted:{locked:!1,tone:"warning",badge:"WangWang restringido",note:"1688/WangWang requiere capacidades del ecosistema Alibaba TOP y permisos específicos. La integración directa de mensajes queda en evaluación."}}},He=[{id:"wa-breen",platform:"whatsapp",name:"Breen",subtitle:"+54 221 445-6745",accountType:"Business Account",avatar:"BR",pinned:!0,favorite:!0,unread:0,time:"Ayer",status:"read",lastMessage:"Última semana de Junio, Bingo",messagingWindow:"template_required",tags:["Catálogo","Cliente activo"],messages:[{id:"m1",from:"them",text:"Hola Nico, ¿nos pasás el recibo de pago?",time:"17:04"},{id:"m2",from:"me",text:`Okebon, maná (4kg)
Azúcar
Leche
Café instantáneo
Yerba`,time:"17:07",status:"read"},{id:"m3",from:"me",type:"file",title:"2026_06_03_17_07_28_589_receipt.pdf",meta:"1 page · PDF · 15 kB",time:"17:07",status:"read"},{id:"m4",from:"me",text:"Plastificar del 1 al 10 por separado.",time:"19:17",status:"read"},{id:"m5",from:"me",text:"Y para la otra clase dentro de 2 semanas imprimir en papel común uno de cada juguete.",time:"19:18",status:"read"},{id:"m6",from:"me",text:"Última semana de Junio, Bingo",time:"19:28",status:"read"}]},{id:"wa-constructora",platform:"whatsapp",name:"+54 9 2223 42-6786 (You)",subtitle:"Cámara argentina de la construcción",accountType:"Personal",avatar:"CA",pinned:!0,favorite:!1,unread:2,time:"Martes",status:"delivered",lastMessage:"Cámara argentina de la constru...",messagingWindow:"open",tags:["Grupo"],messages:[{id:"m1",from:"them",text:"¿Tenés el presupuesto final?",time:"09:12"},{id:"m2",from:"me",text:"Lo reviso y te lo paso antes del mediodía.",time:"09:15",status:"delivered"}]},{id:"wa-founders",platform:"whatsapp",name:"IMPONECT - FOUNDERS",subtitle:"Alan: Yo ahora mientras llegan me pon...",accountType:"Grupo",avatar:"IF",pinned:!0,favorite:!0,unread:3,time:"06:39",status:"sent",lastMessage:"Alan: Yo ahora mientras llegan me pon...",messagingWindow:"template_required",tags:["Equipo"],messages:[{id:"m1",from:"them",text:"Alan: Yo ahora mientras llegan me pongo con eso.",time:"06:39"},{id:"m2",from:"me",text:"Perfecto, lo vemos después del daily.",time:"06:41",status:"sent"}]},{id:"ig-mayra",platform:"instagram",name:"mayra.design",subtitle:"@mayra.design · Instagram DM",accountType:"Creator",avatar:"MD",pinned:!1,favorite:!0,unread:5,time:"08:12",status:"read",lastMessage:"Te mandé las medidas por DM.",messagingWindow:"human_agent",tags:["Diseño","Story reply"],messages:[{id:"m1",from:"them",text:"Vi la historia de packaging. ¿Tienen medidas chicas?",time:"08:08"},{id:"m2",from:"me",text:"Sí, te mando las opciones por acá.",time:"08:10",status:"read"},{id:"m3",from:"them",text:"Te mandé las medidas por DM.",time:"08:12"}]},{id:"fb-transportes",platform:"facebook",name:"Transportes Sur",subtitle:"Messenger · Respuesta a anuncio",accountType:"Page",avatar:"TS",pinned:!1,favorite:!1,unread:1,time:"Ayer",status:"delivered",lastMessage:"¿Pueden cotizar retiro en Avellaneda?",messagingWindow:"open",tags:["Ad response"],messages:[{id:"m1",from:"them",text:"¿Pueden cotizar retiro en Avellaneda?",time:"18:22"},{id:"m2",from:"me",text:"Sí, pasanos volumen y horario de carga.",time:"18:31",status:"delivered"}]},{id:"ab-supplier",platform:"alibaba",name:"Shenzhen Bright Packing Co.",subtitle:"Alibaba.com · Gold Supplier",accountType:"Supplier",avatar:"SB",pinned:!0,favorite:!1,unread:4,time:"02:18",status:"read",lastMessage:"PI updated with Trade Assurance.",messagingWindow:"external_pending",tags:["Trade Assurance","Cotización"],messages:[{id:"m1",from:"them",text:"MOQ can be 500 units with custom logo.",time:"01:52"},{id:"m2",from:"me",text:"Please update PI including cartons dimensions.",time:"02:04",status:"read"},{id:"m3",from:"them",type:"product",title:"Custom rigid box 18x12x6",meta:"FOB Ningbo · 500 units · 12 days",time:"02:18"}]},{id:"mic-inquiry",platform:"made",name:"Ningbo Better Tools",subtitle:"Made-in-China · Message Centre",accountType:"Manufacturer",avatar:"NB",pinned:!1,favorite:!0,unread:2,time:"Lun",status:"sent",lastMessage:"We attached CE certificate.",messagingWindow:"trade_messenger",tags:["Inquiry","Certificados"],messages:[{id:"m1",from:"them",text:"We attached CE certificate.",time:"11:08"},{id:"m2",from:"me",text:"Please also send packing list and lead time.",time:"11:22",status:"sent"}]},{id:"1688-store",platform:"1688",name:"义乌玩具旗舰店",subtitle:"1688 · AliWangWang",accountType:"Store",avatar:"1688",pinned:!1,favorite:!1,unread:6,time:"00:41",status:"delivered",lastMessage:"可以混批，今天能发货。",messagingWindow:"wangwang_restricted",tags:["采购","Traducir"],messages:[{id:"m1",from:"them",text:"可以混批，今天能发货。",time:"00:38"},{id:"m2",from:"me",text:"请确认一箱数量和重量。",time:"00:41",status:"delivered"}]}],tn={whatsapp:["Info del contacto","Catálogo","Buscar mensajes","Silenciar notificaciones","Mensajes temporales","Etiquetas","Exportar chat","Vaciar chat","Bloquear / reportar"],instagram:["Perfil de Instagram","Responder con plantilla","Asignar conversación","Marcar para seguimiento","Ocultar conversación","Bloquear / restringir"],facebook:["Ver perfil en Messenger","Responder comentario asociado","Asignar conversación","Marcar como listo","Mover a spam","Bloquear usuario"],alibaba:["Ficha del proveedor","Trade Assurance","Traducir conversación","Crear orden","Solicitar PI","Ver historial de cotizaciones"],made:["Ficha del fabricante","Inquiry basket","Descargar mensajes","Agregar a contactos","Blacklist","Backup de mensajes"],1688:["Traducir conversación","Ver tienda","Crear pedido","Solicitar fotos reales","Consultar stock","Guardar contacto WangWang"]},R=Oe.reduce((e,t)=>(e[t.id]=t,e),{}),E=Oe.filter(e=>e.id!=="all").map((e,t)=>({id:e.id,name:e.label,enabled:!0,sync:e.sync,interval:"15",order:t,connection:e.sync==="warning"?"Requiere revisión":"Conectada"})),oe=(e,t=null)=>{const p=t?Math.max(We,Math.min(Te,t-Gt)):Te;return Math.min(Math.max(e,We),p)},nn=()=>{if(typeof window>"u")return _e;const e=window.localStorage.getItem(ne),t=Number(e);return Number.isFinite(t)?oe(t):_e},on=()=>{if(typeof window>"u")return["all"];const e=sessionStorage.getItem(Ee);if(!e)return["all"];try{const t=JSON.parse(e);return Array.isArray(t)&&t.length?t:["all"]}catch{return[e]}},rn=()=>{if(typeof window>"u")return E;const e=sessionStorage.getItem(Ne);if(!e)return E;try{const t=JSON.parse(e);return Array.isArray(t)?E.map(p=>({...p,...t.find(d=>d.id===p.id)})):E}catch{return E}},sn=(e,t=null)=>{const p=t?new Set(t):null;return He.filter(d=>p&&!p.has(d.platform)?!1:e==="all"||d.platform===e).reduce((d,b)=>d+b.unread,0)},cn=e=>e==="syncing"?"Sincronizando":e==="warning"?"Revisar sync":"Sincronizado",dn=e=>{var t;return((t=R[e])==null?void 0:t.label)||e},re=(e,t)=>t?"syncing":!e||Zt.has(e.status)?"warning":"synced",ie=(e,t)=>t?"Consultando conexión":!e||e.status==="needs_setup"?"Requiere configuración":e.status==="requires_attention"?"Requiere actualizar credenciales":e.status==="disconnected"?"Desconectada":e.last_verified_at?"Conectada y verificada":"Conectada sin prueba reciente",ln=e=>!e||e.status==="needs_setup"?"WhatsApp no conectado":e.status==="requires_attention"?"WhatsApp requiere atención":e.status==="disconnected"?"WhatsApp desconectado":"WhatsApp conectado",pn=e=>["Business Account","Supplier","Manufacturer","Store"].includes(e.accountType),gn=e=>{if(!e)return null;const t=an[e.platform]||{},p=e.messagingWindow||"open";return t[p]||t.open||{locked:!1,tone:"info",badge:"Canal conectado",note:"Este canal se gestionará según las reglas de su integración cuando conectemos la API real."}},Ie=({status:e})=>e?a.jsx($t,{$status:e,"aria-label":e,children:e==="sent"?"✓":"✓✓"}):null,qe=({platform:e})=>{const t=R[e]||R.all;return a.jsx(Wa,{$platform:e,children:t.shortLabel})},un=({modal:e,onClose:t})=>e?a.jsx(de,{onClick:t,children:a.jsxs(le,{onClick:p=>p.stopPropagation(),children:[a.jsxs(pe,{children:[a.jsxs("div",{children:[a.jsx(ge,{children:e.title}),a.jsx(ue,{children:e.subtitle})]}),a.jsx(x,{onClick:t,title:"Cerrar",children:a.jsx(se,{})})]}),a.jsx(Ft,{children:e.options.map(p=>a.jsxs(Kt,{children:[a.jsx(Le,{}),a.jsx("span",{children:p})]},p))})]})}):null,hn=({accounts:e,onClose:t,onMove:p,onRefresh:d,onSave:b,onUpdate:m})=>a.jsx(de,{onClick:t,children:a.jsxs(Lt,{onClick:s=>s.stopPropagation(),children:[a.jsxs(pe,{children:[a.jsxs("div",{children:[a.jsx(ge,{children:"Configuración de cuentas"}),a.jsx(ue,{children:"Conexiones, orden, sincronización y visibilidad de filtros."})]}),a.jsx(x,{onClick:t,title:"Cerrar",children:a.jsx(se,{})})]}),a.jsx(Bt,{children:e.map((s,w)=>a.jsxs(Et,{children:[a.jsxs(Nt,{children:[a.jsx(ce,{$sync:s.sync}),a.jsx(qe,{platform:s.id}),a.jsxs("div",{children:[a.jsx(Rt,{children:s.name}),a.jsx(Ot,{children:s.connection})]})]}),a.jsxs(Ht,{children:[a.jsx(qt,{value:s.name,onChange:$=>m(s.id,"name",$.target.value),"aria-label":`Nombre de ${s.name}`}),a.jsxs(Me,{value:s.sync,onChange:$=>m(s.id,"sync",$.target.value),"aria-label":`Estado de sync de ${s.name}`,children:[a.jsx("option",{value:"synced",children:"Sincronizado"}),a.jsx("option",{value:"syncing",children:"Sincronizando"}),a.jsx("option",{value:"warning",children:"Revisar sync"})]}),a.jsxs(Me,{value:s.interval,onChange:$=>m(s.id,"interval",$.target.value),"aria-label":`Frecuencia de ${s.name}`,children:[a.jsx("option",{value:"5",children:"Cada 5 min"}),a.jsx("option",{value:"15",children:"Cada 15 min"}),a.jsx("option",{value:"30",children:"Cada 30 min"}),a.jsx("option",{value:"60",children:"Cada 1 hora"})]}),a.jsxs(Vt,{children:[a.jsx("input",{type:"checkbox",checked:s.enabled,onChange:$=>m(s.id,"enabled",$.target.checked)}),"Visible"]})]}),a.jsxs(Ut,{children:[a.jsx(x,{onClick:()=>p(w,-1),disabled:w===0,title:"Subir",children:a.jsx(xa,{})}),a.jsx(x,{onClick:()=>p(w,1),disabled:w===e.length-1,title:"Bajar",children:a.jsx(ba,{})}),a.jsx(x,{onClick:()=>d(s.id),title:"Actualizar sync",children:a.jsx(J,{})})]})]},s.id))}),a.jsxs(Be,{children:[a.jsx(z,{onClick:t,children:"Cancelar"}),a.jsx(he,{onClick:b,children:"Guardar cambios"})]})]})}),mn=({integration:e,isLoading:t,error:p,onOpenManualConfig:d,onRefresh:b,onTest:m,onDisconnect:s,onShowMetaInfo:w,isTesting:$,isDisconnecting:M})=>{const f=Re.has(e==null?void 0:e.status),O=!!(e!=null&&e.has_access_token&&(e!=null&&e.phone_number_id)),H=e!=null&&e.last_verified_at?new Intl.DateTimeFormat("es-AR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e.last_verified_at)):"Sin prueba registrada";return a.jsxs(Mt,{children:[a.jsxs(_t,{$sync:re(e,t),children:[a.jsx(ce,{$sync:re(e,t)}),ie(e,t)]}),a.jsx(Wt,{children:ln(e)}),a.jsx(Tt,{children:"Para recibir y responder mensajes desde Imponect, vinculá una cuenta de WhatsApp Business Platform. Podés conectar con Meta más adelante o cargar credenciales manualmente desde esta pantalla."}),p&&a.jsx(Fe,{children:p}),a.jsxs(It,{children:[a.jsxs(Y,{children:[a.jsx("span",{children:"Webhook URL"}),a.jsx("strong",{children:(e==null?void 0:e.webhook_url)||"Disponible al consultar el backend"})]}),a.jsxs(Y,{children:[a.jsx("span",{children:"Número"}),a.jsx("strong",{children:(e==null?void 0:e.phone_number)||"Sin número vinculado"})]}),a.jsxs(Y,{children:[a.jsx("span",{children:"Phone Number ID"}),a.jsx("strong",{children:(e==null?void 0:e.phone_number_id)||"Pendiente"})]}),a.jsxs(Y,{children:[a.jsx("span",{children:"Última verificación"}),a.jsx("strong",{children:H})]})]}),a.jsxs(Pt,{children:[a.jsxs(he,{type:"button",onClick:d,children:[a.jsx(Pe,{}),f?"Actualizar credenciales":"Configuración manual"]}),a.jsx(z,{type:"button",onClick:w,children:"Conectar con Meta"}),a.jsxs(z,{type:"button",onClick:m,disabled:!O||$,children:[a.jsx(J,{}),$?"Probando...":"Probar conexión"]}),(e==null?void 0:e.status)&&e.status!=="needs_setup"&&a.jsx(z,{type:"button",onClick:s,disabled:M,children:M?"Desconectando...":"Desconectar"}),a.jsx(x,{type:"button",onClick:b,title:"Actualizar estado",children:a.jsx(J,{})})]})]})},fn=({form:e,integration:t,error:p,isSaving:d,isTesting:b,onChange:m,onClose:s,onCopyWebhook:w,onSubmit:$,onSubmitAndTest:M})=>a.jsx(de,{onClick:s,children:a.jsxs(Dt,{as:"form",onSubmit:$,onClick:f=>f.stopPropagation(),children:[a.jsxs(pe,{children:[a.jsxs("div",{children:[a.jsx(ge,{children:"Configuración manual de WhatsApp"}),a.jsx(ue,{children:"Pegá las credenciales de WhatsApp Cloud API. Los tokens se guardan en backend y no se devuelven completos al navegador."})]}),a.jsx(x,{type:"button",onClick:s,title:"Cerrar",children:a.jsx(se,{})})]}),a.jsxs(Yt,{children:[a.jsxs(Jt,{children:[a.jsx(Le,{}),a.jsx("span",{children:"Si el token expiró, escribí uno nuevo. Si dejás el campo vacío y ya había token guardado, se conserva el anterior."})]}),a.jsxs(Qt,{children:[a.jsxs(S,{children:[a.jsx("span",{children:"Número asociado"}),a.jsx("input",{value:e.phone_number,onChange:f=>m("phone_number",f.target.value),placeholder:"+54 9 ..."})]}),a.jsxs(S,{children:[a.jsx("span",{children:"WhatsApp Business Account ID"}),a.jsx("input",{value:e.business_account_id,onChange:f=>m("business_account_id",f.target.value),placeholder:"WABA ID",required:!0})]}),a.jsxs(S,{children:[a.jsx("span",{children:"Phone Number ID"}),a.jsx("input",{value:e.phone_number_id,onChange:f=>m("phone_number_id",f.target.value),placeholder:"Phone Number ID",required:!0})]}),a.jsxs(S,{children:[a.jsx("span",{children:"Verify Token"}),a.jsx("input",{value:e.verify_token,onChange:f=>m("verify_token",f.target.value),placeholder:"Token para validar webhook",required:!0})]}),a.jsxs(S,{$wide:!0,children:[a.jsx("span",{children:"Access Token"}),a.jsx("input",{value:e.access_token,onChange:f=>m("access_token",f.target.value),placeholder:(t==null?void 0:t.access_token_masked)||"Pegá el token de Meta",autoComplete:"off"})]}),a.jsxs(S,{$wide:!0,children:[a.jsx("span",{children:"App Secret"}),a.jsx("input",{value:e.app_secret,onChange:f=>m("app_secret",f.target.value),placeholder:(t==null?void 0:t.app_secret_masked)||"Opcional, recomendado para producción",autoComplete:"off"})]}),a.jsxs(S,{$wide:!0,children:[a.jsx("span",{children:"Webhook URL"}),a.jsxs(Xt,{children:[a.jsx("input",{value:(t==null?void 0:t.webhook_url)||"",readOnly:!0}),a.jsx(z,{type:"button",onClick:w,children:"Copiar"})]})]})]}),p&&a.jsx(Fe,{children:p})]}),a.jsxs(Be,{children:[a.jsx(z,{type:"button",onClick:s,disabled:d||b,children:"Cancelar"}),a.jsxs(z,{type:"button",onClick:M,disabled:d||b,children:[a.jsx(J,{}),b?"Probando...":"Guardar y probar"]}),a.jsx(he,{type:"submit",disabled:d||b,children:d?"Guardando...":"Guardar configuración"})]})]})}),$n=()=>{const e=l.useRef(null),[t,p]=l.useState(on),[d,b]=l.useState(rn),[m,s]=l.useState("all"),[w,$]=l.useState(""),[M,f]=l.useState(nn),[O,H]=l.useState(!1),[Ve,me]=l.useState(null),[Ue,G]=l.useState(!1),[u,I]=l.useState(null),[P,fe]=l.useState(!0),[A,_]=l.useState(""),[xe,v]=l.useState(""),[Ye,Z]=l.useState(!1),[be,$e]=l.useState({phone_number:"",business_account_id:"",phone_number_id:"",verify_token:"",access_token:"",app_secret:""}),q=l.useCallback(async()=>{fe(!0),v("");try{const n=await $a();I(n)}catch(n){v(n.message||"No se pudo consultar WhatsApp.")}finally{fe(!1)}},[]);l.useEffect(()=>{q()},[q]),l.useEffect(()=>{const n=()=>{var i;const r=(i=e.current)==null?void 0:i.getBoundingClientRect().width;r&&f(y=>{const g=oe(y,r);return window.localStorage.setItem(ne,String(Math.round(g))),g})};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const L=l.useMemo(()=>d.filter(n=>n.enabled).map(n=>n.id),[d]),D=Re.has(u==null?void 0:u.status),ye=re(u,P),Je=l.useMemo(()=>D?L:L.filter(n=>n!=="whatsapp"),[D,L]),ee=l.useMemo(()=>d.map(n=>n.id==="whatsapp"?{...n,sync:ye,connection:ie(u,P)}:n),[d,P,u,ye]),ae=l.useMemo(()=>{const n=[...ee].sort((r,i)=>r.order-i.order).filter(r=>r.enabled).map(r=>({...R[r.id],label:r.name,sync:r.sync}));return[R.all,...n]},[ee]),W=l.useMemo(()=>{const n=t.includes("all"),r=new Set(L);return[...He.filter(g=>r.has(g.platform)&&(g.platform!=="whatsapp"||D)&&(n||t.includes(g.platform))).filter(g=>m==="unread"?g.unread>0:m==="favorites"?g.favorite:!0)].sort((g,j)=>Number(j.pinned)-Number(g.pinned))},[t,D,m,L]),h=l.useMemo(()=>W.find(n=>n.id===w)||W[0],[w,W]),c=l.useMemo(()=>gn(h),[h]),we=!t.includes("all")&&t.includes("whatsapp")&&!D;l.useEffect(()=>{sessionStorage.setItem(Ee,JSON.stringify(t))},[t]),l.useEffect(()=>{const n=new Set(ae.map(r=>r.id));t.some(r=>!n.has(r))&&p(["all"])},[t,ae]),l.useEffect(()=>{h&&$(h.id)},[h]);const k=(n,r,i)=>{me({title:n,subtitle:r,options:i})},Qe=l.useCallback(n=>{var T;if(n.button!==void 0&&n.button!==0)return;const r=e.current;if(!r)return;n.preventDefault(),H(!0);const i=n.currentTarget,y=r.getBoundingClientRect();(T=i.setPointerCapture)==null||T.call(i,n.pointerId);const g=F=>{const B=oe(F-y.left,y.width);f(B),window.localStorage.setItem(ne,String(Math.round(B)))},j=F=>{g(F.clientX)},C=F=>{var B;H(!1),(B=i.releasePointerCapture)==null||B.call(i,F.pointerId),window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",C),window.removeEventListener("pointercancel",C)};g(n.clientX),window.addEventListener("pointermove",j),window.addEventListener("pointerup",C),window.addEventListener("pointercancel",C)},[]),Xe=n=>{p(r=>{if(n==="all")return["all"];const i=r.filter(g=>g!=="all"),y=i.includes(n)?i.filter(g=>g!==n):[...i,n];return y.length?y:["all"]}),s("all")},Ke=(n,r,i)=>{b(y=>y.map(g=>g.id===n?{...g,[r]:i,...r==="sync"?{connection:i==="warning"?"Requiere revisión":i==="syncing"?"Sincronizando ahora":"Conectada"}:{}}:g))},Ge=(n,r)=>{b(i=>{const y=[...i].sort((C,T)=>C.order-T.order),g=n+r;if(g<0||g>=y.length)return i;const j=[...y];return[j[n],j[g]]=[j[g],j[n]],j.map((C,T)=>({...C,order:T}))})},Ze=n=>{b(r=>r.map(i=>i.id===n?{...i,sync:"synced",connection:"Actualizada recién"}:i))},ea=()=>{sessionStorage.setItem(Ne,JSON.stringify(d)),G(!1)},aa=()=>{$e({phone_number:(u==null?void 0:u.phone_number)||"",business_account_id:(u==null?void 0:u.business_account_id)||"",phone_number_id:(u==null?void 0:u.phone_number_id)||"",verify_token:(u==null?void 0:u.verify_token)||en(),access_token:"",app_secret:""}),v(""),Z(!0)},ta=(n,r)=>{$e(i=>({...i,[n]:r}))},ve=async({testAfterSave:n=!1}={})=>{_(n?"save-test":"save"),v("");try{const r=await ya(be);if(I(r),n){const i=await Ce();I(i.integration)}Z(!1)}catch(r){v(r.message||"No se pudo guardar la configuración de WhatsApp.")}finally{_("")}},na=n=>{n.preventDefault(),ve()},oa=async()=>{_("test"),v("");try{const n=await Ce();I(n.integration)}catch(n){v(n.message||"No se pudo probar la conexión de WhatsApp."),q()}finally{_("")}},ra=async()=>{_("disconnect"),v("");try{const n=await wa();I(n),$("")}catch(n){v(n.message||"No se pudo desconectar WhatsApp.")}finally{_("")}},ia=async()=>{var n;if(u!=null&&u.webhook_url)try{await((n=navigator.clipboard)==null?void 0:n.writeText(u.webhook_url))}catch{v("No se pudo copiar la URL automáticamente.")}},sa=()=>{k("Conectar con Meta","Embedded Signup queda preparado como camino recomendado para producción.",["Iniciar sesión con Meta Business","Elegir Business Manager y WABA","Seleccionar número de WhatsApp","Guardar Phone Number ID y WABA ID automáticamente","Validar webhook con el Verify Token de Imponect"])};return a.jsxs(Aa,{children:[a.jsx(Sa,{children:a.jsxs(za,{"aria-label":"Filtros por aplicación",children:[a.jsx(_a,{onClick:()=>G(!0),title:"Configurar cuentas conectadas",children:a.jsx(Pe,{})}),ae.map(n=>a.jsxs(Ma,{$active:t.includes(n.id),$sync:n.sync,onClick:()=>Xe(n.id),title:cn(n.sync),children:[a.jsx(ce,{$sync:n.sync}),a.jsx(qe,{platform:n.id}),a.jsx("span",{children:n.label}),a.jsx(Ta,{children:sn(n.id,Je)})]},n.id))]})}),a.jsxs(Ia,{ref:e,$chatListWidth:M,$isResizing:O,children:[a.jsxs(Pa,{children:[a.jsxs(Da,{children:[a.jsx(Fa,{children:"Chats"}),a.jsxs(Ba,{children:[a.jsx(x,{title:"Nuevo chat",onClick:()=>k("Nuevo chat","Crear conversación en el canal activo",["Nuevo contacto","Nuevo grupo","Importar lead","Crear conversación interna"]),children:a.jsx(la,{})}),a.jsx(x,{title:"Opciones de bandeja",onClick:()=>k("Opciones de bandeja","Configuración general de la lista de chats",["Filtros guardados","Chats archivados","Mensajes fijados","Automatizaciones","Asignación por equipo","Preferencias de notificación"]),children:a.jsx(V,{})})]})]}),a.jsxs(Ea,{children:[a.jsx(je,{}),a.jsx("input",{type:"search",placeholder:"Buscar o iniciar un chat nuevo"})]}),a.jsxs(Na,{children:[a.jsx(U,{$active:m==="all",onClick:()=>s("all"),children:"All"}),a.jsxs(U,{$active:m==="unread",onClick:()=>s("unread"),children:["Unread ",W.filter(n=>n.unread>0).length]}),a.jsx(U,{$active:m==="favorites",onClick:()=>s("favorites"),children:"Favorites"}),a.jsx(U,{onClick:()=>k("Filtros avanzados","Segmentación de conversaciones",["Por responsable","Por etiqueta","Por SLA vencido","Por origen de campaña","Por conversación sin respuesta"]),children:a.jsx(V,{})})]}),a.jsx(Ra,{children:W.length?W.map(n=>a.jsxs(Oa,{$active:(h==null?void 0:h.id)===n.id,onClick:()=>$(n.id),children:[a.jsx(ze,{$platform:n.platform,children:n.avatar}),a.jsxs(qa,{children:[a.jsxs(Va,{children:[a.jsx(Ua,{children:n.name}),a.jsx(Ya,{$unread:n.unread>0,children:n.time})]}),a.jsxs(Ja,{children:[dn(n.platform)," · ",n.accountType]}),a.jsxs(Qa,{children:[a.jsx(Ie,{status:n.status}),a.jsx(Xa,{children:n.lastMessage})]}),a.jsx(Ka,{children:n.tags.map(r=>a.jsx(Ga,{children:r},r))})]}),a.jsxs(Za,{children:[n.pinned&&a.jsx(pa,{}),n.unread>0&&a.jsx(et,{children:n.unread})]})]},n.id)):a.jsx(zt,{children:we?"WhatsApp requiere configuración para mostrar conversaciones.":"No hay conversaciones para este filtro."})}),a.jsxs(at,{children:[a.jsx(Ha,{src:ga("assets/imponect_logo.jpg"),alt:"Imponect WhatsApp"}),a.jsxs(tt,{children:[a.jsx("strong",{children:"Imponect WhatsApp"}),a.jsxs("span",{children:["Business Account · ",ie(u,P)]})]}),a.jsxs(nt,{children:[a.jsx(x,{title:"Catálogo",onClick:()=>k("Catálogo de WhatsApp","Administrar productos y colecciones",["Agregar producto","Editar colecciones","Compartir catálogo","Ver inventario","Sincronizar Commerce Manager"]),children:a.jsx(ke,{})}),a.jsx(x,{title:"Cuenta",onClick:()=>k("Cuenta de WhatsApp","Configuración de la cuenta conectada",["Perfil comercial","Horario de atención","Respuestas rápidas","Mensaje de ausencia","Usuarios y permisos","Números conectados"]),children:a.jsx(V,{})})]})]})]}),a.jsx(La,{type:"button","aria-label":"Ajustar ancho de la lista de chats",title:"Ajustar ancho de la lista de chats",onPointerDown:Qe,$active:O}),a.jsx(ot,{children:we?a.jsx(mn,{integration:u,isLoading:P,error:xe,onOpenManualConfig:aa,onRefresh:q,onTest:oa,onDisconnect:ra,onShowMetaInfo:sa,isTesting:A==="test"||A==="save-test",isDisconnecting:A==="disconnect"}):h?a.jsxs(a.Fragment,{children:[a.jsxs(rt,{children:[a.jsxs(it,{children:[a.jsx(ze,{$platform:h.platform,children:h.avatar}),a.jsxs("div",{children:[a.jsx(st,{children:h.name}),a.jsx(ct,{children:h.accountType})]})]}),a.jsxs(dt,{children:[pn(h)&&a.jsx(x,{title:"Catálogo",onClick:()=>k("Catálogo y productos",h.name,["Ver catálogo","Enviar producto","Crear cotización","Agregar item al catálogo","Editar disponibilidad"]),children:a.jsx(ke,{})}),a.jsx(x,{title:"Videollamada",children:a.jsx(ua,{})}),a.jsx(x,{title:"Llamada",children:a.jsx(ha,{})}),a.jsx(x,{title:"Buscar",children:a.jsx(je,{})}),a.jsx(x,{title:"Opciones",onClick:()=>k("Opciones del chat",h.name,tn[h.platform]||[]),children:a.jsx(V,{})})]})]}),c&&a.jsxs(lt,{$locked:c.locked,$tone:c.tone,children:[a.jsx(pt,{$platform:h.platform,children:c.badge}),a.jsx(gt,{$locked:c.locked,$tone:c.tone,children:c.note}),c.actionLabel&&a.jsx(ut,{type:"button",onClick:()=>k(c.actionTitle||"Opciones permitidas",h.name,c.actionOptions||[]),children:c.actionLabel})]}),a.jsxs(ht,{$platform:h.platform,children:[a.jsx(mt,{children:"Hoy"}),h.messages.map(n=>a.jsxs(ft,{$own:n.from==="me",children:[n.type==="file"&&a.jsxs(yt,{children:[a.jsx(wt,{children:"PDF"}),a.jsxs("div",{children:[a.jsx("strong",{children:n.title}),a.jsx("span",{children:n.meta})]})]}),n.type==="product"&&a.jsxs(vt,{children:[a.jsx(jt,{children:h.avatar}),a.jsxs("div",{children:[a.jsx("strong",{children:n.title}),a.jsx("span",{children:n.meta})]})]}),!n.type&&a.jsx(xt,{children:n.text}),a.jsxs(bt,{children:[a.jsx("span",{children:n.time}),a.jsx(Ie,{status:n.status})]})]},n.id))]}),a.jsxs(kt,{$locked:c==null?void 0:c.locked,children:[a.jsx(x,{title:"Adjuntar",disabled:c==null?void 0:c.locked,children:a.jsx(ma,{})}),a.jsx(Ct,{type:"button",disabled:c==null?void 0:c.locked,children:"☺"}),a.jsx(At,{disabled:c==null?void 0:c.locked,placeholder:c!=null&&c.locked?c.placeholder:"Escribe un mensaje"}),a.jsx(x,{title:"Enviar",disabled:c==null?void 0:c.locked,children:a.jsx(fa,{})})]})]}):a.jsx(St,{children:"Selecciona una conversación para comenzar."})})]}),a.jsx(un,{modal:Ve,onClose:()=>me(null)}),Ue&&a.jsx(hn,{accounts:[...ee].sort((n,r)=>n.order-r.order),onClose:()=>G(!1),onMove:Ge,onRefresh:Ze,onSave:ea,onUpdate:Ke}),Ye&&a.jsx(fn,{form:be,integration:u,error:xe,isSaving:A==="save"||A==="save-test",isTesting:A==="test"||A==="save-test",onChange:ta,onClose:()=>Z(!1),onCopyWebhook:ia,onSubmit:na,onSubmitAndTest:()=>ve({testAfterSave:!0})})]})};export{$n as CRMScreen};
