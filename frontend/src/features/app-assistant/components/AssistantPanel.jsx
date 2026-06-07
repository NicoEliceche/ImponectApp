import React from 'react';
import { IconIA } from '../../../shared/components/Icons';
import { useAssistantStore } from '../../../app/stores/assistantStore';
import { AssistantChat } from './AssistantChat';
import * as S from './AssistantChatStyled';

export const AssistantPanel = () => {
  const { isPanelOpen, togglePanel, closePanel } = useAssistantStore();

  return (
    <>
      {isPanelOpen && <S.DrawerBackdrop onClick={closePanel} />}
      <S.Drawer $open={isPanelOpen} aria-hidden={!isPanelOpen}>
        <AssistantChat panel onClose={closePanel} />
      </S.Drawer>
      <S.FloatingButton type="button" $hidden={isPanelOpen} onClick={togglePanel} title="Abrir Asistente Imponect">
        <IconIA />
      </S.FloatingButton>
    </>
  );
};
