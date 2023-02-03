import { ComponentProps } from 'react'
import styled from 'styled-components/native'
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

import { TextStyleProps } from './style/types'

export const Text = styled.Text<TextStyleProps>`
  ${getCasing}
  ${getColors}
  ${getFlex}
  ${getFont}
  ${getFontSize}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getSizing}
  ${getTextAlign}
  ${getUnderline}
  ${getUnitsAround}
`

export type TextProps = ComponentProps<typeof Text>

export * from './style/pull'
export * from './style/types'
