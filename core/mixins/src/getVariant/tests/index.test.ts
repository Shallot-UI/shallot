import { makeTheme } from '@shallot-ui/core-theme'
import { getVariant } from '../index'
import { DefaultTheme } from 'styled-components'

interface MockShallot {
  Container?: any
  Title?: any
}

describe('getVariant', () => {
  it('should return variant by component and name', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {
        Button: {
          Primary: {
            Container: {
              backgroundColor: 'blue',
            },
          },
        },
      },
    })

    const result = getVariant<MockShallot>('Button', 'Primary')({ theme })

    expect(result).toEqual({
      Container: {
        backgroundColor: 'blue',
      },
    })
  })

  it('should return undefined when specific variant not found and no Default exists', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {
        Button: {},
      },
    })

    console.warn = jest.fn()

    const result = getVariant<MockShallot>('Button', 'NotFound')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Button.NotFound" not found for theme property "variants". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should return undefined when no variants found', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {},
    })

    console.warn = jest.fn()

    const result = getVariant<MockShallot>('Button', 'Primary')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Button.Primary" not found for theme property "variants". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle missing variants object', () => {
    const theme: DefaultTheme = makeTheme({
      tokens: {},
    })

    console.warn = jest.fn()

    const result = getVariant<MockShallot>('Button', 'Primary')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Button.Primary" not found for theme property "variants". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })

  it('should handle complex nested variants', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {
        Button: {
          Large: {
            Container: {
              padding: '16px 32px',
              fontSize: '18px',
            },
            Title: {
              fontWeight: 'bold',
            },
            ':hover': {
              Container: {
                backgroundColor: 'darkblue',
              },
            },
          },
        },
      },
    })

    const result = getVariant<MockShallot>('Button', 'Large')({ theme })

    expect(result).toEqual({
      Container: {
        padding: '16px 32px',
        fontSize: '18px',
      },
      Title: {
        fontWeight: 'bold',
      },
      ':hover': {
        Container: {
          backgroundColor: 'darkblue',
        },
      },
    })
  })

  it('should be case sensitive for component names', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {
        Button: {
          Default: {
            Container: {
              backgroundColor: 'blue',
            },
          },
        },
      },
    })

    const result = getVariant<MockShallot>('button', 'Default')({ theme })

    expect(result).toBeUndefined()
  })

  it('should be case sensitive for variant names', () => {
    const theme: DefaultTheme = makeTheme({
      variants: {
        Button: {
          Primary: {
            Container: {
              backgroundColor: 'blue',
            },
          },
        },
      },
    })

    console.warn = jest.fn()

    const result = getVariant<MockShallot>('Button', 'primary')({ theme })

    expect(result).toBeUndefined()
    expect(console.warn).toHaveBeenCalledWith(
      'Shallot UI: Value "Button.primary" not found for theme property "variants". Are you sure it\'s defined correctly in your theme and you\'re using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs',
    )
  })
})