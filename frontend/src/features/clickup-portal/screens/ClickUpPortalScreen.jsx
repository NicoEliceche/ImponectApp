import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconBack } from '../../../shared/components/Icons';
import {
  PortalOverlay,
  PortalHeader,
  BackButton,
  PortalFrame
} from './ClickUpPortalScreenStyled';

export const ClickUpPortalScreen = () => {
  const navigate = useNavigate();

  return (
    <PortalOverlay>
      <PortalHeader>
        <BackButton onClick={() => navigate('/')} title="Volver a ImponectApp">
          <IconBack /> Volver a la App
        </BackButton>
      </PortalHeader>
      <PortalFrame 
        src="https://app.clickup.com/90133071152/v/s/901313397809" 
        title="ClickUp Workspace"
        allow="clipboard-read; clipboard-write; fullscreen"
      />
    </PortalOverlay>
  );
};
