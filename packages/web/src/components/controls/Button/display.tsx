import { forwardRef } from 'react'

import { rowConfig } from '../../containers'
import { DisplayButtonProps } from './types'
import { makeComponent } from '../../../utils'
import { textConfig } from '../../content'

const Container = makeComponent(
  'button',
  rowConfig,
  `display: flex; flex-direction: row;`,
)

const Label = makeComponent('label', textConfig)

export const DisplayButton = forwardRef<HTMLButtonElement, DisplayButtonProps>(
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
