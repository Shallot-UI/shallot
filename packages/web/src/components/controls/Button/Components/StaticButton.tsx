import { forwardRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { Row } from '../../../containers'
import { Text } from '../../../content'
import { StaticButtonProps } from '../types'

export const StaticButton = forwardRef<HTMLButtonElement, StaticButtonProps>(
  (
    {
      styles,
      children,
      startAdornment,
      endAdornment,
      title,
      style,
      // We fallback to `title` if `aria-label` is not provided.
      'aria-label': ariaLabel = title,
      // We fallback to `button` if `type` is not provided.
      // This is to prevent the default behavior of submitting a form.
      type = 'button',
      ...rest
    },
    ref,
  ) => (
    <Row
      as="button"
      // forwarded ref
      ref={ref}
      // The `aria-label` prop is set to `title` by default
      aria-label={ariaLabel}
      // The `type` prop is set to `button` by default
      type={type}
      {...styles?.container}
      {...rest}
      // Merge `style` prop styles
      style={{ ...styles?.container?.style, ...style }}
    >
      {startAdornment}
      <Text {...styles?.label}>{title ?? ''}</Text>
      {endAdornment}
    </Row>
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
