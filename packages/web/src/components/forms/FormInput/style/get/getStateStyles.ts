import { css } from 'styled-components'

import { getInputStyle } from '../../../../Input'

import Input from '../components/Input'
import { FormInputProps } from '../../types'

const getStateStyles = (state?: string) => (props: FormInputProps) =>
  css`
    ${Input} {
      ${getInputStyle({
        ...props?.inputProps,
        ...(state ? props.states?.[state]?.inputProps : {}),
      })}
    }
  `

export default getStateStyles
