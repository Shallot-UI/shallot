import { makeTheme } from '@shallot-ui/theme'

import getSingleFontSize from './getStaticFontSize'

describe('getSingleFontSize', () => {
  const theme = makeTheme({
    fontSizes: { sm: 12, md: 16, lg: 20 },
  })

  it('should return a CSS string with font-size declaration when given a valid font size', () => {
    const fontSize = 'md'
    const result = getSingleFontSize({ fontSize, theme })
    expect(result).toBe('font-size: 16px;')
  })

  it('should return undefined when given an invalid font size', () => {
    const fontSize = 'invalid' as any
    const result = getSingleFontSize({ fontSize, theme })
    expect(result).toBeUndefined()
  })

  it('should return undefined when given no font size', () => {
    const result = getSingleFontSize({ theme })
    expect(result).toBeUndefined()
  })
})
