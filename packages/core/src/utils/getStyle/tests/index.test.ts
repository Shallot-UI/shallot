import { ThemeOptions } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components/native'
import { getStyle } from '..'
import { getColor } from '../../mixins'

// This file cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
export {}

describe('Test the `getStyle` function', () => {
  const theme: ThemeOptions = {
    colors: {
      primary: {
        500: 'blue',
        600: 'red',
        700: 'yellow',
      },
      secondary: {
        500: 'green',
        600: 'purple',
        700: 'orange',
      },
    },
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
    },
  }

  // Test case 1: Empty input object
  it('should handle an empty input object', () => {
    const result = getStyle({ shallot: {} })({ theme })
    expect(result).toEqual({})
  })

  // Test case 2: Basic CSS properties
  it('should extract basic CSS properties', () => {
    const input = {
      color: 'red',
      fontSize: 14,
    }
    const result = getStyle({ shallot: input })({ theme })
    expect(result).toEqual({
      color: 'red',
      fontSize: 14,
    })
  })

  // Test case 3: Nested objects
  it('should handle nested objects', () => {
    const input = {
      button: {
        color: 'white',
        backgroundColor: 'blue',
      },
      link: {
        textDecoration: 'underline',
      },
    }
    const result = getStyle({ shallot: input })({ theme })
    expect(result).toEqual({
      button: {
        color: 'white',
        backgroundColor: 'blue',
      },
      link: {
        textDecoration: 'underline',
      },
    })
  })

  // Test case 4: Getters
  it('should resolve getters with the provided theme', () => {
    const input = {
      color: getColor('primary', 500),
      margin: '10px',
    }
    const result = getStyle({ shallot: input })({ theme })
    expect(result).toEqual({
      color: 'blue',
      margin: '10px',
    })
  })

  // // Test case 5: Combination of CSS properties, nested objects, and getters
  // it('should handle a combination of CSS properties, nested objects, and getters', () => {
  //   const input = {
  //     color: getColor('primary', 600),
  //     fontSize: 16,
  //     button: {
  //       color: 'white',
  //       backgroundColor: getColor('secondary', 500),
  //     },
  //   }
  //   const result = getStyle({ shallot: input })({ theme })
  //   expect(result).toEqual({
  //     color: 'blue',
  //     fontSize: 16,
  //     button: {
  //       color: 'white',
  //       backgroundColor: 'green',
  //     },
  //   })
  // })
})

describe('Test the `scopeGetStyle` function', () => {
  it.todo('')
})
