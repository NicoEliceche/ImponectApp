import React, { useState, useEffect, useRef } from 'react';
import QuickLinks from '../components/QuickLinks';
import { AssistantChat } from '../../app-assistant';
import { IconIA, IconSend, IconTrash } from '../../../shared/components/Icons';
import { sendAiAssistMessage } from '../api/aiAssistApi';
import * as S from './HomeScreenStyled';

export const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [aiMessages, setAiMessages] = useState([]);
  const [aiInput, setAiInput] = useState('');
  const [aiError, setAiError] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const aiMessagesEndRef = useRef(null);

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

  useEffect(() => {
    aiMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [aiMessages, isAiLoading]);

  const handleAiSubmit = async (event) => {
    event?.preventDefault();
    const question = aiInput.trim();
    if (!question || isAiLoading) return;

    const nextMessages = [...aiMessages, { role: 'user', content: question }];
    setAiMessages(nextMessages);
    setAiInput('');
    setAiError('');
    setIsAiLoading(true);

    try {
      const response = await sendAiAssistMessage(
        nextMessages.map(({ role, content }) => ({ role, content }))
      );

      setAiMessages(currentMessages => [
        ...currentMessages,
        {
          role: 'assistant',
          content: response.answer,
          sources: response.sources || [],
          model: response.model
        }
      ]);
    } catch (error) {
      setAiError(error.message || 'No se pudo obtener una respuesta.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleAiKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleAiSubmit();
    }
  };

  const clearAiConversation = () => {
    setAiMessages([]);
    setAiError('');
    setAiInput('');
  };

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
      
      <S.ContentGrid>
        <S.DashboardColumn>
          <QuickLinks />
          <AssistantChat />
        </S.DashboardColumn>

        <S.IAAssistCard>
          <S.IAHeader>
            <S.IATitleGroup>
              <S.IAIcon><IconIA /></S.IAIcon>
              <div>
                <S.IATitle>IA Assist</S.IATitle>
                <S.IASubtitle>Consultas y búsqueda con Gemini</S.IASubtitle>
              </div>
            </S.IATitleGroup>
            {aiMessages.length > 0 && (
              <S.IAClearButton type="button" onClick={clearAiConversation} title="Limpiar conversación">
                <IconTrash />
              </S.IAClearButton>
            )}
          </S.IAHeader>

          <S.IAMessages>
            {aiMessages.length === 0 ? (
              <S.IAWelcome>
                <IconIA />
                <strong>¿Qué querés consultar?</strong>
                <span>Preguntá sobre actualidad, negocios o cualquier tema.</span>
              </S.IAWelcome>
            ) : aiMessages.map((message, index) => (
              <S.IAMessage key={`${message.role}-${index}`} $user={message.role === 'user'}>
                <S.IAMessageLabel>{message.role === 'user' ? 'Vos' : 'Gemini'}</S.IAMessageLabel>
                <S.IAMessageText>{message.content}</S.IAMessageText>
                {message.sources?.length > 0 && (
                  <S.IASources>
                    {message.sources.map(source => (
                      <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                        {source.title}
                      </a>
                    ))}
                  </S.IASources>
                )}
              </S.IAMessage>
            ))}
            {isAiLoading && (
              <S.IALoading>
                <span />
                <span />
                <span />
              </S.IALoading>
            )}
            <div ref={aiMessagesEndRef} />
          </S.IAMessages>

          {aiError && <S.IAError>{aiError}</S.IAError>}

          <S.IAForm onSubmit={handleAiSubmit}>
            <S.IAInput
              value={aiInput}
              onChange={event => setAiInput(event.target.value)}
              onKeyDown={handleAiKeyDown}
              placeholder="Preguntale algo a Gemini..."
              rows={2}
              disabled={isAiLoading}
            />
            <S.IASubmitButton type="submit" disabled={!aiInput.trim() || isAiLoading} title="Enviar consulta">
              <IconSend />
            </S.IASubmitButton>
          </S.IAForm>
        </S.IAAssistCard>
      </S.ContentGrid>
    </S.ScreenWrapper>
  );
};
