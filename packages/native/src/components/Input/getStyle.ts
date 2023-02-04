import { css } from 'styled-components'
import {
  getBorder,
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getRadius,
  getUnitPadding,
  getUnitsAround,
} from '@shallot-ui/core'

import { InputStyleProps } from './types'

export const getInputStyle = (props: InputStyleProps) => css`
  ${getBorder(props)}
  ${getCasing(props)}
  ${getColors(props)}
  ${getFont(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
  ${getUnitPadding(props)}
  ${getUnitsAround(props)}
`
