import { css } from 'styled-components'

import { getHorizontalAlignment, getVerticalAlignment } from '../../../props'
import { getBoxStyle } from '../../Box'
import { ColumnStyleProps } from './types'

export const getColumnStyle = (
  props: ColumnStyleProps,
) => css<ColumnStyleProps>`
  flex-direction: column;
  ${getBoxStyle(props)}
  ${getVerticalAlignment('column')(props)}
  ${getHorizontalAlignment('column')(props)}
`
