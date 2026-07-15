import styled, { keyframes, css } from 'styled-components';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
`;

const scan = keyframes`
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
`;

export const ScreenWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  height: 100%;
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.06)' : 'rgba(0, 51, 77, 0.045)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : 'rgba(198, 137, 63, 0.04)'} 1px, transparent 1px),
    ${({ theme }) => theme.color.background};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  overflow: hidden;
`;

export const MainArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.55fr);
  gap: ${({ theme }) => theme.spacing[5]};
  align-items: stretch;
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(0, 51, 77, 0.78)' : 'rgba(255,255,255,0.84)'} 0%, ${({ theme }) => theme.color.surface} 100%);
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 24px rgba(198, 137, 63, 0.12);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.16), transparent);
    animation: ${scan} 6s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderCopy = styled.div`
  position: relative;
  z-index: 1;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const Subtitle = styled.p`
  max-width: 54rem;
  margin: ${({ theme }) => theme.spacing[3]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const StatGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 6rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.1)' : theme.color.accentFaded};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CategoryBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
`;

export const CategoryButton = styled.button`
  min-height: 2.3rem;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198,137,63,0.16)' : theme.color.accentFaded) : theme.color.surface)};
  color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textSecondary)};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const SearchBox = styled.label`
  flex: 1;
  max-width: 32rem;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.neutral[50]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.textSecondary};
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-family: inherit;
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.accent} 0%, ${({ theme }) => theme.color.accentLight} 100%);
  color: ${({ theme }) => theme.color.textInverse};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${riseIn} 0.5s ease both;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.md}, 0 0 24px rgba(198, 137, 63, 0.16);
    border-color: ${({ theme }) => theme.color.accent};
  }
`;

export const ProductImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.color.neutral[100]};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: white;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
`;

export const ProductContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ProductDesc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.neutral[50]};
`;

export const SpecsButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.color.accent};
    color: white;
    border-color: ${({ theme }) => theme.color.accent};
  }
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.color.background};
  width: 100%;
  max-width: 64rem;
  max-height: 90vh;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

export const CloseModal = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  svg { width: 1.5rem; height: 1.5rem; }
`;

export const ModalScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const CarouselSection = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: black;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CarouselNav = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CarouselDot = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? 'white' : 'rgba(255, 255, 255, 0.3)')};
  cursor: pointer;
`;

export const ModalTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.text};
`;

export const ModalDesc = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.base};
  color: ${({ theme }) => theme.color.textSecondary};
  line-height: 1.6;
`;

export const UseCasesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const UseCasesHeading = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.accent};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const UseCaseItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.neutral[50]};
  border-radius: ${({ theme }) => theme.radius.md};
  border-left: 4px solid ${({ theme }) => theme.color.accent};
`;

export const UseCaseText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.color.textSecondary};
  line-height: 1.5;
  font-style: italic;
`;
