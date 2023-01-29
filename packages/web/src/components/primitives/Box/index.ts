import styled from 'styled-components'

import { BoxStyleProps } from './style/types'
import { getBoxStyle } from './style/get'
import { ComponentProps } from 'react'

export const Box = styled.div<BoxStyleProps>`
  ${getBoxStyle}
`

export type BoxProps = ComponentProps<typeof Box>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
