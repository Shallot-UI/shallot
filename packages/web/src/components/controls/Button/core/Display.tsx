import { forwardRef } from 'react'

import { rowConfig } from '../../../containers'
import { makeComponent } from '../../../../utils'
import { textConfig } from '../../../content'
import { DisplayButtonProps } from './types'

const Container = makeComponent(
  'button',
  rowConfig,
  `
    display: flex;
    flex-direction: row;
    border-style: solid;
  `,
)

const Label = makeComponent('label', textConfig)

const DisplayButton = forwardRef<HTMLButtonElement, DisplayButtonProps>(
  ({ styles, children, startAdornment, endAdornment, title, ...rest }, ref) => (
    <Container
      // forwarded ref
      ref={ref}
      {...styles?.container}
      {...rest}
    >
      {startAdornment}
      <Label {...styles?.label}>{title ?? ''}</Label>
      {endAdornment}
    </Container>
  ),
)

export default DisplayButton
