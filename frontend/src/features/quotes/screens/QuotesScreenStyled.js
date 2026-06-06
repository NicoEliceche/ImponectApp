import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radius.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
    transform: translateY(-1px);
  }
`;

export const TableCard = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.neutral[400]};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: ${({ theme }) => theme.color.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[100]};
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[50]};
`;

export const StatusBadge = styled.span`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: ${({ $variant, theme }) => 
    $variant === 'success' ? theme.color.successLight : 
    $variant === 'warning' ? theme.color.warningLight : 
    theme.color.neutral[100]};
  color: ${({ $variant, theme }) => 
    $variant === 'success' ? theme.color.success : 
    $variant === 'warning' ? theme.color.warning : 
    theme.color.neutral[700]};
`;
