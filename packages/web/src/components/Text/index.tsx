import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'
import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'

import { getTextStyle } from './style/get'
import { TextStyleProps } from './style/types'

type TextChildrenProps = { children: ReactNode | ReactNode[] }

export const Text = styled.span.withConfig<TextStyleProps & TextChildrenProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  ${getTextStyle}
`

export type TextProps = ComponentProps<typeof Text>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
