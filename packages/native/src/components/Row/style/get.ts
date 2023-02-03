import { css } from 'styled-components'
import { getHorizontalAlignment, getVerticalAlignment } from '@shallot-ui/core'

import { getBoxStyle } from '../../Box'
import { RowStyleProps } from './types'

export const getRowStyle = (props: RowStyleProps) => css<RowStyleProps>`
  flex-direction: row;
  ${getBoxStyle(props)}
  ${getVerticalAlignment('row')(props)}
  ${getHorizontalAlignment('row')(props)}
`
