import { tokens } from './tokens';

const darkColors = {
  ...tokens.color,
  background: '#06131a', // Más profundo aún
  surface: '#0d1f29',    // Tarjetas claramente distinguibles
  border: '#1b3a4a',
  text: '#ffffff',       // Blanco puro para lectura
  textSecondary: '#cbd5e1', // Gris azulado claro para subtítulos
  neutral: {
    ...tokens.color.neutral,
    50: '#162e3a',
    100: '#1b3a4a',
    900: '#ffffff', // Forzar títulos a blanco en dark
  }
};

const lightColors = {
  ...tokens.color,
};

export const darkTheme = {
  ...tokens,
  color: darkColors,
  isDark: true,
};

export const lightTheme = {
  ...tokens,
  color: lightColors,
  isDark: false,
};
