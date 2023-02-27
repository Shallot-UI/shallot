import { DEFAULT_COLORS } from '../colors'

export const DEFAULT_ELEVATIONS = {
  pressable: {
    transform: 'translateY(0)',
    boxShadow: '0 4px 6px -4px rgba(0,0,0,0.4)',
  },
  hover: {
    boxShadow: '0 4px 12px -4px rgba(0,0,0,0.4)',
    transform: 'translateY(-2px)',
  },
  pressed: {
    boxShadow: '0 0 0 -4px rgba(0,0,0,0)',
    transform: 'translateY(0)',
  },
  focused: {
    boxShadow: `0 0 0 4px ${DEFAULT_COLORS.Primary[300]}29`,
    transform: 'translateY(0)',
  },
  none: {
    boxShadow: 'none',
    transform: 'none',
  },
}
