import { keyframes } from 'styled-components'

const fadeInUpKeyframes = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

export default fadeInUpKeyframes
