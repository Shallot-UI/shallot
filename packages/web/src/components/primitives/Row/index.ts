import { ComponentProps } from 'react'
import styled from 'styled-components'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { Box } from '../Box'
import { getRowStyle } from './style/get'
import { RowStyleProps } from './style/types'

export const Row = styled(Box).withConfig<RowStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  ${getRowStyle}
`

export type RowProps = ComponentProps<typeof Row>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
