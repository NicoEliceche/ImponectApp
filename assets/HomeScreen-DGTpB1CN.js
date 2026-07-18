import{y as i,O as x,v as L,w as N,r as E,x as A,z as T,A as Q,m as K,j as t,B as U,C as z,D as Y,E as G,F as _,G as V,H as W,f as O}from"./index-BZYg4alH.js";import{f as J}from"./quotesApi-B6BlK7Dh.js";import{p as X,a as Z,b as q,c as ee,d as te}from"./pageHeader-CSFyddAi.js";const re=x`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ie=x`
  0%, 100% {
    opacity: 0.45;
    transform: scaleY(0.7);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
`,ne=x`
  0% {
    opacity: 0.85;
    transform: scale(0.35);
  }
  72% {
    opacity: 0;
    transform: scale(2.45);
  }
  100% {
    opacity: 0;
    transform: scale(2.45);
  }
`,ae=x`
  0%, 100% {
    opacity: 0.72;
    transform: scale(0.88);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`,s=(e,r)=>e==="success"?r.color.success:e==="warning"?r.color.warning:e==="accent"?r.color.accent:e==="danger"?r.color.error:r.color.primary,$=(e,r)=>r.isDark?e==="success"?"rgba(16, 185, 129, 0.12)":e==="warning"?"rgba(245, 158, 11, 0.14)":e==="accent"?"rgba(198, 137, 63, 0.14)":e==="danger"?"rgba(239, 68, 68, 0.12)":"rgba(0, 85, 128, 0.22)":e==="success"?r.color.successLight:e==="warning"?r.color.warningLight:e==="accent"?r.color.accentFaded:e==="danger"?r.color.errorLight:r.color.primaryFaded,oe=i.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
  color: ${({theme:e})=>e.color.text};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,se=i.header`
  ${X};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ce=i.div`
  ${Z};
`,le=i.div`
  position: relative;
  z-index: 1;
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(6, 19, 26, 0.72)":"rgba(255, 255, 255, 0.78)"};
  backdrop-filter: blur(10px);

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-width: 0;
    align-items: stretch;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,de=i.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(20rem, 0.9fr) minmax(18rem, 0.8fr);
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,pe=i.p`
  ${q};
`,ge=i.span`
  width: 1.25rem;
  height: 1rem;
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;

  span {
    width: 4px;
    border-radius: ${({theme:e})=>e.radius.sm};
    background: ${({theme:e})=>e.color.accent};
    animation: ${ie} 1.8s ease-in-out infinite;
  }

  span:nth-child(1) {
    height: 35%;
  }

  span:nth-child(2) {
    height: 70%;
    animation-delay: 160ms;
  }

  span:nth-child(3) {
    height: 100%;
    animation-delay: 320ms;
  }
`,me=i.h1`
  ${ee};
`,he=i.p`
  ${te};
  max-width: 48rem;
`,ue=i.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-align: right;
  text-transform: capitalize;
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    text-align: left;
  }
`,xe=i.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.color.success};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;

  span {
    position: relative;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.success};
    color: ${({theme:e})=>e.color.success};
    box-shadow: 0 0 0 0.22rem ${({theme:e})=>e.isDark?"rgba(16, 185, 129, 0.18)":e.color.successLight}, 0 0 1rem rgba(16, 185, 129, 0.45);
    animation: ${ae} 1.45s ease-in-out infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: -0.44rem;
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0;
      transform-origin: center;
      animation: ${ne} 1.8s ease-out infinite;
      pointer-events: none;
    }

    &::after {
      inset: -0.68rem;
      animation-delay: 0.55s;
    }
  }
`,$e=i.button`
  width: 100%;
  min-height: 1.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: progress;
    opacity: 0.72;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,ye=i.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.warning};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?"rgba(245, 158, 11, 0.16)":e.color.warningLight};
  color: ${({theme:e})=>e.isDark?"#fde68a":e.color.warning};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`,fe=i.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,be=i.article`
  position: relative;
  overflow: hidden;
  min-height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({$tone:e,theme:r})=>s(e,r)};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(135deg, ${({$tone:e,theme:r})=>$(e,r)} 0%, ${({theme:e})=>e.color.surface} 58%),
    ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  animation: ${re} 0.45s ease both;
  animation-delay: ${({$delay:e})=>e};

  &::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    bottom: -2rem;
    width: 7rem;
    height: 7rem;
    border: 1px solid ${({$tone:e,theme:r})=>s(e,r)};
    transform: rotate(45deg);
    opacity: 0.12;
    pointer-events: none;
  }
`,we=i.div`
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({$tone:e,theme:r})=>s(e,r)};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({$tone:e,theme:r})=>s(e,r)};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`,je=i.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`,ve=i.strong`
  display: block;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,ke=i.span`
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
`,m=i.article`
  min-width: 0;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[5]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.color.surface} 0%, ${({theme:e})=>e.isDark?"rgba(22, 46, 58, 0.74)":e.color.neutral[50]} 100%);
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: 0;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,ze=i(m)`
  min-height: 18rem;
`,d=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,p=i.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,g=i.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.medium};
`,Ie=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.14)":e.color.accentFaded};
  color: ${({theme:e})=>e.isDark?"#f4c27f":e.color.accentDark};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Ae=i.strong`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};

  small {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    text-transform: uppercase;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: flex-start;
  }
`,De=i.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 2rem;
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
    justify-content: center;
    width: 100%;
  }
`,Ce=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Se=i.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({$tone:e,theme:r})=>s(e,r)};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$tone:e,theme:r})=>r.isDark?"rgba(255,255,255,0.035)":$(e,r)};

  strong {
    display: block;
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  p {
    margin: ${({theme:e})=>e.spacing[1]} 0 0;
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }
`,Me=i.div`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$tone:e,theme:r})=>s(e,r)};
  color: ${({theme:e})=>e.color.textInverse};

  svg {
    width: 1rem;
    height: 1rem;
  }
`,Pe=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Fe=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,He=i.div`
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
    white-space: nowrap;
  }
`,Re=i.div`
  height: 0.55rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.08)":e.color.neutral[200]};
`,Be=i.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(e,100))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${({$tone:e,theme:r})=>s(e,r)};
  box-shadow: 0 0 1rem ${({$tone:e,theme:r})=>s(e,r)};
  transition: width 0.35s ease;
`,Le=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ne=i.button`
  min-height: 5.25rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: ${({theme:e})=>e.spacing[3]};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.10)":e.color.accentFaded};
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: ${({theme:e})=>e.color.accent};
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
    line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  }
`,Ee=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Te=i.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    margin-top: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr);

    > :last-child {
      grid-column: 1 / -1;
      justify-self: start;
    }
  }
`,Qe=i.span`
  min-width: 4.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$tone:e,theme:r})=>$(e,r)};
  color: ${({$tone:e,theme:r})=>r.isDark&&e==="warning"?"#fde68a":s(e,r)};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Ke=i.button`
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
`,Ue=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ye=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 6rem;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ge=i.div`
  min-width: 0;

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    margin-top: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,_e=i.div`
  height: 0.6rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.08)":e.color.neutral[200]};
`,Ve=i.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(e,100))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.primary}, ${({theme:e})=>e.color.accent});
`,We=i.div`
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  color: ${({theme:e})=>e.color.accent};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`,Oe=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Je=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    margin-top: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Xe=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.55rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$tone:e,theme:r})=>$(e,r)};
  color: ${({$tone:e,theme:r})=>r.isDark&&e==="warning"?"#fde68a":s(e,r)};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  white-space: nowrap;
`,b=new Intl.NumberFormat("es-AR",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}),Ze=new Intl.NumberFormat("es-AR",{notation:"compact",maximumFractionDigits:1}),qe=new Intl.DateTimeFormat("es-AR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"}),u=e=>{if(typeof e=="number")return Number.isFinite(e)?e:0;if(!e)return 0;const r=String(e).replace(/[^\d,.-]/g,"").replace(/\./g,"").replace(",","."),c=Number(r);return Number.isFinite(c)?c:0},D=e=>String(e||"").toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),""),I=e=>{const r=D((e==null?void 0:e.type)||(e==null?void 0:e.transport_type)||(e==null?void 0:e.shipping_type)||(e==null?void 0:e.mode)||(e==null?void 0:e.quote_type));return r.includes("aer")||r==="air"?"aereo":"maritimo"},et=e=>{if(!e)return!1;const r=new Date(e);if(Number.isNaN(r.getTime()))return!1;const c=new Date;return r.getMonth()===c.getMonth()&&r.getFullYear()===c.getFullYear()},w=(e,r)=>D(e==null?void 0:e.status).includes(r),tt=[{title:"Presupuestos pendientes",description:"Revisar propuestas que quedaron listas para enviar o retomar con cliente.",tone:"warning"},{title:"Caja para compras",description:"Validar disponible antes de comprometer nuevas cargas consolidadas.",tone:"accent"},{title:"CRM multicanal",description:"WhatsApp, Instagram y Facebook operan con reglas activas para no romper ventanas.",tone:"success"}],rt=[{title:"Cotizar operación",hint:"Marítimo, aéreo y comparación automática",path:"/cotizador",icon:Y},{title:"Presupuestos",hint:"Ver, editar y descargar PDFs",path:"/quotes",icon:A},{title:"CRM de chats",hint:"Bandeja unificada por canal",path:"/crm",icon:G},{title:"Negocio",hint:"Finanzas, marketing y reportes",path:"/business",icon:_}],it=[{title:"Resumen comercial",meta:"Ventas, margen y presupuestos",status:"Listo",tone:"success"},{title:"Gasto marketing",meta:"Canales, CPL y retorno estimado",status:"Borrador",tone:"warning"},{title:"Caja disponible",meta:"Capital para compra y operación",status:"Pendiente",tone:"accent"}],nt=[{name:"WhatsApp Business",detail:"Reglas 24h + templates",health:"Blindado",tone:"success"},{name:"Instagram / Facebook",detail:"Mensajería con ventana activa",health:"Controlado",tone:"success"},{name:"Alibaba / 1688 / Made-in-China",detail:"Integración diferida",health:"En espera",tone:"warning"},{name:"Base presupuestos",detail:"PDFs y borradores persistidos",health:"Activa",tone:"accent"}],at=[{channel:"Meta Ads",value:68,spend:"US$ 420",leads:26},{channel:"Google",value:48,spend:"US$ 310",leads:14},{channel:"Orgánico",value:82,spend:"US$ 0",leads:19}],dt=()=>{const e=L(),{data:r=[],isError:c,isFetching:j,refetch:C}=N({queryKey:["quotes","dashboard"],queryFn:J,staleTime:6e4,retry:1}),S=qe.format(new Date),o=E.useMemo(()=>{const n=r.filter(a=>et(a.generation_date||a.created_at||a.updated_at)),h=n.reduce((a,l)=>a+u(l.amount),0),y=r.reduce((a,l)=>a+u(l.amount),0),F=r.filter(a=>I(a)==="maritimo").reduce((a,l)=>a+u(l.amount),0),H=r.filter(a=>I(a)==="aereo").reduce((a,l)=>a+u(l.amount),0),v=r.filter(a=>w(a,"pendiente")).length,k=r.filter(a=>w(a,"borrador")).length,f=r.filter(a=>w(a,"enviado")).length,R=Math.max(f+v+k,1),B=Math.round(f/R*100);return{monthAmount:h,totalAmount:y,maritimeAmount:F,airAmount:H,pending:v,drafts:k,sent:f,sentRate:B,totalQuotes:r.length,currentMonthQuotes:n.length}},[r]),M=[{label:"Presupuestos enviados",value:o.sentRate,detail:`${o.sent} enviados`,tone:"success"},{label:"Pendientes de envío",value:Math.min(o.pending*18,100),detail:`${o.pending} pendientes`,tone:"warning"},{label:"Marítimo acumulado",value:o.totalAmount?Math.round(o.maritimeAmount/o.totalAmount*100):0,detail:b.format(o.maritimeAmount),tone:"primary"},{label:"Aéreo acumulado",value:o.totalAmount?Math.round(o.airAmount/o.totalAmount*100):0,detail:b.format(o.airAmount),tone:"accent"}],P=[{label:"Presupuestos mes",value:o.monthAmount?b.format(o.monthAmount):"US$ 0",helper:`${o.currentMonthQuotes} generados este mes`,icon:A,tone:"accent"},{label:"Pendientes",value:String(o.pending),helper:`${o.drafts} borradores en preparación`,icon:T,tone:"warning"},{label:"Marketing activo",value:"US$ 730",helper:"59 leads estimados entre canales",icon:Q,tone:"primary"},{label:"Caja compras",value:"US$ 18,4K",helper:"Capital operativo disponible",icon:K,tone:"success"}];return t.jsxs(oe,{children:[t.jsxs(se,{children:[t.jsxs(ce,{children:[t.jsxs(pe,{children:[t.jsx(ot,{}),"Centro de mando"]}),t.jsx(me,{children:"Dashboard Imponect"}),t.jsx(he,{children:"Torre de control para presupuestos, caja, marketing, chats y frentes operativos."})]}),t.jsxs(le,{children:[t.jsx(ue,{children:S}),t.jsxs(xe,{children:[t.jsx("span",{}),"Sistema operativo"]}),t.jsxs($e,{type:"button",onClick:()=>C(),disabled:j,children:[t.jsx(U,{}),j?"Actualizando":"Actualizar"]})]})]}),c&&t.jsxs(ye,{children:[t.jsx(z,{}),"No se pudo sincronizar presupuestos. El resto del tablero queda disponible."]}),t.jsx(fe,{children:P.map((n,h)=>{const y=n.icon;return t.jsxs(be,{$tone:n.tone,$delay:`${h*70}ms`,children:[t.jsx(we,{$tone:n.tone,children:t.jsx(y,{})}),t.jsx(je,{children:n.label}),t.jsx(ve,{children:n.value}),t.jsx(ke,{children:n.helper})]},n.label)})}),t.jsxs(de,{children:[t.jsxs(m,{children:[t.jsxs(d,{children:[t.jsxs("div",{children:[t.jsx(p,{children:"Prioridad táctica"}),t.jsx(g,{children:"Frentes que conviene revisar primero"})]}),t.jsx(Ie,{children:"Hoy"})]}),t.jsx(Ce,{children:tt.map(n=>t.jsxs(Se,{$tone:n.tone,children:[t.jsx(Me,{$tone:n.tone,children:t.jsx(z,{})}),t.jsxs("div",{children:[t.jsx("strong",{children:n.title}),t.jsx("p",{children:n.description})]})]},n.title))})]}),t.jsxs(m,{children:[t.jsxs(d,{children:[t.jsxs("div",{children:[t.jsx(p,{children:"Pipeline comercial"}),t.jsx(g,{children:"Presupuestos y mix de transporte"})]}),t.jsxs(Ae,{children:[Ze.format(o.totalAmount||0),t.jsx("small",{children:"USD total"})]})]}),t.jsx(Pe,{children:M.map(n=>t.jsxs(Fe,{children:[t.jsxs(He,{children:[t.jsx("span",{children:n.label}),t.jsx("strong",{children:n.detail})]}),t.jsx(Re,{children:t.jsx(Be,{$value:n.value,$tone:n.tone})})]},n.label))})]}),t.jsxs(ze,{children:[t.jsx(d,{children:t.jsxs("div",{children:[t.jsx(p,{children:"Acciones rápidas"}),t.jsx(g,{children:"Entradas directas a los flujos clave"})]})}),t.jsx(Le,{children:rt.map(n=>{const h=n.icon;return t.jsxs(Ne,{type:"button",onClick:()=>e(n.path),children:[t.jsx(h,{}),t.jsxs("span",{children:[t.jsx("strong",{children:n.title}),t.jsx("small",{children:n.hint})]})]},n.title)})})]}),t.jsxs(m,{children:[t.jsxs(d,{children:[t.jsxs("div",{children:[t.jsx(p,{children:"Reportes"}),t.jsx(g,{children:"Base para guardar y descargar análisis"})]}),t.jsxs(De,{type:"button",onClick:()=>e("/business?module=reports"),children:[t.jsx(V,{}),"Ver módulo"]})]}),t.jsx(Ee,{children:it.map(n=>t.jsxs(Te,{children:[t.jsx(Qe,{$tone:n.tone,children:n.status}),t.jsxs("div",{children:[t.jsx("strong",{children:n.title}),t.jsx("span",{children:n.meta})]}),t.jsx(Ke,{type:"button",title:"Descargar reporte",children:t.jsx(W,{})})]},n.title))})]}),t.jsxs(m,{children:[t.jsx(d,{children:t.jsxs("div",{children:[t.jsx(p,{children:"Marketing y demanda"}),t.jsx(g,{children:"Lectura rápida de canales activos"})]})}),t.jsx(Ue,{children:at.map(n=>t.jsxs(Ye,{children:[t.jsxs(Ge,{children:[t.jsx("strong",{children:n.channel}),t.jsxs("span",{children:[n.spend," invertidos · ",n.leads," leads"]})]}),t.jsx(_e,{children:t.jsx(Ve,{$value:n.value})})]},n.channel))})]}),t.jsxs(m,{children:[t.jsxs(d,{children:[t.jsxs("div",{children:[t.jsx(p,{children:"Integraciones"}),t.jsx(g,{children:"Estado de canales y datos críticos"})]}),t.jsx(We,{children:t.jsx(O,{})})]}),t.jsx(Oe,{children:nt.map(n=>t.jsxs(Je,{children:[t.jsxs("div",{children:[t.jsx("strong",{children:n.name}),t.jsx("span",{children:n.detail})]}),t.jsx(Xe,{$tone:n.tone,children:n.health})]},n.name))})]})]})]})},ot=()=>t.jsxs(ge,{"aria-hidden":"true",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]});export{dt as HomeScreen};
