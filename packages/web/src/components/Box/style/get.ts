import { css } from 'styled-components'

import {
  getColors,
  getUnitsAround,
  getTransition,
  getRadius,
  getSizing,
  getFlex,
  getElevation,
  getCursor,
} from '../../../props'
import { getAnimation } from '../../../props/Animation'
import { BoxStyleProps } from './types'

export const getBoxStyle = (props: BoxStyleProps = {}) => css<BoxStyleProps>`
  display: flex;
  position: relative;
  border-style: solid;
  ${getFlex(props)}
  ${getSizing(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getRadius(props)}
  ${getElevation(props)}
  ${getCursor(props)}
  ${getTransition(props)}
  ${getAnimation(props)}
`
