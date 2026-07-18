import { create } from 'zustand';
import { apiFetch } from '../../shared/utils/urls';

const parseResponse = async (response, fallbackMessage) => {
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await response.json().catch(() => ({}))
    : await response.text();

  if (!response.ok) {
    const error = new Error((typeof payload === 'string' ? payload : payload?.error) || fallbackMessage);
    error.status = response.status;
    error.code = typeof payload === 'string' ? null : payload?.code;
    error.email = typeof payload === 'string' ? null : payload?.email;
    throw error;
  }

  return payload;
};

export const useAuth = create((set, get) => ({
  user: null,
  status: 'checking',
  isInitializing: false,
  googleClientId: null,
  configError: null,
  authError: null,
  tokens: {
    microsoft: null,
    clickup: null,
  },

  setUser: (user) => set({ user }),

  setTokens: (service, tokens) =>
    set((state) => ({
      tokens: { ...state.tokens, [service]: tokens }
    })),

  clearAuthError: () => set({ authError: null }),

  initializeSession: async () => {
    const { isInitializing } = get();
    if (isInitializing) return;

    set({ isInitializing: true, status: 'checking', configError: null });

    let googleClientId = null;

    try {
      const configResponse = await apiFetch('/api/auth/google/config');
      const config = await parseResponse(configResponse, 'No se pudo cargar la configuración de Google OAuth.');
      googleClientId = config.clientId || null;
    } catch (error) {
      set({
        googleClientId: null,
        configError: error.message,
        status: 'unauthenticated',
        isInitializing: false,
      });
      return;
    }

    try {
      const sessionResponse = await apiFetch('/api/auth/google/session');
      const session = await parseResponse(sessionResponse, 'Sesión no iniciada.');

      set({
        user: session.user,
        googleClientId,
        status: 'authenticated',
        isInitializing: false,
        authError: null,
      });
    } catch (error) {
      set({
        user: null,
        googleClientId,
        status: 'unauthenticated',
        isInitializing: false,
        authError: error.status === 403
          ? {
              title: 'Cuenta sin acceso',
              message: error.message,
              email: error.email,
            }
          : null,
      });
    }
  },

  loginWithGoogleCredential: async (credential) => {
    set({ status: 'checking', authError: null });

    try {
      const response = await apiFetch('/api/auth/google/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential }),
      });
      const payload = await parseResponse(response, 'No se pudo iniciar sesión con Google.');

      set({
        user: payload.user,
        status: 'authenticated',
        authError: null,
      });

      return payload.user;
    } catch (error) {
      set({
        user: null,
        status: 'unauthenticated',
        authError: {
          title: error.code === 'ACCOUNT_NOT_ALLOWED' ? 'Cuenta sin acceso' : 'No se pudo iniciar sesión',
          message: error.code === 'ACCOUNT_NOT_ALLOWED'
            ? 'Reautenticá con una cuenta habilitada de Imponect.'
            : error.message,
          email: error.email,
        },
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiFetch('/api/auth/google/logout', { method: 'POST' });
    } catch {
      // La UI debe cerrar sesión localmente aunque la request falle.
    }

    set({
      user: null,
      status: 'unauthenticated',
      authError: null,
      tokens: { microsoft: null, clickup: null },
    });
  },

  checkConnections: async () => {
    try {
      const msRes = await apiFetch('/api/auth/microsoft/status');
      const msData = await msRes.json();

      set((state) => ({
        tokens: {
          ...state.tokens,
          microsoft: msData.connected ? 'connected' : null,
        }
      }));
    } catch (err) {
      console.error('Error checking connections:', err);
    }
  }
}));
