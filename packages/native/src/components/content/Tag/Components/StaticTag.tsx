import { forwardRef } from 'react'
import { View } from 'react-native'

import { Row } from '../../../containers'
import { Text } from '../../Text'
import { StaticTagProps } from '../types'

export const StaticTag = forwardRef<View, StaticTagProps>(
  ({ styles, startAdornment, endAdornment, label, ...rest }, ref) => (
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
