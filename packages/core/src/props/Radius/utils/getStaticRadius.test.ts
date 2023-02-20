import { makeTheme } from '@shallot-ui/theme'

import getStaticRadius from './getStaticRadius'

describe('getStaticRadius', () => {
  const theme = makeTheme({
    radii: { sm: 12, md: 16, lg: 20 },
  })

  it('should return a CSS string with border-radius declaration when given a valid font size', () => {
    const radius = 'md'
    const result = getStaticRadius({ radius, theme })
    expect(result).toBe('border-radius: 16px;')
  })

  it('should return undefined when given an invalid font size', () => {
    const radius = 'invalid'
    const result = getStaticRadius({ radius, theme })
    expect(result).toBeUndefined()
  })

  it('should return undefined when given no font size', () => {
    const result = getStaticRadius({ theme })
    expect(result).toBeUndefined()
  })
})
