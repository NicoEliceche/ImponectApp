import{y as o,v as i,j as t,V as r}from"./index-BZYg4alH.js";const a=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`,n=o.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10000;
  pointer-events: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    top: ${({theme:e})=>e.spacing[3]};
    left: ${({theme:e})=>e.spacing[3]};
    right: ${({theme:e})=>e.spacing[3]};
  }
`,s=o.button`
  pointer-events: auto;
  background: #00334d;
  color: white;
  padding: 0.75rem 1.5rem;
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
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    min-height: ${({theme:e})=>e.layout.buttonHeight};
    width: 100%;
    justify-content: center;
  }
`,c=o.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #f8fafc;
`,p=()=>{const e=i();return t.jsxs(a,{children:[t.jsx(n,{children:t.jsxs(s,{onClick:()=>e("/"),title:"Volver a ImponectApp",children:[t.jsx(r,{})," Volver a la App"]})}),t.jsx(c,{src:"https://app.clickup.com/90133071152/v/s/901313397809",title:"ClickUp Workspace",allow:"clipboard-read; clipboard-write; fullscreen"})]})};export{p as ClickUpPortalScreen};
