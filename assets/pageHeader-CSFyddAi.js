import{p as t,O as e}from"./index-BZYg4alH.js";const i=e`
  0% {
    transform: translate3d(-110%, 0, 0);
    opacity: 0;
  }

  12% {
    opacity: 1;
  }

  54% {
    opacity: 1;
  }

  100% {
    transform: translate3d(110%, 0, 0);
    opacity: 0;
  }
`,n=e`
  0% {
    transform: translate3d(-120%, 22%, 0) rotate(-9deg);
    opacity: 0;
  }

  22% {
    opacity: 0.72;
  }

  100% {
    transform: translate3d(120%, -22%, 0) rotate(-9deg);
    opacity: 0;
  }
`,o=t`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  gap: ${({theme:a})=>a.spacing[3]};
  min-height: calc(${({theme:a})=>a.layout.buttonHeight} + ${({theme:a})=>a.spacing[10]} + ${({theme:a})=>a.spacing[8]});
  padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.md};
  background:
    linear-gradient(90deg, ${({theme:a})=>`color-mix(in srgb, ${a.color.accent} ${a.isDark?8:10}%, transparent)`} 1px, transparent 1px),
    linear-gradient(180deg, ${({theme:a})=>a.isDark?"color-mix(in srgb, white 5%, transparent)":`color-mix(in srgb, ${a.color.primary} 6%, transparent)`} 1px, transparent 1px),
    ${({theme:a})=>a.color.surface};
  background-size: ${({theme:a})=>a.spacing[12]} ${({theme:a})=>a.spacing[12]};
  box-shadow: ${({theme:a})=>a.shadow.sm};

  &::before {
    content: '';
    position: absolute;
    top: -45%;
    bottom: -45%;
    left: -40%;
    width: 68%;
    z-index: 0;
    pointer-events: none;
    background:
      linear-gradient(
        90deg,
        transparent 0%,
        rgba(198, 137, 63, 0.08) 28%,
        rgba(198, 137, 63, ${({theme:a})=>a.isDark?.42:.34}) 50%,
        rgba(212, 163, 106, ${({theme:a})=>a.isDark?.24:.18}) 62%,
        transparent 100%
      );
    filter: blur(0.12rem);
    transform: translate3d(-110%, 0, 0);
    animation: ${i} 5.8s ease-in-out infinite;
    will-change: transform, opacity;
  }

  &::after {
    content: '';
    position: absolute;
    top: -34%;
    bottom: -34%;
    left: -46%;
    width: 76%;
    z-index: 0;
    pointer-events: none;
    background:
      linear-gradient(
        105deg,
        transparent 0%,
        rgba(198, 137, 63, 0) 34%,
        rgba(198, 137, 63, ${({theme:a})=>a.isDark?.28:.2}) 52%,
        transparent 78%
      );
    transform: translate3d(-120%, 22%, 0) rotate(-9deg);
    animation: ${n} 8.4s ease-in-out 1.1s infinite;
    will-change: transform, opacity;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
      opacity: 0;
    }
  }

  @media (max-width: ${({theme:a})=>a.breakpoints.md}) {
    min-height: auto;
    padding: ${({theme:a})=>a.spacing[3]};
    gap: ${({theme:a})=>a.spacing[3]};
    background-size: ${({theme:a})=>a.spacing[10]} ${({theme:a})=>a.spacing[10]};
  }
`,s=t`
  position: relative;
  z-index: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,p=t`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  width: fit-content;
  margin: 0 0 ${({theme:a})=>a.spacing[1]};
  color: ${({theme:a})=>a.color.accent};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.extrabold};
  line-height: ${({theme:a})=>a.typography.lineHeight.snug};
  text-transform: uppercase;
  letter-spacing: 0;

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }
`,g=t`
  margin: 0;
  color: ${({theme:a})=>a.color.text};
  font-size: ${({theme:a})=>a.typography.size["4xl"]};
  font-weight: ${({theme:a})=>a.typography.weight.extrabold};
  line-height: ${({theme:a})=>a.typography.lineHeight.tight};
  letter-spacing: 0;
  overflow-wrap: anywhere;

  @media (max-width: ${({theme:a})=>a.breakpoints.md}) {
    font-size: ${({theme:a})=>a.typography.size["3xl"]};
  }
`,c=t`
  max-width: 58rem;
  margin: ${({theme:a})=>a.spacing[1]} 0 0;
  color: ${({theme:a})=>a.color.textSecondary};
  font-size: ${({theme:a})=>a.typography.size.lg};
  font-weight: ${({theme:a})=>a.typography.weight.medium};
  line-height: ${({theme:a})=>a.typography.lineHeight.normal};
  overflow-wrap: anywhere;

  @media (max-width: ${({theme:a})=>a.breakpoints.md}) {
    font-size: ${({theme:a})=>a.typography.size.base};
  }
`;export{s as a,p as b,g as c,c as d,o as p};
