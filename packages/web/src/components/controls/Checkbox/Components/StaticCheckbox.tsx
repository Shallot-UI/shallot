import { forwardRef } from 'react'
import { makeComponent } from '@shallot-ui/core'

import { columnConfig } from '../../../containers'
import { StaticCheckboxProps } from '../types'
import CheckmarkIcon from './icons/CheckmarkIcon'

const Container = makeComponent(
  'label',
  columnConfig,
  `
    display: flex;
    width: auto;
    flex-direction: column;
    border-style: solid;
    border-width: 0;
    position: relative;
    overflow: hidden;
    outline: none;
  `,
)

const IconBox = makeComponent(
  'div',
  columnConfig,
  `
    position: absolute;
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: 0;
  `,
)

export const StaticCheckbox = forwardRef<HTMLLabelElement, StaticCheckboxProps>(
  ({ Icon = CheckmarkIcon, styles, ...rest }, ref) => (
    <Container
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
      <IconBox as={Icon} style={{ fill: 'white' }} {...styles?.icon} />
    </Container>
  ),
)
