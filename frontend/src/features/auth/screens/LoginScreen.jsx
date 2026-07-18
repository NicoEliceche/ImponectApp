import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../app/stores/authStore';
import { publicAsset } from '../../../shared/utils/urls';
import * as S from './LoginScreenStyled';

const GOOGLE_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

const loadGoogleIdentityScript = () => new Promise((resolve, reject) => {
  if (window.google?.accounts?.id) {
    resolve();
    return;
  }

  const existingScript = document.querySelector(`script[src="${GOOGLE_SCRIPT_SRC}"]`);
  if (existingScript) {
    existingScript.addEventListener('load', resolve, { once: true });
    existingScript.addEventListener('error', reject, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = GOOGLE_SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  script.onload = resolve;
  script.onerror = reject;
  document.head.appendChild(script);
});

export const LoginScreen = () => {
  const buttonRef = useRef(null);
  const googleClientId = useAuth(state => state.googleClientId);
  const configError = useAuth(state => state.configError);
  const authError = useAuth(state => state.authError);
  const status = useAuth(state => state.status);
  const loginWithGoogleCredential = useAuth(state => state.loginWithGoogleCredential);
  const clearAuthError = useAuth(state => state.clearAuthError);
  const [scriptError, setScriptError] = useState(null);

  useEffect(() => {
    if (!googleClientId || !buttonRef.current) return undefined;

    let isMounted = true;

    loadGoogleIdentityScript()
      .then(() => {
        if (!isMounted || !buttonRef.current) return;

        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: ({ credential }) => {
            if (credential) loginWithGoogleCredential(credential).catch(() => undefined);
          },
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        buttonRef.current.innerHTML = '';
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: 'filled_black',
          size: 'large',
          shape: 'rectangular',
          text: 'signin_with',
          logo_alignment: 'left',
          width: Math.min(360, buttonRef.current.getBoundingClientRect().width || 360),
        });
      })
      .catch(() => {
        if (isMounted) setScriptError('No se pudo cargar el login de Google.');
      });

    return () => {
      isMounted = false;
    };
  }, [googleClientId, loginWithGoogleCredential]);

  const isBusy = status === 'checking';
  const loginDisabled = Boolean(configError || scriptError || !googleClientId);

  return (
    <S.Screen>
      <S.GridGlow />
      <S.LoginShell $blurred={Boolean(authError)}>
        <S.BrandPanel>
          <S.BrandBadge>
            <img src={publicAsset('assets/imponect_logo_white.jpg')} alt="Imponect" />
            <span>IMPONECT ACCESS</span>
          </S.BrandBadge>
          <S.Eyebrow>Control privado de operaciones</S.Eyebrow>
          <S.Title>Ingresá con tu cuenta autorizada</S.Title>
          <S.Subtitle>
            Acceso limitado a cuentas internas Imponect.
          </S.Subtitle>
          <S.SignalRow>
            <span />
            Sesión protegida con Google OAuth
          </S.SignalRow>
        </S.BrandPanel>

        <S.AuthCard>
          <S.CardHeader>
            <S.CardKicker>Login</S.CardKicker>
            <S.CardTitle>Google Workspace</S.CardTitle>
            <S.CardText>
              Usá un Gmail habilitado por Imponect.
            </S.CardText>
          </S.CardHeader>

          {(configError || scriptError) && (
            <S.InlineError>
              {configError || scriptError}
            </S.InlineError>
          )}

          <S.GoogleButtonSlot
            ref={buttonRef}
            $disabled={loginDisabled}
            aria-busy={isBusy}
          />

          {isBusy && (
            <S.WorkingLine>
              <span />
              Validando identidad con Imponect API
            </S.WorkingLine>
          )}
        </S.AuthCard>
      </S.LoginShell>

      {authError && (
        <S.ErrorOverlay role="alertdialog" aria-modal="true" aria-labelledby="auth-error-title">
          <S.ErrorModal>
            <S.ErrorIcon>!</S.ErrorIcon>
            <S.ErrorTitle id="auth-error-title">{authError.title}</S.ErrorTitle>
            <S.ErrorText>
              {authError.email ? `${authError.email} no está habilitada para ingresar.` : authError.message}
            </S.ErrorText>
            <S.ErrorHint>
              Reautenticá con una cuenta existente de Imponect.
            </S.ErrorHint>
            <S.RetryButton type="button" onClick={clearAuthError}>
              REAUTENTICAR
            </S.RetryButton>
          </S.ErrorModal>
        </S.ErrorOverlay>
      )}
    </S.Screen>
  );
};
