import{y as i,p as W,Y as fa,r as D,j as a,D as Ce,Z as Le,c as la,$ as ya,B as wa,a0 as ja,x as da,W as va,l as ka,P as Ca,d as Oe,Q as Te}from"./index-BZYg4alH.js";import{c as Ge,d as Da}from"./budgetPdf-BG0U-FJO.js";import{a as Sa,u as Ia,c as Fa}from"./quotesApi-B6BlK7Dh.js";import{p as Ra,a as Ba,b as za,c as Ma,d as Ta}from"./pageHeader-CSFyddAi.js";const ye=(e=1)=>({id:`load-${Date.now()}-${e}`,label:`Carga ${e}`,fob:0,packages:0,lengthCm:0,widthCm:0,heightCm:0,directCbm:0,weightKg:0}),$={tradeAssuranceRate:3,seaFreightRate:200,cargoInsurance:"",originExpenses:0,derRate:35,statisticRate:3,vatRate:21,additionalVatRate:20,grossIncomeRate:2.5,incomeTaxRate:6,destinationExpenses:500,fiscalDepositOverride:"",customsBrokerRate:4,customsBrokerMinimum:300,managementFee:1e3,handling:50,consolidation:200,terrestrialFreight:500,profitRate:9,airRate:22,airVolumeDivisor:6e3,airDeclaredFreight:"",imoCargo:"NO"},m=e=>{const t=Number.parseFloat(String(e??"").replace(",","."));return Number.isFinite(t)?t:0},k=e=>Math.max(m(e),0),P=e=>k(e)/100,Aa=e=>String(e??"").trim()!=="",_a=e=>e<=1?750:e<3?800:e<5?850:e<8?855:e<=10?875:875+(e-10)*25,Ea=(e,t=$)=>{const o=k(e.packages),n=k(e.lengthCm),c=k(e.widthCm),s=k(e.heightCm),p=k(e.directCbm),f=n*c*s*o/1e6,j=p>0?p:f,y=k(e.weightKg),v=y/1e3,B=Math.max(k(t.airVolumeDivisor),1),x=j*1e6/B;return{...e,fob:k(e.fob),packages:o,lengthCm:n,widthCm:c,heightCm:s,directCbm:p,cbmByDimensions:f,cbm:j,weightKg:y,weightTon:v,airVolumetricKg:x}},q=(e,t)=>e.reduce((o,n)=>o+t(n),0),Ue=({totals:e,settings:t,freight:o,chargeableMeasure:n,method:c})=>{const s=P(t.vatRate),p=e.fob*(1+P(t.tradeAssuranceRate)),f=Aa(t.cargoInsurance)?k(t.cargoInsurance):(p+o)*.01,j=k(t.originExpenses),y=p+o+f+j,v=y*P(t.derRate),B=y*P(t.statisticRate),x=y+v+B,O=x*s,z=x*P(t.additionalVatRate),F=x*P(t.grossIncomeRate),_=x*P(t.incomeTaxRate),E=k(t.destinationExpenses),l=k(t.fiscalDepositOverride),V=l>0?l:_a(n),H=Math.max(y*P(t.customsBrokerRate),k(t.customsBrokerMinimum))*(1+s),Q=k(t.managementFee),X=k(t.handling),Y=k(t.consolidation),te=0,U=(E+V+H+Q+Y)*s,K=v+B+O+z+F+_,S=E+V+H+Q+X+Y+te,C=K+S,J=C+U,oe=y+J,M=z+F+_+U,de=k(t.terrestrialFreight),ge=de*(1+s),w=oe+ge,pe=s>0?w/(1+s):w,me=Math.max(e.packages,1),ie=pe/me,he=ie*(1+P(t.profitRate)),ve=he-ie;return{method:c,chargeableMeasure:n,fobAdjusted:p,freight:o,cargoInsurance:f,originExpenses:j,cif:y,der:v,statisticRate:B,taxableBase:x,vat:O,additionalVat:z,grossIncome:F,incomeTax:_,destinationExpenses:E,fiscalDeposit:V,customsBroker:H,managementFee:Q,handling:X,consolidation:Y,imoCharge:te,destinationVat:U,taxSubtotal:K,destinationSubtotal:S,taxesAndCosts:C,taxesCostsAndVat:J,finalBeforeDelivery:oe,recoverable:M,terrestrialFreight:de,terrestrialFreightWithVat:ge,grandTotal:w,netCost:pe,packageCount:me,unitCost:ie,saleNet:he,unitProfit:ve}},xe=({loads:e,settings:t})=>{const o=e.map(x=>Ea(x,t)),n={fob:q(o,x=>x.fob),packages:q(o,x=>x.packages),cbm:q(o,x=>x.cbm),weightKg:q(o,x=>x.weightKg),weightTon:q(o,x=>x.weightTon),airVolumetricKg:q(o,x=>x.airVolumetricKg)},c=Math.max(n.cbm,n.weightTon),s=k(t.seaFreightRate)*c,p=Math.max(n.weightKg,n.airVolumetricKg),f=k(t.airDeclaredFreight),j=f>0?f:k(t.airRate)*p,y=Ue({totals:n,settings:t,freight:s,chargeableMeasure:c,method:"Maritimo"}),v=Ue({totals:n,settings:t,freight:j,chargeableMeasure:c,method:"Aereo"}),B=Math.max(y.grandTotal,v.grandTotal,1);return{loads:o,totals:{...n,seaChargeableMeasure:c,airChargeableKg:p},sea:y,air:v,winner:y.grandTotal<=v.grandTotal?"sea":"air",seaWidth:`${Math.max(y.grandTotal/B*100,6)}%`,airWidth:`${Math.max(v.grandTotal/B*100,6)}%`}},De=e=>String(e??"").trim()!=="",h=(...e)=>e.find(t=>t!=null),He=(e,t)=>{if(!e)return t;if(typeof e=="object")return e;try{return JSON.parse(e)}catch{return t}},Va=(e,t)=>`load-${e||Date.now()}-${t+1}`,Pa=(e,t)=>e.map((o,n)=>{var s;const c=((s=t==null?void 0:t.loads)==null?void 0:s.find(p=>p.id===o.id))||{};return{proveedor_carga:o.label||`Carga ${n+1}`,fob_total:m(o.fob),cantidad_cajas:m(o.packages),cbm_total:m(h(c.cbm,o.directCbm)),largo_caja:m(o.lengthCm),ancho_caja:m(o.widthCm),alto_caja:m(o.heightCm),peso_total:m(o.weightKg)}}),Qe=({form:e,sellerForm:t,productImages:o=[],loads:n,settings:c,quoteResult:s,method:p})=>({form:e,sellerForm:t,productImages:o,loads:n,settings:c,quote:s[p],quoteResult:s,method:p}),Ke=({pdfPayload:e,loads:t,settings:o,quoteResult:n,status:c,pdfFile:s})=>{var y,v;const p=e.method||"sea",f=e.quote||n[p];return{razon_social_cliente:String(((y=e.form)==null?void 0:y.client)||"").trim()||"Borrador cotizador",generation_date:new Date().toISOString(),amount:f.grandTotal,status:c,method:p,budget_number:String(((v=e.form)==null?void 0:v.budgetNumber)||"").trim()||null,pdf_base64:s==null?void 0:s.base64,pdf_filename:s==null?void 0:s.filename,payload:e,cargas:Pa(t,n),trade_assurance:m(o.tradeAssuranceRate),flete_maritimo_aereo:m(o.seaFreightRate),seguro_de_carga:De(o.cargoInsurance)?m(o.cargoInsurance):m(n.sea.cargoInsurance),gastos_de_origen:m(o.originExpenses),der:m(o.derRate),te:m(o.statisticRate),iva:m(o.vatRate),iva_adicional:m(o.additionalVatRate),iibb:m(o.grossIncomeRate),imp_ganancias:m(o.incomeTaxRate),deposito_fiscal:De(o.fiscalDepositOverride)?m(o.fiscalDepositOverride):m(n.sea.fiscalDeposit),gastos_destino:m(o.destinationExpenses),carga_imo:o.imoCargo||"NO",despachante:m(o.customsBrokerRate),minimo_honorarios:m(o.customsBrokerMinimum),gestion_firma:m(o.managementFee),handling:m(o.handling),consolidado:m(o.consolidation),envio_terrestre:m(o.terrestrialFreight),ganancia:m(o.profitRate),tarifa_aerea:m(o.airRate),peso_cobrado:m(n.totals.airChargeableKg),flete_aereo_total:De(o.airDeclaredFreight)?m(o.airDeclaredFreight):m(n.air.freight)}},Na=(e,t,o)=>{const n=ye(t+1);return{...n,id:e.id||Va(o,t),label:h(e.label,e.proveedor_carga,n.label),fob:h(e.fob,e.fob_total,n.fob),packages:h(e.packages,e.cantidad_cajas,n.packages),directCbm:h(e.directCbm,e.cbm_total,n.directCbm),lengthCm:h(e.lengthCm,e.largo_caja,n.lengthCm),widthCm:h(e.widthCm,e.ancho_caja,n.widthCm),heightCm:h(e.heightCm,e.alto_caja,n.heightCm),weightKg:h(e.weightKg,e.peso_total,n.weightKg)}},La=e=>{var p,f;const t=He(e==null?void 0:e.payload,{}),o=Array.isArray(t.loads)?t.loads:He(e==null?void 0:e.cargas,[]),n=(o.length?o:[ye(1)]).map((j,y)=>Na(j,y,e==null?void 0:e.id)),c=t.settings||{},s={...$,...c,tradeAssuranceRate:h(c.tradeAssuranceRate,e==null?void 0:e.trade_assurance,$.tradeAssuranceRate),seaFreightRate:h(c.seaFreightRate,e==null?void 0:e.flete_maritimo_aereo,$.seaFreightRate),cargoInsurance:h(c.cargoInsurance,e==null?void 0:e.seguro_de_carga,$.cargoInsurance),originExpenses:h(c.originExpenses,e==null?void 0:e.gastos_de_origen,$.originExpenses),derRate:h(c.derRate,e==null?void 0:e.der,$.derRate),statisticRate:h(c.statisticRate,e==null?void 0:e.te,$.statisticRate),vatRate:h(c.vatRate,e==null?void 0:e.iva,$.vatRate),additionalVatRate:h(c.additionalVatRate,e==null?void 0:e.iva_adicional,$.additionalVatRate),grossIncomeRate:h(c.grossIncomeRate,e==null?void 0:e.iibb,$.grossIncomeRate),incomeTaxRate:h(c.incomeTaxRate,e==null?void 0:e.imp_ganancias,$.incomeTaxRate),fiscalDepositOverride:h(c.fiscalDepositOverride,e==null?void 0:e.deposito_fiscal,$.fiscalDepositOverride),destinationExpenses:h(c.destinationExpenses,e==null?void 0:e.gastos_destino,$.destinationExpenses),imoCargo:h(c.imoCargo,e==null?void 0:e.carga_imo,$.imoCargo),customsBrokerRate:h(c.customsBrokerRate,e==null?void 0:e.despachante,$.customsBrokerRate),customsBrokerMinimum:h(c.customsBrokerMinimum,e==null?void 0:e.minimo_honorarios,$.customsBrokerMinimum),managementFee:h(c.managementFee,e==null?void 0:e.gestion_firma,$.managementFee),handling:h(c.handling,e==null?void 0:e.handling,$.handling),consolidation:h(c.consolidation,e==null?void 0:e.consolidado,$.consolidation),terrestrialFreight:h(c.terrestrialFreight,e==null?void 0:e.envio_terrestre,$.terrestrialFreight),profitRate:h(c.profitRate,e==null?void 0:e.ganancia,$.profitRate),airRate:h(c.airRate,e==null?void 0:e.tarifa_aerea,$.airRate),airDeclaredFreight:h(c.airDeclaredFreight,e==null?void 0:e.flete_aereo_total,$.airDeclaredFreight)};return{loads:n,settings:s,budgetForm:{...t.form||{},client:h((p=t.form)==null?void 0:p.client,e==null?void 0:e.razon_social_cliente,""),budgetNumber:h((f=t.form)==null?void 0:f.budgetNumber,e==null?void 0:e.budget_number,"")},sellerForm:t.sellerForm||{},productImages:Array.isArray(t.productImages)?t.productImages:[],method:t.method||(e==null?void 0:e.method)||"sea"}},A=W`
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.035)":e.color.neutral[50]} 0%, ${({theme:e})=>e.color.surface} 100%);
  box-shadow: ${({theme:e})=>e.shadow.sm}, 0 0 20px rgba(198, 137, 63, 0.08);
`,we=W`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`,Oa=({$tone:e,theme:t})=>e==="tax"?W`
      border-left-color: ${t.color.warning};
      background: ${t.isDark?t.color.neutral[50]:t.color.warningLight};
    `:e==="destination"?W`
      border-left-color: ${t.color.accent};
      background: ${t.isDark?t.color.neutral[50]:t.color.accentFaded};
    `:e==="total"?W`
      border-left-color: ${t.color.success};
      background: ${t.isDark?t.color.neutral[50]:t.color.successLight};
    `:W`
    border-left-color: ${t.color.primary};
    background: ${t.isDark?t.color.neutral[50]:t.color.primaryFaded};
  `,Ga=i.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({theme:e})=>e.isDark?"rgba(198,137,63,0.055)":"rgba(0,51,77,0.035)"} 1px, transparent 1px),
      linear-gradient(180deg, ${({theme:e})=>e.isDark?"rgba(255,255,255,0.03)":"rgba(198,137,63,0.035)"} 1px, transparent 1px);
    background-size: 44px 44px;
    opacity: 0.82;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Ua=i.header`
  ${Ra};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Ha=i.div`
  position: relative;
  z-index: 2;
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  pointer-events: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    pointer-events: auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: stretch;
  }
`,Qa=i.div`
  ${Ba};
`,Ka=i.p`
  ${za};
`,Wa=i.h1`
  ${Ma};
`,Xa=i.p`
  ${Ta};
  max-width: 58rem;
`,Ya=i.div`
  ${A};
  border-color: ${({theme:e})=>e.color.accent};
  height: 100%;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  width: 100%;
  max-width: 20rem;
  min-width: 16rem;
  pointer-events: auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: none;
    min-width: 0;
  }
`,Ja=i.span`
  display: block;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.06em;
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  text-transform: uppercase;
`,Za=i.strong`
  display: block;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,qa=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: column;
  }
`,et=i.span`
  flex-shrink: 0;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  white-space: nowrap;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    white-space: normal;
  }
`,at=i.span`
  display: block;
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,tt=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,We=i.button`
  ${we};
  border: 1px solid ${({$active:e,theme:t})=>e?t.color.accent:t.color.border};
  background: ${({$active:e,theme:t})=>e?t.isDark?t.color.neutral[100]:t.color.accentFaded:t.color.surface};
  color: ${({$active:e,theme:t})=>e?t.isDark?t.color.accent:t.color.accentDark:t.color.textSecondary};
  box-shadow: ${({$active:e})=>e?"0 0 16px rgba(198, 137, 63, 0.18)":"none"};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
  }
`,rt=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(28rem, 1fr);
  gap: ${({theme:e})=>e.spacing[5]};
  align-items: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`,ot=i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,it=i.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,nt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
  }
`,st=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
  }
`,ct=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: stretch;

    button {
      width: 100%;
    }
  }
`,L=i.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,lt=i.span`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,dt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,gt=i.article`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,pt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
  }
`,mt=i.div`
  min-width: 0;

  strong,
  span {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  span {
    margin-top: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.accent};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,ht=i.button`
  width: ${({theme:e})=>e.layout.buttonHeight};
  height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.color.error};
    color: ${({theme:e})=>e.color.error};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.errorLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,ut=i.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 10.75rem));
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,le=i.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  label {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`,je=i.div`
  display: grid;
  grid-template-columns: minmax(4rem, auto) minmax(0, 1fr);
  align-items: center;
  min-height: ${({theme:e})=>e.layout.inputHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  overflow: hidden;

  &:focus-within {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
  }

  span {
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    border-right: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    white-space: nowrap;
  }

  input {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font-family: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,xt=i(je)`
  strong {
    width: 100%;
    min-width: 0;
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,bt=i.input`
  width: 100%;
  min-height: ${({theme:e})=>e.layout.inputHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
  }
`,$t=i(je)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: ${({theme:e})=>e.spacing[3]};
    top: 50%;
    transform: translateY(-50%);
    border-left: ${({theme:e})=>e.spacing[1]} solid transparent;
    border-right: ${({theme:e})=>e.spacing[1]} solid transparent;
    border-top: ${({theme:e})=>e.spacing[2]} solid ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    pointer-events: none;
  }

  select {
    appearance: none;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};
    cursor: pointer;
    padding: 0 ${({theme:e})=>e.spacing[8]} 0 ${({theme:e})=>e.spacing[3]};
    font-family: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  option {
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  option:checked {
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  }
`,ft=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[3]};
`,be=i.section`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Se=i.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e})=>e||2}, minmax(0, 10.75rem));
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,yt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ie=i.div`
  display: grid;
  grid-template-columns: repeat(${({$columns:e})=>e||3}, minmax(0, 10.75rem));
  gap: ${({theme:e})=>e.spacing[3]};
  justify-content: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,wt=i.div`
  --fiscal-line-top: calc(100% - ${({theme:e})=>e.spacing[6]} - ${({theme:e})=>e.spacing[1]});

  position: relative;

  > ${le} ${je} {
    border-color: ${({theme:e})=>e.color.accent};
    box-shadow: 0 0 0 0.125rem ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.18)":e.color.accentFaded};
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(${({theme:e})=>e.spacing[5]} * -1);
    top: var(--fiscal-line-top);
    width: ${({theme:e})=>e.spacing[5]};
    border-top: ${({theme:e})=>e.spacing[1]} solid ${({theme:e})=>e.color.accent};
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: calc(${({theme:e})=>e.spacing[5]} * -1);
    top: var(--fiscal-line-top);
    height: 24.5rem;
    border-left: ${({theme:e})=>e.spacing[1]} solid ${({theme:e})=>e.color.accent};
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    &::before,
    &::after {
      display: none;
    }
  }
`,jt=i.section`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: 0;
`,vt=i.div`
  min-height: ${({theme:e})=>e.spacing[6]};
  display: flex;
  align-items: flex-start;
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.06em;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 1;
  }
`,kt=i.div`
  position: relative;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  box-shadow: 0 0 0 0.125rem ${({theme:e})=>e.isDark?"rgba(198, 137, 63, 0.18)":e.color.accentFaded};
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    left: calc(${({theme:e})=>e.spacing[5]} * -1);
    top: 50%;
    width: ${({theme:e})=>e.spacing[5]};
    border-top: ${({theme:e})=>e.spacing[1]} solid ${({theme:e})=>e.color.accent};
    transform: translateY(-50%);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    &::before {
      display: none;
    }
  }
`,Ct=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &:last-child {
    border-bottom: none;
  }

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong {
    flex-shrink: 0;
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-align: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: column;
  }
`,Dt=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,St=i.div`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  min-width: 0;

  span,
  strong {
    display: block;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    font-size: ${({theme:e})=>e.typography.size.lg};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }
`,It=i.section`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ft=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.neutral[50]};
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ne=i.div`
  min-width: 0;
  padding: ${({theme:e})=>e.spacing[3]};
  border-right: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-right: none;
  }

  span,
  strong {
    display: block;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  span {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({theme:e})=>e.spacing[2]};
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({theme:e})=>e.color.border};

    &:last-child {
      border-bottom: none;
    }
  }
`,Rt=i.div`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Be=i.button`
  ${we};
  border: 1px solid ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.textInverse};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.accentLight};
  }
`,fe=i.button`
  ${we};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.isDark?e.color.accentLight:e.color.accentDark};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  }
`,Bt=i.button`
  ${we};
  border: 1px solid ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.surface};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
    border-color: ${({theme:e})=>e.color.accentLight};
    color: ${({theme:e})=>e.isDark?e.color.accentLight:e.color.accentDark};
  }
`,Xe=i.section`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,zt=i.div`
  border-left: ${({theme:e})=>e.spacing[1]} solid ${({theme:e})=>e.color.primary};
  border-radius: ${({theme:e})=>e.radius.sm};
  padding: ${({theme:e})=>e.spacing[3]};
  ${({$tone:e,theme:t})=>Oa({$tone:e,theme:t})};
`,Mt=i.h3`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Tt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,At=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({$emphasis:e,theme:t})=>e?t.typography.weight.extrabold:t.typography.weight.medium};

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong {
    flex-shrink: 0;
    color: ${({$emphasis:e,theme:t})=>e?t.isDark?t.color.accent:t.color.primary:t.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-align: right;
  }
`,_t=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[5]};
`,Et=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Vt=i.button`
  ${A};
  width: 100%;
  padding: 0;
  border-color: ${({$selected:e,theme:t})=>e?t.color.accent:t.color.border};
  appearance: none;
  overflow: hidden;
  color: inherit;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  ${({$selected:e,theme:t})=>e&&W`
    box-shadow: 0 0 0 0.125rem ${t.isDark?"rgba(198, 137, 63, 0.22)":t.color.accentFaded};
  `}

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    transform: translateY(-1px);
  }
`,Pt=i.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.neutral[50]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`,Nt=i.div`
  width: ${({theme:e})=>e.layout.buttonHeight};
  height: ${({theme:e})=>e.layout.buttonHeight};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primary};
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`,Lt=i.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
`,Ot=i.span`
  display: block;
  margin-top: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Gt=i.span`
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  white-space: nowrap;

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`,Ut=i.div`
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Ht=i.section`
  ${A};
  padding: ${({theme:e})=>e.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Ye=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Je=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  strong {
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.primary};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-align: right;
  }
`,Ze=i.div`
  height: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.neutral[100]};
  overflow: hidden;
`,qe=i.div`
  width: ${({$width:e})=>e};
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({$variant:e,theme:t})=>e==="air"?`linear-gradient(90deg, ${t.color.primaryLight}, ${t.color.info})`:`linear-gradient(90deg, ${t.color.accent}, ${t.color.success})`};
  transition: width 0.2s ease;
`,Qt=i.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.xl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Kt=i.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.color.overlay};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: flex-end;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Wt=i.div`
  width: min(100%, 58rem);
  max-height: min(92vh, 52rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow["2xl"]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
    border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.md} ${({theme:e})=>e.radius.md};
  }
`,Xt=i.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  background: ${({theme:e})=>e.color.primary};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    max-height: 5rem;
    object-fit: cover;
  }
`,Yt=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,Jt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    align-items: stretch;
    flex-direction: column-reverse;
  }
`,Zt=i.select`
  min-height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  outline: none;
  background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.surface};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  padding: 0 ${({theme:e})=>e.spacing[4]};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  cursor: pointer;
  color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};

  &:focus {
    box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
  }
`,qt=i.span`
  display: block;
  color: ${({theme:e})=>e.color.accent};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,er=i.h2`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
`,ar=i.button`
  width: ${({theme:e})=>e.layout.buttonHeight};
  height: ${({theme:e})=>e.layout.buttonHeight};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSecondary};
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  }
`,tr=i.form`
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
  overflow-y: auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,ea=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ga=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  label {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: calc(${({theme:e})=>e.layout.inputHeight} - ${({theme:e})=>e.spacing[3]});
    border: 1px solid ${({theme:e})=>e.color.border};
    border-radius: ${({theme:e})=>e.radius.md};
    outline: none;
    background: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.text};
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font-family: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    color-scheme: ${({theme:e})=>e.isDark?"dark":"light"};

    &:focus {
      border-color: ${({theme:e})=>e.color.accent};
      box-shadow: 0 0 0 0.2rem ${({theme:e})=>e.color.accentFaded};
    }
  }

  select {
    cursor: pointer;
  }
`,aa=i.h3`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.color.accent};
  border-bottom: 1px solid ${({theme:e})=>e.color.accent};
  background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,rr=i.div`
  position: relative;
  flex: 0 0 auto;
  height: auto;
  min-height: calc(4.5rem + ${({theme:e})=>e.spacing[6]});
  overflow: visible;
  border: 1px dashed ${({$disabled:e,theme:t})=>e?t.color.border:t.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>(e.isDark,e.color.neutral[50])};
  padding: ${({theme:e})=>e.spacing[3]};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.accent};
    background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.accentFaded};
  }
`,or=i.input`
  display: none;
`,ir=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4.5rem, 4.5rem));
  grid-auto-rows: 4.5rem;
  gap: ${({theme:e})=>e.spacing[2]};
  align-content: start;
  flex: 0 0 auto;
  height: auto;
  width: 100%;
  min-width: 0;
  padding-right: 3.25rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    grid-auto-rows: 4rem;
    padding-right: 0;
    padding-top: ${({theme:e})=>e.spacing[5]};
  }
`,nr=i.div`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    height: 4rem;
  }
`,sr=i.button`
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?e.color.neutral[100]:e.color.surface};
  color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.accentFaded};
    transform: translateY(-1px);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    width: 100%;
    height: 4rem;
  }
`,cr=i.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.35rem;
  height: 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(0, 26, 38, 0.82);
  color: ${({theme:e})=>e.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`,lr=i.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  right: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textSecondary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: 1;
`;i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;i.div`
  display: grid;
  grid-template-columns: minmax(8rem, auto) minmax(0, 1fr);
  min-width: 0;
  border-right: 1px solid ${({theme:e})=>e.color.border};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:nth-child(2n) {
    border-right: none;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  &:last-child {
    grid-column: 1 / -1;
    border-right: none;
    border-bottom: none;
  }

  span,
  strong {
    min-width: 0;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    overflow-wrap: anywhere;
  }

  span {
    background: ${({theme:e})=>e.color.neutral[50]};
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    border-right: none;

    &:nth-last-child(-n + 2) {
      border-bottom: 1px solid ${({theme:e})=>e.color.border};
    }

    &:last-child {
      grid-column: auto;
      border-bottom: none;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;const dr=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.accent};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.isDark?e.color.neutral[50]:e.color.accentFaded};
  padding: ${({theme:e})=>e.spacing[3]};

  span,
  small {
    color: ${({theme:e})=>e.color.textSecondary};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    color: ${({theme:e})=>e.isDark?e.color.accent:e.color.accentDark};
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
    font-weight: ${({theme:e})=>e.typography.weight.extrabold};
    text-align: right;
  }

  small {
    grid-column: 1 / -1;
    letter-spacing: 0;
    font-size: ${({theme:e})=>e.typography.size.base};
    text-transform: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;

    strong {
      text-align: left;
    }
  }
`,gr=i.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`,$e=()=>[{...ye(1),id:"load-1"}],pr=[["0 a 1 TON/CBM","USD 750"],["1.01 a 2.99 TON/CBM","USD 800"],["3 a 4.99 TON/CBM","USD 850"],["5 a 7.99 TON/CBM","USD 855"],["8 a 10 TON/CBM","USD 875"],["Superior a 10 TON/CBM","USD 875 + USD 25 por excedente"]],ze=Te("assets/presupuesto-encabezado-v2.png"),ta=Te("assets/presupuesto-espacio-firma.png"),ra=Te("assets/firma_sin_fondo.png"),Fe={client:"",clientTaxId:"",clientVat:"",clientAddress:"",clientContact:"",budgetNumber:""},ce={sea:"Marítimo",air:"Aéreo"},mr=["IVA Responsable Inscripto","IVA Sujeto Exento","Consumidor Final","Responsable Monotributo","Sujeto No Categorizado","Proveedor del Exterior","Cliente del Exterior","IVA Liberado - Ley N° 19.640","Monotributista Social","IVA No Alcanzado","Monotributista Trabajador Independiente Promovido"],hr=["1 día","2 días","3 días","7 días","14 días","15 días","1 mes"],Me=e=>{const t=String(e??"").replace(/\D/g,"").slice(0,11);return t.length<=2?t:t.length<=10?`${t.slice(0,2)}-${t.slice(2)}`:`${t.slice(0,2)}-${t.slice(2,10)}-${t.slice(10)}`},Re={taxId:Me("23319766359"),fiscalCondition:"IVA Responsable Inscripto",fiscalAddress:"Av. General Paz 685 - La Francia, Córdoba",contact:"(+54) 9 3564-369474",validity:"15 días"},ur=[["taxId","CUIT"],["fiscalCondition","Condición Fiscal"],["fiscalAddress","Domicilio Fiscal"],["contact","Teléfono / Email"],["validity","Validez por"]],ae=10,xr=1200,br=.82,I=e=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(e),T=(e,t=2)=>new Intl.NumberFormat("es-AR",{maximumFractionDigits:t,minimumFractionDigits:t}).format(e),$r=(e,t=2)=>{const o=Number(e);return Number.isFinite(o)?o<=0?"0":o.toFixed(t):""},fr=e=>{const t=Number.parseFloat(String(e??"").replace(",","."));return Number.isFinite(t)&&t>0},yr=e=>new Promise((t,o)=>{const n=new FileReader;n.onload=()=>t(String(n.result||"")),n.onerror=()=>o(new Error(`No se pudo leer ${e.name}.`)),n.readAsDataURL(e)}),wr=e=>new Promise((t,o)=>{const n=new Image;n.onload=()=>{const c=Math.min(1,xr/Math.max(n.width,n.height)),s=Math.max(Math.round(n.width*c),1),p=Math.max(Math.round(n.height*c),1);if(c===1&&e.startsWith("data:image/jpeg")){t(e);return}const f=document.createElement("canvas");f.width=s,f.height=p,f.getContext("2d").drawImage(n,0,0,s,p),t(f.toDataURL("image/jpeg",br))},n.onerror=()=>o(new Error("No se pudo procesar una imagen seleccionada.")),n.src=e}),jr=async e=>{const t=await yr(e),o=await wr(t);return{id:`image-${Date.now()}-${Math.random().toString(16).slice(2)}`,name:e.name,src:o}},b=({label:e,unit:t,value:o,onChange:n,step:c="0.01",placeholder:s})=>a.jsxs(le,{children:[a.jsx("label",{children:e}),a.jsxs(je,{children:[a.jsx("span",{children:t}),a.jsx("input",{type:"number",step:c,value:o,placeholder:s,onChange:p=>n(p.target.value)})]})]}),oa=({label:e,unit:t,value:o})=>a.jsxs(le,{children:[a.jsx("label",{children:e}),a.jsxs(xt,{children:[a.jsx("span",{children:t}),a.jsx("strong",{children:o})]})]}),vr=({label:e,value:t,onChange:o})=>a.jsxs(le,{children:[a.jsx("label",{children:e}),a.jsx(bt,{type:"text",value:t,onChange:n=>o(n.target.value)})]}),ee=({label:e,value:t,onChange:o,placeholder:n})=>a.jsxs(ga,{children:[a.jsx("label",{children:e}),a.jsx("input",{type:"text",value:t,placeholder:n,onChange:c=>o(c.target.value)})]}),ia=({label:e,value:t,onChange:o,options:n,placeholder:c})=>a.jsxs(ga,{children:[a.jsx("label",{children:e}),a.jsxs("select",{value:t,onChange:s=>o(s.target.value),children:[a.jsx("option",{value:"",disabled:!0,children:c}),n.map(s=>a.jsx("option",{value:s,children:s},s))]})]}),kr=({label:e,unit:t,value:o,onChange:n,children:c})=>a.jsxs(le,{children:[a.jsx("label",{children:e}),a.jsxs($t,{children:[a.jsx("span",{children:t}),a.jsx("select",{value:o,onChange:s=>n(s.target.value),children:c})]})]}),N=({label:e,value:t})=>a.jsxs(St,{children:[a.jsx("span",{children:e}),a.jsx("strong",{children:t})]}),na=({quote:e})=>a.jsxs(It,{children:[a.jsx(L,{children:"Presupuesto"}),a.jsxs(Ft,{children:[a.jsxs(ne,{children:[a.jsx("span",{children:"Total unidades"}),a.jsx("strong",{children:T(e.packageCount,0)})]}),a.jsxs(ne,{children:[a.jsx("span",{children:"Costo total"}),a.jsx("strong",{children:I(e.netCost)})]}),a.jsxs(ne,{children:[a.jsx("span",{children:"Precio costo unitario"}),a.jsx("strong",{children:I(e.unitCost)})]}),a.jsxs(ne,{children:[a.jsx("span",{children:"Precio venta neto"}),a.jsx("strong",{children:I(e.saleNet)})]}),a.jsxs(ne,{children:[a.jsx("span",{children:"Ganancia unitaria"}),a.jsx("strong",{children:I(e.unitProfit)})]})]})]}),se=({label:e,value:t,emphasis:o=!1})=>a.jsxs(At,{$emphasis:o,children:[a.jsx("span",{children:e}),a.jsx("strong",{children:I(t)})]}),sa=({title:e,tone:t,rows:o})=>a.jsxs(zt,{$tone:t,children:[a.jsx(Mt,{children:e}),a.jsx(Tt,{children:o.map(n=>a.jsx(se,{...n},n.label))})]}),ca=({icon:e,title:t,quote:o,winner:n,selected:c,onSelect:s})=>a.jsxs(Vt,{type:"button",$winner:n,$selected:c,onClick:s,"aria-pressed":c,children:[a.jsxs(Pt,{children:[a.jsx(Nt,{children:e}),a.jsxs("div",{children:[a.jsx(Lt,{children:t}),a.jsxs(Ot,{children:[I(o.freight)," de flete"]})]}),n&&a.jsxs(Gt,{children:[a.jsx(Ca,{}),"Mejor"]})]}),a.jsxs(Ut,{children:[a.jsx(se,{label:"CIF",value:o.cif}),a.jsx(se,{label:"Impuestos + gastos",value:o.taxesCostsAndVat}),a.jsx(se,{label:"Envio terrestre c/IVA",value:o.terrestrialFreightWithVat}),a.jsx(se,{label:"Total general",value:o.grandTotal,emphasis:!0})]})]}),Cr=({form:e,sellerForm:t,quote:o,method:n,productImages:c=[],onChange:s,onSellerChange:p,onMethodChange:f,onImagesSelected:j,onImageRemove:y,onClose:v,onSubmit:B,isGenerating:x,canSubmit:O})=>{const z=D.useRef(null),F=c.length<ae,_=l=>{j(l.target.files),l.target.value=""},E=l=>{l.preventDefault(),F&&j(l.dataTransfer.files)};return a.jsx(Kt,{children:a.jsxs(Wt,{role:"dialog","aria-modal":"true","aria-labelledby":"budget-modal-title",children:[a.jsx(Xt,{src:ze,alt:"Imponect Importaciones Estratégicas"}),a.jsxs(Yt,{children:[a.jsxs("div",{children:[a.jsxs(qt,{children:["Presupuesto ",ce[n].toLowerCase()]}),a.jsx(er,{id:"budget-modal-title",children:"Datos del cliente"})]}),a.jsxs(Jt,{children:[a.jsxs(Zt,{value:n,onChange:l=>f(l.target.value),"aria-label":"Tipo de presupuesto",children:[a.jsx("option",{value:"sea",children:"Marítimo"}),a.jsx("option",{value:"air",children:"Aéreo"})]}),a.jsx(ar,{type:"button","aria-label":"Cerrar",onClick:v,children:a.jsx(Oe,{})})]})]}),a.jsxs(tr,{onSubmit:B,children:[a.jsxs(ea,{children:[a.jsx(ee,{label:"Razón social / cliente",value:e.client,onChange:l=>s("client",l)}),a.jsx(ee,{label:"CUIT / DNI Cliente",value:e.clientTaxId,onChange:l=>s("clientTaxId",l),placeholder:"XX-XXXXXXXX-X"}),a.jsx(ia,{label:"IVA",value:e.clientVat,onChange:l=>s("clientVat",l),options:mr,placeholder:"Seleccionar IVA"}),a.jsx(ee,{label:"Domicilio Cliente",value:e.clientAddress,onChange:l=>s("clientAddress",l)}),a.jsx(ee,{label:"Teléfono / Email",value:e.clientContact,onChange:l=>s("clientContact",l)}),a.jsx(ee,{label:"Número de Presupuesto",value:e.budgetNumber,onChange:l=>s("budgetNumber",l)})]}),a.jsx(aa,{children:"Info vendedor"}),a.jsx(ea,{children:ur.map(([l,V])=>l==="validity"?a.jsx(ia,{label:V,value:t[l],onChange:G=>p(l,G),options:hr,placeholder:"Seleccionar validez"},l):a.jsx(ee,{label:V,value:t[l],onChange:G=>p(l,G)},l))}),a.jsx(aa,{children:"Imágenes de producto"}),a.jsxs(rr,{onDragOver:l=>l.preventDefault(),onDrop:E,$disabled:!F,children:[a.jsx(or,{ref:z,type:"file",accept:"image/*",multiple:!0,onChange:_}),a.jsxs(ir,{children:[c.map(l=>a.jsxs(nr,{children:[a.jsx("img",{src:l.src,alt:l.name||"Imagen de producto"}),a.jsx(cr,{type:"button",onClick:()=>y(l.id),"aria-label":"Quitar imagen",children:a.jsx(Oe,{})})]},l.id)),F&&a.jsx(sr,{type:"button",onClick:()=>{var l;return(l=z.current)==null?void 0:l.click()},"aria-label":"Agregar imagen",children:a.jsx(la,{})})]}),a.jsxs(lr,{children:[c.length,"/",ae]})]}),a.jsxs(dr,{children:[a.jsxs("span",{children:["Total general ",ce[n].toLowerCase()]}),a.jsx("strong",{children:I(o.grandTotal)})]}),a.jsxs(gr,{children:[a.jsx(fe,{type:"button",onClick:v,children:"Cancelar"}),a.jsxs(Be,{type:"submit",disabled:x||!O,children:[a.jsx(da,{}),x?"Generando...":"GENERAR PRESUPUESTO"]})]})]})]})})},Dr=(e,t="Marítimo")=>[{title:"FOB, FLETE Y CIF",tone:"base",rows:[{label:"Valor FOB + Trade Assurance",value:e.fobAdjusted},{label:`Flete ${t.toLowerCase()}`,value:e.freight},{label:"Seguro de carga",value:e.cargoInsurance},{label:"CIF",value:e.cif,emphasis:!0},{label:"Gastos de origen",value:e.originExpenses}]},{title:"IMPUESTOS",tone:"tax",rows:[{label:"Derecho de importación (DER)",value:e.der},{label:"Tasa estadística (TE)",value:e.statisticRate},{label:"IVA",value:e.vat},{label:"IVA adicional",value:e.additionalVat},{label:"Ingresos brutos (IIBB)",value:e.grossIncome},{label:"Impuesto a las ganancias",value:e.incomeTax}]},{title:"GASTOS EN DESTINO",tone:"destination",rows:[{label:"Gastos en destino",value:e.destinationExpenses},{label:"Depósito fiscal",value:e.fiscalDeposit},{label:"Carga IMO",value:e.imoCharge},{label:"Honorarios despachante",value:e.customsBroker},{label:"Gestión COMEX y firma importadora",value:e.managementFee},{label:"Handling",value:e.handling},{label:"Consolidado",value:e.consolidation}]},{title:"TOTALES",tone:"total",rows:[{label:"Total impuestos + gastos",value:e.taxesAndCosts},{label:"IVA de gastos",value:e.destinationVat},{label:"Total impuestos + IVA",value:e.taxesCostsAndVat,emphasis:!0},{label:"Total final",value:e.finalBeforeDelivery,emphasis:!0},{label:"Recuperable estimado",value:e.recoverable},{label:"Envío terrestre",value:e.terrestrialFreight},{label:"Envío terrestre c/IVA",value:e.terrestrialFreightWithVat},{label:"Total general",value:e.grandTotal,emphasis:!0}]}],Br=()=>{const[e,t]=fa(),o=e.get("id"),[n,c]=D.useState($e),[s,p]=D.useState({...$}),[f,j]=D.useState("maritime"),[y,v]=D.useState("sea"),[B,x]=D.useState(!1),[O,z]=D.useState("sea"),[F,_]=D.useState({...Fe}),[E,l]=D.useState({...Re}),[V,G]=D.useState(!1),[H,Q]=D.useState(!1),[X,Y]=D.useState(!1),[te,re]=D.useState(null),[U,K]=D.useState([]),S=D.useMemo(()=>xe({loads:n,settings:s}),[n,s]),[C,J]=D.useState(()=>xe({loads:$e(),settings:$})),oe=F.client.trim()!==""&&F.clientVat.trim()!=="";D.useEffect(()=>{let r=!0;return(async()=>{if(!o){re(null);return}Y(!0);try{const g=await Sa(o);if(!r)return;const R=La(g),u=R.loads.length?R.loads:$e(),ue={...$,...R.settings},$a=xe({loads:u,settings:ue}),Ne=R.method==="air"?"air":"sea";c(u),p(ue),J($a),_({...Fe,...R.budgetForm}),l({...Re,...R.sellerForm}),K(R.productImages||[]),v(Ne),z(Ne),re(g.id),j("maritime")}catch(g){console.error("No se pudo cargar el presupuesto para editar",g),window.alert("No se pudo cargar el presupuesto seleccionado. Volvé a intentarlo desde Presupuestos.")}finally{r&&Y(!1)}})(),()=>{r=!1}},[o]);const M=(r,d,g)=>{c(R=>R.map(u=>u.id===r?{...u,[d]:g}:u))},de=()=>{c(r=>[...r,{...ye(r.length+1),id:`load-${Date.now()}`}])},ge=r=>{c(d=>d.length===1?d:d.filter(g=>g.id!==r))},w=(r,d)=>{p(g=>({...g,[r]:d}))},pe=(r,d)=>{_(g=>({...g,[r]:r==="clientTaxId"?Me(d):d}))},me=(r,d)=>{l(g=>({...g,[r]:r==="taxId"?Me(d):d}))},ie=async r=>{const d=Array.from(r||[]).filter(u=>u.type.startsWith("image/"));if(!d.length)return;const g=ae-U.length;if(g<=0){window.alert(`Podés cargar hasta ${ae} imágenes.`);return}const R=d.slice(0,g);d.length>g&&window.alert(`Se cargaron ${g} imágenes. El máximo es ${ae}.`);try{const u=await Promise.all(R.map(jr));K(ue=>[...ue,...u].slice(0,ae))}catch(u){console.error("No se pudieron procesar las imágenes del presupuesto",u),window.alert("No se pudieron procesar una o más imágenes. Probá con archivos JPG o PNG.")}},he=r=>{K(d=>d.filter(g=>g.id!==r))},ve=()=>{z(y),x(!0)},Ae=async r=>{const d=te?await Ia(te,r):await Fa(r);return re(d.id),t({id:String(d.id)},{replace:!0}),d},pa=async r=>{if(r.preventDefault(),!(V||!oe)){G(!0);try{const d=Qe({form:F,sellerForm:E,productImages:U,loads:n,settings:s,quoteResult:C,method:O}),g=await Ge({...d,headerSrc:ze,signatureStampSrc:ta,sellerSignatureSrc:ra});await Ae(Ke({pdfPayload:d,loads:n,settings:s,quoteResult:C,status:"Pendiente de envío",pdfFile:g})),Da(g),x(!1)}catch(d){console.error("No se pudo generar el presupuesto PDF",d),window.alert("No se pudo generar o guardar el presupuesto. Revisá los datos e intentá nuevamente.")}finally{G(!1)}}},ma=()=>{J(S),j("comparison")},ha=async()=>{if(!H){Q(!0);try{const r={...F,client:F.client.trim()||"Borrador cotizador"},d=Qe({form:r,sellerForm:E,productImages:U,loads:n,settings:s,quoteResult:S,method:"sea"}),g=await Ge({...d,headerSrc:ze,signatureStampSrc:ta,sellerSignatureSrc:ra});await Ae(Ke({pdfPayload:d,loads:n,settings:s,quoteResult:S,status:"Borrador",pdfFile:g})),window.alert("Borrador guardado correctamente.")}catch(r){console.error("No se pudo guardar el borrador del presupuesto",r),window.alert("No se pudo guardar el borrador. Revisá la conexión con el servidor e intentá nuevamente.")}finally{Q(!1)}}},ua=()=>{const r=$e(),d={...$};c(r),p(d),J(xe({loads:r,settings:d})),_({...Fe}),l({...Re}),K([]),v("sea"),z("sea"),G(!1),Q(!1),re(null),t({},{replace:!0}),x(!1),j("maritime")},xa=(r,d)=>{const g=S.loads.find(u=>u.id===r.id),R=fr(r.directCbm)?r.directCbm:$r((g==null?void 0:g.cbmByDimensions)||0);return a.jsxs(gt,{children:[a.jsxs(pt,{children:[a.jsxs(mt,{children:[a.jsx("strong",{children:r.label||`Carga ${d+1}`}),a.jsxs("span",{children:[T((g==null?void 0:g.cbm)||0,2)," CBM · ",T((g==null?void 0:g.weightTon)||0,2)," TON"]})]}),a.jsx(ht,{type:"button",onClick:()=>ge(r.id),disabled:n.length===1,title:"Eliminar carga",children:a.jsx(ka,{})})]}),a.jsxs(ut,{children:[a.jsx(vr,{label:"Proveedor / carga",value:r.label,onChange:u=>M(r.id,"label",u)}),a.jsx(b,{label:"FOB total",unit:"USD",value:r.fob,onChange:u=>M(r.id,"fob",u)}),a.jsx(b,{label:"Cantidad cajas",unit:"CJ",step:"1",value:r.packages,onChange:u=>M(r.id,"packages",u)}),a.jsx(b,{label:"CBM total",unit:"CBM",value:R,onChange:u=>M(r.id,"directCbm",u)}),a.jsx(b,{label:"Largo caja",unit:"CM",value:r.lengthCm,onChange:u=>M(r.id,"lengthCm",u)}),a.jsx(b,{label:"Ancho caja",unit:"CM",value:r.widthCm,onChange:u=>M(r.id,"widthCm",u)}),a.jsx(b,{label:"Alto caja",unit:"CM",value:r.heightCm,onChange:u=>M(r.id,"heightCm",u)}),a.jsx(b,{label:"Peso total",unit:"KG",value:r.weightKg,onChange:u=>M(r.id,"weightKg",u)})]})]},r.id)},Z=C[y],ke=ce[y],_e=Dr(f==="comparison"?Z:S.sea,f==="comparison"?ke:ce.sea),Ee=f==="comparison"?C:S,Ve=Ee.winner==="air"?"air":"sea",Pe=Ee[Ve],ba=ce[Ve].toLowerCase();return a.jsxs(Ga,{children:[a.jsxs(Ua,{children:[a.jsxs(Qa,{children:[a.jsxs(Ka,{children:[a.jsx(Ce,{}),"Motor de cotización"]}),a.jsx(Wa,{children:"Cotizador Imponect"}),a.jsx(Xa,{children:"Calculá importaciones marítimas, compará contra aéreo y prepará presupuestos con costos, impuestos y ganancia."})]}),a.jsx(Ha,{children:a.jsxs(Ya,{children:[a.jsxs(Ja,{children:["Total general ",ba]}),a.jsxs(qa,{children:[a.jsx(Za,{children:I(Pe.grandTotal)}),a.jsx(et,{children:"Precio más bajo"})]}),a.jsxs(at,{children:[I(Pe.unitCost)," neto por caja"]})]})})]}),a.jsxs(tt,{children:[a.jsxs(We,{type:"button",$active:f==="maritime",onClick:()=>j("maritime"),children:[a.jsx(Le,{}),"Cotizar"]}),a.jsxs(We,{type:"button",$active:f==="comparison",onClick:()=>j("comparison"),children:[a.jsx(Ce,{}),"Comparación"]})]}),f==="maritime"?a.jsxs(rt,{children:[a.jsxs(ot,{children:[a.jsxs(nt,{children:[a.jsxs("div",{children:[a.jsx(L,{children:"Cargas consolidadas"}),a.jsxs(lt,{children:[n.length," carga",n.length===1?"":"s"," en el mismo envío"]})]}),a.jsxs(fe,{type:"button",onClick:de,children:[a.jsx(la,{}),"Agregar carga"]})]}),a.jsx(dt,{children:n.map(xa)}),a.jsxs(ft,{children:[a.jsxs(be,{children:[a.jsx(L,{children:"Base marítima"}),a.jsxs(Se,{$columns:4,children:[a.jsx(b,{label:"Trade Assurance",unit:"%",value:s.tradeAssuranceRate,onChange:r=>w("tradeAssuranceRate",r)}),a.jsx(b,{label:"Flete marítimo",unit:"USD",value:s.seaFreightRate,onChange:r=>w("seaFreightRate",r)}),a.jsx(b,{label:"Seguro de carga",unit:"USD",placeholder:"Auto 1%",value:s.cargoInsurance,onChange:r=>w("cargoInsurance",r)}),a.jsx(b,{label:"Gastos de origen",unit:"USD",value:s.originExpenses,onChange:r=>w("originExpenses",r)})]})]}),a.jsxs(be,{children:[a.jsx(L,{children:"Impuestos"}),a.jsxs(Se,{$columns:3,children:[a.jsx(b,{label:"DER",unit:"%",value:s.derRate,onChange:r=>w("derRate",r)}),a.jsx(b,{label:"TE",unit:"%",value:s.statisticRate,onChange:r=>w("statisticRate",r)}),a.jsx(b,{label:"IVA",unit:"%",value:s.vatRate,onChange:r=>w("vatRate",r)}),a.jsx(b,{label:"IVA adicional",unit:"%",value:s.additionalVatRate,onChange:r=>w("additionalVatRate",r)}),a.jsx(b,{label:"IIBB",unit:"%",value:s.grossIncomeRate,onChange:r=>w("grossIncomeRate",r)}),a.jsx(b,{label:"Ganancias",unit:"%",value:s.incomeTaxRate,onChange:r=>w("incomeTaxRate",r)})]})]}),a.jsxs(be,{children:[a.jsx(L,{children:"Destino y presupuesto"}),a.jsxs(yt,{children:[a.jsxs(Ie,{$columns:4,children:[a.jsx(wt,{children:a.jsx(b,{label:"Depósito fiscal",unit:"USD",placeholder:"Auto tabla",value:s.fiscalDepositOverride,onChange:r=>w("fiscalDepositOverride",r)})}),a.jsx(b,{label:"Gastos destino",unit:"USD",value:s.destinationExpenses,onChange:r=>w("destinationExpenses",r)}),a.jsxs(kr,{label:"Carga IMO",unit:"IMO",value:s.imoCargo,onChange:r=>w("imoCargo",r),children:[a.jsx("option",{value:"NO",children:"NO"}),a.jsx("option",{value:"SI",children:"SÍ"})]}),a.jsx(b,{label:"Despachante",unit:"%",value:s.customsBrokerRate,onChange:r=>w("customsBrokerRate",r)})]}),a.jsxs(Ie,{$columns:3,children:[a.jsx(b,{label:"Mínimo honorarios",unit:"USD",value:s.customsBrokerMinimum,onChange:r=>w("customsBrokerMinimum",r)}),a.jsx(b,{label:"Gestión/firma",unit:"USD",value:s.managementFee,onChange:r=>w("managementFee",r)}),a.jsx(b,{label:"Handling",unit:"USD",value:s.handling,onChange:r=>w("handling",r)})]}),a.jsxs(Ie,{$columns:3,children:[a.jsx(b,{label:"Consolidado",unit:"USD",value:s.consolidation,onChange:r=>w("consolidation",r)}),a.jsx(b,{label:"Envío terrestre",unit:"USD",value:s.terrestrialFreight,onChange:r=>w("terrestrialFreight",r)}),a.jsx(b,{label:"Ganancia",unit:"%",value:s.profitRate,onChange:r=>w("profitRate",r)})]})]})]}),a.jsxs(be,{children:[a.jsx(L,{children:"Aéreo estimado"}),a.jsxs(Se,{$columns:4,children:[a.jsx(b,{label:"Tarifa aérea",unit:"USD/KG",value:s.airRate,onChange:r=>w("airRate",r)}),a.jsx(oa,{label:"CBM total",unit:"CBM",value:T(S.totals.cbm,2)}),a.jsx(oa,{label:"Peso cobrado",unit:"KG",value:T(S.totals.airChargeableKg,2)}),a.jsx(b,{label:"Flete aéreo total",unit:"USD",placeholder:"Auto tarifa",value:s.airDeclaredFreight,onChange:r=>w("airDeclaredFreight",r)})]})]}),a.jsxs(jt,{children:[a.jsx(vt,{children:a.jsx("span",{children:"Depósito fiscal"})}),a.jsx(kt,{children:pr.map(([r,d])=>a.jsxs(Ct,{children:[a.jsx("span",{children:r}),a.jsx("strong",{children:d})]},r))})]})]})]}),a.jsxs(it,{children:[a.jsxs(Dt,{children:[a.jsx(N,{label:"CBM total",value:`${T(S.totals.cbm,2)} CBM`}),a.jsx(N,{label:"Peso total",value:`${T(S.totals.weightKg,2)} KG`}),a.jsx(N,{label:"Toneladas",value:`${T(S.totals.weightTon,2)} TON`}),a.jsx(N,{label:"Base W/M",value:T(S.totals.seaChargeableMeasure,3)})]}),a.jsx(na,{quote:S.sea}),a.jsxs(Rt,{children:[a.jsxs(Be,{type:"button",onClick:ma,disabled:X,children:[a.jsx(Ce,{}),"Cotizar"]}),a.jsxs(Bt,{type:"button",onClick:ha,disabled:H||X,children:[a.jsx(ya,{}),H?"Guardando...":"Guardar como borrador"]}),a.jsxs(fe,{type:"button",onClick:ua,disabled:X,children:[a.jsx(wa,{}),"Restaurar"]})]}),a.jsxs(Xe,{children:[a.jsx(L,{children:"Vista previa marítima"}),_e.map(r=>a.jsx(sa,{...r},r.title))]})]})]}):a.jsxs(_t,{children:[a.jsxs(Et,{children:[a.jsx(ca,{icon:a.jsx(Le,{}),title:"Marítimo",quote:C.sea,winner:C.winner==="sea",selected:y==="sea",onSelect:()=>v("sea")}),a.jsx(ca,{icon:a.jsx(ja,{}),title:"Aéreo",quote:C.air,winner:C.winner==="air",selected:y==="air",onSelect:()=>v("air")})]}),a.jsxs(Ht,{children:[a.jsx(L,{children:"Comparación visual"}),a.jsxs(Ye,{children:[a.jsxs(Je,{children:[a.jsx("span",{children:"Marítimo"}),a.jsx("strong",{children:I(C.sea.grandTotal)})]}),a.jsx(Ze,{children:a.jsx(qe,{$variant:"sea",$width:C.seaWidth})})]}),a.jsxs(Ye,{children:[a.jsxs(Je,{children:[a.jsx("span",{children:"Aéreo"}),a.jsx("strong",{children:I(C.air.grandTotal)})]}),a.jsx(Ze,{children:a.jsx(qe,{$variant:"air",$width:C.airWidth})})]})]}),a.jsx(na,{quote:Z}),a.jsxs(Qt,{children:[a.jsx(N,{label:"Cajas",value:T(C.totals.packages,0)}),a.jsx(N,{label:`Flete ${ke.toLowerCase()}`,value:I(Z.freight)}),a.jsx(N,{label:"Recuperable",value:I(Z.recoverable)}),a.jsx(N,{label:"Precio venta neto/caja",value:I(Z.saleNet)}),a.jsx(N,{label:"Ganancia/caja",value:I(Z.unitProfit)})]}),a.jsxs(Xe,{children:[a.jsxs(st,{children:[a.jsxs(L,{children:["Detalle ",ke.toLowerCase()]}),a.jsxs(ct,{children:[a.jsxs(Be,{type:"button",onClick:ve,children:[a.jsx(da,{}),"GENERAR PRESUPUESTO"]}),a.jsxs(fe,{type:"button",onClick:()=>j("maritime"),children:["Editar datos",a.jsx(va,{})]})]})]}),_e.map(r=>a.jsx(sa,{...r},r.title))]})]}),B&&a.jsx(Cr,{form:F,sellerForm:E,productImages:U,quote:C[O],method:O,onChange:pe,onSellerChange:me,onMethodChange:z,onImagesSelected:ie,onImageRemove:he,onClose:()=>x(!1),onSubmit:pa,isGenerating:V,canSubmit:oe})]})};export{Br as CotizadorScreen};
