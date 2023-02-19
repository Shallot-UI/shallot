import { ColorProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const color: PropConfigs<ColorProps> = {
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

export const pullColorProps = makePropPuller(color)
export const getColorProps = makePropGetter(color)
