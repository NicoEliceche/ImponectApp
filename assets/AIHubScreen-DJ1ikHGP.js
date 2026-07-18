const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarkdownMessage-9YDeR_4l.js","assets/index-BZYg4alH.js","assets/index-BuRBK47t.css","assets/agentSections-D_Qvcygv.js","assets/pageHeader-CSFyddAi.js"])))=>i.map(i=>d[i]);
import{s as ce,t as de,y as n,O as L,p as ir,u as ar,a as sr,r as c,w as lr,b as Ie,j as r,c as G,J as te,K as De,L as cr,I as Me,l as ne,m as Ee,d as Te,f as dr,e as gr,B as pr,M as hr,N as ur,C as mr,P as $r,k as br,_ as xr}from"./index-BZYg4alH.js";import{a as X,g as fr,n as yr}from"./agentSections-D_Qvcygv.js";import{p as wr,b as kr,c as vr,d as jr}from"./pageHeader-CSFyddAi.js";const _e=async(e,t)=>{const a=await e.json().catch(()=>({}));if(!e.ok)throw new Error((a==null?void 0:a.error)||t);return a},Sr=async()=>{const e=await ce(de("/api/ai/agents"));if(!e.ok)return[];const t=await e.json();return Array.isArray(t)?t:[]},zr=async e=>{const t=await ce(de(`/api/ai/agents/${e}`),{method:"DELETE"});return _e(t,"No se pudo eliminar el agente.")},Ar=async({messages:e,options:t})=>{const a=await ce(de("/api/ai/chat"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,options:t})});return _e(a,"No se pudo consultar el agente.")},ge=L`
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Cr=L`
  to {
    transform: rotate(360deg);
  }
`,Q=L`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ir=L`
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`,Oe=L`
  0%, 100% {
    box-shadow: 0 0 0 rgba(198, 137, 63, 0);
  }
  50% {
    box-shadow: 0 0 22px rgba(198, 137, 63, 0.36);
  }
`,Dr=n.div`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(17rem, 19rem) minmax(0, 1fr);
  height: calc(100vh - 3rem);
  min-height: calc(100vh - 3rem);
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.07)":"rgba(0, 51, 77, 0.045)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":"rgba(198, 137, 63, 0.04)"} 1px, transparent 1px),
    ${({theme:e})=>e.color.background};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 34px rgba(198, 137, 63, 0.12);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(115deg, transparent 0%, rgba(198, 137, 63, 0.12) 48%, transparent 70%);
    animation: ${Q} 8s ease-in-out infinite;
    z-index: -1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: calc(100vh - 3rem);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: auto;
    border-radius: ${({theme:e})=>e.radius.md};
    border: none;
    background-size: 2.5rem 2.5rem, 2.5rem 2.5rem, 100% 100%;
    overflow: visible;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    border: none;
    background-size: 2.5rem 2.5rem, 2.5rem 2.5rem, 100% 100%;
    overflow: visible;
  }
`,Mr=n.aside`
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[4]};
  background:
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(180deg, rgba(198, 137, 63, 0.14) 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.color.primaryDark} 0%, ${({theme:e})=>e.color.primary} 100%);
  background-size: 100% 100%, 100% 42px, 100% 100%;
  color: ${({theme:e})=>e.color.textInverse};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent, rgba(198, 137, 63, 0.16), transparent);
    animation: ${Q} 7s ease-in-out infinite;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    max-height: 24rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-height: 20rem;
    padding: ${({theme:e})=>e.spacing[3]};
    border: 1px solid rgba(198, 137, 63, 0.2);
    border-radius: ${({theme:e})=>e.radius.md};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-height: 20rem;
    padding: ${({theme:e})=>e.spacing[3]};
    border: 1px solid rgba(198, 137, 63, 0.2);
    border-radius: ${({theme:e})=>e.radius.md};
  }
`,Er=n.main`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[5]};
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    min-height: calc(100vh - 27rem);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: auto;
    padding: ${({theme:e})=>e.spacing[3]} 0 0;
    overflow: visible;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: auto;
    padding: ${({theme:e})=>e.spacing[3]} 0 0;
  }
`,Tr=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
`,Hr=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,Lr=n.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: ${({theme:e})=>e.color.accent};
  flex-shrink: 0;
  box-shadow: 0 0 22px rgba(198, 137, 63, 0.28);
  animation: ${Oe} 3.8s ease-in-out infinite;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`,ie=n.span`
  width: ${({$large:e,$compact:t})=>e?"2.75rem":t?"1rem":"1.6rem"};
  height: ${({$large:e,$compact:t})=>e?"2.75rem":t?"1rem":"1.6rem"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({$large:e,$compact:t,theme:a})=>e?a.typography.size["3xl"]:t?a.typography.size.sm:a.typography.size.xl};
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
`,Rr=n.strong`
  display: block;
  color: ${({theme:e})=>e.color.textInverse};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Nr=n.span`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: rgba(255, 255, 255, 0.68);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Pr=n.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.08);
  color: ${({theme:e})=>e.color.textInverse};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,_r=n.label`
  min-height: ${({theme:e})=>e.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;

  svg {
    width: 1rem;
    height: 1rem;
    color: rgba(255, 255, 255, 0.72);
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.color.textInverse};
    font: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};

    &::placeholder {
      color: rgba(255, 255, 255, 0.58);
    }
  }
`,Or=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  min-height: 0;
  overflow-y: auto;
  padding-right: ${({theme:e})=>e.spacing[2]};
`,He=n.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Le=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  color: rgba(255, 255, 255, 0.66);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;

  strong {
    color: ${({theme:e})=>e.color.accent};
    font-size: ${({theme:e})=>e.typography.size.base};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }
`,Br=n.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
`,ae=n.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,D=n.div`
  position: relative;
  width: 100%;
  min-width: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$active:e,theme:t})=>e?`linear-gradient(135deg, ${t.color.accent} 0%, ${t.color.accentDark} 100%)`:`linear-gradient(180deg, ${t.color.primary} 0%, ${t.color.primaryDark} 100%)`};
  color: ${({theme:e})=>e.color.textInverse};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[12]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
    transform: translateX(-120%);
    transition: transform 0.34s ease;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

    &::before {
      transform: translateX(120%);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  span {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
  }

  strong {
    color: ${({theme:e})=>e.color.textInverse};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  small {
    margin-top: ${({theme:e})=>e.spacing[1]};
    color: rgba(255, 255, 255, 0.62);
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Fr=n(D)`
  position: relative;
  min-height: ${({theme:e})=>e.spacing[10]};
  padding-right: ${({theme:e})=>e.spacing[8]};

  > svg {
    width: 0.95rem;
    height: 0.95rem;
    flex-shrink: 0;
    color: ${({theme:e})=>e.color.accent};
  }
`,pe=n.button`
  position: absolute;
  right: ${({$shifted:e,theme:t})=>e?t.spacing[8]:t.spacing[2]};
  top: 50%;
  transform: translateY(-50%);
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: ${({theme:e})=>e.radius.sm};
  background: transparent;
  color: ${({theme:e})=>e.color.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  z-index: 1;

  ${D}:hover &,
  ${D}:focus-within & {
    background: ${({theme:e})=>e.color.primaryDark};
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    background: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.textInverse};
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }
`,Gr=n(pe)`
  color: ${({theme:e})=>e.color.error};

  ${D}:hover &,
  ${D}:focus-within & {
    background: ${({theme:e})=>e.color.primaryDark};
  }

  &:hover {
    background: ${({theme:e})=>e.color.error};
    color: ${({theme:e})=>e.color.textInverse};
  }
`,qr=n(pe)`
  color: ${({theme:e})=>e.color.accent};
`,Wr=n.input`
  width: 100%;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.sm};
  background: rgba(255, 255, 255, 0.08);
  color: ${({theme:e})=>e.color.textInverse};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  font: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  outline: none;
`,Kr=n.div`
  position: fixed;
  z-index: 7000;
  width: 11rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primaryDark};
  box-shadow: ${({theme:e})=>e.shadow.xl};
  padding: ${({theme:e})=>e.spacing[2]};
`,se=n.button`
  width: 100%;
  min-height: ${({theme:e})=>e.spacing[10]};
  border: none;
  border-radius: ${({theme:e})=>e.radius.sm};
  background: transparent;
  color: ${({$danger:e,theme:t})=>e?t.color.errorLight:t.color.textInverse};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({$danger:e,theme:t})=>e?t.color.errorLight:t.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({$danger:e,theme:t})=>e?t.color.errorLight:t.color.accent};
    flex-shrink: 0;
  }
`;n.div`
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: ${({theme:e})=>e.color.accent};
  flex-shrink: 0;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`;const Re=n.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${({theme:e})=>e.shadow.md};
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.accentLight};
    box-shadow: ${({theme:e})=>e.shadow.lg};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Ne=n.button`
  width: ${({theme:e})=>e.spacing[10]};
  height: ${({theme:e})=>e.spacing[10]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.color.accent};
    border-color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Xr=n.header`
  ${wr};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;
  flex-shrink: 0;

  > div:first-child {
    position: relative;
    z-index: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Qr=n.h1`
  ${vr};
`,Yr=n.p`
  ${kr};
`,Ur=n.p`
  ${jr};
`,Jr=n.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,Vr=n.section`
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
`,Zr=n.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,eo=n.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  overflow-wrap: anywhere;
`,ro=n.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  max-width: 56rem;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`,oo=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,to=n.article`
  position: relative;
  overflow: hidden;
  min-width: 0;
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  animation: ${ge} 0.35s ease both;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: ${({theme:e})=>e.shadow.md}, 0 0 28px rgba(198, 137, 63, 0.16);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.12), transparent);
    transform: translateX(-120%);
    transition: transform 0.36s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,no=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,Be=n.div`
  width: ${({$compact:e})=>e?"2rem":"3.25rem"};
  height: ${({$compact:e})=>e?"2rem":"3.25rem"};
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(198,137,63,0.18)":e.color.accentFaded} 0%, ${({theme:e})=>e.color.surface} 100%);
  border: 1px solid ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.accent};
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: ${({$compact:e})=>e?"1.85rem":"3rem"};
    height: ${({$compact:e})=>e?"1.85rem":"3rem"};
    align-self: flex-end;
    margin-bottom: -1px;
  }
`,io=n.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,ao=n.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  text-align: left;
  flex: 1;
`,so=n.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  span {
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.full};
    color: ${({theme:e})=>e.color.textSecondary};
    background: ${({theme:e})=>e.color.neutral[50]};
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,lo=n.button`
  width: 100%;
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.color.accentLight};
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.28);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,co=n.div`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  padding: ${({theme:e})=>e.spacing[6]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,go=n.div`
  grid-column: 1 / -1;
  min-height: 18rem;
  border: 1px dashed ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[8]};
  color: ${({theme:e})=>e.color.textSecondary};

  > svg {
    width: 2.75rem;
    height: 2.75rem;
    color: ${({theme:e})=>e.color.accent};
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.xl};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }
`,po=n.section`
  position: relative;
  min-height: 0;
  flex: 1;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 32px rgba(198, 137, 63, 0.12);

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: 68dvh;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: 68dvh;
  }
`,ho=n.header`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background:
    linear-gradient(135deg, ${({theme:e})=>e.isDark?"rgba(13,31,41,0.96)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.13), transparent);
    animation: ${Q} 6s ease-in-out infinite;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    flex-direction: column;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,uo=n.div`
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,mo=n.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`,$o=n.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,bo=n.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    align-items: stretch;
    justify-content: stretch;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    align-items: stretch;
    justify-content: stretch;
  }
`,Pe=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  label {
    display: block;
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  select {
    height: ${({theme:e})=>e.spacing[10]};
    min-height: ${({theme:e})=>e.spacing[10]};
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.text};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    outline: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,xo=n.button`
  height: ${({theme:e})=>e.spacing[10]};
  min-height: ${({theme:e})=>e.spacing[10]};
  border: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$active:e,theme:t})=>e?t.isDark?"rgba(198,137,63,0.16)":t.color.accentFaded:t.color.surface};
  color: ${({$active:e,theme:t})=>e?t.color.accent:t.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,fo=n.iframe`
  grid-row: 2 / -1;
  width: 100%;
  height: 100%;
  min-height: 35rem;
  border: none;
  background: ${({theme:e})=>e.color.background};
`,yo=n.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.isDark?"rgba(6,19,26,0.72)":e.color.surface};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: ${({theme:e})=>e.spacing[3]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: ${({theme:e})=>e.spacing[3]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,H=n.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$active:e,theme:t})=>e?t.isDark?"rgba(198,137,63,0.16)":t.color.accentFaded:t.color.neutral[50]};
  color: ${({$active:e,theme:t})=>e?t.color.accent:t.color.textSecondary};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex: 0 0 auto;
    min-height: ${({theme:e})=>e.spacing[8]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex: 0 0 auto;
    min-height: ${({theme:e})=>e.spacing[8]};
  }
`,wo=n.div`
  position: relative;
  min-height: 0;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[6]};
  background:
    linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198,137,63,0.055)":"rgba(0,51,77,0.035)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.03)":"rgba(198,137,63,0.035)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.color.background} 0%, ${({theme:e})=>e.color.neutral[50]} 100%);
  background-size: 42px 42px, 42px 42px, 100% 100%;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
    background-size: 2.35rem 2.35rem, 2.35rem 2.35rem, 100% 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[3]};
    background-size: 2.35rem 2.35rem, 2.35rem 2.35rem, 100% 100%;
  }
`,ko=n.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.color.textSecondary};

  ${Be} {
    width: 4.75rem;
    height: 4.75rem;
    animation: ${Oe} 3s ease-in-out infinite;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  p {
    max-width: 42rem;
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }
`,vo=n.div`
  width: min(100%, 48rem);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,jo=n.button`
  position: relative;
  overflow: hidden;
  min-height: 5rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: ${({theme:e})=>e.spacing[4]};
  text-align: left;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 20px rgba(198, 137, 63, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.13), transparent);
    transform: translateX(-120%);
    transition: transform 0.32s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }
`,So=n.div`
  display: flex;
  justify-content: ${({$role:e})=>e==="user"?"flex-end":"flex-start"};
  margin-bottom: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,zo=n.article`
  position: relative;
  overflow: hidden;
  width: min(100%, ${({$role:e})=>e==="user"?"46rem":"58rem"});
  border: 1px solid ${({$role:e,$error:t,theme:a})=>t?a.color.error:e==="user"?a.color.primaryLight:a.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$role:e,$error:t,theme:a})=>t?a.color.errorLight:e==="user"?`linear-gradient(135deg, ${a.color.primary} 0%, ${a.color.primaryDark} 100%)`:`linear-gradient(180deg, ${a.isDark?"rgba(255,255,255,0.035)":a.color.neutral[50]} 0%, ${a.color.surface} 100%)`};
  color: ${({$role:e,$error:t,theme:a})=>t?a.color.error:e==="user"?a.color.textInverse:a.color.text};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({$role:e,theme:t})=>e==="user"?"0 0 22px rgba(0, 51, 77, 0.16)":`${t.shadow.sm}, 0 0 18px rgba(198, 137, 63, 0.12)`};
  animation: ${ge} 0.22s ease both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.7), transparent);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Ao=n.strong`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.72;
`,Co=n.div`
  white-space: normal;
  overflow-wrap: anywhere;
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  p,
  ul,
  ol,
  blockquote,
  pre,
  table {
    margin: 0 0 ${({theme:e})=>e.spacing[5]};
  }

  h1,
  h2,
  h3,
  h4 {
    margin: ${({theme:e})=>e.spacing[6]} 0 ${({theme:e})=>e.spacing[3]};
    color: inherit;
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
  }

  h2 {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }

  h3,
  h4 {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }

  ul,
  ol {
    padding-left: ${({theme:e})=>e.spacing[6]};
  }

  li + li {
    margin-top: ${({theme:e})=>e.spacing[2]};
  }

  strong {
    color: ${({$role:e,theme:t})=>e==="user"?t.color.textInverse:t.color.accent};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  em {
    color: ${({$role:e,theme:t})=>e==="user"?t.color.textInverse:t.color.textSecondary};
  }

  a {
    color: ${({$role:e,theme:t})=>e==="user"?t.color.accentLight:t.color.accent};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    text-decoration: underline;
    text-underline-offset: ${({theme:e})=>e.spacing[1]};
  }

  blockquote {
    border-left: 3px solid ${({theme:e})=>e.color.accent};
    padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
    color: ${({$role:e,theme:t})=>e==="user"?t.color.textInverse:t.color.textSecondary};
  }

  code {
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.sm};
    background: ${({$role:e,theme:t})=>e==="user"?t.color.primaryDark:t.color.neutral[50]};
    color: inherit;
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  pre {
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({$role:e,theme:t})=>e==="user"?t.color.primaryDark:t.color.neutral[50]};
    padding: ${({theme:e})=>e.spacing[4]};
    overflow-x: auto;
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }

  pre code {
    border: none;
    background: transparent;
    padding: 0;
    white-space: pre;
  }

  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid ${({theme:e})=>e.color.border};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    text-align: left;
    vertical-align: middle;
  }

  th {
    color: ${({theme:e})=>e.color.accent};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  hr {
    border: none;
    border-top: 1px solid ${({theme:e})=>e.color.border};
    margin: ${({theme:e})=>e.spacing[4]} 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.typography.size.base};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};

    p,
    ul,
    ol,
    blockquote,
    pre,
    table {
      margin-bottom: ${({theme:e})=>e.spacing[4]};
    }
  }
`,Io=n.div`
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: inherit;
  line-height: inherit;
`,pt=n.div`
  margin: 0 0 ${({theme:e})=>e.spacing[5]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?e.color.primaryDark:e.color.neutral[50]};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,ht=n.div`
  min-height: ${({theme:e})=>e.spacing[10]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
`,ut=n.span`
  min-width: 0;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,mt=n.button`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.sm};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  min-height: ${({theme:e})=>e.spacing[8]};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e})=>e.color.neutral[50]};
  }

  svg,
  img {
    width: 1rem;
    height: 1rem;
    flex: 0 0 1rem;
  }
`,$t=n.pre`
  && {
    margin: 0;
    border: none;
    border-radius: 0;
    background: ${({theme:e})=>e.isDark?e.color.background:e.color.neutral[50]};
    padding: ${({theme:e})=>e.spacing[5]};
    overflow-x: auto;
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }

  && code {
    display: block;
    min-width: max-content;
    border: none;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    padding: 0;
    white-space: pre;
    overflow-wrap: normal;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: ${({theme:e})=>e.typography.size.base};
    tab-size: 2;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: ${({theme:e})=>e.color.syntax.keyword};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-symbol,
  .hljs-bullet {
    color: ${({theme:e})=>e.color.syntax.string};
  }

  .hljs-number,
  .hljs-literal {
    color: ${({theme:e})=>e.color.syntax.number};
  }

  .hljs-comment,
  .hljs-quote {
    color: ${({theme:e})=>e.color.syntax.comment};
    font-style: italic;
  }

  .hljs-title,
  .hljs-title.function_,
  .hljs-title.class_,
  .hljs-section {
    color: ${({theme:e})=>e.color.syntax.function};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-params,
  .hljs-name {
    color: ${({theme:e})=>e.color.syntax.variable};
  }

  .hljs-tag,
  .hljs-selector-id,
  .hljs-selector-class {
    color: ${({theme:e})=>e.color.syntax.tag};
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-property,
  .hljs-built_in,
  .hljs-type {
    color: ${({theme:e})=>e.color.syntax.attribute};
  }

  .hljs-operator,
  .hljs-punctuation {
    color: ${({theme:e})=>e.color.syntax.punctuation};
  }

  .hljs-meta,
  .hljs-doctag {
    color: ${({theme:e})=>e.color.syntax.meta};
  }

  .hljs-deletion {
    color: ${({theme:e})=>e.color.syntax.deletion};
  }

  .hljs-addition {
    color: ${({theme:e})=>e.color.syntax.addition};
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    && {
      padding: ${({theme:e})=>e.spacing[4]};
    }

    && code {
      font-size: ${({theme:e})=>e.typography.size.sm};
    }
  }
`,Do=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};

  a {
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.textLink};
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    text-decoration: none;
    max-width: 18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Mo=n.span`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  opacity: 0.62;
`,Eo=n.div`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.12)":e.color.accentFaded};
  color: ${({theme:e})=>e.color.accent};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  box-shadow: 0 0 24px rgba(198, 137, 63, 0.18);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    animation: ${Q} 1.8s ease-in-out infinite;
  }

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${Cr} 0.9s linear infinite;
  }
`,To=n.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.22rem;

  span {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.accent};
    animation: ${Ir} 1.1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 130ms;
  }

  span:nth-child(3) {
    animation-delay: 260ms;
  }
`,Ho=n.span`
  position: relative;
  z-index: 1;
`,Lo=n.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[5]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(6,19,26,0.88)":e.color.surface} 0%, ${({theme:e})=>e.color.surface} 100%);

  textarea {
    width: 100%;
    min-height: ${({theme:e})=>e.layout.inputHeight};
    max-height: 11rem;
    resize: vertical;
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.text};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    font: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    outline: none;

    &:focus {
      border-color: ${({theme:e})=>e.color.accent};
      box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.isDark?"rgba(198,137,63,0.18)":e.color.accentFaded}, 0 0 20px rgba(198, 137, 63, 0.16);
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[2]};
    padding: ${({theme:e})=>e.spacing[3]};

    textarea {
      min-height: 5rem;
    }
  }
`,Ro=n.button`
  width: ${({theme:e})=>e.layout.buttonHeight};
  height: ${({theme:e})=>e.layout.buttonHeight};
  border: none;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: end;
  box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.accentLight};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${({theme:e})=>e.color.textDisabled};
    cursor: not-allowed;
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,No=n.div`
  position: fixed;
  inset: 0;
  z-index: 8000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.color.overlay};
  backdrop-filter: blur(0.35rem);

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Po=n.div`
  width: min(100%, 26rem);
  border: 1px solid ${({theme:e})=>e.color.error};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};
  padding: ${({theme:e})=>e.spacing[6]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  text-align: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.md} ${({theme:e})=>e.radius.md};
    padding: ${({theme:e})=>e.spacing[5]};
  }
`,_o=n.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(239, 68, 68, 0.16)":e.color.errorLight};
  color: ${({theme:e})=>e.color.error};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`,Oo=n.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Bo=n.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,Fo=n.input`
  width: 100%;
  height: ${({theme:e})=>e.layout.inputHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  font: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  outline: none;
  color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};

  &:focus {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
  }
`,Go=n.p`
  margin: 0;
  color: ${({theme:e})=>e.color.error};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,qo=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,Wo=n.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  padding: 0 ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }
`,Ko=n.button`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.error};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.error};
  color: ${({theme:e})=>e.color.textInverse};
  padding: 0 ${({theme:e})=>e.spacing[5]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Xo=n.div`
  position: fixed;
  right: ${({theme:e})=>e.spacing[6]};
  bottom: ${({theme:e})=>e.spacing[6]};
  z-index: 9000;
  width: min(24rem, calc(100vw - 2rem));
  min-height: 3.1rem;
  border: 1px solid ${({$type:e,theme:t})=>e==="error"?t.color.error:t.color.success};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$type:e,theme:t})=>e==="error"?t.isDark?"#3f1111":t.color.error:t.isDark?"#063d2a":t.color.success};
  color: ${({theme:e})=>e.color.textInverse};
  box-shadow: ${({theme:e})=>e.shadow.xl};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  animation: ${ge} 0.22s ease both;

  span {
    min-width: 0;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    left: ${({theme:e})=>e.spacing[3]};
    right: ${({theme:e})=>e.spacing[3]};
    bottom: calc(5.6rem + env(safe-area-inset-bottom));
    width: auto;
  }
`,Qo=n.button`
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: currentColor;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.78;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.14);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;n.span`
  ${({$active:e,theme:t})=>e&&ir`
    color: ${t.color.accentDark};
    border-color: ${t.color.accent};
    background: ${t.color.accentFaded};
  `}
`;const Yo=c.lazy(()=>xr(()=>import("./MarkdownMessage-9YDeR_4l.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.MarkdownMessage}))),Fe="imponect.aiHub.chats.v1",Ge=40,Uo="Founders2025!",qe=[{value:"gemini-2.5-flash",label:"Gemini 2.5 Flash"},{value:"gemini-2.5-pro",label:"Gemini 2.5 Pro"},{value:"gemini-3.5-flash",label:"Gemini 3.5 Flash"},{value:"gemini-3.1-pro-preview",label:"Gemini 3.1 Pro"},{value:"gemini-3-flash-preview",label:"Gemini 3 Flash"}],We=[{value:"default",label:"Default"},{value:"minimal",label:"Minimal"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"xhigh",label:"XHigh"}],Jo=["Resumime cómo deberías ayudarme en esta conversación.","Analizá este caso como agente experto y proponé próximos pasos.","Buscá información actual en internet antes de responder."],K=()=>`chat-${Date.now()}-${Math.random().toString(16).slice(2)}`,Vo=e=>{const t=String((e==null?void 0:e.icon_url)||"").trim();return t?yr(t):""},q=e=>fr(X(e)),Zo=e=>{const t=X(e);return t==="rag"?"este RAG":t==="assistant"?"este asistente":"este agente"},et=e=>{const t=X(e);return t==="rag"?"rags":t==="assistant"?"assistants":"agents"},le=e=>{var a;const t=String(((a=e==null?void 0:e.config)==null?void 0:a.model)||"").trim();return t.startsWith("gemini-")?t:qe[0].value},Ke=e=>{var m,p;const t=((m=e==null?void 0:e.config)==null?void 0:m.model_settings)||{},a=String(t.reasoning_effort||((p=t.reasoning)==null?void 0:p.effort)||"").toLowerCase();return We.some($=>$.value===a)?a:"default"},rt=()=>{if(typeof window>"u")return[];try{const e=JSON.parse(window.localStorage.getItem(Fe)||"[]");return Array.isArray(e)?e:[]}catch{return[]}},ot=e=>{typeof window>"u"||window.localStorage.setItem(Fe,JSON.stringify(e.slice(0,Ge)))},tt=e=>({id:K(),agentId:e.id,agentName:e.name,title:e.name,model:le(e),reasoningEffort:Ke(e),enableWebSearch:!0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),messages:[]}),nt=(e,t)=>{const a=String(t||"").trim();return a?a.length>48?`${a.slice(0,48)}...`:a:e.title||e.agentName||"Nuevo chat"},it=(e,t)=>{const a=(e==null?void 0:e.config)||{},m=a.rag||{},p=a.guardrails||{},$=Array.isArray(m.knowledge_files)?m.knowledge_files:[],S=$.map(h=>h==null?void 0:h.name).filter(Boolean),x=$.filter(h=>h==null?void 0:h.text_preview).slice(0,6).map(h=>`### ${h.name}
${String(h.text_preview).slice(0,1800)}`).join(`

`);return[`Sos ${(e==null?void 0:e.name)||"un agente de IA"} dentro de Imponect App.`,e!=null&&e.description?`Propósito del agente: ${e.description}`:"",a.instructions?`Instrucciones principales: ${a.instructions}`:"",a.handoff_description?`Contexto de handoff: ${a.handoff_description}`:"",a.output_type?`Tipo de salida esperado: ${a.output_type}`:"",p.output?`Guardrails de salida: ${p.output}`:"",m.enabled?`El agente tiene RAG configurado con fuentes: ${m.data_sources||"documentos de negocio"}. Si no hay contexto recuperado explícito, aclaralo antes de asumir datos internos.`:"",m.enabled&&S.length?`Archivos Knowledge cargados (${S.length}): ${S.slice(0,20).join(", ")}.`:"",m.enabled&&x?`Preview textual disponible desde Knowledge:
${x}`:"",`Modelo solicitado para esta conversación: ${t.model}. Esfuerzo de razonamiento: ${t.reasoningEffort}.`,"Respondé en español salvo que el usuario pida otro idioma.","Sé concreto, operativo y profesional. No inventes acceso a documentos, emails o herramientas si no fueron provistos por el runtime."].filter(Boolean).join(`
`)},at=e=>e.filter(t=>t.role==="user"||t.role==="assistant").map(t=>({role:t.role,content:t.content})),W=({agent:e,$compact:t=!1})=>{const a=Vo(e),[m,p]=c.useState(!1);return c.useEffect(()=>{p(!1)},[a]),r.jsx(Be,{$compact:t,children:a&&!m?r.jsx("img",{src:a,alt:(e==null?void 0:e.name)||"Agente",onError:()=>p(!0)}):r.jsx(br,{})})},st=()=>{var ve,je,Se,ze,Ae;const e=ar(),t=sr(o=>o.openAgentModal),[a,m]=c.useState(""),[p,$]=c.useState(null),[S,x]=c.useState(null),[h,R]=c.useState(""),[y,z]=c.useState(()=>rt()),[he,ue]=c.useState({}),[k,f]=c.useState(null),[w,A]=c.useState({show:!1,agent:null,password:"",error:""}),[v,M]=c.useState({show:!1,message:"",type:"success"}),[Y,U]=c.useState(null),[me,N]=c.useState(""),$e=c.useRef(null),be=c.useRef(null),{data:E=[],isLoading:xe}=lr({queryKey:["aiAgents"],queryFn:Sr}),P=c.useMemo(()=>new Map(E.map(o=>[String(o.id),o])),[E]),_=c.useMemo(()=>{const o=a.trim().toLowerCase();return o?E.filter(i=>[i.name,i.description,q(i)].some(s=>String(s||"").toLowerCase().includes(o))):E},[E,a]),C=c.useMemo(()=>_.reduce((o,i)=>(o[et(i)].push(i),o),{agents:[],assistants:[],rags:[]}),[_]),O=c.useMemo(()=>[...y].sort((o,i)=>!!o.pinned!=!!i.pinned?o.pinned?-1:1:new Date(i.updatedAt||i.createdAt).getTime()-new Date(o.updatedAt||o.createdAt).getTime()),[y]),J=c.useMemo(()=>{const o=a.trim().toLowerCase();return o?O.filter(i=>[i.title,i.agentName,i.model].some(s=>String(s||"").toLowerCase().includes(o))):O},[O,a]),b=c.useMemo(()=>y.find(o=>o.id===p)||null,[p,y]),fe=c.useMemo(()=>S&&P.get(String(S))||null,[P,S]),l=c.useMemo(()=>b?P.get(String(b.agentId))||{id:b.agentId,name:b.agentName,description:"Agente guardado en una conversación local.",type:"custom",config:{}}:fe,[b,P,fe]),u=c.useMemo(()=>{if(b)return b;if(!l)return null;const o=he[String(l.id)]||{};return{id:null,agentId:l.id,agentName:l.name,title:l.name,model:o.model||le(l),reasoningEffort:o.reasoningEffort||Ke(l),enableWebSearch:o.enableWebSearch??!0,messages:[]}},[l,b,he]);c.useEffect(()=>{ot(y)},[y]),c.useEffect(()=>{var o;(o=$e.current)==null||o.scrollIntoView({behavior:"smooth",block:"end"})},[(ve=b==null?void 0:b.messages)==null?void 0:ve.length,p]),c.useEffect(()=>{if(!v.show)return;const o=setTimeout(()=>{M(i=>({...i,show:!1}))},4200);return()=>clearTimeout(o)},[v.show,v.message,v.type]),c.useEffect(()=>{if(!k)return;const o=s=>{var d;(d=be.current)!=null&&d.contains(s.target)||f(null)},i=s=>{s.key==="Escape"&&f(null)};return window.addEventListener("pointerdown",o),window.addEventListener("keydown",i),()=>{window.removeEventListener("pointerdown",o),window.removeEventListener("keydown",i)}},[k]);const I=Ie({mutationFn:Ar,onSuccess:(o,i)=>{const s={id:K(),role:"assistant",content:o.answer,provider:o.provider,model:o.model,sources:o.sources||[],createdAt:new Date().toISOString()};z(d=>d.map(g=>g.id===i.chatId?{...g,updatedAt:new Date().toISOString(),messages:[...i.nextMessages,s]}:g))},onError:(o,i)=>{const s={id:K(),role:"assistant",content:o.message||"No se pudo consultar el agente.",isError:!0,createdAt:new Date().toISOString()};z(d=>d.map(g=>g.id===i.chatId?{...g,updatedAt:new Date().toISOString(),messages:[...i.nextMessages,s]}:g))}}),B=Ie({mutationFn:zr,onSuccess:(o,i)=>{var d;const s=((d=w.agent)==null?void 0:d.name)||"IA";e.invalidateQueries({queryKey:["aiAgents"]}),A({show:!1,agent:null,password:"",error:""}),M({show:!0,type:"success",message:`${s} eliminado correctamente.`}),x(g=>String(g)===String(i)?null:g),$(g=>{const j=y.find(T=>T.id===g);return String(j==null?void 0:j.agentId)===String(i)?null:g}),ue(g=>{const j={...g};return delete j[String(i)],j})},onError:o=>{A(i=>({...i,error:o.message||"No se pudo eliminar el agente."})),M({show:!0,type:"error",message:o.message||"No se pudo eliminar la IA."})}}),V=o=>{const i=O.find(s=>{var d;return String(s.agentId)===String(o.id)&&((d=s.messages)==null?void 0:d.length)>0});$((i==null?void 0:i.id)||null),x(o.id),R(""),f(null)},Xe=o=>{$(null),x(o.id),R(""),f(null)},Z=o=>{if(p){z(i=>i.map(s=>s.id===p?{...s,...o,updatedAt:new Date().toISOString()}:s));return}l!=null&&l.id&&ue(i=>({...i,[String(l.id)]:{...i[String(l.id)]||{},...o}}))},Qe=o=>{z(i=>i.filter(s=>s.id!==o)),p===o&&$(null),f(null)},Ye=o=>{z(i=>i.map(s=>s.id===o?{...s,pinned:!s.pinned,updatedAt:new Date().toISOString()}:s)),f(null)},Ue=o=>{U(o.id),N(o.title||""),f(null)},ye=()=>{if(!Y)return;const o=me.trim();z(i=>i.map(s=>s.id===Y&&o?{...s,title:o,updatedAt:new Date().toISOString()}:s)),U(null),N("")},Je=()=>{U(null),N("")},Ve=(o,i)=>{o.stopPropagation();const s=o.currentTarget.getBoundingClientRect(),d=176;f({chatId:i.id,top:s.bottom+4,left:Math.max(8,Math.min(s.left-d+s.width,window.innerWidth-d-8))})},Ze=(o,i)=>{o.stopPropagation(),A({show:!0,agent:i,password:"",error:""})},ee=()=>{B.isPending||A({show:!1,agent:null,password:"",error:""})},we=()=>{var o;if(w.password!==Uo){A(i=>({...i,error:"Contraseña incorrecta."})),M({show:!0,type:"error",message:"Contraseña incorrecta. No se eliminó la IA."});return}(o=w.agent)!=null&&o.id&&B.mutate(w.agent.id)},re=(o=h)=>{if(!u||!l||I.isPending)return;const i=String(o||"").trim();if(!i)return;const s=b||{...tt(l),model:u.model,reasoningEffort:u.reasoningEffort,enableWebSearch:u.enableWebSearch},d={id:K(),role:"user",content:i,createdAt:new Date().toISOString()},g=[...s.messages||[],d],j=(s.messages||[]).length===0?nt(s,i):s.title;R(""),$(s.id),x(l.id),z(T=>{const Ce={...s,title:j,updatedAt:new Date().toISOString(),messages:g};return T.some(F=>F.id===s.id)?T.map(F=>F.id===s.id?Ce:F):[Ce,...T].slice(0,Ge)}),I.mutate({chatId:s.id,nextMessages:g,messages:at(g),options:{model:s.model,reasoningEffort:s.reasoningEffort,enableWebSearch:s.enableWebSearch,systemInstruction:it(l,s)}})},er=o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),re())},rr=o=>r.jsxs(D,{role:"button",tabIndex:0,$active:String(o.id)===String(l==null?void 0:l.id),onClick:()=>V(o),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),V(o))},title:o.name,children:[r.jsx(W,{agent:o,$compact:!0}),r.jsx("span",{children:r.jsx("strong",{children:o.name})}),r.jsx(pe,{type:"button",$shifted:!0,title:"Editar configuración",onClick:i=>{i.stopPropagation(),t(o)},children:r.jsx(Me,{})}),r.jsx(Gr,{type:"button",title:"Borrar agente",onClick:i=>Ze(i,o),children:r.jsx(ne,{})})]},o.id),oe=({title:o,count:i,items:s,emptyText:d})=>r.jsxs(He,{children:[r.jsxs(Le,{children:[r.jsx("span",{children:o}),r.jsx("strong",{children:i})]}),xe?r.jsx(ae,{children:"Cargando..."}):s.length?s.map(rr):r.jsx(ae,{children:d})]}),ke=!!(u&&l),or=l?X(l):"agent",tr=l?q(l):"",nr=!!((Se=(je=l==null?void 0:l.config)==null?void 0:je.rag)!=null&&Se.enabled)&&or!=="rag";return r.jsxs(Dr,{children:[r.jsxs(Mr,{children:[r.jsxs(Tr,{children:[r.jsxs(Hr,{children:[r.jsx(Lr,{children:r.jsx(ie,{children:"IA"})}),r.jsxs("div",{children:[r.jsx(Rr,{children:"AI Hub"}),r.jsx(Nr,{children:"Agentes y conversaciones"})]})]}),r.jsx(Pr,{type:"button",onClick:()=>t(),title:"Nuevo agente",children:r.jsx(G,{})})]}),r.jsxs(_r,{children:[r.jsx(te,{}),r.jsx("input",{type:"search",placeholder:"Buscar agentes o chats",value:a,onChange:o=>m(o.target.value)})]}),r.jsxs(Or,{children:[oe({title:"AGENTES",count:C.agents.length,items:C.agents,emptyText:a?"No hay agentes para esta búsqueda.":"Sin agentes custom todavía."}),oe({title:"ASISTENTES",count:C.assistants.length,items:C.assistants,emptyText:a?"No hay asistentes para esta búsqueda.":"Sin asistentes externos todavía."}),oe({title:"RAGs",count:C.rags.length,items:C.rags,emptyText:a?"No hay RAGs para esta búsqueda.":"Sin RAGs configurados todavía."}),r.jsx(Br,{}),r.jsxs(He,{children:[r.jsxs(Le,{children:[r.jsx("span",{children:"CHATS ANTERIORES"}),r.jsx("strong",{children:J.length})]}),J.length?J.map(o=>r.jsxs(Fr,{role:"button",tabIndex:0,$active:p===o.id,onClick:()=>{$(o.id),x(o.agentId),f(null)},onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),$(o.id),x(o.agentId),f(null))},title:o.title,children:[o.pinned&&r.jsx(De,{}),r.jsx("span",{children:Y===o.id?r.jsx(Wr,{value:me,autoFocus:!0,onChange:i=>N(i.target.value),onClick:i=>i.stopPropagation(),onBlur:ye,onKeyDown:i=>{i.key==="Enter"&&ye(),i.key==="Escape"&&Je()}}):r.jsx("strong",{children:o.title})}),r.jsx(qr,{type:"button",title:"Opciones del chat",onClick:i=>Ve(i,o),children:r.jsx(cr,{})})]},o.id)):r.jsx(ae,{children:y.length?"No hay chats para esta búsqueda.":"Los chats que abras van a quedar acá."})]})]}),k&&r.jsxs(Kr,{ref:be,style:{top:k.top,left:k.left},onClick:o=>o.stopPropagation(),children:[r.jsxs(se,{type:"button",onClick:()=>Ye(k.chatId),children:[r.jsx(De,{}),"Fijar"]}),r.jsxs(se,{type:"button",onClick:()=>{const o=y.find(i=>i.id===k.chatId);o&&Ue(o)},children:[r.jsx(Me,{}),"Cambiar nombre"]}),r.jsxs(se,{type:"button",$danger:!0,onClick:()=>Qe(k.chatId),children:[r.jsx(ne,{}),"Borrar"]})]})]}),r.jsxs(Er,{children:[!ke&&r.jsxs(Xr,{children:[r.jsxs("div",{children:[r.jsxs(Yr,{children:[r.jsx(Ee,{}),"Centro de inteligencia"]}),r.jsx(Qr,{children:"AI Hub Imponect"}),r.jsx(Ur,{children:"Gestioná agentes, asistentes y RAGs con perfiles, herramientas, memoria documental y chats operativos."})]}),r.jsx(Jr,{children:r.jsxs(Re,{type:"button",onClick:()=>t(),children:[r.jsx(G,{}),"Nuevo Agente/Asistente/RAG"]})})]}),ke?r.jsxs(po,{children:[r.jsxs(ho,{children:[r.jsxs(uo,{children:[r.jsx(W,{agent:l}),r.jsxs("div",{children:[r.jsx(mo,{children:l.name}),r.jsx($o,{children:l.description||q(l)})]})]}),r.jsxs(bo,{children:[r.jsxs(Pe,{children:[r.jsx("label",{children:"Modelo"}),r.jsx("select",{value:u.model,onChange:o=>Z({model:o.target.value}),children:qe.map(o=>r.jsx("option",{value:o.value,children:o.label},o.value))})]}),r.jsxs(Pe,{children:[r.jsx("label",{children:"RAZONAMIENTO"}),r.jsx("select",{value:u.reasoningEffort,onChange:o=>Z({reasoningEffort:o.target.value}),children:We.map(o=>r.jsx("option",{value:o.value,children:o.label},o.value))})]}),r.jsxs(xo,{type:"button",$active:u.enableWebSearch,onClick:()=>Z({enableWebSearch:!u.enableWebSearch}),title:"Activar o desactivar búsqueda web",children:[r.jsx(te,{}),"Web"]}),r.jsx(Ne,{type:"button",onClick:()=>Xe(l),title:`Nuevo chat con ${Zo(l)}`,children:r.jsx(G,{})}),r.jsx(Ne,{type:"button",onClick:()=>{$(null),x(null)},title:"Cerrar chat",children:r.jsx(Te,{})})]})]}),l.type==="external"&&l.external_url?r.jsx(fo,{src:l.external_url,title:l.name}):r.jsxs(r.Fragment,{children:[r.jsxs(yo,{children:[r.jsxs(H,{$active:!0,children:[r.jsx(ie,{$compact:!0,children:"IA"}),tr]}),r.jsxs(H,{$active:u.enableWebSearch,children:[r.jsx(te,{}),"Búsqueda web"]}),nr&&r.jsxs(H,{$active:!0,children:[r.jsx(dr,{}),"RAG configurado"]}),r.jsxs(H,{children:[r.jsx(Ee,{}),"Guardrails"]}),r.jsxs(H,{children:[r.jsx(gr,{}),"Runtime"]})]}),r.jsxs(wo,{children:[u.messages.length===0?r.jsxs(ko,{children:[r.jsx(W,{agent:l}),r.jsx("h2",{children:l.name}),r.jsx("p",{children:l.description||"Iniciá una conversación con este agente."}),r.jsx(vo,{children:Jo.map(o=>r.jsx(jo,{type:"button",onClick:()=>re(o),children:o},o))})]}):u.messages.map(o=>{var i;return r.jsx(So,{$role:o.role,children:r.jsxs(zo,{$role:o.role,$error:o.isError,children:[r.jsx(Ao,{children:o.role==="user"?"Vos":l.name}),r.jsx(Co,{$role:o.role,children:r.jsx(c.Suspense,{fallback:r.jsx(Io,{children:o.content||""}),children:r.jsx(Yo,{content:o.content||""})})}),((i=o.sources)==null?void 0:i.length)>0&&r.jsx(Do,{children:o.sources.map(s=>r.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",children:s.title||s.url},s.url||s.title))}),(o.provider||o.model)&&r.jsxs(Mo,{children:[o.provider||"ai"," · ",o.model||u.model]})]})},o.id)}),I.isPending&&p===((ze=I.variables)==null?void 0:ze.chatId)&&r.jsxs(Eo,{children:[r.jsx(pr,{}),r.jsxs(To,{children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]}),r.jsxs(Ho,{children:["Pensando con ",u.model,"..."]})]}),r.jsx("div",{ref:$e})]}),r.jsxs(Lo,{children:[r.jsx("textarea",{placeholder:`Mensaje para ${l.name}`,value:h,onChange:o=>R(o.target.value),onKeyDown:er,disabled:I.isPending}),r.jsx(Ro,{type:"button",onClick:()=>re(),disabled:!h.trim()||I.isPending,title:"Enviar mensaje",children:r.jsx(hr,{})})]})]})]}):r.jsxs(Vr,{children:[r.jsx(Zr,{children:r.jsxs("div",{children:[r.jsx(eo,{children:"Elegí un agente para empezar"}),r.jsx(ro,{children:"Los modelos y el reasoning arrancan con la configuración guardada del agente y se pueden ajustar por chat."})]})}),r.jsx(oo,{children:xe?r.jsx(co,{children:"Cargando agentes..."}):_.length?_.map(o=>r.jsxs(to,{children:[r.jsxs(no,{children:[r.jsx(W,{agent:o}),r.jsx(io,{children:o.name})]}),r.jsx(ao,{children:o.description}),r.jsxs(so,{children:[r.jsx("span",{children:q(o)}),r.jsx("span",{children:le(o)})]}),r.jsxs(lo,{type:"button",onClick:()=>V(o),children:[r.jsx(ur,{}),"Abrir Chat"]})]},o.id)):r.jsxs(go,{children:[r.jsx(ie,{$large:!0,children:"IA"}),r.jsx("h2",{children:"No hay agentes todavía"}),r.jsx("p",{children:"Creá tu primer agente para iniciar conversaciones con configuración propia."}),r.jsxs(Re,{type:"button",onClick:()=>t(),children:[r.jsx(G,{}),"Nuevo Agente/Asistente/RAG"]})]})})]})]}),w.show&&r.jsx(No,{onClick:ee,children:r.jsxs(Po,{onClick:o=>o.stopPropagation(),children:[r.jsx(_o,{children:r.jsx(ne,{})}),r.jsx(Oo,{children:"Confirmar eliminación"}),r.jsxs(Bo,{children:["Se requiere contraseña para eliminar ",((Ae=w.agent)==null?void 0:Ae.name)||"este agente","."]}),r.jsx(Fo,{type:"password",autoFocus:!0,placeholder:"Contraseña Founders",value:w.password,onChange:o=>A(i=>({...i,password:o.target.value,error:""})),onKeyDown:o=>{o.key==="Enter"&&we(),o.key==="Escape"&&ee()}}),w.error&&r.jsx(Go,{children:w.error}),r.jsxs(qo,{children:[r.jsx(Wo,{type:"button",onClick:ee,children:"Cancelar"}),r.jsx(Ko,{type:"button",onClick:we,disabled:B.isPending,children:B.isPending?"Eliminando...":"Eliminar"})]})]})}),v.show&&r.jsxs(Xo,{$type:v.type,children:[v.type==="error"?r.jsx(mr,{}):r.jsx($r,{}),r.jsx("span",{children:v.message}),r.jsx(Qo,{type:"button",onClick:()=>M(o=>({...o,show:!1})),children:r.jsx(Te,{})})]})]})},bt=Object.freeze(Object.defineProperty({__proto__:null,AIHubScreen:st},Symbol.toStringTag,{value:"Module"}));export{bt as A,pt as M,ht as a,ut as b,mt as c,$t as d};
