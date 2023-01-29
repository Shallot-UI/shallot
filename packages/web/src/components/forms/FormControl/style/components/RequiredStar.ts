import styled from 'styled-components'

const RequiredStar = styled.span.attrs({ children: '*' })`
  color: ${({ theme }) => theme.colors['Danger.300']};
`

export default RequiredStar
