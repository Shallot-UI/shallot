import styled from 'styled-components'

import { FormInputState } from '../../types'
import { FormInputStyleProps } from '../types'

import subcomponents from './subcomponents'
import getStyles from '../get'

const Container = styled.div<
  FormInputStyleProps & Record<FormInputState, boolean | undefined>
>`
  display: flex;
  flex-direction: column;
  ${getStyles}
`

export default { ...subcomponents, Container }
