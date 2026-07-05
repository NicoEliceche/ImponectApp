import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 2px solid ${({ theme }) => theme.color.accentLight};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  text-align: right;
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.text};
  letter-spacing: -0.025em;
  margin: 0;

  span {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.color.textSecondary};
  margin: ${({ theme }) => theme.spacing[1]} 0 0 0;
`;

export const DateLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.accent};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const DashboardColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const RecentActivityTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  border-radius: ${({ theme }) => theme.radius.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-left: 4px solid ${({ theme }) => theme.color.accent};
  transition: all 0.2s;
  color: ${({ theme }) => theme.color.text};

  &:hover {
    transform: translateX(4px);
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : theme.color.neutral[100]};
  }
`;

export const ActivityIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.color.primaryFaded};
  border-radius: ${({ theme }) => theme.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
