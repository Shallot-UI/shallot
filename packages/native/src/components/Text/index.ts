import { ComponentProps } from 'react'
import styled from 'styled-components/native'

import { getTextStyle } from './style/get'
import { TextStyleProps } from './style/types'

export const Text = styled.Text<TextStyleProps>`
  ${getTextStyle}
`

export type TextProps = ComponentProps<typeof Text>

export * from './style/get'
export * from './style/pull'
export * from './style/types'
