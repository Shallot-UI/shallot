import React, { FunctionComponent, HTMLProps } from 'react'

import { Text, TextProps, TextStyleProps } from '../Text'

export const AnchorLink: FunctionComponent<TextProps &
  TextStyleProps &
  HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => (
  <Text as="a" {...rest}>
    {children}
  </Text>
)
