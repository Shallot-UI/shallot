import { forwardRef } from 'react'

import { Row } from '../../../containers'
import { Text } from '../../../content'
import { StaticButtonProps } from '../types'

export const StaticButton = forwardRef<HTMLButtonElement, StaticButtonProps>(
  ({ styles, children, startAdornment, endAdornment, title, ...rest }, ref) => (
    <Row
      as="button"
      // forwarded ref
      ref={ref}
      {...styles?.container}
      {...rest}
    >
      {startAdornment}
      <Text {...styles?.label}>{title ?? ''}</Text>
      {endAdornment}
    </Row>
  ),
)
