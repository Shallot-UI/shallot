import styled from 'styled-components'

import { FormInputState } from '../../types'
import { FormInputStyleProps } from '../types'
import getStyles from '../get'

const Container = styled.div<
  FormInputStyleProps & { [state in FormInputState]?: boolean }
>`
  ${getStyles}
`

export default Container
