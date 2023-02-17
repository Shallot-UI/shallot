import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'
import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { getColumnStyle } from './style/get'
import { ColumnStyleProps } from './style/types'

export const Column = styled(Box).withConfig<ColumnStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  ${getColumnStyle}
`

export type ColumnProps = ComponentProps<typeof Column>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
