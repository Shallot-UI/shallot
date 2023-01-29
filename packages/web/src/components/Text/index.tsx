import { ComponentProps } from 'react'
import styled from 'styled-components'

import { getTextStyle } from './style/get'
import { TextStyleProps } from './style/types'

export const Text = styled.span<TextStyleProps>`
  ${getTextStyle}
`

export type TextProps = ComponentProps<typeof Text>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
