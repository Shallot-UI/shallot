import { ColorName, ColorProps } from '@shallot-ui/theme'
import { css, DefaultTheme } from 'styled-components'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

// Get a color from the theme using its dot notation address.
export const getColor = (address: string | undefined) => {
  // if the color is falsy, return an empty string.
  if (!address) return
  // If the color is transparent, return the transparent keyword.
  if (address === 'transparent') return `transparent`
  // Split the color key into its color name and shade.
  const [color, shade] = address.split('.') as [ColorName, string]
  const shadeValue = Number(shade) as keyof DefaultTheme['colors'][ColorName]
  // Return a function that returns the color from the theme.
  return css`
    ${({ theme }: { theme: DefaultTheme }) => theme.colors?.[color][shadeValue]}
  `
}

export const colorProps: PropsConfig<ColorProps> = {
  textColor: {
    get: ({ textColor }) => {
      const color = getColor(textColor)
      return color
        ? css`
            color: ${color};
          `
        : ''
    },
  },
  backgroundColor: {
    get: ({ backgroundColor }) => {
      const color = getColor(backgroundColor)
      return color
        ? css`
            background-color: ${color};
          `
        : ''
    },
  },
  borderColor: {
    get: ({ borderColor }) => {
      const color = getColor(borderColor)
      return color
        ? css`
            border-color: ${color};
          `
        : ''
    },
  },
}

export const pullColorProps = makePropPuller(colorProps)
export const getColorStyle = makeStyleGetter(colorProps)
