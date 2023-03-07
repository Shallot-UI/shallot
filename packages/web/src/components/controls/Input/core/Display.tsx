import { forwardRef, MutableRefObject } from 'react'

import { DisplayInputProps } from './types'
import { makeComponent } from '../../../../utils'
import { rowConfig } from '../../../containers'
import { inputConfig } from '../styles/config'

const Container = makeComponent(
  'div',
  rowConfig,
  `
    display: flex;
    flex-direction: row;
    border-style: solid;
    overflow: hidden;
  `,
)

const Input = makeComponent(
  'input',
  inputConfig,
  `
    display: flex;
    border-style: solid;
    outline: none;
  `,
)

const DisplayInput = forwardRef<HTMLInputElement, DisplayInputProps>(
  ({ styles, children, startAdornment, endAdornment, title, ...rest }, ref) => (
    <Container
      {...styles?.container}
      onClick={() =>
        (ref as MutableRefObject<HTMLInputElement>)?.current?.focus()
      }
    >
      {startAdornment}
      <Input ref={ref} {...styles?.input} {...rest} />
      {endAdornment}
    </Container>
  ),
)

export default DisplayInput
