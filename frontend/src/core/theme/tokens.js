export const tokens = {
  color: {
    // Brand - Basado en imponect_logo.jpg
    primary:       '#00334d', // Teal oscuro (Avión/Barco)
    primaryLight:  '#005580', 
    primaryDark:   '#001a26',
    primaryFaded:  '#e6f2f7',
    
    accent:        '#c6893f', // Ocre/Dorado (Cajas)
    accentLight:   '#d4a36a',
    accentDark:    '#a06d32',
    accentFaded:   '#f9f3eb',

    // Semantic
    success:       '#10b981',
    successLight:  '#d1fae5',
    error:         '#ef4444',
    errorLight:    '#fee2e2',
    warning:       '#f59e0b',
    warningLight:  '#fef3c7',
    info:          '#005580',
    infoLight:     '#e6f2f7',

    // Neutrals
    neutral: {
      0:   '#ffffff',
      50:  '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },

    // Surface
    background:    '#f4f7f9', 
    surface:       '#ffffff',
    overlay:       'rgba(0, 51, 77, 0.5)',
    border:        '#e1e8ed',
    borderFocus:   '#00334d',

    // Text
    text:          '#001a26',
    textSecondary: '#4b5563',
    textTertiary:  '#9ca3af',
    textDisabled:  '#d1d5db',
    textInverse:   '#ffffff',
    textLink:      '#005580',
  },

  typography: {
    size: {
      xs:    '0.625rem',   // Reduced from 0.6875
      sm:    '0.75rem',    // Reduced from 0.8125
      base:  '0.875rem',   // Reduced from 1rem (Crucial for 1080p density)
      lg:    '1rem',       // Reduced from 1.125
      xl:    '1.125rem',   // Reduced from 1.25
      '2xl': '1.25rem',    // Reduced from 1.5
      '3xl': '1.5rem',     // Reduced from 1.875
      '4xl': '1.875rem',   // Reduced from 2.25
    },
    weight: {
      regular:   '400',
      medium:    '500',
      semibold:  '600',
      bold:      '700',
      extrabold: '800',
    },
    lineHeight: {
      tight:  1.2,
      snug:   1.375,
      normal: 1.5,
    },
  },

  radius: {
    sm:    '4px',     // Reduced
    md:    '8px',     // Reduced
    lg:    '12px',    // Reduced
    xl:    '16px',    // Reduced
    '2xl': '24px',    // Reduced
    full:  '9999px',
  },

  spacing: {
    1:  '0.125rem',   // Tightened
    2:  '0.25rem',    // Tightened
    3:  '0.5rem',     // Tightened
    4:  '0.75rem',    // Tightened
    5:  '1rem',       // Tightened
    6:  '1.25rem',    // Tightened
    8:  '1.5rem',     // Tightened
    10: '2rem',       // Tightened
    12: '2.5rem',     // Tightened
    16: '3rem',       // Tightened
  },

  layout: {
    sidebarWidth:    '200px',
    screenPaddingH:  '1.5rem',  // Reduced from 2rem
    cardRadius:      '1rem',    // Reduced from 1.25rem
    inputHeight:     '2.75rem', // Reduced from 3.25rem
    buttonHeight:    '2.75rem', // Reduced from 3.25rem
    maxContentWidth: '110rem',  // Slightly expanded for 4K
  },

  breakpoints: {
    sm:  '480px',
    md:  '768px',
    lg:  '1024px',
    xl:  '1280px',
    '2xl': '1536px',
  },

  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
};
