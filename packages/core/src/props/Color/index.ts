import { ColorProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const colorProps: PropsConfig<ColorProps> = {
  textColor: {
    get: ({ textColor }) =>
      textColor ? ({ theme }) => `color: ${theme.colors[textColor]};` : '',
  },
  backgroundColor: {
    get: ({ backgroundColor }) =>
      backgroundColor
        ? ({ theme }) => `background-color: ${theme.colors[backgroundColor]};`
        : '',
  },
  borderColor: {
    get: ({ borderColor }) =>
      borderColor
        ? ({ theme }) => `border-color: ${theme.colors[borderColor]};`
        : '',
  },
}

export const pullColorProps = makePropPuller(colorProps)
export const getColorStyle = makeStyleGetter(colorProps)
