import { makeNextThemeTokens } from '@shallot-ui/next'
import useDynamicColors from './useDynamicColors'

const fontFamilies = {
  Serif: '"Noto Serif", serif',
  Display: '"Inter", sans-serif',
  Body: '"Inter", sans-serif',
  Monospace: '"IBM Plex Mono", monospace',
} as const

const fontSizes = {
  xl: 32,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12,
} as const

const useDynamicTokens = () => {
  const dynamicColors = useDynamicColors()

  const tokens = makeNextThemeTokens({
    colors: dynamicColors.value,
    fontFamilies,
    fontSizes,
  })

  return {
    tokens,
    dynamicColors,
  }
}

export default useDynamicTokens
