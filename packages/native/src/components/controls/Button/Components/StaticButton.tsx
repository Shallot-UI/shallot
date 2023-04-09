import { forwardRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { TouchableOpacity, View } from 'react-native'

import { Row } from '../../../containers'
import { Text } from '../../../content'
import { StaticButtonProps } from '../types'

export const StaticButton = forwardRef<View, StaticButtonProps>(
  (
    { styles, startAdornment, endAdornment, title, style, onPress, ...rest },
    ref,
  ) => (
    <TouchableOpacity onPress={onPress}>
      <Row
        // forwarded ref
        ref={ref}
        {...styles?.container}
        {...rest}
        // Merge `style` prop styles
        style={{ ...(styles?.container?.style as any), ...(style as any) }}
      >
        {startAdornment}
        <Text {...styles?.label}>{title ?? ''}</Text>
        {endAdornment}
      </Row>
    </TouchableOpacity>
  ),
)

// Although TypeScript is used here, adding propTypes helps us improve
// documentation and runtime type-checking.
const propTypes: InferProps<typeof StaticButton.propTypes> = {
  styles: PropTypes.shape({
    container: PropTypes.object,
    label: PropTypes.object,
  }),
  children: PropTypes.node,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.object,
}

StaticButton.propTypes = propTypes
