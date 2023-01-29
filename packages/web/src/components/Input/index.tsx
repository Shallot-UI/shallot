import { ComponentProps, CSSProperties } from 'react'
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'
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
  BorderProps,
} from '@shallot-ui/theme'

import {
  getCasing,
  getColors,
  getFont,
  getFontSize,
  getLineHeight,
  getUnitsAround,
  getRadius,
  getBorder,
} from '../../props'
import { getUnitPadding } from '../../props/UnitsPadding'
import { inputDefaultStyle } from './style'

export interface InputStateProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    UnitPaddingProps,
    BorderProps {
  glowColor?: keyof DefaultTheme['colors']
  style?: Partial<CSSProperties>
}

export interface InputStyleProps extends InputStateProps {
  states?: { [stateName: string]: InputStateProps }
  style?: Partial<CSSProperties>
}

export const getInputStyle = (props: InputStateProps = {}) => css`
  ${getFont(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getCasing(props)}
  ${getFontSize(props)}
  ${getLineHeight(props)}
  ${getRadius(props)}
  ${getUnitPadding(props)}
  ${getBorder(props)}
  ${({ theme }) =>
    props.glowColor
      ? `box-shadow: 0 0 0 1px ${theme.colors[props.glowColor]};`
      : ''}
  ${props.style}
`

const getStateStyles =
  (state?: string) => (props: InputStyleProps & ThemeProps<DefaultTheme>) =>
    getInputStyle({
      ...inputDefaultStyle,
      ...props,
      ...(state && {
        ...inputDefaultStyle.states?.[state],
        ...props.states?.[state],
      }),
    })

export const Input = styled.input<InputStyleProps>`
  display: flex;
  border: 2px solid transparent;
  ${(props) => getInputStyle({ ...inputDefaultStyle, ...props })}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &: ${state} {
          ${getStateStyles(state)}
        }
      `,
    )}
`

export type InputProps = ComponentProps<typeof Input>
