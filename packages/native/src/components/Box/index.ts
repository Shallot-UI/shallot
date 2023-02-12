import { ComponentProps } from 'react'
import styled from 'styled-components/native'
import {
  getColors,
  getUnitsAround,
  getRadius,
  getSizing,
  getFlex,
  getElevation,
  getDisplay,
  getBorder,
} from '@shallot-ui/core'

import { BoxStyleProps } from './style/types'

export const Box = styled.View.withConfig({
  shouldForwardProp: (prop) => !['elevation', 'radius'].includes(prop),
})<BoxStyleProps>`
  display: flex;
  position: relative;
  border-style: solid;
  ${getBorder}
  ${getColors}
  ${getDisplay}
  ${getElevation}
  ${getFlex}
  ${getRadius}
  ${getSizing}
  ${getUnitsAround}
`

export type BoxProps = ComponentProps<typeof Box>

export * from './style/pull'
export * from './style/types'
