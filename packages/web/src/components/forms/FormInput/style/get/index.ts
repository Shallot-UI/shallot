import { css } from 'styled-components'

import { FormInputProps } from '../../types'
import getStateStyles from './getStateStyles'

const getStyles = css`
  ${(props: FormInputProps) =>
    props.disabled ? getStateStyles('disabled')(props) : ''}

  ${(props: FormInputProps) =>
    props.focused ? getStateStyles('focused')(props) : ''}

  ${(props: FormInputProps) =>
    props.populated ? getStateStyles('populated')(props) : ''}

  ${(props: FormInputProps) =>
    props.error ? getStateStyles('error')(props) : ''}
`

export default getStyles
