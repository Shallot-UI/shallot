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
  getDisplay,
} from '@shallot-ui/core'

import { BoxStyleProps } from './types'
import { getAnimation } from '../../../../props'

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
  ${getDisplay(props)}
`
