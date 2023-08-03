import { DEFAULT_COLORS } from '../colors'

export const DEFAULT_SHADOWS = {
  0: 'none',
  100: 'rgba(0, 0, 0, 0.08) 0 1px 1px',
  200: 'rgba(0, 0, 0, 0.14) 0 2px 2px',
  300: 'rgba(0, 0, 0, 0.18) 0 4px 4px',
  400: 'rgba(0, 0, 0, 0.22) 0 8px 8px',
  500: 'rgba(0, 0, 0, 0.26) 0 12px 24px',
  600: 'rgba(0, 0, 0, 0.3) 0 16px 32px',
  700: 'rgba(0, 0, 0, 0.4) 0 20px 40px',
  800: 'rgba(0, 0, 0, 0.5) 0 24px 48px',
  900: 'rgba(0, 0, 0, 0.6) 0 28px 56px',
  focused: `0 0 0 4px ${DEFAULT_COLORS.Primary[300]}29`,
} as const
