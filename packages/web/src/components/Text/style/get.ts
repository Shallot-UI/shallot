import { css } from 'styled-components'
import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnderline,
  getUnitsAround,
  getTextAlign,
  getSizing,
  getFlex,
  getLetterSpacing,
  getTransition,
} from '@shallot-ui/core'

import { TextStyleProps } from './types'
import { getAnimation } from '../../../props'

export const getTextStyle = (props: TextStyleProps = {}) => css`
  ${getFlex(props)}
  ${getFont(props)}
  ${getUnderline(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getTextAlign(props)}
  ${getSizing(props)}
  ${getLetterSpacing(props)}
  ${getTransition(props)}
  ${getAnimation(props)}
`
