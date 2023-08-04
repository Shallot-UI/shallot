import { DefaultTheme } from 'styled-components/native'
import { getVariant } from '..'
import { makeTheme } from '@shallot-ui/theme'

// GETVARIANT //
describe.only('Test the `getVariant` function', () => {
  const theme = makeTheme({
    variants: {
      Button: {
        default: {
          backgroundColor: 'blue',
          color: 'white',
        },
        primary: {
          backgroundColor: 'green',
          color: 'white',
        },
      },
    },
  })

  it('should return the default variant for a component', () => {
    const variant = getVariant('Button')({ theme })
    expect(variant).toEqual({
      backgroundColor: 'blue',
      color: 'white',
    })
  })

  it('should return a named variant for a component', () => {
    const variant = getVariant('Button', 'primary')({ theme })
    expect(variant).toEqual({
      backgroundColor: 'green',
      color: 'white',
    })
  })

  it('should throw a warning if the component or variant is not defined in the theme', () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {})

    const component = 'componentWithWrongName'
    const name = 'variantWithWrongName'
    getVariant(component, name)({ theme })

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      `Variant not found for component "${component}" and name "${name}". Are you sure it's defined correctly in your theme and you're using a ShallotProvider? More info: https://www.shallotui.com/?path=/docs/%F0%9F%8E%A8-theme-variants--docs`,
    )
  })
})

// GETCOLOR //
describe('Test the `getColor` function', () => {
  it.todo('returns the correct color for a valid value and shade')
  it.todo('should throw an error or warning if the color is not found')
})
