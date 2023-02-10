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
  getBorder,
} from '@shallot-ui/core'

import { BoxStyleProps } from './types'
import { getAnimation } from '../../../../props'

export const getBoxStyle = (props: BoxStyleProps = {}) => css<BoxStyleProps>`
  display: flex;
  border-style: solid;
  ${getAnimation(props)}
  ${getBorder(props)}
  ${getColors(props)}
  ${getCursor(props)}
  ${getDisplay(props)}
  ${getElevation(props)}
  ${getFlex(props)}
  ${getRadius(props)}
  ${getSizing(props)}
  ${getTransition(props)}
  ${getUnitsAround(props)}
`
