import { CSSProperties, FunctionComponent, useCallback, useState } from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
import {
  UnitsAroundProps,
  ColorProps,
  RadiusProps,
  ElevationProps,
  SizingProps,
  FlexProps,
  TransitionProps,
  CursorProps,
} from '@shallot-ui/theme'

import { getBoxStyle } from '../Box'
import { getTextStyle, TextStyleProps } from '../Text'
import { getInputStyle, InputStateProps } from '../Input'
import { FormCheckboxDefaultStyle } from './style'
import { Checkbox } from '../Checkbox'

interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps {
  style?: Partial<CSSProperties>
}

interface FormCheckboxStateProps {
  containerProps?: ContainerStyleProps
  inputProps?: InputStateProps
  labelProps?: TextStyleProps
  helperTextProps?: TextStyleProps
  errorTextProps?: TextStyleProps
}

export interface FormCheckboxStyleProps
  extends FormCheckboxStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: FormCheckboxStateProps }
  style?: Partial<CSSProperties>
}

export interface FormCheckboxProps {
  initialValue?: boolean
  value?: boolean
  label?: string
  errorText?: string
  helperText?: string
}

const Input = styled.input`
  display: flex;
  border: 1px solid transparent;
  outline: none;
  transition: border-color 250ms ease-in-out, box-shadow 400ms ease-in-out;
`
const Label = styled.span``
const HelperText = styled.span`
  transition: color 250ms ease-in-out;
`
const ErrorText = styled.span``
const RequiredStar = styled.span.attrs({ children: '*' })`
  color: ${({ theme }) => theme.colors['Danger.300']};
`

type FormCheckboxState = 'disabled' | 'focused' | 'populated' | 'error'

const getStateStyles =
  (state?: string) =>
  (props: FormCheckboxStyleProps & ThemeProps<DefaultTheme>) =>
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

const Container = styled.div<
  FormCheckboxStyleProps & Record<FormCheckboxState, boolean | undefined>
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

export const FormCheckbox: FunctionComponent<
  FormCheckboxProps & FormCheckboxStyleProps
> = ({
  ref,
  as,

  value,

  onFocus,
  onBlur,

  label,
  errorText,
  helperText,

  states,
  containerProps,
  labelProps,
  inputProps,
  errorTextProps,
  helperTextProps,

  grow,
  flex,
  shrink,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,

  disabled,
  required,

  children,

  ...rest
}) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  return (
    <Container
      focused={focused}
      disabled={disabled}
      populated={Boolean(value)}
      error={Boolean(errorText)}
      states={states}
      {...FormCheckboxDefaultStyle}
      containerProps={{
        ...FormCheckboxDefaultStyle.containerProps,
        ...containerProps,
      }}
      labelProps={{
        ...FormCheckboxDefaultStyle.labelProps,
        ...labelProps,
      }}
      inputProps={{
        ...FormCheckboxDefaultStyle.inputProps,
        ...inputProps,
      }}
      errorTextProps={{
        ...FormCheckboxDefaultStyle.errorTextProps,
        ...errorTextProps,
      }}
      helperTextProps={{
        ...FormCheckboxDefaultStyle.helperTextProps,
        ...helperTextProps,
      }}
      // Container Style Props
      grow={grow}
      flex={flex}
      shrink={shrink}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      unitWidth={unitWidth}
      minUnitWidth={minUnitWidth}
      maxUnitWidth={maxUnitWidth}
      unitHeight={unitHeight}
      minUnitHeight={minUnitHeight}
      maxUnitHeight={maxUnitHeight}
    >
      <Label>
        {label}
        {required && <RequiredStar />}
      </Label>
      <Checkbox
        {...rest}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
      />
      {errorText && <ErrorText>{errorText}</ErrorText>}
      {!errorText && helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  )
}
