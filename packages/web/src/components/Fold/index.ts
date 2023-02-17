import { ComponentProps } from 'react'
import styled from 'styled-components'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { Column, ColumnStyleProps } from '../primitives/Column'

export const Fold = styled(Column).withConfig<ColumnStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  min-height: 100vh;
  width: 100vw;
`

export type FoldStyleProps = ColumnStyleProps

export type FoldProps = ComponentProps<typeof Fold>
