import { css } from 'styled-components'

import { getBoxStyle } from '../../../../Box'
import { FormControlProps } from '../../types'
import getStateStyles from './getStateStyles'

const getStyles = css`
  ${getBoxStyle}
  ${getStateStyles()}

  ${(props: FormControlProps) =>
    props.disabled ? getStateStyles('disabled')(props) : ''}
    
  ${(props: FormControlProps) =>
    props.focused ? getStateStyles('focused')(props) : ''}

  ${(props: FormControlProps) =>
    props.populated ? getStateStyles('populated')(props) : ''}

  ${(props: FormControlProps) =>
    props.error ? getStateStyles('error')(props) : ''}
`

export default getStyles
