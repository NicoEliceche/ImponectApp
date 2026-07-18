import{s as W,t as Qe,y as a,p as so,O as co,u as Xe,r as d,w as vo,b as oo,j as r,A as ko,c as ee,I as re,e as ne,J as Je,B as Ge,af as te,ag as Co,ah as So,ai as Io,aj as ie,ak as ae,l as eo,al as Ve,am as Ze,V as or,N as er,d as ro,an as rr,ao as nr,ap as tr,aq as ir,ar,as as sr,at as cr,au as dr,av as lr,U as pr,o as ur,C as no,P as gr,aw as fr,W as xr,$ as br}from"./index-BZYg4alH.js";const B=Qe("/api/email"),O=async o=>{const s=(o.headers.get("content-type")||"").includes("application/json")?await o.json():await o.text();if(!o.ok){const u=typeof s=="string"?s:s==null?void 0:s.error;throw new Error(u||"No se pudo completar la operación de Email.")}return s},ye=(o,e)=>{if(!e)return o;const s=o.includes("?")?"&":"?";return`${o}${s}accountId=${encodeURIComponent(e)}`},mr=o=>new Promise((e,s)=>{const u=new FileReader;u.onload=()=>e(String(u.result||"").split(",")[1]||""),u.onerror=()=>s(new Error(`No se pudo leer el adjunto ${o.name}.`)),u.readAsDataURL(o)}),hr=async o=>({...o,attachments:await Promise.all((o.attachments||[]).map(async e=>{var s;return{filename:e.name,contentType:((s=e.file)==null?void 0:s.type)||"application/octet-stream",content:await mr(e.file)}}))}),we=async(o,e)=>{try{const s=await W(`${B}/${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(await hr(e))});return O(s)}catch(s){throw s instanceof TypeError?new Error("No se pudo conectar con el servidor de Email."):s}},yr=async()=>{const o=await W(`${B}/accounts`);return O(o)},wr=async o=>{const e=await W(ye(`${B}/config`,o));return O(e)},$r=async o=>{const e=await W(`${B}/config`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});return O(e)},jr=async({folder:o,accountId:e})=>{const s=await W(ye(`${B}/inbox/${o}`,e));return O(s)},vr=async o=>{const e=await W(`${B}/action`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});return O(e)},kr=async o=>we("send",o),Cr=async o=>we("draft",o),$e=co`
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Sr=co`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,je=co`
  to { transform: rotate(360deg); }
`,Ir=co`
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
`,se=a.div`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: ${({$setup:o,$sidebarWidth:e=220,$listWidth:s=420,theme:u})=>o?"1fr":`${Math.round(Number(e)||220)}px ${u.spacing[2]} ${Math.round(Number(s)||420)}px ${u.spacing[2]} minmax(0, 1fr)`};
  height: calc(100vh - 3rem);
  background:
    linear-gradient(90deg, ${({theme:o})=>o!=null&&o.isDark?"rgba(198,137,63,0.055)":"rgba(0,51,77,0.035)"} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.03)":"rgba(198,137,63,0.035)"} 1px, transparent 1px),
    ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.background)||"#f4f7f9"}};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  border-radius: ${({theme:o})=>o.radius.md};
  overflow: hidden;
  cursor: ${({$isResizing:o})=>o?"col-resize":"default"};
  user-select: ${({$isResizing:o})=>o?"none":"auto"};

  @media (max-width: ${({theme:o})=>o.breakpoints.lg}) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: calc(100vh - 3rem);
    cursor: default;
    user-select: auto;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.md}) {
    min-height: auto;
    border-radius: ${({theme:o})=>o.radius.md};
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    border: none;
    background: transparent;
    overflow: visible;
  }
`,Er=a.div`
  position: relative;
  min-width: 0;
  background:
    linear-gradient(180deg, ${({theme:o})=>o!=null&&o.isDark?"#0d1f29":"#ffffff"} 0%, ${({theme:o})=>o!=null&&o.isDark?"#06131a":"#f8fafc"} 100%);
  display: flex;
  flex-direction: column;
  padding: 1rem 0.6rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.12), transparent);
    animation: ${Ir} 7s ease-in-out infinite;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.lg}) {
    border-bottom: 1px solid ${({theme:o})=>o.color.border};
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    padding: ${({theme:o})=>o.spacing[3]};
    margin-bottom: ${({theme:o})=>o.spacing[3]};
    overflow: hidden;
  }
`,ce=a.button`
  position: relative;
  width: 100%;
  min-width: ${({theme:o})=>o.spacing[2]};
  align-self: stretch;
  border: none;
  border-left: 1px solid ${({$active:o,theme:e})=>o?e.color.accent:e.color.border};
  border-right: 1px solid ${({$active:o,theme:e})=>o?e.color.accent:e.color.border};
  padding: 0;
  background: ${({$active:o,theme:e})=>o?e.isDark?"rgba(198, 137, 63, 0.24)":e.color.accentFaded:e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[100]};
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
    border-radius: ${({theme:o})=>o.radius.full};
    background: ${({theme:o})=>o.color.accent};
    opacity: ${({$active:o})=>o?1:.4};
    transform: translate(-50%, -50%);
    box-shadow: 0 0 16px rgba(198, 137, 63, 0.24);
  }

  &:hover,
  &:focus-visible {
    border-color: ${({theme:o})=>o.color.accent};
    background: ${({theme:o})=>o.isDark?"rgba(198, 137, 63, 0.18)":o.color.accentFaded};
    outline: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.lg}) {
    display: none;
  }
`,Dr=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[4]};

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    margin-bottom: ${({theme:o})=>o.spacing[3]};
  }
`,Ar=a.select`
  width: 100%;
  min-height: ${({theme:o})=>o.layout.inputHeight};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.isDark?"rgba(255,255,255,0.04)":o.color.neutral[50]};
  color: ${({theme:o})=>o.color.text};
  padding: 0 ${({theme:o})=>o.spacing[3]};
  font-size: ${({theme:o})=>o.typography.size.base};
  font-weight: ${({theme:o})=>o.typography.weight.extrabold};
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${({theme:o})=>o.color.accent};
    box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.12);
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:o})=>o.color.textDisabled};
  }
`,Mr=a.span`
  color: ${({theme:o})=>o.color.textTertiary};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  padding: 0 ${({theme:o})=>o.spacing[2]};
`,Lr=a.div`
  flex: 1;
`,Rr=a.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[6]};
`,zr=a.div`
  width: 100%;
  max-width: 25rem;
  padding: ${({theme:o})=>o.spacing[10]};
  border-radius: ${({theme:o})=>o.radius["2xl"]};
  text-align: center;
  background: ${({theme:o})=>o.isDark?"rgba(255,255,255,0.03)":o.color.neutral[50]};
  border: 1px solid ${({theme:o})=>o.color.border};
  box-shadow: ${({theme:o})=>o.shadow.lg}, 0 0 28px rgba(198, 137, 63, 0.12);
`,Tr=a.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto ${({theme:o})=>o.spacing[5]};
  border-radius: ${({theme:o})=>o.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:o})=>o.color.accent};
  background: ${({theme:o})=>o.isDark?"rgba(198, 137, 63, 0.12)":o.color.accentFaded};

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`,_r=a.h2`
  margin: 0;
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size["2xl"]};
  font-weight: ${({theme:o})=>o.typography.weight.extrabold};
`,Pr=a.button`
  width: 100%;
  margin-top: ${({theme:o})=>o.spacing[8]};
  margin-bottom: 0;
  background: ${({theme:o})=>o.color.accent};
  color: ${({theme:o})=>o.color.textInverse};
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: none;
  font-weight: ${({theme:o})=>o.typography.weight.extrabold};
  font-size: ${({theme:o})=>o.typography.size.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[3]};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: ${({theme:o})=>o.shadow.md};

  &:hover {
    background: ${({theme:o})=>o.color.accentLight};
    transform: translateY(-1px);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;

  p {
    font-size: 9px;
    font-weight: 800;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    margin-top: ${({theme:o})=>o.spacing[3]};
  }
`;const Nr=a.button`
  background: #c6893f;
  color: white;
  padding: 0.65rem;
  border-radius: 12px;
  border: none;
  font-weight: 800;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.25), 0 0 18px rgba(198, 137, 63, 0.16);

  &:hover {
    background: #d4a373;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(198, 137, 63, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
    box-shadow: none;
  }

  &:disabled:hover {
    background: #c6893f;
    transform: none;
    box-shadow: none;
  }

  svg { 
    width: 18px !important; 
    height: 18px !important; 
    min-width: 18px;
    min-height: 18px;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-height: ${({theme:o})=>o.layout.buttonHeight};
    margin-bottom: ${({theme:o})=>o.spacing[3]};
  }
`,to=a.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${({$active:o})=>o?"700":"500"};
  background: ${({$active:o,theme:e})=>o?e!=null&&e.isDark?"rgba(198, 137, 63, 0.15)":"#fff8f0":"transparent"};
  color: ${({$active:o,theme:e})=>{var s;return o?"#c6893f":((s=e==null?void 0:e.color)==null?void 0:s.textSecondary)||"#64748b"}};
  transition: all 0.2s ease;

  &:hover {
    background: ${({$active:o,theme:e})=>o?e!=null&&e.isDark?"rgba(198, 137, 63, 0.2)":"#fff8f0":e!=null&&e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
    transform: translateX(2px);
  }

  svg, img { 
    width: 18px !important; 
    height: 18px !important;
    min-width: 18px;
    min-height: 18px;
    flex-shrink: 0;
  }
`,Fr=a.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.025)":"#ffffff"} 0%, ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.background)||"#f4f7f9"}} 100%);

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    overflow: hidden;
  }
`,Hr=a.div`
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(198,137,63,0.055)":"#ffffff"};
  min-height: 3.25rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    padding: ${({theme:o})=>o.spacing[3]};
    gap: ${({theme:o})=>o.spacing[2]};
    align-items: flex-start;
    flex-wrap: wrap;
  }
`,Wr=a.div`
  padding: 0.85rem 1.25rem;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.025)":"#ffffff"};
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  display: flex;
  justify-content: center;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,Br=a.div`
  position: relative;
  width: 100%;
`,Or=a.input`
  width: 100%;
  padding: 0.55rem 1rem 0.55rem 2.5rem;
  border-radius: 8px;
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.04)":"#f8fafc"};
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  outline: none;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:focus { 
    border-color: #c6893f; 
    background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
    box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.1);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-height: ${({theme:o})=>o.layout.inputHeight};
  }
`,Eo=a.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`,p=a.button`
  background: none;
  border: none;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.textSecondary)||"#64748b"}};
  cursor: pointer;
  padding: 0.45rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  ${({$active:o})=>o&&so`
    background: ${({theme:e})=>e!=null&&e.isDark?"rgba(198, 137, 63, 0.2)":"#fff8f0"};
    color: #c6893f;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  `}

  &:hover {
    background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.08)":"#f1f5f9"};
    color: ${({$danger:o})=>o?"#ef4444":"#c6893f"};
    ${({$active:o})=>o&&so`
        background: ${({theme:e})=>e!=null&&e.isDark?"rgba(198, 137, 63, 0.25)":"#fff3e6"};
    `}
  }

  svg, img { 
    width: 18px !important; 
    height: 18px !important;
    min-width: 18px;
    min-height: 18px;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-width: ${({theme:o})=>o.layout.buttonHeight};
    min-height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,qr=a.div`
  padding: 0.65rem 1.25rem;
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  cursor: pointer;
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  background: ${({$selected:o,theme:e})=>o?e!=null&&e.isDark?"rgba(198, 137, 63, 0.15)":"#fff9f2":"transparent"};
  transition: all 0.15s;

  &:hover {
    background: ${({$selected:o,theme:e})=>o?e!=null&&e.isDark?"rgba(198, 137, 63, 0.2)":"#fff3e6":e!=null&&e.isDark?"rgba(255,255,255,0.04)":"#f8fafc"};
    box-shadow: inset 2px 0 0 #c6893f;
  }

  &:hover .hover-checkbox,
  &:focus-within .hover-checkbox {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover .email-row-actions,
  &:focus-within .email-row-actions {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover .email-row-date,
  &:focus-within .email-row-date {
    opacity: 0;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-height: 4.5rem;
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,Ur=a.span`
  font-weight: ${({$unread:o})=>o?"800":"600"};
  font-size: 0.875rem;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  ${({$unread:o})=>o&&`
    text-shadow: 0 0 10px rgba(198, 137, 63, 0.4);
  `}
`,Kr=a.span`
  font-weight: ${({$unread:o})=>o?"700":"400"};
  font-size: 0.8125rem;
  color: ${({$unread:o,theme:e})=>{var s;return o?"#c6893f":((s=e==null?void 0:e.color)==null?void 0:s.textSecondary)||"#64748b"}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Do=a.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,Yr=a.div`
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  width: 850px;
  height: 85vh;
  border-radius: 20px;
  border: 1px solid #c6893f;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(198, 137, 63, 0.2), 0 0 32px rgba(198, 137, 63, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${$e} 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: ${({theme:o})=>o.breakpoints.md}) {
    width: min(100%, 44rem);
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    height: calc(100dvh - ${({theme:o})=>o.spacing[6]});
    border-radius: ${({theme:o})=>o.radius.lg} ${({theme:o})=>o.radius.lg} ${({theme:o})=>o.radius.md} ${({theme:o})=>o.radius.md};
  }
`,Qr=a.div`
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.02)":"#fcfcfc"};
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
`,Ao=a.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(198, 137, 63, 0.1)":"#fffaf5"};
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};

  h3 {
    font-size: 1rem;
    font-weight: 900;
    color: #c6893f;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  svg { width: 20px !important; height: 20px !important; }
`,Mo=a.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  transition: all 0.2s;

  &:last-child { border-bottom: none; }

  label {
    background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.03)":"#f8fafc"};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; /* Centered horizontally */
    padding: 0.4rem; /* Reduced height */
    font-size: 0.7rem;
    font-weight: 900;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-right: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  }

  input {
    padding: 0.6rem 1.5rem; /* Reduced height */
    border: none;
    background: transparent;
    font-size: 0.9375rem;
    font-weight: 500;
    color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
    outline: none;
    width: 100%;

    &::placeholder { color: #94a3b8; }
  }

  &:focus-within {
    background: ${({theme:o})=>o!=null&&o.isDark?"rgba(198, 137, 63, 0.05)":"#fffdfa"};
    label { color: #c6893f; border-right-color: #c6893f; }
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    grid-template-columns: 1fr;

    label {
      justify-content: flex-start;
      border-right: none;
      border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
      padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
    }

    input {
      min-height: ${({theme:o})=>o.layout.inputHeight};
      padding: 0 ${({theme:o})=>o.spacing[3]};
    }
  }
`,Xr=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  position: relative;
  overflow: hidden; /* Ensure scroll stays internal */
`,Jr=a.div`
  padding: 0.5rem 1rem;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.02)":"#f8fafc"};
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`,Gr=a.div`
  flex: 1;
  padding: 2rem;
  outline: none;
  overflow-y: auto; /* Internal scroll */
  font-size: 1rem;
  line-height: 1.7;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};

  &:empty:before {
    content: attr(placeholder);
    color: #94a3b8;
    font-style: italic;
  }

  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin: 1rem 0;
  }

  ul, ol {
    padding-left: 2rem;
    margin: 1rem 0;
  }
  
  ul { list-style-type: disc; }
  ol { list-style-type: decimal; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    padding: ${({theme:o})=>o.spacing[4]};
    font-size: ${({theme:o})=>o.typography.size.base};
  }
`,Vr=a.div`
  padding: 1rem 1.5rem;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.02)":"#fafafa"};
  border-top: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-shrink: 0; /* Don't squash when editor grows */
`,Zr=a.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: all 0.2s;

  &:hover {
    border-color: #c6893f;
    transform: translateY(-1px);
  }

  button {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    padding: 2px;
    display: flex;
    &:hover { transform: scale(1.2); }
    svg { width: 14px !important; height: 14px !important; }
  }

  svg { width: 16px !important; height: 16px !important; color: #c6893f; }
`,on=a.div`
  padding: 1rem 1.5rem;
  background: ${({theme:o})=>o!=null&&o.isDark?"rgba(0,0,0,0.2)":"#f8fafc"};
  border-top: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-shrink: 0; /* Keep it fixed at the bottom */

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    flex-direction: column-reverse;
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,en=a.button`
  background: #c6893f;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  border: none;
  font-weight: 900;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.3);

  &:hover {
    background: #d4a373;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(198, 137, 63, 0.4);
  }

  &:active { transform: translateY(0); }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    min-height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,de=a.button`
  background: transparent;
  color: #64748b;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"};
    color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    min-height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,rn=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.errorLight)||"rgba(239, 68, 68, 0.12)"}};
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.error)||"#ef4444"}};
  font-size: 0.875rem;
  font-weight: 700;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-height: ${({theme:o})=>o.layout.buttonHeight};
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,nn=a.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(198, 137, 63, 0.15);
  backdrop-filter: blur(4px);
  border: 4px dashed #c6893f;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  .message {
    background: white;
    padding: 1.5rem 3rem;
    border-radius: 100px;
    box-shadow: 0 20px 50px rgba(198, 137, 63, 0.3);
    color: #c6893f;
    font-weight: 900;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`,tn=a.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({$type:o})=>o==="error"?"#dc2626":o==="loading"?"#334155":"#10b981"};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px ${({$type:o})=>o==="error"?"rgba(220, 38, 38, 0.3)":"rgba(15, 23, 42, 0.3)"};
  z-index: 9999;
  animation: ${Sr} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-weight: 700;
  font-size: 0.9375rem;

  svg { width: 20px !important; height: 20px !important; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    left: ${({theme:o})=>o.spacing[3]};
    right: ${({theme:o})=>o.spacing[3]};
    bottom: calc(5.6rem + env(safe-area-inset-bottom));
    justify-content: space-between;
  }
`,an=a.span`
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: white;
  border-radius: 50%;
  animation: ${je} 0.8s linear infinite;
  flex-shrink: 0;
`,sn=a.button`
  display: flex;
  padding: 0.125rem;
  margin-left: 0.25rem;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`,cn=a.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`,dn=a.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6000;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({theme:o})=>o.spacing[3]};
  }
`,To=a.div`
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 450px;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  box-shadow: ${({theme:o})=>{var e;return((e=o==null?void 0:o.shadow)==null?void 0:e["2xl"])||"0 25px 50px -12px rgba(0,0,0,0.25)"}};
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    max-width: none;
    max-height: calc(100dvh - ${({theme:o})=>o.spacing[6]});
    overflow-y: auto;
    padding: ${({theme:o})=>o.spacing[4]};
    border-radius: ${({theme:o})=>o.radius.lg} ${({theme:o})=>o.radius.lg} ${({theme:o})=>o.radius.md} ${({theme:o})=>o.radius.md};
  }
`,ln=a(To)`
  max-width: 1000px;
  width: 90%;
  height: 85vh;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    height: calc(100dvh - ${({theme:o})=>o.spacing[6]});
  }
`,pn=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  label {
    font-size: 10px;
    font-weight: 800;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
    background: ${({theme:o})=>o!=null&&o.isDark?"rgba(255,255,255,0.04)":"#f8fafc"};
    color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
    outline: none;
    font-size: 0.875rem;
    &:focus { border-color: #c6893f; box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.1); }
  }

  textarea {
    min-height: 6.25rem;
    resize: vertical;
  }
`,le=a.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 1rem;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,pe=a.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`,ue=a.button`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  background: transparent;
  color: #64748b;
  cursor: pointer;
  font-weight: 700;
  &:hover { background: rgba(0,0,0,0.05); color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}}; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    min-height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,un=a.button`
  padding: 0.75rem 2rem;
  border-radius: 10px;
  border: none;
  background: #c6893f;
  color: white;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.2);
  &:hover { background: #d4a373; transform: translateY(-1px); }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: 100%;
    min-height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,gn=a.div`
  flex: 1;
  overflow-y: auto;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    max-height: 48dvh;
  }
`,fn=a.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  gap: 2px;
`,xn=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  gap: ${({theme:o})=>o.spacing[3]};
`,bn=a.div`
  position: relative;
  flex: 0 0 calc(${({theme:o})=>o.spacing[16]} + ${({theme:o})=>o.spacing[6]});
  height: ${({theme:o})=>o.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,mn=a.span`
  font-size: 0.75rem;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.textSecondary)||"#64748b"}};
  text-align: right;
  transition: opacity 0.15s ease;
`,hn=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({$selected:o})=>o?"1":"0"};
  pointer-events: ${({$selected:o})=>o?"auto":"none"};
  transition: opacity 0.2s;
  input { cursor: pointer; accent-color: #c6893f; width: 14px; height: 14px; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    opacity: 1;
    pointer-events: auto;
  }
`,yn=a.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:o})=>o.spacing[2]};
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity 0.15s ease;

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    opacity: 1;
    pointer-events: auto;
  }
`,ge=a.button`
  width: ${({theme:o})=>o.spacing[8]};
  height: ${({theme:o})=>o.spacing[8]};
  padding: 0;
  border: none;
  border-radius: ${({theme:o})=>o.radius.md};
  background: transparent;
  color: ${({theme:o})=>o.color.textTertiary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease, transform 0.15s ease;

  &:hover {
    background: transparent;
    color: ${({$danger:o,theme:e})=>o?e.color.error:e.color.accent};
    transform: translateY(-1px);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  ${({$envelope:o})=>o&&so`
    svg .envelope-fill {
      fill: ${({theme:e})=>e.color.accent};
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    &:hover svg .envelope-fill {
      opacity: 1;
    }
  `}

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    width: ${({theme:o})=>o.layout.buttonHeight};
    height: ${({theme:o})=>o.layout.buttonHeight};
  }
`,Lo=a.div`
  padding: 8rem 2rem;
  text-align: center;
  color: #94a3b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  svg { width: 4rem; height: 4rem; opacity: 0.2; }
  p { font-weight: 700; margin: 0; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    padding: ${({theme:o})=>o.spacing[8]} ${({theme:o})=>o.spacing[4]};
  }
`,wn=a.div`
  width: ${({theme:o})=>o.spacing[8]};
  height: ${({theme:o})=>o.spacing[8]};
  border-radius: ${({theme:o})=>o.radius.full};
  border: 2px solid ${({theme:o})=>o.color.border};
  border-bottom-color: ${({theme:o})=>o.color.accent};
  animation: ${je} 0.8s linear infinite;
`,$n=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.errorLight};
  color: ${({theme:o})=>o.color.error};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  line-height: ${({theme:o})=>o.typography.lineHeight.normal};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`,jn=a.div`
  min-width: 0;
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
  border-left: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};

  @media (max-width: ${({theme:o})=>o.breakpoints.lg}) {
    min-height: 28rem;
    border-left: none;
    border-top: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    min-height: 24rem;
    height: auto;
    margin-top: ${({theme:o})=>o.spacing[3]};
    padding: ${({theme:o})=>o.spacing[4]};
    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
  }
`,fe=a.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  padding-bottom: 1rem;
  h2 { font-size: 1.375rem; font-weight: 800; margin-bottom: 0.75rem; color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}}; }
  .meta { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;}
  .sender { font-weight: 700; font-size: 0.875rem; color: #c6893f; }
  .date { font-size: 0.75rem; color: #94a3b8; }

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    h2 {
      font-size: ${({theme:o})=>o.typography.size.xl};
    }

    .meta {
      flex-direction: column;
      gap: ${({theme:o})=>o.spacing[2]};
    }
  }
`,xe=a.div`
  line-height: 1.6;
  font-size: 0.9375rem;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.textSecondary)||"#64748b"}};
  white-space: pre-wrap;
  flex: 1;
  overflow-y: auto;

  img,
  table,
  iframe {
    max-width: 100%;
  }

  table {
    display: block;
    overflow-x: auto;
  }

  ${({theme:o})=>(o==null?void 0:o.isDark)&&so`
    color-scheme: dark;
    background-color: ${o.color.neutral[50]};
    color: ${o.color.text};

    &,
    body,
    table,
    thead,
    tbody,
    tfoot,
    tr,
    td,
    th,
    div,
    section,
    article,
    main,
    header,
    footer,
    p,
    span,
    font,
    center,
    blockquote,
    ul,
    ol,
    li,
    pre,
    code {
      background-color: ${o.color.neutral[50]} !important;
      border-color: ${o.color.border} !important;
      color: ${o.color.text} !important;
    }

    [bgcolor],
    [style*='background'],
    [style*='background-color'] {
      background-color: ${o.color.neutral[50]} !important;
    }

    [color],
    [style*='color'] {
      color: ${o.color.text} !important;
    }

    a,
    a * {
      color: ${o.color.accentLight} !important;
    }

    img,
    picture,
    svg,
    video,
    canvas {
      background-color: transparent !important;
      color: inherit !important;
    }

    hr {
      background-color: ${o.color.border} !important;
      border-color: ${o.color.border} !important;
    }
  `}

  @media (max-width: ${({theme:o})=>o.breakpoints.sm}) {
    font-size: ${({theme:o})=>o.typography.size.base};
    line-height: ${({theme:o})=>o.typography.lineHeight.relaxed||o.typography.lineHeight.normal};
  }
`,N=a.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: all 0.2s;
  gap: 0.75rem;
  &:hover {
    background: ${({$isDelete:o,theme:e})=>o?"#fef2f2":e!=null&&e.isDark?"rgba(255,255,255,0.05)":"#f3f4f6"};
    color: ${({$isDelete:o})=>o?"#ef4444":"inherit"};
  }
`,vn=a.div`
  position: fixed;
  background: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.surface)||"#ffffff"}};
  border: 1px solid ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  box-shadow: ${({theme:o})=>{var e;return((e=o==null?void 0:o.shadow)==null?void 0:e.lg)||"0 10px 15px -3px rgba(0,0,0,0.1)"}};
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 8000;
  min-width: 180px;
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.text)||"#001a26"}};
  animation: ${$e} 0.15s ease-out;
`,kn=a.div`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-top: 1px dashed ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.border)||"#e2e8f0"}};
  color: ${({theme:o})=>{var e;return((e=o==null?void 0:o.color)==null?void 0:e.textSecondary)||"#64748b"}};
  font-size: 0.8125rem;
  font-style: italic;
`,io=()=>({show:!1,to:"",cc:"",subject:"",body:"",attachments:[]}),Ro=()=>({id:null,email:"",password:"",signature:"",imap_host:"imap.hostinger.com",imap_port:993,smtp_host:"smtp.hostinger.com",smtp_port:465}),Cn=o=>({...o,imap_port:Number.parseInt(o.imap_port,10)||993,smtp_port:Number.parseInt(o.smtp_port,10)||465}),zo=o=>(o==null?void 0:o.uid)||(o==null?void 0:o.id),Sn=(o,e)=>{const s=Array.isArray(o==null?void 0:o.flags)?o.flags:[];return s.includes(e)?o:{...o,flags:[...s,e]}},In=(o,e)=>{const s=Array.isArray(o==null?void 0:o.flags)?o.flags:[];return s.includes(e)?{...o,flags:s.filter(u=>u!==e)}:o},ve="imponect.email.layoutWidths",En=220,be=190,Dn=340,An=420,me=320,Mn=680,Ln=380,ke=8,he=(o,e,s)=>Math.min(Math.max(Number(o)||e,e),s),ao=(o,e=Number.POSITIVE_INFINITY)=>{let s=he(o==null?void 0:o.sidebarWidth,be,Dn),u=he(o==null?void 0:o.listWidth,me,Mn);if(Number.isFinite(e)){const M=e-Ln-ke*2;if(M>0&&s+u>M){const h=s+u-M,v=Math.min(h,Math.max(0,u-me));u-=v;const K=Math.min(h-v,Math.max(0,s-be));s-=K}}return{sidebarWidth:Math.round(s),listWidth:Math.round(u)}},Rn=()=>{const o={sidebarWidth:En,listWidth:An};if(typeof window>"u")return o;try{const e=window.sessionStorage.getItem(ve);return e?ao(JSON.parse(e)):o}catch{return o}},_n=()=>{const o=Xe(),[e,s]=d.useState("INBOX"),[u,M]=d.useState(""),[h,v]=d.useState([]),[K,_o]=d.useState(null),[lo,Ce]=d.useState(""),[m,q]=d.useState(null),[F,z]=d.useState(null),[Y,U]=d.useState(!1),[Po,No]=d.useState("edit"),[Fo,Q]=d.useState(""),[g,y]=d.useState(io),[Ho,T]=d.useState(""),[po,X]=d.useState({show:!1,uids:[],action:"move"}),[uo,go]=d.useState(null),[Se,fo]=d.useState(!1),[C,_]=d.useState({show:!1,message:"",type:"success"}),[E,Ie]=d.useState({bold:!1,italic:!1,underline:!1,bulleted:!1,ordered:!1,alignLeft:!0,alignCenter:!1,alignRight:!1,alignJustify:!1}),k=d.useRef(null),Wo=d.useRef(null),xo=d.useRef(null),bo=d.useRef(null),[J,Bo]=d.useState(Rn),[mo,Oo]=d.useState("");d.useEffect(()=>{window.sessionStorage.setItem(ve,JSON.stringify(J))},[J]),d.useEffect(()=>{const n=()=>{var i;const t=(i=bo.current)==null?void 0:i.getBoundingClientRect().width;t&&Bo(c=>ao(c,t))};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const G=d.useCallback((n,t)=>{if(n.button!==0)return;n.preventDefault(),n.stopPropagation();const i=bo.current;if(!i)return;Oo(t);const c=$=>{const f=i.getBoundingClientRect(),H=$.clientX;Bo(b=>ao(t==="sidebar"?{...b,sidebarWidth:H-f.left}:{...b,listWidth:H-f.left-b.sidebarWidth-ke},f.width))},l=()=>{Oo(""),window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l)};window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l)},[]),Ee=d.useCallback(n=>{G(n,"sidebar")},[G]),De=d.useCallback(n=>{G(n,"list")},[G]),{data:qo=[],isLoading:Uo}=vo({queryKey:["emailAccounts"],queryFn:yr,retry:!1}),j=Array.isArray(qo)?qo:[],ho=j.find(n=>String(n.id)===String(u))||j[0]||null,x=(ho==null?void 0:ho.id)||"",{data:P,isLoading:Ae}=vo({queryKey:["emailConfig",x],queryFn:()=>wr(x),enabled:!!x,retry:!1}),[w,S]=d.useState(Ro);d.useEffect(()=>{if(j.length===0){M("");return}const n=j.some(t=>String(t.id)===String(u));(!u||!n)&&M(String(j[0].id))},[j,u]),d.useEffect(()=>{P&&!Y&&S(P)},[P,Y]);const Me=["emails",e,x],{data:Ko,isLoading:Le,refetch:yo,isRefetching:Re,isError:Yo}=vo({queryKey:Me,queryFn:()=>jr({folder:e,accountId:x}),enabled:!!x,retry:!1}),I=(Array.isArray(Ko)?Ko:[]).filter(n=>(n.subject||"").toLowerCase().includes(lo.toLowerCase())||(n.from||"").toLowerCase().includes(lo.toLowerCase())),V=h.length>0&&h.every(n=>{var i;const t=I.find(c=>(c.uid||c.id)===n);return(i=t==null?void 0:t.flags)==null?void 0:i.includes("\\Seen")}),Z=oo({mutationFn:vr,onMutate:async n=>{if(!n.isAuto&&!n.isInline)return null;const t=new Set((n.uids||[]).map(String)),i=["emails",n.folder,n.accountId];await o.cancelQueries({queryKey:i});const c=o.getQueryData(i),l=m,$=F,f=h,H=b=>!b||!t.has(String(zo(b)))?b:n.action==="markRead"?Sn(b,"\\Seen"):n.action==="markUnread"?In(b,"\\Seen"):n.action==="move"&&n.targetFolder==="Trash"?null:b;return o.setQueryData(i,b=>Array.isArray(b)?b.map(H).filter(Boolean):b),q(b=>H(b)),z(b=>H(b)),n.action==="move"&&n.targetFolder==="Trash"&&v(b=>b.filter(Ye=>!t.has(String(Ye)))),{previousEmails:c,previousViewingEmail:l,previousFullScreenEmail:$,previousSelectedIds:f,queryKey:i,targetIds:t}},onSuccess:(n,t)=>{if(!t.isAuto){if(t.isInline){yo();return}yo(),t.isAuto||v([]),X({show:!1,uids:[],action:"move"}),go(null)}},onError:(n,t,i)=>{!t.isAuto&&!t.isInline||!i||(o.setQueryData(i.queryKey,i.previousEmails),q(i.previousViewingEmail),z(i.previousFullScreenEmail),v(i.previousSelectedIds))}}),wo=oo({mutationFn:$r,onSuccess:async n=>{var i;const t=(i=n==null?void 0:n.account)!=null&&i.id?String(n.account.id):"";await o.invalidateQueries({queryKey:["emailAccounts"]}),await o.invalidateQueries({queryKey:["emailConfig"]}),await o.invalidateQueries({queryKey:["emails"]}),t&&M(t),Q(""),U(!1),_({show:!0,message:"Configuración guardada",type:"success"})},onError:n=>{Q(n.message||"No se pudo guardar la configuración de la cuenta.")}}),L=oo({mutationFn:kr,onSuccess:async(n,t)=>{y(io()),T(""),_({show:!0,message:"Mensaje enviado",type:"success"}),await o.invalidateQueries({queryKey:["emails","Sent",t.accountId]})},onError:n=>{_({show:!0,message:n.message||"No se pudo enviar el mensaje.",type:"error"})}}),R=oo({mutationFn:({silent:n,...t})=>Cr(t),onSuccess:async(n,t)=>{y(io()),T(""),t.silent||_({show:!0,message:"Borrador guardado",type:"success"}),await o.invalidateQueries({queryKey:["emails","Drafts",t.accountId]})},onError:n=>{T(n.message||"No se pudo guardar el borrador.")}});d.useEffect(()=>{var t;const n=(m==null?void 0:m.uid)||(m==null?void 0:m.id);x&&m&&!((t=m.flags)!=null&&t.includes("\\Seen"))&&xo.current!==n&&(xo.current=n,Z.mutate({uids:[n],action:"markRead",folder:e,accountId:x,isAuto:!0}))},[x,e,m]),d.useEffect(()=>{v([]),_o(null),q(null),z(null),s("INBOX")},[x]),d.useEffect(()=>{if(C.show&&C.type!=="loading"){const n=setTimeout(()=>_(t=>({...t,show:!1})),5e3);return()=>clearTimeout(n)}},[C.show,C.type]),d.useEffect(()=>{g.show&&k.current&&(k.current.innerHTML=g.body||"")},[g.show]);const Qo=()=>{No("create"),Q(""),S(Ro()),U(!0)},ze=()=>{No(x?"edit":"create"),Q(""),S(P||Ro()),U(!0)},Te=n=>{M(n.target.value)},_e=()=>{wo.mutate(Cn(w))},Pe=(n,t)=>{if(n.stopPropagation(),n.shiftKey&&K){const i=I.map($=>$.uid||$.id),c=i.indexOf(K),l=i.indexOf(t);if(c!==-1&&l!==-1){const $=i.slice(Math.min(c,l),Math.max(c,l)+1);v(f=>Array.from(new Set([...f,...$])));return}}v(i=>i.includes(t)?i.filter(c=>c!==t):[...i,t]),_o(t)},D=(n,t=null)=>{if(h.length===0||!x)return;if((n==="move"||n==="copy")&&!t){X({show:!0,uids:h,action:n});return}const i={uids:h,action:n==="delete"?"move":n,folder:e,targetFolder:n==="delete"?"Trash":t,accountId:x};Z.mutate(i)},Ne=(n,t)=>{n.stopPropagation();const i=zo(t);if(!i||!x)return;const l=(t.flags?!t.flags.includes("\\Seen"):!1)?"markRead":"markUnread";l==="markUnread"&&(xo.current=i),Z.mutate({uids:[i],action:l,folder:e,accountId:x,isInline:!0})},Fe=(n,t)=>{n.stopPropagation();const i=zo(t);!i||!x||Z.mutate({uids:[i],action:"move",folder:e,targetFolder:"Trash",accountId:x,isInline:!0})},$o=()=>{k.current&&Ie({bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline"),bulleted:document.queryCommandState("insertUnorderedList"),ordered:document.queryCommandState("insertOrderedList"),alignLeft:document.queryCommandState("justifyLeft"),alignCenter:document.queryCommandState("justifyCenter"),alignRight:document.queryCommandState("justifyRight"),alignJustify:document.queryCommandState("justifyFull")})},A=(n,t=null)=>{var i;document.execCommand(n,!1,t),$o(),(i=k.current)==null||i.focus()},Xo=()=>{var n,t;return{to:g.to,cc:g.cc,subject:g.subject,text:((n=k.current)==null?void 0:n.innerText)||"",html:((t=k.current)==null?void 0:t.innerHTML)||"",attachments:g.attachments,accountId:x}},Jo=()=>{y(io()),T("")},jo=(n=!1)=>{if(R.isPending||L.isPending)return;const t=Xo();if(!(t.to||t.cc||t.subject||t.html||t.attachments.length>0)){Jo();return}T(""),R.mutate({...t,silent:n})},He=()=>{if(R.isPending||L.isPending)return;const n=Xo();if(!n.to.trim()){T("Ingresá al menos un destinatario.");return}T(""),y(t=>({...t,show:!1,body:n.html})),_({show:!0,message:"Enviando mensaje...",type:"loading"}),L.mutate(n)},We=n=>{const t=(n.clipboardData||n.originalEvent.clipboardData).items;for(let i=0;i<t.length;i++)if(t[i].type.indexOf("image")!==-1){n.preventDefault();const c=t[i].getAsFile(),l=new FileReader;l.onload=$=>{const f=`<img src="${$.target.result}" style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin: 1rem 0;" />`;document.execCommand("insertHTML",!1,f)},l.readAsDataURL(c)}},Be=n=>{if($o(),n.key===" "){const t=window.getSelection();if(!t.rangeCount)return;const c=t.getRangeAt(0).startContainer,l=c.textContent;l.startsWith("* ")||l.startsWith("- ")?(n.preventDefault(),document.execCommand("insertUnorderedList"),c.textContent=l.substring(2)):l.startsWith("1. ")?(n.preventDefault(),document.execCommand("insertOrderedList"),c.textContent=l.substring(3)):l.startsWith("# ")&&(n.preventDefault(),document.execCommand("formatBlock",!1,"H1"),c.textContent=l.substring(2))}if(n.key==="Enter"||n.key===" "){const t=k.current.innerHTML,i=t.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\*(.*?)\*/g,"<i>$1</i>").replace(/__(.*?)__/g,"<u>$1</u>").replace(/~~(.*?)~~/g,"<strike>$1</strike>");if(t!==i){const c=Oe(k.current);k.current.innerHTML=i,qe(k.current,c)}}},Oe=n=>{const t=window.getSelection();if(t.rangeCount>0){const i=t.getRangeAt(0),c=i.cloneRange();return c.selectNodeContents(n),c.setEnd(i.startContainer,i.startOffset),c.toString().length}return 0},qe=(n,t)=>{const i=window.getSelection(),c=Go(n,{count:t});c&&(c.collapse(!1),i.removeAllRanges(),i.addRange(c))},Go=(n,t,i)=>{if(i||(i=document.createRange(),i.selectNode(n),i.setStart(n,0)),t.count===0)i.setEnd(n,t.count);else if(n&&t.count>0)if(n.nodeType===Node.TEXT_NODE)n.textContent.length<t.count?t.count-=n.textContent.length:(i.setEnd(n,t.count),t.count=0);else for(let c=0;c<n.childNodes.length&&(i=Go(n.childNodes[c],t,i),t.count!==0);c++);return i},Vo=n=>{const t=Array.from(n).map(i=>({id:Math.random().toString(36).substr(2,9),name:i.name,size:(i.size/1024).toFixed(1)+" KB",file:i}));y(i=>({...i,attachments:[...i.attachments,...t]}))},Ue=n=>{y(t=>({...t,attachments:t.attachments.filter(i=>i.id!==n)}))},Zo=[{id:"INBOX",label:"Bandeja",icon:r.jsx(fr,{})},{id:"Sent",label:"Enviados",icon:r.jsx(xr,{})},{id:"Drafts",label:"Borradores",icon:r.jsx(br,{})},{id:"Junk",label:"Correo no deseado",icon:r.jsx(no,{})},{id:"Trash",label:"Papelera",icon:r.jsx(eo,{})}],oe=(P==null?void 0:P.signature)||"",Ke=Uo||Ae||Le;return!Uo&&j.length===0&&!Y?r.jsx(se,{$setup:!0,children:r.jsx(Rr,{children:r.jsxs(zr,{children:[r.jsx(Tr,{children:r.jsx(ko,{})}),r.jsx(_r,{children:"Configura tu Email"}),r.jsxs(Pr,{onClick:Qo,children:[r.jsx(ee,{})," Configurar"]})]})})}):r.jsxs(se,{ref:bo,$sidebarWidth:J.sidebarWidth,$listWidth:J.listWidth,$isResizing:!!mo,onClick:()=>{go(null)},children:[r.jsxs(Er,{children:[r.jsxs(Dr,{children:[r.jsx(Ar,{value:x||"",onChange:Te,disabled:j.length===0,children:j.length===0?r.jsx("option",{value:"",children:"Sin cuentas"}):j.map(n=>r.jsx("option",{value:n.id,children:n.email},n.id))}),r.jsx(Mr,{children:j.length===1?"1 cuenta conectada":`${j.length} cuentas conectadas`})]}),r.jsxs(Nr,{disabled:!x,onClick:()=>y({show:!0,to:"",cc:"",subject:"",body:"",attachments:[]}),children:[r.jsx(re,{})," Redactar"]}),Zo.map(n=>r.jsxs(to,{$active:e===n.id,onClick:()=>s(n.id),children:[n.icon," ",n.label]},n.id)),r.jsx(Lr,{}),r.jsxs(to,{onClick:Qo,children:[r.jsx(ee,{})," Agregar cuenta"]}),r.jsxs(to,{onClick:ze,children:[r.jsx(ne,{})," Config"]})]}),r.jsx(ce,{type:"button","aria-label":"Ajustar ancho del menú de email",title:"Ajustar ancho del menú de email",onPointerDown:Ee,$active:mo==="sidebar"}),r.jsxs(Fr,{children:[r.jsx(Wr,{children:r.jsxs(Br,{children:[r.jsx(Je,{style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",width:"18px",height:"18px",color:"#94a3b8"}}),r.jsx(Or,{placeholder:"Buscar en la bandeja...",value:lo,onChange:n=>Ce(n.target.value)})]})}),r.jsxs(Hr,{children:[r.jsxs(Eo,{children:[h.length>0&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginRight:"0.5rem"},children:[r.jsx("input",{type:"checkbox",checked:h.length===I.length&&I.length>0,onChange:()=>v(h.length===I.length?[]:I.map(n=>n.uid||n.id)),style:{accentColor:"#c6893f",cursor:"pointer"}}),r.jsx("span",{style:{fontSize:"10px",fontWeight:900,color:"#64748b"},children:"SELECCIONAR TODO"})]}),r.jsx(p,{onClick:()=>yo(),title:"Actualizar",children:r.jsx(Ge,{className:Re?"animate-spin":""})})]}),h.length>0&&r.jsxs(Eo,{children:[r.jsx(p,{title:V?"Marcar como no leído":"Marcar como leído",onClick:()=>D(V?"markUnread":"markRead"),children:r.jsx(te,{})}),r.jsx(p,{title:"Responder",onClick:()=>{var n;return y({...g,show:!0,to:((n=I.find(t=>(t.uid||t.id)===h[0]))==null?void 0:n.from)||""})},children:r.jsx(Co,{})}),r.jsx(p,{title:"Responder a todos",onClick:()=>{},children:r.jsx(So,{})}),r.jsx(p,{title:"Reenviar",onClick:()=>y({...g,show:!0}),children:r.jsx(Io,{})}),r.jsx(p,{title:"Mover a...",onClick:()=>D("move"),children:r.jsx(ie,{})}),r.jsx(p,{title:"Copiar a...",onClick:()=>D("copy"),children:r.jsx(ae,{})}),r.jsx(p,{$danger:!0,title:"Eliminar",onClick:()=>D("delete"),children:r.jsx(eo,{})})]})]}),r.jsx(gn,{children:Ke?r.jsx(Lo,{children:r.jsx(wn,{})}):Yo||I.length===0?r.jsxs(Lo,{children:[r.jsx(ko,{}),r.jsx("p",{children:Yo?"Error cargando carpeta":"No hay mensajes en esta carpeta"})]}):I.map(n=>{var $;const t=n.uid||n.id,i=n.flags?!n.flags.includes("\\Seen"):!1,c=h.includes(t),l=i?Ve:Ze;return r.jsxs(qr,{$unread:i,$selected:c,onClick:()=>q(n),onDoubleClick:()=>z(n),onContextMenu:f=>{f.preventDefault(),go({x:f.pageX,y:f.pageY}),c||v([t])},children:[r.jsx(hn,{className:"hover-checkbox",$selected:c,onClick:f=>Pe(f,t),children:r.jsx("input",{type:"checkbox",checked:c,readOnly:!0})}),r.jsxs(fn,{children:[r.jsxs(xn,{children:[r.jsx(Ur,{$unread:i,children:(($=n.from)==null?void 0:$.split("<")[0])||"Desconocido"}),r.jsxs(bn,{children:[r.jsx(mn,{className:"email-row-date",children:new Date(n.date||Date.now()).toLocaleDateString([],{day:"2-digit",month:"short"})}),r.jsxs(yn,{className:"email-row-actions",onClick:f=>f.stopPropagation(),children:[r.jsx(ge,{$envelope:!0,title:i?"Marcar como leído":"Marcar como no leído","aria-label":i?"Marcar como leído":"Marcar como no leído",onClick:f=>Ne(f,n),children:r.jsx(l,{})}),r.jsx(ge,{$danger:!0,title:"Enviar a la papelera","aria-label":"Enviar a la papelera",onClick:f=>Fe(f,n),children:r.jsx(eo,{})})]})]})]}),r.jsx(Kr,{$unread:i,children:n.subject||"(Sin Asunto)"})]})]},t)})})]}),r.jsx(ce,{type:"button","aria-label":"Ajustar ancho de la lista de emails",title:"Ajustar ancho de la lista de emails",onPointerDown:De,$active:mo==="list"}),r.jsx(jn,{children:m?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},children:[r.jsx(p,{onClick:()=>q(null),children:r.jsx(or,{})}),r.jsxs(Eo,{children:[r.jsx(p,{title:"Responder",onClick:()=>y({...g,show:!0,to:m.from}),children:r.jsx(Co,{})}),r.jsx(p,{title:"Responder a todos",children:r.jsx(So,{})}),r.jsx(p,{title:"Reenviar",children:r.jsx(Io,{})}),r.jsx(p,{onClick:()=>z(m),children:r.jsx(er,{})})]})]}),r.jsxs(fe,{children:[r.jsx("h2",{children:m.subject}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{className:"sender",children:m.from}),r.jsx("span",{className:"date",children:new Date(m.date).toLocaleString()})]})]}),r.jsx(xe,{dangerouslySetInnerHTML:{__html:m.bodyPreview}})]}):r.jsxs(Lo,{children:[r.jsx(ko,{}),r.jsx("p",{children:"Selecciona un correo para leer"})]})}),uo&&r.jsxs(vn,{style:{top:uo.y,left:uo.x},onClick:n=>n.stopPropagation(),children:[r.jsxs(N,{onClick:()=>D(V?"markUnread":"markRead"),children:[r.jsx(te,{})," ",V?"Marcar como no leído":"Marcar como leído"]}),r.jsxs(N,{onClick:()=>{var n;return y({...g,show:!0,to:((n=I.find(t=>(t.uid||t.id)===h[0]))==null?void 0:n.from)||""})},children:[r.jsx(Co,{})," Responder"]}),r.jsxs(N,{onClick:()=>{},children:[r.jsx(So,{})," Responder a todos"]}),r.jsxs(N,{onClick:()=>y({...g,show:!0}),children:[r.jsx(Io,{})," Reenviar"]}),r.jsxs(N,{onClick:()=>D("move"),children:[r.jsx(ie,{})," Mover a..."]}),r.jsxs(N,{onClick:()=>D("copy"),children:[r.jsx(ae,{})," Copiar a..."]}),r.jsxs(N,{$isDelete:!0,onClick:()=>D("delete"),children:[r.jsx(eo,{})," Enviar a la papelera"]})]}),po.show&&r.jsx(Do,{onClick:()=>X({show:!1,uids:[],action:"move"}),children:r.jsxs(To,{onClick:n=>n.stopPropagation(),children:[r.jsx(Ao,{children:r.jsx("h3",{children:po.action==="copy"?"Copiar a...":"Mover a..."})}),r.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",padding:"0.5rem"},children:Zo.filter(n=>n.id!=="Trash").map(n=>r.jsxs(to,{onClick:()=>D(po.action,n.id),children:[n.icon," ",n.label]},n.id))}),r.jsx(pe,{style:{marginTop:"1.5rem"},children:r.jsx(ue,{onClick:()=>X({show:!1,uids:[],action:"move"}),children:"Cerrar"})})]})}),g.show&&r.jsx(Do,{onClick:()=>jo(!0),children:r.jsxs(Yr,{onClick:n=>n.stopPropagation(),onDragOver:n=>{n.preventDefault(),fo(!0)},onDragLeave:()=>fo(!1),onDrop:n=>{n.preventDefault(),fo(!1),Vo(n.dataTransfer.files)},children:[Se&&r.jsx(nn,{children:r.jsx("div",{className:"message",children:"Suelte los archivos aquí"})}),r.jsxs(Ao,{children:[r.jsxs("h3",{children:[r.jsx(re,{})," Nuevo Mensaje"]}),r.jsx(p,{onClick:()=>jo(!0),disabled:R.isPending||L.isPending,children:r.jsx(ro,{})})]}),r.jsxs(Qr,{children:[r.jsxs(Mo,{children:[r.jsx("label",{children:"Para"}),r.jsx("input",{type:"text",placeholder:"destinatario@ejemplo.com",value:g.to,onChange:n=>y({...g,to:n.target.value})})]}),r.jsxs(Mo,{children:[r.jsx("label",{children:"CC"}),r.jsx("input",{type:"text",placeholder:"copia@ejemplo.com",value:g.cc,onChange:n=>y({...g,cc:n.target.value})})]}),r.jsxs(Mo,{children:[r.jsx("label",{children:"Asunto"}),r.jsx("input",{type:"text",placeholder:"Asunto del mensaje",value:g.subject,onChange:n=>y({...g,subject:n.target.value})})]})]}),r.jsxs(Xr,{children:[r.jsxs(Jr,{children:[r.jsx(p,{$active:E.bold,onClick:()=>A("bold"),title:"Negrita",children:r.jsx(rr,{})}),r.jsx(p,{$active:E.italic,onClick:()=>A("italic"),title:"Itálica",children:r.jsx(nr,{})}),r.jsx(p,{$active:E.underline,onClick:()=>A("underline"),title:"Subrayado",children:r.jsx(tr,{})}),r.jsx("div",{style:{width:"1px",height:"20px",background:"#e2e8f0",margin:"0 0.5rem"}}),r.jsx(p,{$active:E.alignLeft,onClick:()=>A("justifyLeft"),title:"Izquierda",children:r.jsx(ir,{})}),r.jsx(p,{$active:E.alignCenter,onClick:()=>A("justifyCenter"),title:"Centro",children:r.jsx(ar,{})}),r.jsx(p,{$active:E.alignRight,onClick:()=>A("justifyRight"),title:"Derecha",children:r.jsx(sr,{})}),r.jsx(p,{$active:E.alignJustify,onClick:()=>A("justifyFull"),title:"Justificado",children:r.jsx(cr,{})}),r.jsx("div",{style:{width:"1px",height:"20px",background:"#e2e8f0",margin:"0 0.5rem"}}),r.jsx(p,{$active:E.ordered,onClick:()=>A("insertOrderedList"),title:"Lista numerada",children:r.jsx(dr,{})}),r.jsx(p,{$active:E.bulleted,onClick:()=>A("insertUnorderedList"),title:"Lista viñetas",children:r.jsx(lr,{})}),r.jsx("div",{style:{width:"1px",height:"20px",background:"#e2e8f0",margin:"0 0.5rem"}}),r.jsx(p,{onClick:()=>Wo.current.click(),title:"Adjuntar archivos",children:r.jsx(pr,{})}),r.jsx("input",{type:"file",multiple:!0,ref:Wo,style:{display:"none"},onChange:n=>Vo(n.target.files)})]}),r.jsx(Gr,{contentEditable:!0,ref:k,onKeyUp:Be,onMouseUp:$o,onPaste:We,placeholder:"Escribe tu mensaje profesional aquí..."}),oe&&r.jsx(kn,{dangerouslySetInnerHTML:{__html:oe}})]}),g.attachments.length>0&&r.jsx(Vr,{children:g.attachments.map(n=>r.jsxs(Zr,{children:[r.jsx(ur,{})," ",n.name," ",r.jsxs("span",{style:{opacity:.5,fontWeight:500},children:["(",n.size,")"]}),r.jsx("button",{onClick:()=>Ue(n.id),children:r.jsx(ro,{})})]},n.id))}),Ho&&r.jsxs(rn,{children:[r.jsx(no,{})," ",Ho]}),r.jsxs(on,{children:[r.jsx(de,{onClick:Jo,disabled:R.isPending||L.isPending,children:"Descartar"}),r.jsx(de,{style:{background:"rgba(198, 137, 63, 0.1)",color:"#c6893f"},onClick:()=>jo(),disabled:R.isPending||L.isPending,children:R.isPending?"Guardando...":"Guardar como borrador"}),r.jsx(en,{onClick:He,disabled:R.isPending||L.isPending,children:L.isPending?"Enviando...":"Enviar Mensaje"})]})]})}),C.show&&r.jsxs(tn,{$type:C.type,children:[C.type==="loading"?r.jsx(an,{}):C.type==="error"?r.jsx(no,{}):r.jsx(gr,{}),C.message,C.type==="error"&&g.body&&r.jsx(cn,{onClick:()=>y(n=>({...n,show:!0})),children:"Reabrir"}),r.jsx(sn,{onClick:()=>_(n=>({...n,show:!1})),children:r.jsx(ro,{})})]}),F&&r.jsx(Do,{onClick:()=>z(null),children:r.jsxs(ln,{onClick:n=>n.stopPropagation(),children:[r.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},children:r.jsx(p,{onClick:()=>z(null),children:r.jsx(ro,{})})}),r.jsxs(fe,{children:[r.jsx("h2",{children:F.subject}),r.jsxs("div",{className:"meta",children:[r.jsx("span",{children:F.from}),r.jsx("span",{children:new Date(F.date||Date.now()).toLocaleString()})]})]}),r.jsx(xe,{style:{flex:1},dangerouslySetInnerHTML:{__html:F.bodyPreview}})]})}),Y&&r.jsx(dn,{onClick:()=>U(!1),children:r.jsxs(To,{onClick:n=>n.stopPropagation(),children:[r.jsx(Ao,{children:r.jsxs("h3",{children:[r.jsx(ne,{})," ",Po==="create"?"Agregar cuenta de Email":"Configuración de Cuenta"]})}),r.jsxs(pn,{children:[r.jsxs("div",{children:[r.jsx("label",{children:"Dirección de Email"}),r.jsx("input",{type:"email",value:w.email,onChange:n=>S({...w,email:n.target.value})})]}),r.jsxs("div",{children:[r.jsx("label",{children:"Contraseña Aplicación"}),r.jsx("input",{type:"password",autoComplete:"new-password",placeholder:Po==="edit"?"Dejar vacío para conservar la actual":"Contraseña de aplicación",value:w.password,onChange:n=>S({...w,password:n.target.value})})]}),r.jsxs("div",{children:[r.jsx("label",{children:"Firma Profesional (HTML)"}),r.jsx("textarea",{value:w.signature,onChange:n=>S({...w,signature:n.target.value})})]}),r.jsxs(le,{children:[r.jsxs("div",{children:[r.jsx("label",{children:"IMAP Host"}),r.jsx("input",{type:"text",value:w.imap_host,onChange:n=>S({...w,imap_host:n.target.value})})]}),r.jsxs("div",{children:[r.jsx("label",{children:"Puerto"}),r.jsx("input",{type:"number",value:w.imap_port,onChange:n=>S({...w,imap_port:n.target.value})})]})]}),r.jsxs(le,{children:[r.jsxs("div",{children:[r.jsx("label",{children:"SMTP Host"}),r.jsx("input",{type:"text",value:w.smtp_host,onChange:n=>S({...w,smtp_host:n.target.value})})]}),r.jsxs("div",{children:[r.jsx("label",{children:"Puerto"}),r.jsx("input",{type:"number",value:w.smtp_port,onChange:n=>S({...w,smtp_port:n.target.value})})]})]}),Fo&&r.jsxs($n,{children:[r.jsx(no,{})," ",Fo]})]}),r.jsxs(pe,{children:[r.jsx(ue,{onClick:()=>U(!1),children:"Cancelar"}),r.jsx(un,{disabled:wo.isPending,onClick:_e,children:wo.isPending?"Guardando...":"Guardar Cambios"})]})]})})]})};export{_n as EmailScreen};
