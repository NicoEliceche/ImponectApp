import{y as g,p as re,O as Fe,u as Ye,a as Ze,r as C,b as eo,j as o,I as _e,c as O,d as be,e as Te,f as Me,g as oo,h as ze,i as no,k as to,l as ne,m as te,n as ro,o as ve,q as io,s as ao,t as so}from"./index-BZYg4alH.js";import{n as lo,i as ye,g as co,A as go,a as uo,b as $e,c as po}from"./agentSections-D_Qvcygv.js";const ho=Fe`
  from { opacity: 0; transform: translateY(0.75rem) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,mo=Fe`
  to { transform: rotate(360deg); }
`,xo=g.div`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.color.overlay};
  backdrop-filter: blur(0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: 0;
  }
`,fo=g.div`
  background: ${({theme:e})=>e.color.surface};
  width: min(100%, 76rem);
  height: min(92vh, 58rem);
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.accent};
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${ho} 0.28s ease;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    height: 100dvh;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
`,jo=g.div`
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.color.neutral[50]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: calc(${({theme:e})=>e.spacing[4]} + env(safe-area-inset-top)) ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,_o=g.h2`
  margin: 0;
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  color: ${({theme:e})=>e.color.accent};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    font-size: ${({theme:e})=>e.typography.size.base};
    line-height: ${({theme:e})=>e.typography.lineHeight.snug};
  }
`,bo=g.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.color.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.full};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.color.neutral[100]};
    color: ${({theme:e})=>e.color.error};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
    flex: 0 0 ${({theme:e})=>e.layout.buttonHeight};
  }
`,vo=g.div`
  flex: 1;
  display: flex;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
  }
`,yo=g.div`
  width: 15rem;
  border-right: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.neutral[50]};
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing[4]};
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${({theme:e})=>e.color.border};
    flex-direction: row;
    overflow-x: auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[3]};
    gap: ${({theme:e})=>e.spacing[2]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,$o=g.button`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.md};
  border: none;
  background: ${({$active:e,theme:t})=>e?t.color.accent:"transparent"};
  color: ${({$active:e,theme:t})=>e?t.color.textInverse:t.color.textSecondary};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-align: left;
  font-size: ${({theme:e})=>e.typography.size.sm};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-height: 2.5rem;
  white-space: nowrap;

  &:hover {
    background: ${({$active:e,theme:t})=>e?t.color.accent:t.color.neutral[100]};
    color: ${({$active:e,theme:t})=>e?t.color.textInverse:t.color.text};
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    flex: 0 0 auto;
  }
`,ko=g.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[6]};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,$=g.section`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: ${({theme:e})=>e.spacing[5]};
  background-color: ${({theme:e})=>e.color.surface};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
    border-radius: ${({theme:e})=>e.radius.md};
  }
`,k=g.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  > svg {
    width: ${({theme:e})=>e.spacing[6]};
    height: ${({theme:e})=>e.spacing[6]};
    flex: 0 0 ${({theme:e})=>e.spacing[6]};
    color: ${({theme:e})=>e.color.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,_=g.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,w=g.p`
  margin: ${({theme:e})=>e.spacing[2]} 0 0;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,I=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,i=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  label {
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    color: ${({theme:e})=>e.color.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.md};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.medium};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: inherit;

    &:focus {
      border-color: ${({theme:e})=>e.color.accent};
      box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.isDark?e.color.accentDark:e.color.accentFaded};
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    input,
    select {
      min-height: ${({theme:e})=>e.layout.inputHeight};
    }
  }

  textarea {
    min-height: ${({$compact:e})=>e?"4.75rem":"7rem"};
    resize: vertical;
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }

  ${({$wide:e})=>e&&re`
    grid-column: 1 / -1;
  `}
`,ke=g.input`
  display: none;
`,wo=g.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  border: 1px dashed ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  padding: ${({theme:e})=>e.spacing[3]};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,So=g.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({$empty:e,theme:t})=>e?t.color.border:t.color.accent};
  background: ${({theme:e})=>e.isDark?`linear-gradient(180deg, ${e.color.neutral[100]} 0%, ${e.color.surface} 100%)`:`linear-gradient(180deg, ${e.color.accentFaded} 0%, ${e.color.surface} 100%)`};
  color: ${({theme:e})=>e.color.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: 4.1rem;
    height: 4.1rem;
    align-self: flex-end;
    margin-bottom: -1px;
  }
`,we=g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  }
`,Co=g.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: stretch;

    > * {
      flex: 1 1 100%;
    }
  }
`,Io=g.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  border: 1px dashed ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?`linear-gradient(135deg, ${e.color.neutral[100]} 0%, ${e.color.surface} 100%)`:`linear-gradient(135deg, ${e.color.accentFaded} 0%, ${e.color.neutral[50]} 100%)`};
  padding: ${({theme:e})=>e.spacing[4]};
  cursor: ${({$loading:e})=>e?"progress":"pointer"};
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accentLight};
    background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.accentFaded};
    transform: translateY(-1px);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ao=g.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({$loading:e,theme:t})=>e?`0 0 0 0.2rem ${t.isDark?t.color.neutral[100]:t.color.accentFaded}`:"none"};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`,Fo=g.span`
  width: 1.35rem;
  height: 1.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.border};
  border-top-color: ${({theme:e})=>e.color.accent};
  animation: ${mo} 0.8s linear infinite;
`,To=g.span`
  justify-self: end;
  min-width: 4rem;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.color.surface};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-align: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`,Mo=g.div`
  grid-column: 1 / -1;
  width: 100%;
  height: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.neutral[100]};
  overflow: hidden;
`,zo=g.span`
  display: block;
  width: ${({$progress:e})=>`${Math.max(0,Math.min(100,Number(e)||0))}%`};
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.accent};
  transition: width 0.18s ease;
`,Po=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ro=g.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  padding: ${({theme:e})=>e.spacing[3]};
`,Eo=g.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.color.surface};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: 1.45rem;
    height: 1.45rem;
    opacity: ${({$isImage:e})=>e?1:.9};
  }
`,No=g.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    text-transform: uppercase;
  }
`,Lo=g.button`
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid transparent;
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.error};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.errorLight};
    color: ${({theme:e})=>e.color.error};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,U=g.textarea`
  min-height: ${({$large:e})=>e?"15rem":"9rem"};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
`,A=g.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${({theme:e})=>e.color.accent};
  }
`,Se=g.div`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background-color: ${({theme:e})=>e.color.neutral[50]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    overflow-x: auto;
  }
`,V=g.button`
  border: none;
  border-radius: ${({theme:e})=>e.radius.sm};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  background-color: ${({$active:e,theme:t})=>e?t.color.accent:"transparent"};
  color: ${({$active:e,theme:t})=>e?t.color.textInverse:t.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex: 1 0 auto;
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,N=g.button`
  border: 1px solid ${({theme:e})=>e.color.border};
  background-color: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  border-radius: ${({theme:e})=>e.radius.md};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    width: 100%;
  }
`,Do=g.div`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.color.neutral[50]};
`,Oo=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,G=g.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};

  > svg {
    width: ${({theme:e})=>e.spacing[5]};
    height: ${({theme:e})=>e.spacing[5]};
    flex: 0 0 ${({theme:e})=>e.spacing[5]};
    color: ${({theme:e})=>e.color.textSecondary};
  }
`,Go=g.p`
  margin: 0;
  color: ${({theme:e})=>e.color.error};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Ce=g.pre`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.md};
  background-color: ${({theme:e})=>e.color.primaryDark};
  color: ${({theme:e})=>e.color.textInverse};
  overflow: auto;
  min-height: 9rem;
  max-height: 16rem;
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,Bo=g.div`
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[4]};
  background: ${({theme:e})=>e.color.surface};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
    padding-bottom: calc(${({theme:e})=>e.spacing[4]} + env(safe-area-inset-bottom));
    flex-direction: column-reverse;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ie=g.button`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border-radius: ${({theme:e})=>e.radius.md};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  font-size: ${({theme:e})=>e.typography.size.sm};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};

  ${({$variant:e})=>e==="primary"?re`
    background: ${({theme:t})=>t.color.accent};
    color: ${({theme:t})=>t.color.textInverse};

    &:hover {
      background: ${({theme:t})=>t.color.accentLight};
      transform: translateY(-1px);
    }

    &:disabled {
      background: ${({theme:t})=>t.color.textDisabled};
      cursor: not-allowed;
      transform: none;
    }
  `:re`
    background: transparent;
    color: ${({theme:t})=>t.color.textSecondary};

    &:hover {
      background: ${({theme:t})=>t.color.neutral[100]};
    }
  `}

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,K=()=>({id:`mcp-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:"filesystem",transport:"stdio",command:"cmd",args:`/c
npx
-y
@modelcontextprotocol/server-filesystem
C:/Nico/Workspaces/ImponectApp`,url:"https://example.com/mcp",env:"",headers:"Authorization=Bearer <token>",timeout:"60",protocolVersion:"2025-11-25",approvalPolicy:"ask",alwaysLoad:!0,toolFilter:""}),T={name:"",description:"",type:"custom",external_url:"",icon_url:"",config:{sidebar_group:"agent",instructions:"",agent_mode:"single",model_provider:"openai",model:"gpt-5.4-mini",handoff_description:"",output_type:"text",output_schema:"",model_settings:{temperature:"0.2",top_p:"1",max_tokens:"4096",reasoning_effort:"medium",verbosity:"medium",tool_choice:"auto",parallel_tool_calls:!0,truncation:"auto",store:!0,prompt_cache_retention:"in_memory",top_logprobs:""},runtime:{max_turns:"12",timeout_seconds:"90",retry_attempts:"2",tool_not_found_behavior:"return_error_to_model",memory_strategy:"session",tracing_enabled:!0},guardrails:{input:"",output:"",pii_redaction:!0,human_approval:"tools"},rag:{enabled:!0,assistant_id:"",vector_store_id:"",knowledge_files:[],data_sources:"documentos, drive, base de datos",ingestion_mode:"manual",chunking_strategy:"recursive",chunk_size_tokens:"800",chunk_overlap_tokens:"200",separators:"\\n\\n, \\n, espacio",embedding_model:"text-embedding-3-large",vector_database:"openai_vector_store",namespace:"default",metadata_schema:"source, owner, date, permissions, tags",attribute_filters:"",retrieval_mode:"hybrid",top_k:"8",score_threshold:"0.2",max_context_tokens:"16000",reranker_model:"auto",query_rewrite:!0,citations:!0,strict_grounding:!0},skills:{mode:"basic",instructions:"",folder_name:"custom-skill",name:"custom-skill",description:"",trigger_examples:"",resources:"scripts, references, assets",skill_md:"",files:`[
  {
    "path": "references/domain.md",
    "purpose": "Contexto de dominio que se carga solo cuando hace falta"
  },
  {
    "path": "scripts/task.py",
    "purpose": "Automatizacion repetible o validacion deterministica"
  }
]`},mcp:{mode:"guided",json:"",servers:[K()]}}},Ho=512,Uo=.86,q=20,ie=20,ae=40,Vo=ie*1024*1024,qo=ae*1024*1024,Jo=12e3,Pe=[".txt",".md",".markdown",".csv",".tsv",".json",".jsonl",".xml",".yaml",".yml",".html",".htm",".rtf",".log",".sql",".js",".jsx",".ts",".tsx",".css",".scss",".py",".java",".cs",".cpp",".c",".go",".rb",".php",".sh",".ps1"],Re=[...Pe,".pdf",".doc",".docx",".ppt",".pptx",".xls",".xlsx",".xlsm",".ods",".numbers",".sheet",".jpg",".jpeg",".png",".webp",".gif",".bmp",".svg",".heic",".heif",".avif"],Ko=new Set(Pe),Xo=new Set(Re),Wo=["image/*",...Re].join(","),Ee=e=>new Promise((t,a)=>{const d=new FileReader;d.onload=()=>t(String(d.result||"")),d.onerror=()=>a(new Error(`No se pudo leer ${e.name}.`)),d.readAsDataURL(e)}),Qo=e=>new Promise((t,a)=>{const d=new Image;d.onload=()=>{const p=Math.min(1,Ho/Math.max(d.width,d.height)),x=Math.max(Math.round(d.width*p),1),u=Math.max(Math.round(d.height*p),1),h=document.createElement("canvas");h.width=x,h.height=u,h.getContext("2d").drawImage(d,0,0,x,u);const f=e.startsWith("data:image/png")?"image/png":"image/jpeg";t(h.toDataURL(f,Uo))},d.onerror=()=>a(new Error("No se pudo procesar la imagen seleccionada.")),d.src=e}),Yo=async e=>Qo(await Ee(e)),de=(e="")=>{const t=e.lastIndexOf(".");return t>=0?e.slice(t).toLowerCase():""},Zo=(e=0)=>{if(!e)return"0 KB";const t=["B","KB","MB","GB"],a=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1),d=e/1024**a;return`${d.toFixed(d>=10||a===0?0:1)} ${t[a]}`},Ae=e=>{const t=de((e==null?void 0:e.name)||(e==null?void 0:e.file_name)||"");return String((e==null?void 0:e.mime_type)||(e==null?void 0:e.type)||"").startsWith("image/")||String((e==null?void 0:e.data_url)||"").startsWith("data:image/")||[".jpg",".jpeg",".png",".webp",".gif",".bmp",".svg",".heic",".heif",".avif"].includes(t)},en=e=>{const t=de(e.name);return String(e.type||"").startsWith("image/")||Xo.has(t)},se=e=>Array.isArray(e==null?void 0:e.knowledge_files)?e.knowledge_files:Array.isArray(e==null?void 0:e.knowledgeFiles)?e.knowledgeFiles:[],on=async e=>{const t=de(e.name),a=String(e.type||""),d=a.startsWith("text/")||Ko.has(t);let p="";if(d)try{p=(await e.text()).slice(0,Jo)}catch{p=""}return{id:`rag-file-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:e.name,extension:t.replace(".","")||"file",mime_type:a||"application/octet-stream",size:e.size,content_kind:a.startsWith("image/")?"image":d?"text":"binary",added_at:new Date().toISOString(),data_url:await Ee(e),text_preview:p}},le=()=>({...T,config:{...T.config,model_settings:{...T.config.model_settings},runtime:{...T.config.runtime},guardrails:{...T.config.guardrails},rag:{...T.config.rag,knowledge_files:[]},skills:{...T.config.skills},mcp:{...T.config.mcp,servers:[K()]}}}),J=e=>Array.isArray(e)?e.join(", "):String(e||""),nn=e=>!e||typeof e!="object"?String(e||""):Object.entries(e).map(([t,a])=>`${t}=${a}`).join(`
`),tn=e=>{var f;const t=le(),a=(e==null?void 0:e.config)||{},d=a.model_settings||{},p=a.runtime||{},x=a.guardrails||{},u=a.rag||{},h=a.skills||{},M=a.mcp_servers||a.mcpServers||null;return{...t,name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",type:(e==null?void 0:e.type)||"custom",external_url:(e==null?void 0:e.external_url)||"",icon_url:(e==null?void 0:e.icon_url)||"",config:{...t.config,sidebar_group:uo(e,t.config.sidebar_group),instructions:a.instructions||"",agent_mode:a.agent_mode||t.config.agent_mode,model_provider:a.model_provider||t.config.model_provider,model:a.model||t.config.model,handoff_description:a.handoff_description||"",output_type:a.output_type||t.config.output_type,output_schema:a.output_schema||"",model_settings:{...t.config.model_settings,temperature:String(d.temperature??t.config.model_settings.temperature),top_p:String(d.top_p??t.config.model_settings.top_p),max_tokens:String(d.max_tokens??t.config.model_settings.max_tokens),reasoning_effort:d.reasoning_effort||((f=d.reasoning)==null?void 0:f.effort)||t.config.model_settings.reasoning_effort,verbosity:d.verbosity||t.config.model_settings.verbosity,tool_choice:d.tool_choice||t.config.model_settings.tool_choice,parallel_tool_calls:d.parallel_tool_calls??t.config.model_settings.parallel_tool_calls,truncation:d.truncation||t.config.model_settings.truncation,store:d.store??t.config.model_settings.store,prompt_cache_retention:d.prompt_cache_retention||t.config.model_settings.prompt_cache_retention,top_logprobs:String(d.top_logprobs??"")},runtime:{...t.config.runtime,max_turns:String(p.max_turns??t.config.runtime.max_turns),timeout_seconds:String(p.timeout_seconds??t.config.runtime.timeout_seconds),retry_attempts:String(p.retry_attempts??t.config.runtime.retry_attempts),tool_not_found_behavior:p.tool_not_found_behavior||t.config.runtime.tool_not_found_behavior,memory_strategy:p.memory_strategy||t.config.runtime.memory_strategy,tracing_enabled:p.tracing_enabled??t.config.runtime.tracing_enabled},guardrails:{...t.config.guardrails,input:x.input||"",output:x.output||"",pii_redaction:x.pii_redaction??t.config.guardrails.pii_redaction,human_approval:x.human_approval||t.config.guardrails.human_approval},rag:{...t.config.rag,enabled:u.enabled??t.config.rag.enabled,assistant_id:u.assistant_id||"",vector_store_id:u.vector_store_id||"",knowledge_files:se(u),data_sources:J(u.data_sources||t.config.rag.data_sources),ingestion_mode:u.ingestion_mode||t.config.rag.ingestion_mode,chunking_strategy:u.chunking_strategy||t.config.rag.chunking_strategy,chunk_size_tokens:String(u.chunk_size_tokens??t.config.rag.chunk_size_tokens),chunk_overlap_tokens:String(u.chunk_overlap_tokens??t.config.rag.chunk_overlap_tokens),separators:J(u.separators||t.config.rag.separators),embedding_model:u.embedding_model||t.config.rag.embedding_model,vector_database:u.vector_database||t.config.rag.vector_database,namespace:u.namespace||t.config.rag.namespace,metadata_schema:J(u.metadata_schema||t.config.rag.metadata_schema),attribute_filters:nn(u.attribute_filters),retrieval_mode:u.retrieval_mode||t.config.rag.retrieval_mode,top_k:String(u.top_k??t.config.rag.top_k),score_threshold:String(u.score_threshold??t.config.rag.score_threshold),max_context_tokens:String(u.max_context_tokens??t.config.rag.max_context_tokens),reranker_model:u.reranker_model||t.config.rag.reranker_model,query_rewrite:u.query_rewrite??t.config.rag.query_rewrite,citations:u.citations??t.config.rag.citations,strict_grounding:u.strict_grounding??t.config.rag.strict_grounding},skills:{...t.config.skills,mode:h.mode||t.config.skills.mode,instructions:h.instructions||"",folder_name:h.folder_name||t.config.skills.folder_name,name:h.name||t.config.skills.name,description:h.description||"",trigger_examples:h.trigger_examples||"",resources:J(h.resources||t.config.skills.resources),skill_md:h.skill_md||"",files:Array.isArray(h.files)?JSON.stringify(h.files,null,2):h.files||t.config.skills.files},mcp:{...t.config.mcp,mode:M?"json":t.config.mcp.mode,json:M?JSON.stringify(M,null,2):"",servers:[K()]}}}},rn=[{id:"config",label:"Configuración",icon:Te},{id:"rag",label:"RAG (Datos)",icon:Me},{id:"skills",label:"Skills",icon:oo},{id:"mcp",label:"MCP Servers",icon:ze}],b=e=>{if(e===""||e===null||e===void 0)return;const t=Number(e);return Number.isFinite(t)?t:void 0},B=e=>String(e||"").split(/\n|,/).map(t=>t.trim()).filter(Boolean),ce=e=>{const t=String(e||"").split(`
`).map(a=>a.trim()).filter(Boolean).map(a=>{const d=a.includes("=")?"=":":",[p,...x]=a.split(d);return[p==null?void 0:p.trim(),x.join(d).trim()]}).filter(([a])=>!!a);if(t.length)return Object.fromEntries(t)},H=e=>{if(Array.isArray(e))return e.map(H).filter(t=>t!==void 0&&t!=="");if(e&&typeof e=="object"){const t=Object.entries(e).map(([a,d])=>[a,H(d)]).filter(([,a])=>a!==void 0&&a!=="");return t.length?Object.fromEntries(t):void 0}if(e!=="")return e},an=e=>({mcpServers:e.reduce((t,a,d)=>{var u;const p=((u=a.name)==null?void 0:u.trim())||`server_${d+1}`,x={timeout:b(a.timeout),protocolVersion:a.protocolVersion,approvalPolicy:a.approvalPolicy,alwaysLoad:a.alwaysLoad,toolFilter:B(a.toolFilter)};return a.transport==="stdio"?(t[p]=H({command:a.command,args:B(a.args),env:ce(a.env),...x}),t):(t[p]=H({type:a.transport,url:a.url,headers:ce(a.headers),...x}),t)},{})}),cn=()=>{const e=Ye(),{isAgentModalOpen:t,closeAgentModal:a,editingAgent:d}=Ze(),p=C.useRef(null),x=C.useRef(null),[u,h]=C.useState("config"),[M,f]=C.useState(""),[r,S]=C.useState(()=>le()),[ge,X]=C.useState(!1),[m,R]=C.useState({active:!1,processed:0,total:0,fileName:""}),L=!!(d!=null&&d.id),W=lo(r.icon_url),Ne=ye(r.icon_url)?"":r.icon_url,D=se(r.config.rag),Q=m.total?Math.round(m.processed/m.total*100):0,Y=C.useMemo(()=>an(r.config.mcp.servers),[r.config.mcp.servers]),ue=C.useMemo(()=>JSON.stringify(Y,null,2),[Y]),pe=()=>{S(le()),f(""),R({active:!1,processed:0,total:0,fileName:""}),h("config")};C.useEffect(()=>{if(t){if(d){S(tn(d)),f(""),h("config");return}pe()}},[t,d]),C.useEffect(()=>{X(!1)},[r.icon_url]);const z=(n,l)=>{S(s=>({...s,[n]:l}))},he=async n=>{if(n){if(!n.type.startsWith("image/")){window.alert("Seleccioná una imagen JPG, PNG o WebP.");return}try{const l=await Yo(n);z("icon_url",l)}catch(l){console.error("No se pudo procesar la imagen del agente",l),window.alert("No se pudo procesar la imagen. Probá con otro archivo JPG o PNG.")}}},Le=n=>{var l;he((l=n.target.files)==null?void 0:l[0]),n.target.value=""},De=n=>{n.preventDefault();const l=Array.from(n.dataTransfer.files||[]).find(s=>s.type.startsWith("image/"));he(l)},Oe=()=>{z("icon_url",""),X(!1)},Z=n=>{S(l=>{const s=se(l.config.rag),j=typeof n=="function"?n(s):n;return{...l,config:{...l.config,rag:{...l.config.rag,knowledge_files:j}}}})},me=async n=>{var je;const l=Array.from(n||[]);if(!l.length)return;if(m.active){f("Esperá a que termine la carga de archivos actual.");return}const s=D.reduce((y,F)=>y+Number(F.size||0),0),j=l.reduce((y,F)=>y+F.size,0),E=l.find(y=>!en(y)),fe=l.find(y=>y.size>Vo);if(D.length+l.length>q){f(`Podés cargar hasta ${q} archivos de knowledge por agente.`);return}if(E){f(`"${E.name}" no tiene una extensión soportada para Knowledge/RAG.`);return}if(fe){f(`"${fe.name}" supera el límite de ${ie} MB por archivo.`);return}if(s+j>qo){f(`El total de archivos del agente no puede superar ${ae} MB en esta versión.`);return}try{const y=[];R({active:!0,processed:0,total:l.length,fileName:((je=l[0])==null?void 0:je.name)||""});for(const[F,oe]of l.entries())R({active:!0,processed:F,total:l.length,fileName:oe.name}),y.push(await on(oe)),R({active:!0,processed:F+1,total:l.length,fileName:oe.name});Z(F=>[...F,...y]),f(""),R({active:!1,processed:0,total:0,fileName:""})}catch(y){console.error("No se pudieron procesar los archivos RAG",y),f("No se pudieron procesar los archivos seleccionados. Probá nuevamente."),R({active:!1,processed:0,total:0,fileName:""})}},Ge=n=>{me(n.target.files),n.target.value=""},Be=n=>{Z(l=>l.filter((s,j)=>j!==n))},He=()=>{Z([])},P=(n,l)=>{S(s=>({...s,config:{...s.config,[n]:l}}))},Ue=n=>{const l=$e(n);S(s=>({...s,config:{...s.config,sidebar_group:l,rag:{...s.config.rag,enabled:l==="rag"?!0:s.config.rag.enabled}}}))},c=(n,l,s)=>{S(j=>({...j,config:{...j.config,[n]:{...j.config[n],[l]:s}}}))},ee=(n,l)=>{S(s=>({...s,config:{...s.config,mcp:{...s.config.mcp,[n]:l}}}))},v=(n,l,s)=>{S(j=>({...j,config:{...j.config,mcp:{...j.config.mcp,servers:j.config.mcp.servers.map(E=>E.id===n?{...E,[l]:s}:E)}}}))},Ve=()=>{S(n=>({...n,config:{...n.config,mcp:{...n.config.mcp,servers:[...n.config.mcp.servers,K()]}}}))},qe=n=>{S(l=>({...l,config:{...l.config,mcp:{...l.config.mcp,servers:l.config.mcp.servers.filter(s=>s.id!==n)}}}))},xe=eo({mutationFn:n=>ao(so(L?`/api/ai/agents/${d.id}`:"/api/ai/agents"),{method:L?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(async l=>{const s=await l.json().catch(()=>({}));if(!l.ok)throw new Error((s==null?void 0:s.error)||"No se pudo guardar la IA.");return s}),onSuccess:()=>{e.invalidateQueries({queryKey:["aiAgents"]}),a(),pe()}}),Je=()=>{let n=Y;if(r.config.mcp.mode==="json"){const s=r.config.mcp.json.trim();n=s?JSON.parse(s):{}}const l=H({sidebar_group:$e(r.config.sidebar_group),instructions:r.config.instructions,agent_mode:r.config.agent_mode,model_provider:r.config.model_provider,model:r.config.model,handoff_description:r.config.handoff_description,output_type:r.config.output_type,output_schema:r.config.output_schema,model_settings:{temperature:b(r.config.model_settings.temperature),top_p:b(r.config.model_settings.top_p),max_tokens:b(r.config.model_settings.max_tokens),reasoning:{effort:r.config.model_settings.reasoning_effort},verbosity:r.config.model_settings.verbosity,tool_choice:r.config.model_settings.tool_choice,parallel_tool_calls:r.config.model_settings.parallel_tool_calls,truncation:r.config.model_settings.truncation,store:r.config.model_settings.store,prompt_cache_retention:r.config.model_settings.prompt_cache_retention,top_logprobs:b(r.config.model_settings.top_logprobs)},runtime:{max_turns:b(r.config.runtime.max_turns),timeout_seconds:b(r.config.runtime.timeout_seconds),retry_attempts:b(r.config.runtime.retry_attempts),tool_not_found_behavior:r.config.runtime.tool_not_found_behavior,memory_strategy:r.config.runtime.memory_strategy,tracing_enabled:r.config.runtime.tracing_enabled},guardrails:r.config.guardrails,rag:{...r.config.rag,chunk_size_tokens:b(r.config.rag.chunk_size_tokens),chunk_overlap_tokens:b(r.config.rag.chunk_overlap_tokens),top_k:b(r.config.rag.top_k),score_threshold:b(r.config.rag.score_threshold),max_context_tokens:b(r.config.rag.max_context_tokens),data_sources:B(r.config.rag.data_sources),metadata_schema:B(r.config.rag.metadata_schema),attribute_filters:ce(r.config.rag.attribute_filters)},skills:{...r.config.skills,resources:B(r.config.skills.resources),files:r.config.skills.mode==="advanced"?JSON.parse(r.config.skills.files||"[]"):void 0},mcp_servers:n});return{name:r.name,description:r.description,type:r.type,external_url:r.type==="external"?r.external_url:"",icon_url:po(r.icon_url),config:l}},Ke=()=>{f("");try{xe.mutate(Je())}catch(n){f(n instanceof Error?n.message:"La configuración avanzada no es un JSON válido.")}};if(!t)return null;const Xe=co(r.config.sidebar_group),We=L?"Editar Agente/Asistente/RAG":"Nuevo Agente/Asistente/RAG",Qe=`${L?"Actualizar":"Crear"} ${Xe}`;return o.jsx(xo,{onClick:a,children:o.jsxs(fo,{onClick:n=>n.stopPropagation(),children:[o.jsxs(jo,{children:[o.jsxs(_o,{children:[L?o.jsx(_e,{}):o.jsx(O,{})," ",We]}),o.jsx(bo,{onClick:a,children:o.jsx(be,{})})]}),o.jsxs(vo,{children:[o.jsx(yo,{children:rn.map(n=>o.jsxs($o,{$active:u===n.id,onClick:()=>h(n.id),children:[o.jsx(n.icon,{}),n.label]},n.id))}),o.jsxs(ko,{children:[u==="config"&&o.jsxs(o.Fragment,{children:[o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Identidad"}),o.jsx(w,{children:"Nombre, propósito, entrada externa y presentación visual."})]}),o.jsx(no,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Nombre del Agente"}),o.jsx("input",{type:"text",placeholder:"Asistente de Ventas",value:r.name,onChange:n=>z("name",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Tipo"}),o.jsxs("select",{value:r.type,onChange:n=>z("type",n.target.value),children:[o.jsx("option",{value:"custom",children:"Personalizado (Imponect AI)"}),o.jsx("option",{value:"external",children:"Externo (iFrame Link)"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Sección"}),o.jsx("select",{value:r.config.sidebar_group,onChange:n=>Ue(n.target.value),children:go.map(n=>o.jsx("option",{value:n.value,children:n.label},n.value))})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Descripción"}),o.jsx("textarea",{placeholder:"Propósito operativo del agente",value:r.description,onChange:n=>z("description",n.target.value)})]}),r.type==="external"&&o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"URL del Chat"}),o.jsx("input",{type:"text",placeholder:"https://chatgpt.com/g/...",value:r.external_url,onChange:n=>z("external_url",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"URL de imagen"}),o.jsx("input",{type:"text",placeholder:ye(r.icon_url)?"Imagen cargada desde archivo":"https://... o assets/mi-agente.png",value:Ne,onChange:n=>z("icon_url",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Imagen de perfil"}),o.jsxs(wo,{onDragOver:n=>n.preventDefault(),onDrop:De,children:[o.jsx(ke,{ref:p,type:"file",accept:"image/*",onChange:Le}),o.jsx(So,{$empty:!W||ge,children:W&&!ge?o.jsx("img",{src:W,alt:"Imagen de perfil",onError:()=>X(!0)}):o.jsx(to,{})}),o.jsxs(we,{children:[o.jsx("strong",{children:"Perfil del agente"}),o.jsx("span",{children:"URL externa o una imagen local. Se guarda una sola imagen."})]}),o.jsxs(Co,{children:[o.jsxs(N,{type:"button",onClick:()=>{var n;return(n=p.current)==null?void 0:n.click()},children:[o.jsx(O,{}),"Cargar"]}),r.icon_url&&o.jsxs(N,{type:"button",onClick:Oe,children:[o.jsx(ne,{}),"Quitar"]})]})]})]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Instrucciones y Orquestación"}),o.jsx(w,{children:"System prompt, handoffs, salida esperada y modo de ejecución."})]}),o.jsx(te,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Modo"}),o.jsxs("select",{value:r.config.agent_mode,onChange:n=>P("agent_mode",n.target.value),children:[o.jsx("option",{value:"single",children:"Agente único"}),o.jsx("option",{value:"router",children:"Router multiagente"}),o.jsx("option",{value:"specialist",children:"Especialista delegable"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Tipo de salida"}),o.jsxs("select",{value:r.config.output_type,onChange:n=>P("output_type",n.target.value),children:[o.jsx("option",{value:"text",children:"Texto libre"}),o.jsx("option",{value:"json_schema",children:"JSON Schema"}),o.jsx("option",{value:"tool_result",children:"Resultado de tool"})]})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Instrucciones"}),o.jsx("textarea",{placeholder:"Define rol, límites, tono, criterios de éxito y formato de respuesta",value:r.config.instructions,onChange:n=>P("instructions",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Descripción para Handoff"}),o.jsx("textarea",{placeholder:"Cuándo otros agentes deberían delegar en este agente",value:r.config.handoff_description,onChange:n=>P("handoff_description",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Output Schema"}),o.jsx(U,{as:"textarea",placeholder:'{"type":"object","properties":{"answer":{"type":"string"}}}',value:r.config.output_schema,onChange:n=>P("output_schema",n.target.value)})]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Modelo"}),o.jsx(w,{children:"Proveedor, sampling, razonamiento, uso de tools y persistencia."})]}),o.jsx(Te,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Proveedor"}),o.jsxs("select",{value:r.config.model_provider,onChange:n=>P("model_provider",n.target.value),children:[o.jsx("option",{value:"openai",children:"OpenAI"}),o.jsx("option",{value:"anthropic",children:"Anthropic"}),o.jsx("option",{value:"google",children:"Google"}),o.jsx("option",{value:"local",children:"Local / OpenRouter"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Modelo"}),o.jsx("input",{type:"text",value:r.config.model,onChange:n=>P("model",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:r.config.model_settings.temperature,onChange:n=>c("model_settings","temperature",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:r.config.model_settings.top_p,onChange:n=>c("model_settings","top_p",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",value:r.config.model_settings.max_tokens,onChange:n=>c("model_settings","max_tokens",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Reasoning Effort"}),o.jsxs("select",{value:r.config.model_settings.reasoning_effort,onChange:n=>c("model_settings","reasoning_effort",n.target.value),children:[o.jsx("option",{value:"none",children:"None"}),o.jsx("option",{value:"minimal",children:"Minimal"}),o.jsx("option",{value:"low",children:"Low"}),o.jsx("option",{value:"medium",children:"Medium"}),o.jsx("option",{value:"high",children:"High"}),o.jsx("option",{value:"xhigh",children:"XHigh"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Verbosity"}),o.jsxs("select",{value:r.config.model_settings.verbosity,onChange:n=>c("model_settings","verbosity",n.target.value),children:[o.jsx("option",{value:"low",children:"Low"}),o.jsx("option",{value:"medium",children:"Medium"}),o.jsx("option",{value:"high",children:"High"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Tool Choice"}),o.jsxs("select",{value:r.config.model_settings.tool_choice,onChange:n=>c("model_settings","tool_choice",n.target.value),children:[o.jsx("option",{value:"auto",children:"Auto"}),o.jsx("option",{value:"required",children:"Required"}),o.jsx("option",{value:"none",children:"None"}),o.jsx("option",{value:"file_search",children:"File Search"}),o.jsx("option",{value:"web_search",children:"Web Search"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Truncation"}),o.jsxs("select",{value:r.config.model_settings.truncation,onChange:n=>c("model_settings","truncation",n.target.value),children:[o.jsx("option",{value:"auto",children:"Auto"}),o.jsx("option",{value:"disabled",children:"Disabled"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Prompt Cache"}),o.jsxs("select",{value:r.config.model_settings.prompt_cache_retention,onChange:n=>c("model_settings","prompt_cache_retention",n.target.value),children:[o.jsx("option",{value:"in_memory",children:"In memory"}),o.jsx("option",{value:"24h",children:"24h"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Top Logprobs"}),o.jsx("input",{type:"number",placeholder:"Opcional",value:r.config.model_settings.top_logprobs,onChange:n=>c("model_settings","top_logprobs",n.target.value)})]})]}),o.jsxs(G,{children:[o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.model_settings.parallel_tool_calls,onChange:n=>c("model_settings","parallel_tool_calls",n.target.checked)}),"Parallel tool calls"]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.model_settings.store,onChange:n=>c("model_settings","store",n.target.checked)}),"Store responses"]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Runtime y Seguridad"}),o.jsx(w,{children:"Turnos, timeout, memoria, trazas, approval y guardrails."})]}),o.jsx(te,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Max Turns"}),o.jsx("input",{type:"number",value:r.config.runtime.max_turns,onChange:n=>c("runtime","max_turns",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Timeout Segundos"}),o.jsx("input",{type:"number",value:r.config.runtime.timeout_seconds,onChange:n=>c("runtime","timeout_seconds",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Retries"}),o.jsx("input",{type:"number",value:r.config.runtime.retry_attempts,onChange:n=>c("runtime","retry_attempts",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Tool Not Found"}),o.jsxs("select",{value:r.config.runtime.tool_not_found_behavior,onChange:n=>c("runtime","tool_not_found_behavior",n.target.value),children:[o.jsx("option",{value:"raise_error",children:"Raise error"}),o.jsx("option",{value:"return_error_to_model",children:"Return error to model"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Memoria"}),o.jsxs("select",{value:r.config.runtime.memory_strategy,onChange:n=>c("runtime","memory_strategy",n.target.value),children:[o.jsx("option",{value:"none",children:"Sin memoria"}),o.jsx("option",{value:"session",children:"Sesión"}),o.jsx("option",{value:"persistent",children:"Persistente"}),o.jsx("option",{value:"summarized",children:"Resumida"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Human Approval"}),o.jsxs("select",{value:r.config.guardrails.human_approval,onChange:n=>c("guardrails","human_approval",n.target.value),children:[o.jsx("option",{value:"none",children:"None"}),o.jsx("option",{value:"tools",children:"Tools sensibles"}),o.jsx("option",{value:"all_tools",children:"Todas las tools"}),o.jsx("option",{value:"external_write",children:"Escritura externa"})]})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Input Guardrails"}),o.jsx("textarea",{placeholder:"Validaciones antes de llamar al modelo",value:r.config.guardrails.input,onChange:n=>c("guardrails","input",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Output Guardrails"}),o.jsx("textarea",{placeholder:"Validaciones antes de entregar la respuesta",value:r.config.guardrails.output,onChange:n=>c("guardrails","output",n.target.value)})]})]}),o.jsxs(G,{children:[o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.runtime.tracing_enabled,onChange:n=>c("runtime","tracing_enabled",n.target.checked)}),"Tracing"]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.guardrails.pii_redaction,onChange:n=>c("guardrails","pii_redaction",n.target.checked)}),"PII redaction"]})]})]})]}),u==="rag"&&o.jsxs(o.Fragment,{children:[o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Fuentes e Ingesta"}),o.jsx(w,{children:"Documentos, conectores, IDs de plataforma e indexación."})]}),o.jsx(ro,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Assistant ID"}),o.jsx("input",{type:"text",placeholder:"asst_...",value:r.config.rag.assistant_id,onChange:n=>c("rag","assistant_id",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Vector Store ID"}),o.jsx("input",{type:"text",placeholder:"vs_...",value:r.config.rag.vector_store_id,onChange:n=>c("rag","vector_store_id",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Ingesta"}),o.jsxs("select",{value:r.config.rag.ingestion_mode,onChange:n=>c("rag","ingestion_mode",n.target.value),children:[o.jsx("option",{value:"manual",children:"Manual"}),o.jsx("option",{value:"scheduled",children:"Programada"}),o.jsx("option",{value:"webhook",children:"Webhook"}),o.jsx("option",{value:"realtime",children:"Tiempo real"})]})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Fuentes"}),o.jsx("textarea",{placeholder:"documentos, drive, notion, postgres, web",value:r.config.rag.data_sources,onChange:n=>c("rag","data_sources",n.target.value)})]})]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.rag.enabled,onChange:n=>c("rag","enabled",n.target.checked)}),"RAG activo"]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Knowledge / Archivos RAG"}),o.jsx(w,{children:"Base de conocimiento cargada como en un GPT propio: documentos, planillas, PDFs, markdown, CSV, código e imágenes."})]}),o.jsx(ve,{})]}),o.jsx(ke,{ref:x,type:"file",multiple:!0,accept:Wo,onChange:Ge}),o.jsxs(Io,{role:"button",tabIndex:0,$loading:m.active,onClick:()=>{var n;m.active||(n=x.current)==null||n.click()},onDragOver:n=>n.preventDefault(),onDrop:n=>{n.preventDefault(),m.active||me(n.dataTransfer.files)},onKeyDown:n=>{var l;(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),m.active||(l=x.current)==null||l.click())},children:[o.jsx(Ao,{$loading:m.active,children:m.active?o.jsx(Fo,{}):o.jsx(O,{})}),o.jsxs(we,{"aria-live":"polite",children:[o.jsx("strong",{children:m.active?"Cargando archivos de Knowledge":"Arrastrá archivos o hacé click para elegir"}),m.active?o.jsxs("span",{children:["Procesando ",m.processed,"/",m.total,m.fileName?` · ${m.fileName}`:""]}):o.jsxs("span",{children:["Hasta ",q," archivos. Soporta imágenes, PDF, DOC/DOCX, XLS/XLSX, CSV/TSV, TXT, MD, JSON, YAML, XML, PPT/PPTX y código. Límite actual:"," ",ie," MB por archivo y ",ae," MB total."]})]}),o.jsx(To,{children:m.active?`${Q}%`:`${D.length}/${q}`}),m.active&&o.jsx(Mo,{"aria-label":`Carga de archivos ${Q}%`,children:o.jsx(zo,{$progress:Q})})]}),D.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(Po,{children:D.map((n,l)=>o.jsxs(Ro,{children:[o.jsx(Eo,{$isImage:Ae(n),children:Ae(n)?o.jsx("img",{src:n.data_url,alt:n.name}):o.jsx(ve,{})}),o.jsxs(No,{children:[o.jsx("strong",{title:n.name,children:n.name}),o.jsxs("span",{children:[String(n.extension||"file").toUpperCase()," · ",Zo(n.size)]})]}),o.jsx(Lo,{type:"button","aria-label":`Quitar ${n.name}`,onClick:()=>Be(l),children:o.jsx(be,{})})]},n.id||`${n.name}-${n.size}-${l}`))}),o.jsxs(G,{children:[o.jsxs(N,{type:"button",onClick:()=>{var n;return(n=x.current)==null?void 0:n.click()},children:[o.jsx(O,{}),"Agregar más"]}),o.jsxs(N,{type:"button",onClick:He,children:[o.jsx(ne,{}),"Quitar todos"]})]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Chunking y Embeddings"}),o.jsx(w,{children:"Segmentación, overlap, modelo de embedding y almacenamiento vectorial."})]}),o.jsx(Me,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Estrategia"}),o.jsxs("select",{value:r.config.rag.chunking_strategy,onChange:n=>c("rag","chunking_strategy",n.target.value),children:[o.jsx("option",{value:"recursive",children:"Recursive"}),o.jsx("option",{value:"semantic",children:"Semantic"}),o.jsx("option",{value:"markdown",children:"Markdown / headers"}),o.jsx("option",{value:"parent_child",children:"Parent-child"}),o.jsx("option",{value:"fixed",children:"Fixed token"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Chunk Tokens"}),o.jsx("input",{type:"number",value:r.config.rag.chunk_size_tokens,onChange:n=>c("rag","chunk_size_tokens",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Overlap Tokens"}),o.jsx("input",{type:"number",value:r.config.rag.chunk_overlap_tokens,onChange:n=>c("rag","chunk_overlap_tokens",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Embedding Model"}),o.jsx("input",{type:"text",value:r.config.rag.embedding_model,onChange:n=>c("rag","embedding_model",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Vector DB"}),o.jsxs("select",{value:r.config.rag.vector_database,onChange:n=>c("rag","vector_database",n.target.value),children:[o.jsx("option",{value:"openai_vector_store",children:"OpenAI Vector Store"}),o.jsx("option",{value:"pgvector",children:"Postgres pgvector"}),o.jsx("option",{value:"pinecone",children:"Pinecone"}),o.jsx("option",{value:"qdrant",children:"Qdrant"}),o.jsx("option",{value:"weaviate",children:"Weaviate"}),o.jsx("option",{value:"faiss",children:"FAISS"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Namespace"}),o.jsx("input",{type:"text",value:r.config.rag.namespace,onChange:n=>c("rag","namespace",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Separadores"}),o.jsx("input",{type:"text",value:r.config.rag.separators,onChange:n=>c("rag","separators",n.target.value)})]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Retrieval"}),o.jsx(w,{children:"Búsqueda, filtros, rerank, presupuesto de contexto y grounding."})]}),o.jsx(te,{})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Modo"}),o.jsxs("select",{value:r.config.rag.retrieval_mode,onChange:n=>c("rag","retrieval_mode",n.target.value),children:[o.jsx("option",{value:"semantic",children:"Semantic"}),o.jsx("option",{value:"keyword",children:"Keyword / BM25"}),o.jsx("option",{value:"hybrid",children:"Hybrid"}),o.jsx("option",{value:"graph",children:"Graph RAG"}),o.jsx("option",{value:"agentic",children:"Agentic retrieval"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",value:r.config.rag.top_k,onChange:n=>c("rag","top_k",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Score Threshold"}),o.jsx("input",{type:"number",step:"0.05",value:r.config.rag.score_threshold,onChange:n=>c("rag","score_threshold",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Context Tokens"}),o.jsx("input",{type:"number",value:r.config.rag.max_context_tokens,onChange:n=>c("rag","max_context_tokens",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Reranker"}),o.jsx("input",{type:"text",value:r.config.rag.reranker_model,onChange:n=>c("rag","reranker_model",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Metadata Schema"}),o.jsx("textarea",{value:r.config.rag.metadata_schema,onChange:n=>c("rag","metadata_schema",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Attribute Filters"}),o.jsx("textarea",{placeholder:`owner=ventas
permissions=internal`,value:r.config.rag.attribute_filters,onChange:n=>c("rag","attribute_filters",n.target.value)})]})]}),o.jsxs(G,{children:[o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.rag.query_rewrite,onChange:n=>c("rag","query_rewrite",n.target.checked)}),"Query rewrite"]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.rag.citations,onChange:n=>c("rag","citations",n.target.checked)}),"Citas"]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:r.config.rag.strict_grounding,onChange:n=>c("rag","strict_grounding",n.target.checked)}),"Strict grounding"]})]})]})]}),u==="skills"&&o.jsxs(o.Fragment,{children:[o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Modo de Skill"}),o.jsx(w,{children:"Instrucciones simples o estructura profesional completa."})]}),o.jsxs(Se,{children:[o.jsx(V,{$active:r.config.skills.mode==="basic",onClick:()=>c("skills","mode","basic"),children:"Básico"}),o.jsx(V,{$active:r.config.skills.mode==="advanced",onClick:()=>c("skills","mode","advanced"),children:"Avanzado"})]})]}),r.config.skills.mode==="basic"?o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Instrucciones de Skill"}),o.jsx("textarea",{placeholder:"Describe capacidades, reglas, pasos, herramientas y límites",value:r.config.skills.instructions,onChange:n=>c("skills","instructions",n.target.value)})]}):o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Folder Name"}),o.jsx("input",{type:"text",value:r.config.skills.folder_name,onChange:n=>c("skills","folder_name",n.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Skill Name"}),o.jsx("input",{type:"text",value:r.config.skills.name,onChange:n=>c("skills","name",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{placeholder:"Qué hace y cuándo debe activarse",value:r.config.skills.description,onChange:n=>c("skills","description",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Trigger Examples"}),o.jsx("textarea",{placeholder:"Pedidos reales que deberían activar esta skill",value:r.config.skills.trigger_examples,onChange:n=>c("skills","trigger_examples",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Recursos"}),o.jsx("input",{type:"text",value:r.config.skills.resources,onChange:n=>c("skills","resources",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"SKILL.md"}),o.jsx(U,{as:"textarea",$large:!0,placeholder:`---
name: custom-skill
description: ...
---

# Custom Skill

Instrucciones...`,value:r.config.skills.skill_md,onChange:n=>c("skills","skill_md",n.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Archivos Avanzados"}),o.jsx(U,{as:"textarea",$large:!0,value:r.config.skills.files,onChange:n=>c("skills","files",n.target.value)})]})]})]}),o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Estructura Esperada"}),o.jsx(w,{children:"SKILL.md, agents/openai.yaml y recursos opcionales por carpeta."})]}),o.jsx(_e,{})]}),o.jsx(Ce,{children:`skill-name/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── scripts/
├── references/
└── assets/`})]})]}),u==="mcp"&&o.jsxs(o.Fragment,{children:[o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"Configuración MCP"}),o.jsx(w,{children:"Formulario guiado o JSON directo para servidores locales/remotos."})]}),o.jsxs(Se,{children:[o.jsx(V,{$active:r.config.mcp.mode==="guided",onClick:()=>ee("mode","guided"),children:"Guiado"}),o.jsx(V,{$active:r.config.mcp.mode==="json",onClick:()=>ee("mode","json"),children:"JSON"})]})]}),r.config.mcp.mode==="json"?o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"mcpServers JSON"}),o.jsx(U,{as:"textarea",$large:!0,placeholder:ue,value:r.config.mcp.json,onChange:n=>ee("json",n.target.value)})]}):o.jsxs(o.Fragment,{children:[r.config.mcp.servers.map((n,l)=>o.jsxs(Do,{children:[o.jsxs(Oo,{children:[o.jsxs(_,{children:["Server ",l+1]}),o.jsxs(G,{children:[o.jsx(io,{}),r.config.mcp.servers.length>1&&o.jsxs(N,{onClick:()=>qe(n.id),children:[o.jsx(ne,{}),"Quitar"]})]})]}),o.jsxs(I,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Nombre"}),o.jsx("input",{type:"text",value:n.name,onChange:s=>v(n.id,"name",s.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Transport"}),o.jsxs("select",{value:n.transport,onChange:s=>v(n.id,"transport",s.target.value),children:[o.jsx("option",{value:"stdio",children:"stdio"}),o.jsx("option",{value:"http",children:"Streamable HTTP"}),o.jsx("option",{value:"sse",children:"SSE legacy"}),o.jsx("option",{value:"ws",children:"WebSocket"})]})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Timeout"}),o.jsx("input",{type:"number",value:n.timeout,onChange:s=>v(n.id,"timeout",s.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Protocol Version"}),o.jsx("input",{type:"text",value:n.protocolVersion,onChange:s=>v(n.id,"protocolVersion",s.target.value)})]}),o.jsxs(i,{children:[o.jsx("label",{children:"Approval Policy"}),o.jsxs("select",{value:n.approvalPolicy,onChange:s=>v(n.id,"approvalPolicy",s.target.value),children:[o.jsx("option",{value:"ask",children:"Ask"}),o.jsx("option",{value:"never",children:"Never"}),o.jsx("option",{value:"always",children:"Always"})]})]}),n.transport==="stdio"?o.jsxs(o.Fragment,{children:[o.jsxs(i,{children:[o.jsx("label",{children:"Command"}),o.jsx("input",{type:"text",value:n.command,onChange:s=>v(n.id,"command",s.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Args"}),o.jsx("textarea",{value:n.args,onChange:s=>v(n.id,"args",s.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Env"}),o.jsx("textarea",{placeholder:"API_KEY=value",value:n.env,onChange:s=>v(n.id,"env",s.target.value)})]})]}):o.jsxs(o.Fragment,{children:[o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Address"}),o.jsx("input",{type:"text",value:n.url,onChange:s=>v(n.id,"url",s.target.value)})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Headers"}),o.jsx("textarea",{value:n.headers,onChange:s=>v(n.id,"headers",s.target.value)})]})]}),o.jsxs(i,{$wide:!0,children:[o.jsx("label",{children:"Tool Filter"}),o.jsx("input",{type:"text",placeholder:"read_file, search, query",value:n.toolFilter,onChange:s=>v(n.id,"toolFilter",s.target.value)})]})]}),o.jsxs(A,{children:[o.jsx("input",{type:"checkbox",checked:n.alwaysLoad,onChange:s=>v(n.id,"alwaysLoad",s.target.checked)}),"Always load"]})]},n.id)),o.jsxs(N,{onClick:Ve,children:[o.jsx(O,{}),"Agregar MCP Server"]})]})]}),r.config.mcp.mode==="guided"&&o.jsxs($,{children:[o.jsxs(k,{children:[o.jsxs("div",{children:[o.jsx(_,{children:"JSON Generado"}),o.jsx(w,{children:"Payload que se guarda en la configuración del agente."})]}),o.jsx(ze,{})]}),o.jsx(Ce,{children:ue})]})]})]})]}),o.jsxs(Bo,{children:[M&&o.jsx(Go,{children:M}),o.jsx(Ie,{onClick:a,children:"Cancelar"}),o.jsx(Ie,{$variant:"primary",onClick:Ke,disabled:xe.isPending,children:Qe})]})]})})};export{cn as AgentModal};
