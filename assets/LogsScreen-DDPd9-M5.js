import{y as i,r as l,ax as c,a7 as h,ay as m,j as e,B as u,o as $,az as f,H as y,l as b,aA as w,a8 as d,aB as j}from"./index-BZYg4alH.js";const v=i.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[5]};
  min-height: calc(100vh - 4rem);

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    gap: ${({theme:r})=>r.spacing[4]};
    min-height: auto;
  }
`,k=i.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:r})=>r.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    align-items: stretch;
  }
`,z=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[2]};
`,L=i.h1`
  margin: 0;
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size["3xl"]};
  font-weight: ${({theme:r})=>r.typography.weight.extrabold};
`,C=i.p`
  margin: 0;
  max-width: 52rem;
  color: ${({theme:r})=>r.color.textSecondary};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: ${({theme:r})=>r.typography.lineHeight.normal};
`,S=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
  flex-wrap: wrap;

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,n=i.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  border: 1px solid ${({$danger:r,theme:o})=>r?o.color.error:o.color.border};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({$primary:r,theme:o})=>r?o.color.primary:o.color.surface};
  color: ${({$danger:r,$primary:o,theme:a})=>r?a.color.error:o?a.color.textInverse:a.color.text};
  padding: ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[4]};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  cursor: pointer;

  &:hover {
    border-color: ${({$danger:r,theme:o})=>r?o.color.error:o.color.primary};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    min-height: ${({theme:r})=>r.layout.buttonHeight};
    justify-content: center;
  }
`,I=i.div`
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.surface};
  padding: ${({theme:r})=>r.spacing[4]};
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:r})=>r.spacing[3]};

  @media (max-width: ${({theme:r})=>r.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,t=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[1]};
  min-width: 0;

  span {
    color: ${({theme:r})=>r.color.textTertiary};
    font-size: ${({theme:r})=>r.typography.size.xs};
    font-weight: ${({theme:r})=>r.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({theme:r})=>r.color.text};
    font-size: ${({theme:r})=>r.typography.size.sm};
    word-break: break-word;
  }
`,A=i.div`
  border: 1px dashed ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.textSecondary};
  padding: ${({theme:r})=>r.spacing[8]};
  text-align: center;
  font-weight: ${({theme:r})=>r.typography.weight.bold};

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    padding: ${({theme:r})=>r.spacing[5]};
  }
`,T=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[3]};
`,E=i.article`
  border: 1px solid ${({$level:r,theme:o})=>r==="error"?o.color.error:r==="warn"?o.color.warning:o.color.border};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.surface};
  overflow: hidden;
`,H=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:r})=>r.spacing[4]};
  padding: ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[4]};
  border-bottom: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.neutral[50]};

  @media (max-width: ${({theme:r})=>r.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:r})=>r.spacing[2]};
  }
`,B=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[1]};
  min-width: 0;

  strong {
    color: ${({theme:r})=>r.color.text};
    font-size: ${({theme:r})=>r.typography.size.sm};
  }

  span {
    color: ${({theme:r})=>r.color.textSecondary};
    font-size: ${({theme:r})=>r.typography.size.xs};
  }
`,R=i.span`
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({$level:r,theme:o})=>r==="error"?o.color.errorLight:r==="warn"?o.color.warningLight:o.color.primaryFaded};
  color: ${({$level:r,theme:o})=>r==="error"?o.color.error:r==="warn"?o.color.warning:o.color.primary};
  padding: ${({theme:r})=>r.spacing[1]} ${({theme:r})=>r.spacing[3]};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.extrabold};
  text-transform: uppercase;
`,D=i.pre`
  margin: 0;
  padding: ${({theme:r})=>r.spacing[4]};
  color: ${({theme:r})=>r.color.textSecondary};
  font-size: ${({theme:r})=>r.typography.size.xs};
  line-height: ${({theme:r})=>r.typography.lineHeight.normal};
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`,F=()=>{const[r,o]=l.useState(()=>c()),a=l.useMemo(()=>h(),[]);l.useEffect(()=>m(o),[]);const p=()=>o(c()),g=async()=>{var s;if((s=navigator.clipboard)!=null&&s.writeText){await navigator.clipboard.writeText(w(r)),d("info","logs.screen","Client logs copied to clipboard",{count:r.length});return}d("warn","logs.screen","Clipboard API is not available",{count:r.length})},x=()=>{j(),o([])};return e.jsxs(v,{children:[e.jsxs(k,{children:[e.jsxs(z,{children:[e.jsx(L,{children:"Client logs"}),e.jsx(C,{children:"Eventos guardados en este navegador. Sirven para diagnosticar rutas, API base y errores de sincronizacion sin backend."})]}),e.jsxs(S,{children:[e.jsxs(n,{onClick:p,title:"Actualizar logs",children:[e.jsx(u,{}),"Actualizar"]}),e.jsxs(n,{onClick:g,disabled:!r.length,title:"Copiar logs",children:[e.jsx($,{}),"Copiar"]}),e.jsxs(n,{$primary:!0,onClick:f,disabled:!r.length,title:"Descargar client.log",children:[e.jsx(y,{}),"Descargar"]}),e.jsxs(n,{$danger:!0,onClick:x,disabled:!r.length,title:"Limpiar logs",children:[e.jsx(b,{}),"Limpiar"]})]})]}),e.jsxs(I,{children:[e.jsxs(t,{children:[e.jsx("span",{children:"URL"}),e.jsx("strong",{children:a.href||"-"})]}),e.jsxs(t,{children:[e.jsx("span",{children:"Base"}),e.jsx("strong",{children:a.baseUrl})]}),e.jsxs(t,{children:[e.jsx("span",{children:"API"}),e.jsx("strong",{children:a.apiBaseUrl||"relativa (/api)"})]}),e.jsxs(t,{children:[e.jsx("span",{children:"Host"}),e.jsx("strong",{children:a.hostname||"-"})]})]}),r.length?e.jsx(T,{children:[...r].reverse().map(s=>e.jsxs(E,{$level:s.level,children:[e.jsxs(H,{children:[e.jsxs(B,{children:[e.jsx("strong",{children:s.scope}),e.jsxs("span",{children:[s.timestamp," - ",s.message]})]}),e.jsx(R,{$level:s.level,children:s.level})]}),e.jsx(D,{children:JSON.stringify(s.details,null,2)})]},s.id))}):e.jsx(A,{children:"Todavia no hay logs guardados en este navegador."})]})};export{F as LogsScreen};
