import { makeTheme } from '@shallot-ui/theme'
import { getStyle } from '..'
import { getColor, getFontSize, getShadow } from '../../mixins'

describe.only('Test the `getStyle` function', () => {
  const theme = makeTheme({
    colors: {
      Primary: {
        500: 'blue',
        600: 'red',
        700: 'yellow',
      },
      Success: {
        500: 'green',
        600: 'purple',
        700: 'orange',
      },
    },
    fontSizes: {
      sm: 12,
      md: 16,
      lg: 20,
    },
    shadows: {
      500: '2px 2px 4px gray',
      600: '4px 4px 8px gray',
      700: '8px 8px 16px gray',
    },
  })

  it('should return the correct styles with regular values', () => {
    const shallotProp = {
      color: 'blue',
      fontSize: 16,
      boxShadow: '2px 2px 4px gray',
    }

    const result = getStyle({ shallot: shallotProp })({ theme })

    expect(result).toEqual({
      color: 'blue',
      fontSize: 16,
      boxShadow: '2px 2px 4px gray',
    })
  })

  it('should resolve styles with theme-dependent values', () => {
    const shallotProp = {
      color: getColor('Primary', 500),
      fontSize: getFontSize('md'),
      boxShadow: '2px 2px 4px gray',
    }

    const result = getStyle({ shallot: shallotProp })({ theme })

    expect(result).toEqual({
      color: 'blue', // Value resolved from the theme
      fontSize: 16, // Value resolved from the theme
      boxShadow: '2px 2px 4px gray',
    })
  })

  it('should handle nested shallot objects', () => {
    const shallotProp = {
      color: getColor('Primary', 500),
      fontSize: getFontSize('md'),
      boxShadow: '2px 2px 4px gray',
      nestedStyles: {
        padding: 8,
        margin: 'auto',
      },
    }

    const result = getStyle({ shallot: shallotProp })({ theme })

    expect(result).toEqual({
      color: 'blue', // Value resolved from the theme
      fontSize: 16, // Value resolved from the theme
      boxShadow: '2px 2px 4px gray',
      nestedStyles: {
        padding: 8,
        margin: 'auto',
      },
    })
  })

  it('should handle missing shallot object', () => {
    const result = getStyle({})({ theme })

    expect(result).toEqual({})
  })

  it('should handle undefined values in shallot object', () => {
    const shallotProp = {
      color: undefined,
      fontSize: undefined,
      boxShadow: undefined,
    }

    const result = getStyle({ shallot: shallotProp })({ theme })

    expect(result).toEqual({
      color: undefined,
      fontSize: undefined,
      boxShadow: undefined,
    })
  })

  it('should return a CSSObject , not an array', () => {
    const shallotProp = {
      color: getColor('Primary', 500),
      fontSize: getFontSize('md'),
      boxShadow: getShadow(500),
    }

    const result = getStyle({ shallot: shallotProp })({ theme })
    console.log(result)

    expect(Array.isArray(result)).toBe(false)
  })
})
