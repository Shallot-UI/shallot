import { DefaultTheme } from 'styled-components'
import { getMediaQueries } from '.'

describe('getMediaQueries', () => {
  const breakpoints: DefaultTheme['breakpoints'] = {
    480: { fontSizes: { sm: 12 } },
    640: { fontSizes: { sm: 14 } },
    960: { fontSizes: { sm: 16 } },
    1080: { fontSizes: { sm: 18 } },
    1440: { fontSizes: { sm: 20 } },
  }

  it('should return empty string if getStyle returns false or undefined for all breakpoints', () => {
    expect(getMediaQueries(() => false, breakpoints)).toEqual('')
  })

  it('should generate media queries with the correct widths and modifiers for truthy getStyle values', () => {
    const getStyle = (subtheme: DefaultTheme) =>
      `font-size: ${subtheme.fontSizes.sm}px;`

    const expected = [
      '@media (min-width: 480px) { font-size: 12px; }',
      '@media (min-width: 640px) { font-size: 14px; }',
      '@media (min-width: 960px) { font-size: 16px; }',
      '@media (min-width: 1080px) { font-size: 18px; }',
      '@media (min-width: 1440px) { font-size: 20px; }',
    ].join('')

    expect(getMediaQueries(getStyle, breakpoints)).toEqual(expected)
  })

  it('should exclude media queries with falsey modifiers', () => {
    const getStyle = (subtheme: DefaultTheme) =>
      subtheme.fontSizes.sm === (16 as number)
        ? false
        : `font-size: ${subtheme.fontSizes.sm}px;`

    const expected = [
      '@media (min-width: 480px) { font-size: 12px; }',
      '@media (min-width: 640px) { font-size: 14px; }',
      '@media (min-width: 1080px) { font-size: 18px; }',
      '@media (min-width: 1440px) { font-size: 20px; }',
    ].join('')

    expect(getMediaQueries(getStyle, breakpoints)).toEqual(expected)
  })
})
