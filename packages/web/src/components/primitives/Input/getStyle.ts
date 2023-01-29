import { css } from 'styled-components'

import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getUnitPadding,
  getRadius,
  getBorder,
  getTransition,
} from '../../../props'
import { InputStyleProps } from './types'

export const getInputStyle = (props: InputStyleProps) => css`
  ${getFont(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
  ${getUnitPadding(props)}
  ${getBorder(props)}
  ${getTransition(props)}
`
