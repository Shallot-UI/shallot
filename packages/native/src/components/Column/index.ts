import { ComponentProps } from 'react'
import styled from 'styled-components/native'

import { Box } from '../Box'
import { getColumnStyle } from './style/get'
import { ColumnStyleProps } from './style/types'

export const Column = styled(Box)<ColumnStyleProps>`
  ${getColumnStyle}
`

export type ColumnProps = ComponentProps<typeof Column>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
