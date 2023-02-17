import { ComponentProps } from 'react'
import styled from 'styled-components/native'
import { getHorizontalAlignment, getVerticalAlignment } from '@shallot-ui/core'

import { Box } from '../Box'
import { RowStyleProps } from './style/types'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

export const Row = styled(Box).withConfig<RowStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  flex-direction: row;
  ${getVerticalAlignment('row')}
  ${getHorizontalAlignment('row')}
`

export type RowProps = ComponentProps<typeof Row>

export * from './style/pull'
export * from './style/types'
