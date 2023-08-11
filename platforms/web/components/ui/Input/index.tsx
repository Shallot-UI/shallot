import {
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react'
import styled from 'styled-components'
import { getStyle, withBoxLayoutProps } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'
import { InputShallot, withInputStyleProps } from '@shallot-ui/input'

const Container = styled.div(getStyle)
const Label = styled.label(getStyle)
const InnerInput = styled.input`
  border: none;
  outline: none;
  ${getStyle}
`

const StaticInput: FunctionComponent<
  InputHTMLAttributes<HTMLInputElement> & {
    shallot?: InputShallot & { label?: ShallotProp }
    inputRef?: RefObject<HTMLInputElement>
    label?: typeof Label
    before?: ReactNode
    after?: ReactNode
  }
> = ({ shallot, inputRef, label, before, after, ...rest }) => (
  <Container shallot={shallot?.container}>
    {before}
    <Label shallot={{ display: 'flex', flexGrow: 1, ...shallot?.label }}>
      <InnerInput ref={inputRef} shallot={shallot?.input} {...rest} />
    </Label>
    {after}
  </Container>
)

export const Input = withBoxLayoutProps(
  withInputStyleProps(StaticInput),
  { flexDirection: 'row' },
  'container',
)
