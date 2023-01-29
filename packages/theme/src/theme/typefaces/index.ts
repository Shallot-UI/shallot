import { Typeface } from '../../types'

const System: Typeface = {
  name: 'System',
  alternates: ['sans-serif'],
  defaults: {
    font: 'Regular',
  },
  fonts: {
    Regular: {
      fontFamily: 'system-ui',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    RegularItalic: {
      fontFamily: 'system-ui',
      fontWeight: '400',
      fontStyle: 'italic',
    },
    Bold: {
      fontFamily: 'system-ui',
      fontWeight: '700',
      fontStyle: 'normal',
    },
  },
}

export const DEFAULT_TYPEFACES = {
  System,
}
