import React, { useEffect, useState } from 'react';
import QuickLinks from '../components/QuickLinks';
import { AssistantChat } from '../../app-assistant';
import * as S from './HomeScreenStyled';

export const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();
        const date = new Date(data.datetime);
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = date.toLocaleDateString('es-ES', options).toUpperCase();
        const shortDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        
        setCurrentDate(`${dateString} | ${shortDate}`);
      } catch (error) {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = date.toLocaleDateString('es-ES', options).toUpperCase();
        const shortDate = date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        setCurrentDate(`${dateString} | ${shortDate}`);
      }
    };

    fetchDate();
  }, []);

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleContainer>
          <S.MainTitle>
            Bienvenido al <span>Tablero Principal</span>
          </S.MainTitle>
          <S.SubTitle>Este es el estado actual de Imponect.</S.SubTitle>
        </S.TitleContainer>
        <S.DateContainer>
          <S.DateLabel>{currentDate || 'Cargando fecha...'}</S.DateLabel>
        </S.DateContainer>
      </S.Header>
      
      <S.DashboardColumn>
        <QuickLinks />
        <AssistantChat />
      </S.DashboardColumn>
    </S.ScreenWrapper>
  );
};
