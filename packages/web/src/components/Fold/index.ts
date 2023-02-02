import { ComponentProps } from 'react'
import styled from 'styled-components'

import { Column, ColumnStyleProps } from '../primitives/Column'

export const Fold = styled(Column)`
  min-height: 100vh;
  width: 100vw;
`

export type FoldStyleProps = ColumnStyleProps

export type FoldProps = ComponentProps<typeof Fold>
