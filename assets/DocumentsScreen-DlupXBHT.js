import{r as c,a3 as Fe,j as r,d as le,a4 as Ee,n as O,y as n,O as Xe,a5 as Ye,v as Qe,Y as Ze,a6 as er,a7 as rr,a8 as or,V as Ce,H as Se,a9 as tr,aa as nr,ab as ir,ac as ar,ad as sr,ae as lr,N as dr,B as ne,W as cr,J as pr,o as v,C as Ie}from"./index-BZYg4alH.js";const mr=n.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6000;
`,hr=n.div`
  background: ${({theme:e})=>e.color.surface};
  width: 90%;
  max-width: 500px;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};
  border: 1px solid ${({theme:e})=>e.color.border};
  overflow: hidden;
`,gr=n.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ur=n.h3`
  font-weight: 700;
  color: ${({theme:e})=>e.color.text};
`,xr=n.div`
  padding: 0.75rem 1.5rem;
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.02)":"#f9fafb"};
  font-size: 0.8125rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
`,fr=n.span`
  cursor: pointer;
  color: ${({theme:e})=>e.color.textSecondary};
  &:hover { color: ${({theme:e})=>e.color.primary}; }
  &.active { color: ${({theme:e})=>e.color.text}; font-weight: 600; }
`,br=n.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`,ze=n.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"}; }
`,wr=n.button`
  margin-left: auto;
  padding: 0.4rem 0.75rem;
  background: ${({theme:e})=>e.color.primaryFaded};
  color: ${({theme:e})=>e.color.primary};
  border: none;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 0;
  ${ze}:hover & { opacity: 1; }
  &:hover { background: ${({theme:e})=>e.color.primary}; color: white; }
`,yr=n.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Pe=n.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
`,kr=n(Pe)`
  background: transparent;
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textSecondary};
  &:hover { background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"}; }
`,vr=n(Pe)`
  background: ${({theme:e})=>e.color.accent};
  border: none;
  color: white;
  &:hover { opacity: 0.9; }
`,$r=({isOpen:e,onClose:a,onMove:T,itemName:V})=>{const[C,F]=c.useState(null),[f,x]=c.useState([{id:null,name:"IMPONECT"}]),{data:E,isLoading:S}=Fe(C),y=(E==null?void 0:E.filter(d=>d.folder))||[],$=d=>{F(d.id),x(l=>[...l,{id:d.id,name:d.name}])},j=(d,l)=>{F(d.id),x(m=>m.slice(0,l+1))};return e?r.jsx(mr,{onClick:a,children:r.jsxs(hr,{onClick:d=>d.stopPropagation(),children:[r.jsxs(gr,{children:[r.jsxs(ur,{children:['Mover "',V,'"']}),r.jsx(le,{style:{cursor:"pointer",width:"1.25rem"},onClick:a})]}),r.jsx(xr,{children:f.map((d,l)=>r.jsxs(Ee.Fragment,{children:[l>0&&r.jsx("span",{children:"/"}),r.jsx(fr,{className:l===f.length-1?"active":"",onClick:()=>j(d,l),children:d.name})]},d.id||"root"))}),r.jsx(br,{children:S?r.jsx("div",{style:{padding:"2rem",textAlign:"center",opacity:.5},children:"Cargando carpetas..."}):y.length>0?y.map(d=>r.jsxs(ze,{onClick:()=>$(d),children:[r.jsx(O,{style:{width:"1.25rem",marginRight:"0.75rem",color:"#fbbf24"}}),r.jsx("span",{style:{fontSize:"0.875rem",fontWeight:500},children:d.name}),r.jsx(wr,{onClick:l=>{l.stopPropagation(),T(d.id)},children:"Mover a esta carpeta"})]},d.id)):r.jsx("div",{style:{padding:"2rem",textAlign:"center",opacity:.5},children:"Esta carpeta está vacía"})}),r.jsxs(yr,{children:[r.jsx(kr,{onClick:a,children:"Cancelar"}),r.jsx(vr,{onClick:()=>T(C),children:"Mover acá"})]})]})}):null},jr=Xe`
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
`,Cr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 5000;
  display: flex;
  flex-direction: column;
`,De=n.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5001;
  background: #00334d;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    background: #001a26;
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    top: ${({theme:e})=>e.spacing[3]};
    left: ${({theme:e})=>e.spacing[3]};
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    padding: 0 ${({theme:e})=>e.spacing[4]};
  }
`,Sr=n.div`
  height: 3.5rem;
  background: #00334d;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 10rem;
  justify-content: space-between;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: 7.25rem;
    height: auto;
    align-items: flex-end;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
    padding-top: ${({theme:e})=>e.spacing[16]};
  }
`,Ir=n.div`
  font-weight: 600;
  font-size: 1rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,Dr=n.div`
  flex: 1;
  background: #f1f5f9;
`,Mr=n.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  background:
    linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198,137,63,0.055)":"rgba(0,51,77,0.035)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.03)":"rgba(198,137,63,0.035)"} 1px, transparent 1px),
    ${({theme:e})=>e.color.background};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  color: ${({theme:e})=>e.color.text};
  user-select: none;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: auto;
    min-height: calc(100dvh - 8.5rem);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    background-size: 34px 34px, 34px 34px, 100% 100%;
  }
`,Tr=n.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background:
    linear-gradient(135deg, ${({theme:e})=>e.isDark?"rgba(13,31,41,0.94)":"rgba(255,255,255,0.92)"} 0%, ${({theme:e})=>e.color.surface} 100%);
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${jr} 7s ease-in-out infinite;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-wrap: wrap;
    padding: ${({theme:e})=>e.spacing[4]};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Fr=n.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }
`,ie=n.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,Er=n.div`
  flex: 1;
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textSecondary};
  display: flex;
  align-items: center;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    order: 3;
    flex-basis: 100%;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.inputHeight};
  }
`,zr=n.span`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: ${({theme:e})=>e.color.primary};
    text-decoration: underline;
  }
`,Me=n.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100%;
  }
`,de=n.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#fff"};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({theme:e})=>e.color.text};
  transition: all 0.2s;
  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e})=>e.color.accent};
    color: white;
    box-shadow: 0 0 16px rgba(198, 137, 63, 0.22);
    svg {
      color: white !important;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    justify-content: center;
    width: 100%;
  }
`,Pr=n(de)`
  background: #c6893f;
  color: #fff;
  border: none;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 12px rgba(198, 137, 63, 0.3);

  &:hover {
    background: #d4a373;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(198, 137, 63, 0.4);
  }



  svg {
    color: white !important;
    width: 1.1rem;
    height: 1.1rem;
  }
`,Br=n.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 400px;
  margin: 0 1rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    margin: 0;
    max-width: none;
    min-width: min(100%, 18rem);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-basis: 100%;
    order: 2;
  }
`,Nr=n.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.color.text};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #c6893f;
    background: ${({theme:e})=>e.color.surface};
    box-shadow: 0 0 0 2px rgba(198, 137, 63, 0.2);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.inputHeight};
  }
`,Ar=n.div`
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.color.textSecondary};
  pointer-events: none;
  svg { width: 1.1rem; height: 1.1rem; }
`,Rr=n.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: ${({theme:e})=>e.color.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover { color: #ef4444; }
  svg { width: 1rem; height: 1rem; }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: ${({theme:e})=>e.layout.buttonHeight};
    height: ${({theme:e})=>e.layout.buttonHeight};
    justify-content: center;
  }
`,Hr=n.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    overflow: visible;
  }
`,Or=n.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  background: ${({theme:e})=>e.isDark?"rgba(198,137,63,0.075)":"#f9fafb"};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${({theme:e})=>e.color.textSecondary};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,N=n.div``,Vr=n.div`
  flex: 1;
  overflow-y: auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: grid;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]};
    overflow-y: visible;
  }
`,Lr=n.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
  background-color: ${({$selected:e,theme:a})=>e?a.isDark?"rgba(198, 137, 63, 0.14)":a.color.accentFaded:"transparent"};
  &:hover {
    background: ${({$selected:e,theme:a})=>e?a.isDark?"rgba(198, 137, 63, 0.18)":a.color.accentFaded:a.isDark?"rgba(198, 137, 63, 0.08)":"#f3f4f6"};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[4]};
    border: 1px solid ${({$selected:e,theme:a})=>e?a.color.accent:a.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({$selected:e,theme:a})=>e?a.isDark?"rgba(198, 137, 63, 0.14)":a.color.accentFaded:a.color.surface};
    box-shadow: ${({theme:e})=>e.shadow.sm};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ur=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 6000;
  display: flex;
  flex-direction: column;
  color: white;
  backdrop-filter: blur(10px);
`,Wr=n.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  video {
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
`,Gr=n.div`
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: ${({theme:e})=>e.spacing[4]};
    padding-bottom: calc(${({theme:e})=>e.spacing[5]} + env(safe-area-inset-bottom));
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Kr=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    opacity: 0.8;
    &:hover { transform: scale(1.1); opacity: 1; }
    svg { width: 1.5rem; height: 1.5rem; }
  }

  .play-btn {
    width: 4rem;
    height: 4rem;
    background: #c6893f;
    border-radius: 50%;
    color: white;
    opacity: 1;
    box-shadow: 0 4px 15px rgba(198, 137, 63, 0.4);
    &:hover { background: #d4a373; }
    svg { width: 2.5rem; height: 2.5rem; margin-left: ${({$playing:e})=>e?"0":"4px"}; }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    flex-wrap: wrap;
    justify-content: center;

    button {
      min-width: ${({theme:e})=>e.layout.buttonHeight};
      min-height: ${({theme:e})=>e.layout.buttonHeight};
    }

    .play-btn {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`,_r=n.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: 0;
  
  .vol-btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    &:hover { background: rgba(255,255,255,0.2); }
    svg { width: 1rem; height: 1rem; }
  }

  input[type="range"] {
    width: 80px;
    cursor: pointer;
    accent-color: #d4a373;
  }

  .vol-percent {
    font-size: 0.75rem;
    font-weight: 800;
    min-width: 2.5rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    position: static;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`,qr=n.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  
  span {
    font-size: 0.75rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    min-width: 3rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Jr=n.input`
  flex: 1;
  height: 6px;
  cursor: pointer;
  accent-color: #d4a373;
  border-radius: 3px;
  background: rgba(255,255,255,0.2);
  appearance: none;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`,A=n.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[1]};
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    color: ${({theme:e})=>e.color.text};
    line-height: ${({theme:e})=>e.typography.lineHeight.snug};

    &::before {
      content: attr(data-label);
      color: ${({theme:e})=>e.color.textSecondary};
      font-size: ${({theme:e})=>e.typography.size.xs};
      font-weight: ${({theme:e})=>e.typography.weight.extrabold};
      text-transform: uppercase;
    }
  }
`,Xr=n.span`
  background: #dcfce7;
  color: #166534;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`,Yr=n.div`
  position: fixed;
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 1000;
  min-width: 180px;
  color: ${({theme:e})=>e.color.text};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    left: ${({theme:e})=>e.spacing[3]} !important;
    right: ${({theme:e})=>e.spacing[3]};
    top: auto !important;
    bottom: calc(${({theme:e})=>e.spacing[4]} + env(safe-area-inset-bottom));
    min-width: 0;
  }
`,w=n.div`
  padding: 0.625rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover {
    background: ${({$isDelete:e,theme:a})=>e?"#fef2f2":a.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
    color: ${({$isDelete:e})=>e?"#ef4444":"inherit"};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,Qr=n.div`
  padding: 2rem;
  text-align: center;
  min-height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`,Zr=n.div`
  margin: ${({theme:e})=>e.spacing[6]};
  padding: ${({theme:e})=>e.spacing[5]};
  border: 1px solid ${({theme:e})=>e.color.error};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.errorLight};
  color: ${({theme:e})=>e.color.error};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    margin: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,eo=n.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.error};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,ro=n.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,oo=n.code`
  display: block;
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  white-space: pre-wrap;
  word-break: break-word;
`,to=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,Te=n.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({$primary:e,theme:a})=>e?a.color.primary:a.color.surface};
  color: ${({$primary:e,theme:a})=>e?a.color.textInverse:a.color.text};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  cursor: pointer;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    justify-content: center;
  }
`,G=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,K=n.div`
  background: ${({theme:e})=>e.color.surface};
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: ${({theme:e})=>e.color.text};
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};
  border: 1px solid ${({theme:e})=>e.color.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    max-width: none;
    max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
    overflow-y: auto;
    padding: ${({theme:e})=>e.spacing[4]};
    border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} 0 0;
  }
`,_=n.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,ae=n.input`
  width: 100%;
  padding: 0.875rem 1rem;
  margin: 1.5rem 0;
  background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f9fafb"};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 0.75rem;
  outline: none;
  color: ${({theme:e})=>e.color.text};
  font-size: 1rem;
  transition: all 0.2s;
  &:focus {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.color.accent}33;
  }
`,q=n.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,J=n.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSecondary};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: ${({theme:e})=>e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,se=n.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({theme:e})=>e.color.accent};
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,no=n.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  background: #ef4444;
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #dc2626;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
  }
`,io=n.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,X=n.div`
  padding: 1rem;
  border: 2px solid ${({$selected:e,theme:a})=>e?a.color.accent:a.color.border};
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  background: ${({$selected:e,theme:a})=>e?a.isDark?"rgba(66, 153, 225, 0.1)":"#f0f9ff":"transparent"};
  
  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e,$selected:a})=>!a&&(e.isDark?"rgba(255,255,255,0.02)":"#f9fafb")};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    flex-direction: row;
    justify-content: flex-start;
  }
`,ao=(e,a)=>e?a.isGithubPages&&a.usesRelativeApi&&e.status===404?"El frontend publicado en GitHub Pages esta intentando llamar /api/onedrive dentro de GitHub Pages. Ese host solo sirve archivos estaticos, no ejecuta el backend Express. Para sincronizar OneDrive en produccion necesitamos publicar el backend en una URL HTTPS y configurar VITE_API_BASE_URL al hacer deploy.":e.status===401?"OneDrive respondio que no hay una sesion/token valido. Hay que volver a conectar Microsoft desde el backend publico.":e.message||"No se pudo sincronizar OneDrive.":null,lo=()=>{var ve,$e,je;const{folderId:e}=Ye(),a=Qe(),[T,V]=Ze(),[C,F]=c.useState(null),[f,x]=c.useState([]),[E,S]=c.useState(null),[y,$]=c.useState(""),[j,d]=c.useState({show:!1,type:null,title:"",value:""}),[l,m]=c.useState({show:!1,selectedType:"folder",skipGrid:!1,value:""}),[Y,R]=c.useState({show:!1,password:""}),[z,Q]=c.useState({show:!1,items:[]}),[Z,L]=c.useState(null),[H,ce]=c.useState(null),[p,k]=c.useState({show:!1,file:null,playing:!1,volume:parseFloat(localStorage.getItem("videoVolume")||"0.5"),currentTime:0,duration:0}),h=c.useRef(null),[U,pe]=c.useState([{id:null,name:"IMPONECT"}]),{data:W,isLoading:Be,error:I,refetch:me,isFetching:ee}=Fe(e,y),{createFolder:Ne,deleteItem:Ae,renameItem:Re,createFile:He,moveItem:he,copyItem:Oe}=er(),P=c.useMemo(()=>rr(),[e]),b=c.useMemo(()=>Array.isArray(W)?W:[],[W]),ge=ao(I,P),Ve=Be||ee&&!W,[D,ue]=c.useState(null);c.useEffect(()=>{or("info","documents.screen","Documents screen rendered",{folderId:e||null,searchQuery:y,runtime:P})},[e,y,P]),c.useEffect(()=>{const o=T.get("focus");if(!o||!b.some(i=>i.id===o))return;x([o]),S(o),requestAnimationFrame(()=>{var i;(i=document.querySelector(`[data-document-id="${CSS.escape(o)}"]`))==null||i.scrollIntoView({behavior:"smooth",block:"center"})});const t=new URLSearchParams(T);t.delete("focus"),V(t,{replace:!0})},[b,T,V]);const Le=o=>o?Math.floor(o/1024).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" KB":"-",Ue=o=>{if(!o)return"-";const t=Math.floor(o/1e3),i=Math.floor(t/60),s=t%60;return`${i}:${s.toString().padStart(2,"0")}`};c.useEffect(()=>{const o=()=>F(null),t=i=>{i.key==="Escape"&&(x([]),S(null),m(s=>({...s,show:!1})),k(s=>({...s,show:!1,playing:!1})),$("")),(i.key==="Delete"||i.key==="Del")&&f.length>0&&g("delete")};return window.addEventListener("click",o),window.addEventListener("keydown",t),()=>{window.removeEventListener("click",o),window.removeEventListener("keydown",t)}},[f,b]),c.useEffect(()=>{if(!e)pe([{id:null,name:"IMPONECT"}]);else{const o=b.find(t=>t.id===e);pe(t=>{const i=t.findIndex(s=>s.id===e);return i!==-1?t.slice(0,i+1):o?[...t,{id:e,name:o.name}]:t})}},[e,b]);const We=(o,t)=>{if(o.stopPropagation(),o.ctrlKey||o.metaKey)x(i=>i.includes(t.id)?i.filter(s=>s!==t.id):[...i,t.id]),S(t.id);else if(o.shiftKey&&E){const i=b.findIndex(u=>u.id===E),s=b.findIndex(u=>u.id===t.id);if(i!==-1&&s!==-1){const u=Math.min(i,s),B=Math.max(i,s),oe=b.slice(u,B+1).map(te=>te.id);x(te=>Array.from(new Set([...te,...oe])))}}else x([t.id]),S(t.id)},Ge=o=>{$(""),a(`/documents/${o.id}`)},xe=o=>{$(""),a(o.id?`/documents/${o.id}`:"/documents")},Ke=()=>U.length>1?xe(U[U.length-2]):a(-1),_e=()=>a(1),fe=(o,t=null)=>{o.preventDefault(),o.stopPropagation(),t&&!f.includes(t.id)?(x([t.id]),S(t.id)):t||x([]),F({x:o.pageX,y:o.pageY,item:t})},g=(o,t=null)=>{var u;const i=b.filter(B=>f.includes(B.id)),s=t||i[0];if(!(!s&&!["openCreationModal","newFolder","newWord","newExcel","newText","paste"].includes(o))){switch(o){case"open":s.folder?Ge(s):be(s);break;case"openCreationModal":m({show:!0,selectedType:"folder",skipGrid:!1,value:""});break;case"download":s.folder?alert("Las carpetas no se pueden descargar directamente"):window.open(s["@microsoft.graph.downloadUrl"],"_blank");break;case"route":const B=(u=s.parentReference)==null?void 0:u.id;$(""),a(B?`/documents/${B}`:"/documents");break;case"newFolder":m({show:!0,selectedType:"folder",skipGrid:!0,value:""});break;case"newWord":m({show:!0,selectedType:"word",skipGrid:!0,value:""});break;case"newExcel":m({show:!0,selectedType:"excel",skipGrid:!0,value:""});break;case"newText":m({show:!0,selectedType:"text",skipGrid:!0,value:""});break;case"rename":d({show:!0,type:"rename",title:"Renombrar",value:s.name});break;case"copy":ue({type:"copy",items:i});break;case"move":Q({show:!0,items:i});break;case"paste":D&&D.type==="copy"&&(D.items.forEach(oe=>Oe.mutate({itemId:oe.id,parentId:e})),ue(null));break;case"delete":R({show:!0,password:""});break}F(null)}},be=o=>{o.name.match(/\.(mp4|mov|avi|mkv|webm)$/i)?k(i=>({...i,show:!0,file:o,playing:!0})):o.name.match(/\.(docx?|xlsx?|pptx?)$/i)?window.open(o.webUrl,"_blank"):ce(o),L(null)},M=o=>{if(h.current)switch(o){case"play":p.playing?h.current.pause():h.current.play(),k(u=>({...u,playing:!u.playing}));break;case"back10":h.current.currentTime-=10;break;case"fwd10":h.current.currentTime+=10;break;case"fullscreen":h.current.requestFullscreen();break;case"next":case"prev":const t=b.filter(u=>u.name.match(/\.(mp4|mov|avi|mkv|webm)$/i)),i=t.findIndex(u=>u.id===p.file.id),s=o==="next"?t[i+1]:t[i-1];s&&k({...p,file:s,playing:!0});break}},re=o=>{const t=Math.max(0,Math.min(1,parseFloat(o)));h.current&&(h.current.volume=t),k(i=>({...i,volume:t})),localStorage.setItem("videoVolume",t.toString())},we=async()=>{j.value&&(j.type==="rename"&&Re.mutate({itemId:f[0],newName:j.value}),d(o=>({...o,show:!1})))},ye=async()=>{l.value&&(l.selectedType==="folder"?Ne.mutate({parentId:e,name:l.value}):He.mutate({parentId:e,name:l.value,type:l.selectedType},{onSuccess:o=>L(o)}),m(o=>({...o,show:!1})))},ke=()=>{Y.password==="Founders2025!"?(f.forEach(o=>Ae.mutate({itemId:o})),R({show:!1,password:""}),x([])):alert("Contraseña incorrecta")},qe=(o,t)=>{const i=f.includes(t.id)?f:[t.id];f.includes(t.id)||x([t.id]),o.dataTransfer.setData("itemIds",JSON.stringify(i))},Je=(o,t)=>{o.preventDefault();const i=o.dataTransfer.getData("itemIds");i&&t.folder&&JSON.parse(i).forEach(s=>s!==t.id&&he.mutate({itemId:s,parentId:t.id}))};if(H){const o=H.name.match(/\.(jpe?g|png|gif|bmp|webp)$/i),t=H["@microsoft.graph.downloadUrl"];return r.jsxs(Cr,{children:[r.jsx(De,{onClick:()=>ce(null),title:"Volver a ImponectApp",children:r.jsx(Ce,{})}),r.jsxs(Sr,{children:[r.jsx(Ir,{children:H.name}),r.jsxs(Me,{children:[r.jsxs(de,{onClick:()=>window.open(t,"_blank"),style:{marginRight:"0.5rem"},children:[r.jsx(Se,{style:{width:"1rem",marginRight:"0.5rem"}})," Descargar"]}),r.jsxs(de,{onClick:()=>{if(o){const i=window.open("","_blank");i.document.write(`<html><body style="margin:0; display:flex; justify-content:center; align-items:center; background:#000;"><img src="${t}" style="max-width:100%; max-height:100%;" onload="window.print();window.close()"></body></html>`),i.document.close()}else{const i=document.getElementById("file-iframe");i&&(i.contentWindow.focus(),i.contentWindow.print())}},children:[r.jsx(tr,{style:{width:"1rem",marginRight:"0.5rem"}})," Imprimir"]})]})]}),r.jsx(Dr,{children:o?r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",background:"#1a1a1a"},children:r.jsx("img",{src:t,alt:H.name,style:{maxWidth:"95%",maxHeight:"95%",boxShadow:"0 0 50px rgba(0,0,0,0.5)"}})}):r.jsx("iframe",{id:"file-iframe",src:t,width:"100%",height:"100%",frameBorder:"0",title:"File Viewer",allowFullScreen:!0})})]})}return r.jsxs(Mr,{onClick:()=>x([]),children:[p.show&&r.jsxs(Ur,{onClick:()=>k(o=>({...o,show:!1,playing:!1})),children:[r.jsx(De,{onClick:()=>k(o=>({...o,show:!1,playing:!1})),children:r.jsx(le,{})}),r.jsx(Wr,{onClick:o=>o.stopPropagation(),children:r.jsx("video",{ref:h,autoPlay:!0,src:(ve=p.file)==null?void 0:ve["@microsoft.graph.downloadUrl"],onTimeUpdate:()=>k(o=>{var t;return{...o,currentTime:((t=h.current)==null?void 0:t.currentTime)||0}}),onLoadedMetadata:()=>{h.current&&(h.current.volume=p.volume),k(o=>{var t;return{...o,duration:((t=h.current)==null?void 0:t.duration)||0}})},onEnded:()=>M("next")})}),r.jsxs(Gr,{onClick:o=>o.stopPropagation(),children:[r.jsxs(qr,{children:[r.jsxs("span",{children:[Math.floor(p.currentTime/60),":",(Math.floor(p.currentTime)%60).toString().padStart(2,"0")]}),r.jsx(Jr,{type:"range",min:"0",max:p.duration||0,step:"0.1",value:p.currentTime,onChange:o=>{h.current&&(h.current.currentTime=o.target.value)}}),r.jsxs("span",{children:[Math.floor(p.duration/60),":",(Math.floor(p.duration)%60).toString().padStart(2,"0")]})]}),r.jsxs(Kr,{$playing:p.playing,children:[r.jsx("button",{onClick:()=>window.open(p.file["@microsoft.graph.downloadUrl"],"_blank"),title:"Descargar",children:r.jsx(Se,{})}),r.jsx("div",{style:{flex:1}}),r.jsx("button",{onClick:()=>M("prev"),children:r.jsx(nr,{})}),r.jsx("button",{onClick:()=>M("back10"),children:r.jsx("span",{style:{fontSize:"0.7rem",fontWeight:900},children:"-10"})}),r.jsx("button",{className:"play-btn",onClick:()=>M("play"),children:p.playing?r.jsx(ir,{}):r.jsx(ar,{})}),r.jsx("button",{onClick:()=>M("fwd10"),children:r.jsx("span",{style:{fontSize:"0.7rem",fontWeight:900},children:"+10"})}),r.jsx("button",{onClick:()=>M("next"),children:r.jsx(sr,{})}),r.jsx("div",{style:{flex:1}}),r.jsxs(_r,{children:[r.jsx("button",{className:"vol-btn",onClick:()=>re(p.volume-.1),children:r.jsx("span",{style:{fontWeight:900},children:"-"})}),r.jsx(lr,{style:{width:"1.2rem"}}),r.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.volume,onChange:o=>re(o.target.value)}),r.jsx("button",{className:"vol-btn",onClick:()=>re(p.volume+.1),children:r.jsx("span",{style:{fontWeight:900},children:"+"})}),r.jsxs("span",{className:"vol-percent",children:[Math.round(p.volume*100),"%"]}),r.jsx("button",{onClick:()=>M("fullscreen"),style:{marginLeft:"1rem"},children:r.jsx(dr,{})})]})]})]})]}),r.jsxs(Tr,{children:[r.jsxs(Fr,{children:[r.jsx(ie,{onClick:()=>me(),title:"Sincronizar OneDrive",children:r.jsx(ne,{className:ee?"animate-spin":""})}),r.jsx(ie,{onClick:Ke,title:"Atrás",children:r.jsx(Ce,{})}),r.jsx(ie,{onClick:_e,title:"Adelante",children:r.jsx(cr,{})})]}),r.jsx(Er,{children:U.map((o,t)=>r.jsxs(Ee.Fragment,{children:[t>0&&r.jsx("span",{style:{margin:"0 0.5rem",opacity:.5},children:"/"}),r.jsx(zr,{onClick:()=>xe(o),children:o.name})]},o.id||"root"))}),r.jsxs(Br,{children:[r.jsx(Ar,{children:r.jsx(pr,{})}),r.jsx(Nr,{placeholder:"Buscar en Imponect...",value:y,onChange:o=>$(o.target.value)}),y&&r.jsx(Rr,{onClick:()=>$(""),children:r.jsx(le,{})})]}),r.jsx(Me,{children:r.jsxs(Pr,{onClick:()=>g("openCreationModal"),children:[r.jsx(O,{style:{marginRight:"0.5rem"}})," Crear"]})})]}),r.jsxs(Hr,{onContextMenu:o=>fe(o),children:[r.jsxs(Or,{children:[r.jsx(N,{children:"Nombre"}),r.jsx(N,{children:"Status"}),r.jsx(N,{children:"Modificado"}),r.jsx(N,{children:"Tipo"}),r.jsx(N,{children:"Peso"}),r.jsx(N,{children:"Duración"})]}),Ve?r.jsxs(Qr,{children:[r.jsx(ne,{className:"animate-spin"}),r.jsx("span",{children:"Sincronizando documentos con OneDrive..."})]}):ge?r.jsxs(Zr,{children:[r.jsx(eo,{children:"No se pudo sincronizar OneDrive"}),r.jsx(ro,{children:ge}),r.jsx(oo,{children:JSON.stringify({status:(I==null?void 0:I.status)||null,apiBaseUrl:P.apiBaseUrl,usesRelativeApi:P.usesRelativeApi,href:P.href,details:(I==null?void 0:I.details)||null},null,2)}),r.jsxs(to,{children:[r.jsxs(Te,{$primary:!0,onClick:()=>me(),children:[r.jsx(ne,{className:ee?"animate-spin":""}),"Reintentar"]}),r.jsxs(Te,{onClick:()=>a("/logs"),children:[r.jsx(v,{}),"Ver logs"]})]})]}):r.jsxs(Vr,{children:[b.map(o=>r.jsxs(Lr,{"data-document-id":o.id,$selected:f.includes(o.id),draggable:!0,onDragStart:t=>qe(t,o),onDragOver:t=>t.preventDefault(),onDrop:t=>Je(t,o),onClick:t=>We(t,o),onDoubleClick:()=>g("open",o),onContextMenu:t=>fe(t,o),children:[r.jsxs(A,{"data-label":"Nombre",children:[o.folder?r.jsx(O,{style:{width:"1.25rem",marginRight:"0.5rem",color:"#fbbf24"}}):r.jsx(v,{style:{width:"1.25rem",marginRight:"0.5rem",color:"#60a5fa"}}),o.name]}),r.jsx(A,{"data-label":"Status",children:r.jsx(Xr,{children:"Sincronizado"})}),r.jsx(A,{"data-label":"Modificado",children:new Date(o.lastModifiedDateTime).toLocaleDateString()}),r.jsx(A,{"data-label":"Tipo",children:o.folder?"Carpeta":o.name.split(".").pop().toUpperCase()}),r.jsx(A,{"data-label":"Peso",children:Le(o.size)}),r.jsx(A,{"data-label":"Duración",children:o.video?Ue(o.video.duration):"-"})]},o.id)),b.length===0&&r.jsx("div",{style:{padding:"4rem",textAlign:"center",color:"#6b7280"},children:y?`No se encontraron resultados para "${y}"`:"Esta carpeta está vacía"})]})]}),C&&r.jsx(Yr,{style:{top:C.y,left:C.x},onClick:o=>o.stopPropagation(),children:C.item?r.jsxs(r.Fragment,{children:[r.jsx(w,{onClick:()=>g("open"),children:"Abrir"}),r.jsx(w,{onClick:()=>g("download"),children:"Descargar"}),r.jsx(w,{onClick:()=>g("route"),children:"Ir a la ruta"}),r.jsx(w,{onClick:()=>g("copy"),children:"Copiar"}),r.jsx(w,{onClick:()=>g("move"),children:"Mover"}),r.jsx(w,{onClick:()=>g("rename"),children:"Renombrar"}),r.jsxs(w,{$isDelete:!0,onClick:()=>g("delete"),children:[r.jsx(Ie,{style:{width:"1rem",marginRight:"0.5rem"}})," Borrar"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs(w,{onClick:()=>g("newFolder"),children:[r.jsx(O,{style:{width:"1rem",marginRight:"0.5rem"}})," Nueva Carpeta"]}),r.jsxs(w,{onClick:()=>g("newExcel"),children:[r.jsx(v,{style:{width:"1rem",marginRight:"0.5rem",color:"#217346"}})," Nuevo Excel"]}),r.jsxs(w,{onClick:()=>g("newWord"),children:[r.jsx(v,{style:{width:"1rem",marginRight:"0.5rem",color:"#2b579a"}})," Nuevo Word"]}),r.jsxs(w,{onClick:()=>g("newText"),children:[r.jsx(v,{style:{width:"1rem",marginRight:"0.5rem",color:"#64748b"}})," Nuevo Archivo de texto"]}),D&&r.jsxs(w,{onClick:()=>g("paste"),children:["Pegar ",D.items.length>1?`(${D.items.length}) elementos`:`"${($e=D.items[0])==null?void 0:$e.name}"`]})]})}),z.show&&r.jsx($r,{isOpen:z.show,itemName:z.items.length>1?`${z.items.length} elementos`:(je=z.items[0])==null?void 0:je.name,onClose:()=>Q({show:!1,items:[]}),onMove:o=>{z.items.forEach(t=>he.mutate({itemId:t.id,parentId:o})),Q({show:!1,items:[]}),x([])}}),l.show&&r.jsx(G,{onClick:()=>m(o=>({...o,show:!1})),children:r.jsxs(K,{onClick:o=>o.stopPropagation(),children:[r.jsx(_,{children:l.skipGrid?`Crear ${l.selectedType==="folder"?"Carpeta":l.selectedType==="text"?"Archivo de texto":l.selectedType.charAt(0).toUpperCase()+l.selectedType.slice(1)}`:"Crear"}),!l.skipGrid&&r.jsxs(io,{children:[r.jsxs(X,{$selected:l.selectedType==="folder",onClick:()=>m(o=>({...o,selectedType:"folder"})),children:[r.jsx(O,{style:{color:"#fbbf24"}}),r.jsx("span",{children:"Nueva Carpeta"})]}),r.jsxs(X,{$selected:l.selectedType==="word",onClick:()=>m(o=>({...o,selectedType:"word"})),children:[r.jsx(v,{style:{color:"#2b579a"}}),r.jsx("span",{children:"Nuevo Word"})]}),r.jsxs(X,{$selected:l.selectedType==="excel",onClick:()=>m(o=>({...o,selectedType:"excel"})),children:[r.jsx(v,{style:{color:"#217346"}}),r.jsx("span",{children:"Nuevo Excel"})]}),r.jsxs(X,{$selected:l.selectedType==="text",onClick:()=>m(o=>({...o,selectedType:"text"})),children:[r.jsx(v,{style:{color:"#64748b"}}),r.jsx("span",{children:"Archivo de texto"})]})]}),r.jsx(ae,{autoFocus:!0,placeholder:"Nombre...",value:l.value,onChange:o=>m(t=>({...t,value:o.target.value})),onKeyDown:o=>o.key==="Enter"&&ye()}),r.jsxs(q,{children:[r.jsx(J,{onClick:()=>m(o=>({...o,show:!1})),children:"Cancelar"}),r.jsx(se,{onClick:ye,children:"Crear"})]})]})}),j.show&&r.jsx(G,{onClick:()=>d(o=>({...o,show:!1})),children:r.jsxs(K,{onClick:o=>o.stopPropagation(),children:[r.jsx(_,{children:j.title}),r.jsx(ae,{autoFocus:!0,value:j.value,onChange:o=>d(t=>({...t,value:o.target.value})),onKeyDown:o=>o.key==="Enter"&&we()}),r.jsxs(q,{children:[r.jsx(J,{onClick:()=>d(o=>({...o,show:!1})),children:"Cancelar"}),r.jsx(se,{onClick:we,children:"Confirmar"})]})]})}),Y.show&&r.jsx(G,{onClick:()=>R(o=>({...o,show:!1})),children:r.jsxs(K,{onClick:o=>o.stopPropagation(),children:[r.jsx(Ie,{style:{width:"3rem",color:"#f59e0b",marginBottom:"1rem"}}),r.jsx(_,{children:"Confirmar Eliminación"}),r.jsx("p",{style:{marginBottom:"1rem",fontSize:"0.875rem"},children:"Se requiere contraseña para eliminar."}),r.jsx(ae,{type:"password",placeholder:"Contraseña Founders",value:Y.password,onChange:o=>R(t=>({...t,password:o.target.value})),onKeyDown:o=>o.key==="Enter"&&ke()}),r.jsxs(q,{children:[r.jsx(J,{onClick:()=>R(o=>({...o,show:!1})),children:"Cancelar"}),r.jsx(no,{onClick:ke,children:"Eliminar"})]})]})}),Z&&r.jsx(G,{onClick:()=>L(null),children:r.jsxs(K,{onClick:o=>o.stopPropagation(),children:[r.jsx("div",{style:{width:"4rem",height:"4rem",background:"#dcfce7",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem"},children:r.jsx(v,{style:{width:"2rem",color:"#166534"}})}),r.jsx(_,{children:"¡Archivo Creado!"}),r.jsxs("p",{style:{marginBottom:"2rem",color:"#6b7280"},children:["El archivo ",r.jsx("strong",{children:Z.name})," se ha creado. ¿Abrir ahora?"]}),r.jsxs(q,{children:[r.jsx(J,{onClick:()=>L(null),children:"Cerrar"}),r.jsx(se,{onClick:()=>be(Z),children:"Abrir"})]})]})})]})};export{lo as DocumentsScreen};
