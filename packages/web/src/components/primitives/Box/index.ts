import { ComponentProps } from 'react'
import styled from 'styled-components'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { BoxStyleProps } from './style/types'
import { getBoxStyle } from './style/get'

export const Box = styled.div.withConfig<BoxStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  ${getBoxStyle}
`

export type BoxProps = ComponentProps<typeof Box>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
