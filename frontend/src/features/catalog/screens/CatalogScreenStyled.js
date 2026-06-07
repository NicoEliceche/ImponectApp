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

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background:
    radial-gradient(circle at top right, ${({ theme }) => theme.color.accentFaded} 0%, transparent 32%),
    ${({ theme }) => theme.color.background};
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

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
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
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${riseIn} 0.5s ease both;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.md};
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
    background: ${({ theme }) => theme.color.primary};
    color: white;
    border-color: ${({ theme }) => theme.color.primary};
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
