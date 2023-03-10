import { forwardRef, MutableRefObject } from 'react'

import { makeComponent } from '../../../../utils'
import { Row } from '../../../containers'
import { StaticInputProps } from '../types'
import inputConfig from '../config'

const Input = makeComponent(
  'input',
  inputConfig,
  `
    display: flex;
    border-style: solid;
    outline: none;
  `,
)

export const StaticInput = forwardRef<HTMLInputElement, StaticInputProps>(
  ({ styles, children, startAdornment, endAdornment, title, ...rest }, ref) => (
    <Row
      {...styles?.container}
      onClick={() =>
        (ref as MutableRefObject<HTMLInputElement>)?.current?.focus()
      }
    >
      {startAdornment}
      <Input ref={ref} {...styles?.input} {...rest} />
      {endAdornment}
    </Row>
  ),
)
