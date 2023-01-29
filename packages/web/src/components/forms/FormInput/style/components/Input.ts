import styled from 'styled-components'
import { getInputStyle } from '../../../../Input'

const Input = styled.input`
  display: flex;
  border: 1px solid transparent;
  outline: none;
  transition: border-color 250ms ease-in-out, box-shadow 400ms ease-in-out;

  ${getInputStyle}
`

export default Input
