import styled from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  RadiusProps,
  INTERNAL_shouldForwardProp,
} from '@shallot-ui/theme'
import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getRadius,
} from '@shallot-ui/core'

import { CSSProperties } from 'react'

interface BaseTextAreaProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps {
  style?: Partial<CSSProperties>
}

export const TextArea = styled.textarea.withConfig<BaseTextAreaProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  display: flex;
  width: 100%;
  border: 1px solid transparent;
  ${getFont}
  ${getColors}
  ${getUnitsAround}
  ${getCasing}
  ${getFontSize}
  ${getLineHeight}
  ${getRadius}
`
