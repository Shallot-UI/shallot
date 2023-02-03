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
} from '@shallot-ui/core'

import { BoxStyleProps } from './style/types'

export const Box = styled.View<BoxStyleProps>`
  display: flex;
  position: relative;
  border-style: solid;
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
