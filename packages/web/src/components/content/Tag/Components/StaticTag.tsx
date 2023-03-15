import { forwardRef } from 'react'

import { Row } from '../../../containers'
import { Text } from '../..'
import { StaticTagProps } from '../types'

export const StaticTag = forwardRef<HTMLDivElement, StaticTagProps>(
  ({ styles, children, startAdornment, endAdornment, label, ...rest }, ref) => (
    <Row
      // forwarded ref
      ref={ref}
      {...styles?.container}
      {...rest}
    >
      {startAdornment}
      <Text {...styles?.label}>{label ?? ''}</Text>
      {endAdornment}
    </Row>
  ),
)
