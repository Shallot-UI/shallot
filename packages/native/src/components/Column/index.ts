import { ComponentProps } from 'react'
import styled from 'styled-components/native'
import { getHorizontalAlignment, getVerticalAlignment } from '@shallot-ui/core'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { Box } from '../Box'
import { ColumnStyleProps } from './style/types'

export const Column = styled(Box).withConfig<ColumnStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  flex-direction: column;
  ${getVerticalAlignment('column')}
  ${getHorizontalAlignment('column')}
`

export type ColumnProps = ComponentProps<typeof Column>

export * from './style/pull'
export * from './style/types'
