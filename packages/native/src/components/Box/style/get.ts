import { css } from 'styled-components/native'
import {
  getColors,
  getUnitsAround,
  getRadius,
  getSizing,
  getFlex,
  getElevation,
  getDisplay,
} from '@shallot-ui/core'

import { BoxStyleProps } from './types'

export const getBoxStyle = (props: BoxStyleProps = {}) => css<BoxStyleProps>`
  display: flex;
  position: relative;
  border-style: solid;
  ${getColors(props)}
  ${getDisplay(props)}
  ${getElevation(props)}
  ${getFlex(props)}
  ${getRadius(props)}
  ${getSizing(props)}
  ${getUnitsAround(props)}
`
