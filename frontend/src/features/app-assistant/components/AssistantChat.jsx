import React, { useEffect, useRef, useState } from 'react';
import { IconClose, IconIA, IconSend, IconTrash } from '../../../shared/components/Icons';
import { useAppAssistant } from '../hooks/useAppAssistant';
import * as S from './AssistantChatStyled';

export const AssistantChat = ({ panel = false, onClose }) => {
  const { messages, isLoading, error, sendMessage, clearConversation } = useAppAssistant();
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  const submit = (event) => {
    event?.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;
    setInput('');
    sendMessage(question);
  };

  return (
    <S.ChatShell $panel={panel}>
      <S.Header>
        <S.HeaderTitle>
          <div><IconIA /></div>
          <div>
            <h3>Asistente Imponect</h3>
            <p>RAG operativo y navegación agéntica</p>
          </div>
        </S.HeaderTitle>
        <S.HeaderActions>
          <S.IconButton type="button" onClick={clearConversation} title="Limpiar conversación"><IconTrash /></S.IconButton>
          {panel && <S.IconButton type="button" onClick={onClose} title="Cerrar asistente"><IconClose /></S.IconButton>}
        </S.HeaderActions>
      </S.Header>

      <S.Messages>
        {messages.map(message => (
          <S.Message key={message.id} $user={message.role === 'user'}>
            <S.MessageLabel $user={message.role === 'user'}>{message.role === 'user' ? 'Vos' : 'Imponect'}</S.MessageLabel>
            <S.MessageText>{message.content}</S.MessageText>
            {message.toolResults?.length > 0 && (
              <S.Results>
                {message.toolResults.map((result, index) => (
                  <S.ResultPill key={`${result.label}-${index}`} $error={result.status === 'error'}>
                    {result.label}
                  </S.ResultPill>
                ))}
              </S.Results>
            )}
            {message.matches?.length > 1 && (
              <S.Matches>
                También encontré: {message.matches.slice(1).map(match => match.name).join(' · ')}
              </S.Matches>
            )}
            {message.sources?.length > 0 && (
              <S.Sources>Fuentes: {[...new Set(message.sources.map(source => source.title))].join(' · ')}</S.Sources>
            )}
            {message.suggestions?.length > 0 && (
              <S.Suggestions>
                {message.suggestions.map(suggestion => (
                  <S.Suggestion key={suggestion} type="button" onClick={() => sendMessage(suggestion)}>{suggestion}</S.Suggestion>
                ))}
              </S.Suggestions>
            )}
          </S.Message>
        ))}
        {isLoading && <S.Loading><span /><span /><span /></S.Loading>}
        <div ref={endRef} />
      </S.Messages>

      {error && <S.Error>{error}</S.Error>}

      <S.Form onSubmit={submit}>
        <S.Input
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              submit();
            }
          }}
          placeholder="Pedime navegar, crear o explicarte una función..."
          rows={2}
          disabled={isLoading}
        />
        <S.SendButton type="submit" disabled={!input.trim() || isLoading} title="Enviar"><IconSend /></S.SendButton>
      </S.Form>
    </S.ChatShell>
  );
};
