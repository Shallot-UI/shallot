import { ComponentProps, FunctionComponent, useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native'
import styled, {
  css,
  DefaultTheme,
  ThemeProps,
  useTheme,
} from 'styled-components/native'
import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  RadiusProps,
  SizingProps,
  UnitPaddingProps,
} from '@shallot-ui/theme'
import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getRadius,
  getUnitPadding,
} from '@shallot-ui/core'

interface InputStateProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    UnitPaddingProps {
  placeholderColor?: keyof DefaultTheme['colors']
}

export interface InputStyleProps extends InputStateProps {
  states?: { [stateName: string]: InputStateProps }
}

const getStyles = (props: InputStateProps = {}) => css`
  ${getFont(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
  ${getUnitPadding(props)}
`

const getStateStyles =
  (state?: string) => (props: InputStyleProps & ThemeProps<DefaultTheme>) =>
    getStyles({ ...props, ...(state ? props.states?.[state] : {}) })

interface InputProps {
  disabled?: boolean
}

export const BaseInput = styled.TextInput<
  InputStyleProps & { isFocused?: boolean; isDisabled?: boolean }
>`
  display: flex;
  border: 1px solid transparent;
  ${getStyles}

  ${({ isFocused, isDisabled }) =>
    isFocused && !isDisabled && getStateStyles('focus')}

  ${({ isDisabled }) => isDisabled && getStateStyles('disabled')}
`

export const Input: FunctionComponent<
  ComponentProps<typeof TextInput> & InputStyleProps & InputProps
> = ({
  onFocus,
  onBlur,
  disabled,
  placeholderTextColor,
  placeholderColor = 'Shading.300',
  ...rest
}) => {
  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)

  return (
    <BaseInput
      placeholderTextColor={
        placeholderTextColor || theme.colors[placeholderColor]
      }
      isFocused={isFocused}
      isDisabled={disabled}
      onFocus={(args: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true)
        onFocus?.(args)
      }}
      onBlur={(args: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false)
        onBlur?.(args)
      }}
      {...rest}
    />
  )
}
