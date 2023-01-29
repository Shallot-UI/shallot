import { css } from 'styled-components'

import { getBoxStyle } from '../../Box'
import { getInputStyle } from '../../Input'
import { getTextStyle } from '../../Text'
import { FormInputProps } from '..'

import Input from './components/Input'
import Label from './components/Label'
import HelperText from './components/HelperText'
import ErrorText from './components/ErrorText'

const getStateStyles = (state?: string) => (props: FormInputProps) =>
  css`
    ${getBoxStyle({
      ...props?.containerProps,
      ...(state ? props.states?.[state]?.containerProps : {}),
    })}
    ${Input} {
      ${getInputStyle({
        ...props?.inputProps,
        ...(state ? props.states?.[state]?.inputProps : {}),
      })}
    }
    ${Label} {
      ${getTextStyle({
        ...props?.labelProps,
        ...(state ? props.states?.[state]?.labelProps : {}),
      })}
    }
    ${HelperText} {
      ${getTextStyle({
        ...props?.helperTextProps,
        ...(state ? props.states?.[state]?.helperTextProps : {}),
      })}
    }
    ${ErrorText} {
      ${getTextStyle({
        ...props?.errorTextProps,
        ...(state ? props.states?.[state]?.errorTextProps : {}),
      })}
    }
  `

const getStyles = css`
  ${getBoxStyle}
  ${getStateStyles()}

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
