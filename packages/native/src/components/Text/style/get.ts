import { css } from 'styled-components'
import {
  getCasing,
  getColors,
  getFlex,
  getFont,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
  getSizing,
  getTextAlign,
  getUnderline,
  getUnitsAround,
} from '@shallot-ui/core'

import { TextStyleProps } from './types'

export const getTextStyle = (props: TextStyleProps = {}) => css`
  ${getCasing(props)}
  ${getColors(props)}
  ${getFlex(props)}
  ${getFont(props)}
  ${getFontSize(props)}
  ${getLetterSpacing(props)}
  ${getLineHeight(props)}
  ${getSizing(props)}
  ${getTextAlign(props)}
  ${getUnderline(props)}
  ${getUnitsAround(props)}
`
