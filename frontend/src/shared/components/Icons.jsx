import React from 'react';
import { useTheme } from 'styled-components';
import { publicAsset } from '../utils/urls';

export const IconIA = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
    <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2M7 2.75V4M17 2.75V4M7 20v1.25M17 20v1.25M2.75 7H4M20 7h1.25M2.75 17H4M20 17h1.25" />
  </svg>
);

export const IconUserSilhouette = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <circle cx="12" cy="7.4" r="4" strokeWidth={2.1} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.1}
      d="M2.7 24c.8-6.55 4.15-10.15 9.3-10.15S20.5 17.45 21.3 24"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.1}
      d="M5.45 21.7c1.55-2.05 3.75-3.1 6.55-3.1s5 1.05 6.55 3.1"
    />
  </svg>
);

export const IconDashboard = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export const IconAI = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const IconCRM = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const IconQuotes = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export const IconCalculator = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </svg>
);

export const IconPlane = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11.5l18-7-7 18-3-7-8-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15.5l4-4" />
  </svg>
);

export const IconShip = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14l2-7h12l2 7M6 7V4h12v3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14h18l-2.5 5h-13L3 14zM5 20c1.2 0 1.8-1 3-1s1.8 1 3 1 1.8-1 3-1 1.8 1 3 1 1.8-1 3-1" />
  </svg>
);

export const IconBusiness = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const IconSettings = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const IconLogout = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.75A1.75 1.75 0 0014 4H6.75A1.75 1.75 0 005 5.75v12.5C5 19.216 5.784 20 6.75 20H14a1.75 1.75 0 001.75-1.75V15" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 12h8m0 0l-3-3m3 3l-3 3" />
  </svg>
);

export const IconDoubleChevronLeft = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
);

export const IconDoubleChevronRight = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M13 7l5 5-5 5M6 7l5 5-5 5" />
  </svg>
);

export const IconBell = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3A6 6 0 006 11v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export const IconDatabase = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <ellipse cx="12" cy="5" rx="8" ry="3" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

export const IconShield = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 3v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5" />
  </svg>
);

export const IconCode = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
  </svg>
);

export const IconServer = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect x="4" y="4" width="16" height="6" rx="2" strokeWidth={2} />
    <rect x="4" y="14" width="16" height="6" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
  </svg>
);

export const IconMCP = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect x="4" y="4" width="7" height="7" rx="2" strokeWidth={2} />
    <rect x="13" y="13" width="7" height="7" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 7.5h2.5a3 3 0 013 3V13M13 16.5h-2.5a3 3 0 01-3-3V11" />
    <circle cx="7.5" cy="16.5" r="2.5" strokeWidth={2} />
    <circle cx="16.5" cy="7.5" r="2.5" strokeWidth={2} />
  </svg>
);

export const IconDots = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5h.01M12 12h.01M12 19h.01" />
  </svg>
);

export const IconPhone = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.5C3 4.1 4.1 3 5.5 3h2.1c.5 0 1 .3 1.2.8l1.1 2.7c.2.6.1 1.2-.4 1.6L8.2 9.4a12.6 12.6 0 006.4 6.4l1.3-1.3c.4-.4 1.1-.6 1.6-.4l2.7 1.1c.5.2.8.6.8 1.2v2.1c0 1.4-1.1 2.5-2.5 2.5C10 21 3 14 3 5.5z" />
  </svg>
);

export const IconVideo = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.6-2.3A1 1 0 0121 8.6v6.8a1 1 0 01-1.4.9L15 14m0-4v4m0-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2" />
  </svg>
);

export const IconStore = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16l-1-5H5l-1 5zM5 10v9h14v-9M9 19v-5h6v5M7 10v2a2 2 0 104 0v-2M13 10v2a2 2 0 104 0v-2" />
  </svg>
);

export const IconPin = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4l6 6-3 1-4 4v4l-2 2-2-6-6-2 2-2h4l4-4 1-3z" />
  </svg>
);

export const IconSend = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l16-8-5 16-3-7-8-1z" />
  </svg>
);

export const IconFolder = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

export const IconFile = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export const IconEye = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12z" />
    <circle cx="12" cy="12" r="3" strokeWidth={2} />
  </svg>
);

export const IconBack = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const IconUndo = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H4v5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12c2.2-3.5 5.1-5.2 8.4-5.2 4.2 0 7.6 3.4 7.6 7.6S16.6 22 12.4 22c-2.6 0-4.9-1.3-6.3-3.2" />
  </svg>
);

export const IconForward = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const IconWarning = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export const IconPrint = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
  </svg>
);

export const IconDownload = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const IconClose = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const IconPlay = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M8 5v14l11-7z" /></svg>
);

export const IconPause = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
);

export const IconSkipBack = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
);

export const IconSkipForward = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
);

export const IconVolume = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

export const IconMaximize = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

export const IconCatalog = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export const IconSearch = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const IconMail = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const IconInbox = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H4a2 2 0 00-2 2v7m18 0a2 2 0 012 2v4a2 2 0 01-2 2H2a2 2 0 01-2-2v-4a2 2 0 012-2m18 0l-2 2m-14-2l2 2m10 0H6" />
  </svg>
);

export const IconPlus = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const IconPencil = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export const IconDrafts = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export const IconBold = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
);

export const IconItalic = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>
);

export const IconListBulleted = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);

export const IconListOrdered = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h13M7 12h13M7 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
);

export const IconUnderline = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>
);

export const IconAlignLeft = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>
);

export const IconAlignCenter = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M7 15v2h10v-2H7zm-4-4v2h18v-2H3zm4-4v2h10V7H7zm-4-4v2h18V3H3z"/></svg>
);

export const IconAlignRight = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M21 15h-12v2h12v-2zm0-8h-12v2h12V7zM21 11H3v2h18v-2zm0 8H3v2h18v-2zM21 3H3v2h18V3z"/></svg>
);

export const IconAlignJustify = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg>
);

export const IconAttachment = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 4.908 0 108.486 6.303L21 14" /></svg>
);

export const IconCheck = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export const IconSun = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M3 12H2m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L12 12m0-4.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5z" />
  </svg>
);

export const IconMoon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const IconRefresh = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.002 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export const IconTrash = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const IconMailOpen = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-5.333a2 2 0 012.22 0l7 5.332A2 2 0 0121 10.07V19m-9-7a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export const IconEnvelopeClosed = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      className="envelope-fill"
      d="M5.75 6.75h12.5c.966 0 1.75.784 1.75 1.75v7.75A1.75 1.75 0 0118.25 18H5.75A1.75 1.75 0 014 16.25V8.5c0-.966.784-1.75 1.75-1.75z"
    />
    <path
      className="envelope-outline"
      d="M5.75 6.75h12.5c.966 0 1.75.784 1.75 1.75v7.75A1.75 1.75 0 0118.25 18H5.75A1.75 1.75 0 014 16.25V8.5c0-.966.784-1.75 1.75-1.75z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
    <path
      className="envelope-outline"
      d="M5 8.25l6.053 4.54a1.75 1.75 0 002.094 0L19.2 8.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);

export const IconEnvelopeOpen = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      className="envelope-fill"
      d="M4 10.2l7.05-5.136a1.6 1.6 0 011.9 0L20 10.2v6.2A1.6 1.6 0 0118.4 18H5.6A1.6 1.6 0 014 16.4v-6.2z"
    />
    <path
      className="envelope-outline"
      d="M4 10.2l7.05-5.136a1.6 1.6 0 011.9 0L20 10.2v6.2A1.6 1.6 0 0118.4 18H5.6A1.6 1.6 0 014 16.4v-6.2z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
    <path
      className="envelope-outline"
      d="M4.65 10.8l6.342 4.223a1.8 1.8 0 002.016 0L19.35 10.8M5 17l5.35-4.1M19 17l-5.35-4.1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);

const BrandIcon = ({ name, ...props }) => {
  const theme = useTheme();
  const suffix = theme?.isDark ? '_dorado' : '';
  return (
    <img 
      src={publicAsset(`assets/${name}_imponect${suffix}.png`)} 
      style={{ 
        width: '18px', 
        height: '18px', 
        display: 'inline-block',
        verticalAlign: 'middle',
        ...props.style 
      }} 
      alt={name}
      {...props} 
    />
  );
};

export const IconBrandCopy = (props) => <BrandIcon name="copiar" {...props} />;
export const IconBrandMove = (props) => <BrandIcon name="mover" {...props} />;
export const IconBrandForward = (props) => <BrandIcon name="reenviar" {...props} />;
export const IconBrandReply = (props) => <BrandIcon name="responder" {...props} />;
export const IconBrandReplyAll = (props) => <BrandIcon name="responder_a_todos" {...props} />;
