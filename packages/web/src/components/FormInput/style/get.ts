import { css } from 'styled-components'

import { getBoxStyle } from '../../Box'
import { getInputStyle } from '../../Input'
import { getTextStyle } from '../../Text'
import S from './components/subcomponents'
import { FormInputProps } from '..'

const getStateStyles = (state?: string) => (props: FormInputProps) =>
  css`
    ${getBoxStyle({
      ...props?.containerProps,
      ...(state ? props.states?.[state]?.containerProps : {}),
    })}
    ${S.Input} {
      ${getInputStyle({
        ...props?.inputProps,
        ...(state ? props.states?.[state]?.inputProps : {}),
      })}
    }
    ${S.Label} {
      ${getTextStyle({
        ...props?.labelProps,
        ...(state ? props.states?.[state]?.labelProps : {}),
      })}
    }
    ${S.HelperText} {
      ${getTextStyle({
        ...props?.helperTextProps,
        ...(state ? props.states?.[state]?.helperTextProps : {}),
      })}
    }
    ${S.ErrorText} {
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
