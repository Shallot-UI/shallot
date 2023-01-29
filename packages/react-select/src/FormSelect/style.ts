import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
import { getBoxStyle, getTextStyle } from '@shallot-ui/web'

import { FormSelectStyleProps } from './types'

const Label = styled.span``
const HelperText = styled.span`
  transition: color 250ms ease-in-out;
`
const ErrorText = styled.span``
const RequiredStar = styled.span.attrs({ children: '*' })`
  color: ${({ theme }) => theme.colors['Danger.300']};
`

type FormSelectState = 'disabled' | 'focused' | 'populated' | 'error'

const getStateStyles = (state?: string) => (
  props: FormSelectStyleProps & ThemeProps<DefaultTheme>,
) => css`
  ${getBoxStyle({
    ...props?.wrapperProps,
    ...(state ? props.states?.[state]?.wrapperProps : {}),
  })}
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

const Container = styled.div<
  FormSelectStyleProps & Record<FormSelectState, boolean | undefined>
>`
  display: flex;
  flex-direction: column;
  ${getBoxStyle}
  ${getStateStyles()}

  ${(props) => (props.disabled ? getStateStyles('disabled')(props) : '')}
  ${(props) => (props.focused ? getStateStyles('focused')(props) : '')}
  ${(props) => (props.populated ? getStateStyles('populated')(props) : '')}
  ${(props) => (props.error ? getStateStyles('error')(props) : '')}
`

export default {
  Label,
  HelperText,
  ErrorText,
  RequiredStar,
  Container,
}
