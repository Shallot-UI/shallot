import { forwardRef } from 'react'
import { Column } from '@shallot-ui/next'

import { StaticSwitchProps } from '../types'

export const StaticSwitch = forwardRef<HTMLLabelElement, StaticSwitchProps>(
  ({ styles, children, ...rest }, ref) => (
    <Column
      as="label"
      // forwarded ref
      ref={ref}
      // a11y props
      role="checkbox"
      tabIndex={0}
      aria-checked={false}
      // styles
      {...styles?.container}
      // label props
      {...rest}
    >
      <Column {...styles?.handle} />
    </Column>
  ),
)
