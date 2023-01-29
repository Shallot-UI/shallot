import styled from 'styled-components'

const Input = styled.input`
  display: flex;
  border: 1px solid transparent;
  outline: none;
  transition: border-color 250ms ease-in-out, box-shadow 400ms ease-in-out;
`
const Label = styled.span``
const HelperText = styled.span`
  transition: color 250ms ease-in-out;
`
const ErrorText = styled.span``
const RequiredStar = styled.span.attrs({ children: '*' })`
  color: ${({ theme }) => theme.colors['Danger.300']};
`

export default { Input, Label, HelperText, ErrorText, RequiredStar }
