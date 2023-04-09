import { forwardRef } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { rowConfig } from '../../../containers'
import { Text } from '../../../content'
import { StaticButtonProps } from '../types'
import { makeComponent } from '../../../../utils'

const Container = makeComponent(
  'button',
  rowConfig,
  `
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 0;
  `,
)

export const StaticButton = forwardRef<HTMLButtonElement, StaticButtonProps>(
  (
    {
      styles,
      startAdornment,
      endAdornment,
      title,
      style,
      // We fallback to `title` if `aria-label` is not provided.
      'aria-label': ariaLabel = title,
      // We fallback to `button` if `type` is not provided.
      // This is to prevent the default behavior of submitting a form.
      type = 'button',
      onClick,
    },
    ref,
  ) => (
    <Container
      // forwarded ref
      ref={ref}
      // The `aria-label` prop is set to `title` by default
      aria-label={ariaLabel}
      // The `type` prop is set to `button` by default
      type={type}
      {...styles?.container}
      // Merge `style` prop styles
      style={{ ...styles?.container?.style, ...style }}
      onClick={onClick}
    >
      {startAdornment}
      <Text {...styles?.label}>{title ?? ''}</Text>
      {endAdornment}
    </Container>
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
