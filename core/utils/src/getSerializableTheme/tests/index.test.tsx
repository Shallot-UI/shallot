import { makeTheme } from '@shallot-ui/core-theme'
import { getSerializableTheme } from '..'
import { getColor, getFontSize } from '../../../../mixins/src'
import { getStyle } from '../../getStyle'

describe('Test the `getSerializableTheme` function', () => {
  const theme = makeTheme({
    colors: {
      Primary: {
        500: '#000',
        600: '#111',
        700: '#222',
      },
    },
    fontSizes: {
      sm: 10,
    },
    variants: {
      Box: {
        boxVariant: {
          color: getColor('Primary', 500),
          backgroundColor: getColor('Primary', 600),
        },
      },
      Row: {
        rowVariant: {
          fontSize: {
            sm: getFontSize('sm'),
          },
        },
      },
      // edgeCases: {
      //   null: null,
      //   undefined: undefined,
      // },
    },
  })

  it('should return an object', () => {
    const result = getStyle({
      shallot: {
        color: getColor('Primary', 500),
        fontSize: getFontSize('sm'),
        backgroundColor: getColor('Primary', 600),
      },
    })({ theme })

    expect(Array.isArray(result)).toBe(false)
    expect(typeof result).toBe('object')
  })

  it('should transform the getter functions into their computed values', () => {
    const result = getSerializableTheme(theme)
    const color = result.variants.Box.boxVariant.color
    const backgroundColor = result.variants.Box.boxVariant.backgroundColor
    const fontSize = result.variants.Row.rowVariant.fontSize.sm

    expect(color).toBe('#000')
    expect(backgroundColor).toBe('#111')
    expect(fontSize).toBe(10)
  })

  it('should handle nested objects', () => {
    const result = getSerializableTheme(theme)
    expect(result.variants.Box.boxVariant).toEqual({
      color: '#000',
      backgroundColor: '#111',
    })
  })
})
