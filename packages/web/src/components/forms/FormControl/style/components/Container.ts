import styled from 'styled-components'

import { FormControlState } from '../../types'
import { FormControlStyleProps } from '../types'
import getStyles from '../get'

const Container = styled.div<
  FormControlStyleProps & { [state in FormControlState]?: boolean }
>`
  display: flex;
  flex-direction: column;
  ${getStyles}
`

export default Container
