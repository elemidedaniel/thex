export const colors = {
  // Primary
  primary: '#22d3ee',
  primaryHover: '#06b6d4',
  primaryMuted: 'rgba(34,211,238,0.1)',
  primaryBorder: 'rgba(34,211,238,0.2)',

  // Backgrounds
  bg: '#0a0a0f',
  bgSurface: 'rgba(255,255,255,0.03)',
  bgHover: 'rgba(255,255,255,0.05)',
  bgActive: 'rgba(255,255,255,0.08)',

  // Borders
  border: 'rgba(255,255,255,0.08)',
  borderHover: 'rgba(255,255,255,0.15)',

  // Text
  text: '#ffffff',
  textMuted: '#475569',
  textSubtle: '#374151',

  // Status
  success: '#22c55e',
  successMuted: 'rgba(34,197,94,0.1)',
  error: '#f87171',
  errorMuted: 'rgba(248,113,113,0.1)',
  warning: '#f59e0b',
  warningMuted: 'rgba(245,158,11,0.1)',
  info: '#3b82f6',
  infoMuted: 'rgba(59,130,246,0.1)',
} as const;

export const motion = {
  durationInstant: '100ms',
  durationFast: '150ms',
  durationNormal: '250ms',
  durationSlow: '400ms',
  easeSpring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  easeSmooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
} as const;

export const radius = {
  sm: '6px',
  md: '10px',
  lg: '14px',
  xl: '18px',
  full: '9999px',
} as const;

export const typography = {
  fontDisplay: '"Cal Sans", "Inter", sans-serif',
  fontBody: '"Inter", sans-serif',
  fontMono: '"Geist Mono", "Fira Code", monospace',
} as const;

export const shadows = {
  glow: '0 0 20px rgba(34,211,238,0.15)',
  glowStrong: '0 0 40px rgba(34,211,238,0.25)',
  card: '0 4px 24px rgba(0,0,0,0.4)',
  modal: '0 8px 48px rgba(0,0,0,0.6)',
} as const;