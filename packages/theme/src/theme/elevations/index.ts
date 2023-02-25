export const DEFAULT_ELEVATIONS = {
  pressable: {
    transform: 'translateY(0)',
    boxShadow:
      '0 4px 6px -4px rgba(0,0,0,0.4), inset 0 1px 1px 0 rgba(255,255,255,0.2)',
  },
  hover: {
    boxShadow:
      '0 4px 12px -4px rgba(0,0,0,0.4), inset 0 1px 1px 0 rgba(255,255,255,0.2)',
    transform: 'translateY(-2px)',
  },
  pressed: {
    boxShadow:
      '0 0 0 -4px rgba(0,0,0,0), inset 0 1px 1px 0 rgba(255,255,255,0.2)',
    transform: 'translateY(0)',
  },
  focused: {
    boxShadow: '0 0 0 4px #4233ff29',
    transform: 'translateY(0)',
  },
  none: {
    boxShadow: 'none',
    transform: 'none',
  },
}
