import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import * as S from './QuotesScreenStyled';

export const QuotesScreen = () => {
  const [isCreating, setIsCreating] = useState(false);

  if (isCreating) {
    return (
      <div style={{ padding: '1rem 0' }}>
        <QuoteForm onCancel={() => setIsCreating(false)} />
      </div>
    );
  }

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleContainer>
          <S.Title>Presupuestos</S.Title>
          <S.Description>Gestiona y genera cotizaciones para tus clientes.</S.Description>
        </S.TitleContainer>
        <S.PrimaryButton onClick={() => setIsCreating(true)}>
          <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Nuevo Presupuesto
        </S.PrimaryButton>
      </S.Header>
      
      <S.TableCard>
        <S.Table>
          <thead>
            <tr>
              <S.Th>ID</S.Th>
              <S.Th>Cliente</S.Th>
              <S.Th>Fecha</S.Th>
              <S.Th>Monto</S.Th>
              <S.Th>Estado</S.Th>
              <S.Th style={{ textAlign: 'right' }}>Acciones</S.Th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: '001', client: 'Empresa Alpha', date: '15/05/2026', amount: '$1,500.00', status: 'Enviado', variant: 'success' },
              { id: '002', client: 'Socio Beta', date: '14/05/2026', amount: '$2,750.00', status: 'Pendiente', variant: 'warning' },
              { id: '003', client: 'Gamma Corp', date: '10/05/2026', amount: '$500.00', status: 'Borrador', variant: 'neutral' },
            ].map((q) => (
              <tr key={q.id}>
                <S.Td style={{ fontWeight: '700', color: '#9ca3af' }}>#{q.id}</S.Td>
                <S.Td style={{ fontWeight: '700', color: 'inherit' }}>{q.client}</S.Td>
                <S.Td style={{ fontWeight: '500', color: '#6b7280' }}>{q.date}</S.Td>
                <S.Td style={{ fontWeight: '800', color: '#c6893f' }}>{q.amount}</S.Td>
                <S.Td>
                  <S.StatusBadge $variant={q.variant}>
                    {q.status}
                  </S.StatusBadge>
                </S.Td>
                <S.Td style={{ textAlign: 'right' }}>
                   <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                     <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>👁️</button>
                     <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>📥</button>
                   </div>
                </S.Td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableCard>
    </S.ScreenWrapper>
  );
};
