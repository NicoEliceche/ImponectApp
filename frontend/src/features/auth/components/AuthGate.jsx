import React, { useEffect } from 'react';
import { useAuth } from '../../../app/stores/authStore';
import { LoginScreen } from '../screens/LoginScreen';
import { AuthLoading } from '../screens/LoginScreenStyled';

export const AuthGate = ({ children }) => {
  const status = useAuth(state => state.status);
  const initializeSession = useAuth(state => state.initializeSession);

  useEffect(() => {
    initializeSession();
  }, [initializeSession]);

  if (status === 'authenticated') {
    return children;
  }

  if (status === 'checking') {
    return (
      <AuthLoading>
        <span />
        <strong>Validando sesión</strong>
      </AuthLoading>
    );
  }

  return <LoginScreen />;
};
