import React, {
  CSSProperties,
  Dispatch,
  FunctionComponent,
  HTMLProps,
  SetStateAction,
} from 'react'
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
  AnimationProps,
  HorizontalAlignmentProps,
  VerticalAlignmentProps,
} from '@shallot-ui/theme'

import { getBoxStyle } from '../Box'
import { CheckmarkIcon } from './checkmarkIcon'
import {
  getColors,
  getSizing,
  getTransition,
  getUnitsAround,
} from '../../props'
import { getAnimation } from '../../props/Animation'
import { getColumnStyle } from '../Column'
import { checkboxDefaultStyle } from './style'

interface ContainerStyleProps
  extends UnitsAroundProps,
    ColorProps,
    RadiusProps,
    ElevationProps,
    SizingProps,
    FlexProps,
    TransitionProps,
    CursorProps,
    AnimationProps,
    HorizontalAlignmentProps,
    VerticalAlignmentProps {
  style?: Partial<CSSProperties>
}

interface CheckmarkStyleProps
  extends ColorProps,
    SizingProps,
    TransitionProps,
    AnimationProps {
  style?: Partial<CSSProperties>
}

interface CheckboxStateProps {
  containerProps?: ContainerStyleProps
  fillProps?: ContainerStyleProps
  checkmarkProps?: CheckmarkStyleProps
}

export interface CheckboxStyleProps
  extends CheckboxStateProps,
    ContainerStyleProps {
  states?: { [stateName: string]: CheckboxStateProps }
  style?: Partial<CSSProperties>
}

export interface CheckboxProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    'style' | 'height' | 'width' | 'value' | 'ref' | 'as' | 'type'
  > {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
}

const getCheckmarkStyle = (props: any = {}) => css<any>`
  ${getSizing(props)}
  ${getColors(props)}
  ${getUnitsAround(props)}
  ${getTransition(props)}
  ${getAnimation(props)}
`

const Input = styled.input.attrs({ type: 'checkbox' })`
  visibility: hidden;
`
const Fill = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
`
const Checkmark = styled(CheckmarkIcon)``

const getStateStyles =
  (state?: string) => (props: CheckboxStyleProps & ThemeProps<DefaultTheme>) =>
    css`
      ${getColumnStyle({
        ...props?.containerProps,
        ...(state ? props.states?.[state]?.containerProps : {}),
      })}
      ${Fill} {
        ${getColumnStyle({
          ...props?.fillProps,
          ...(state ? props.states?.[state]?.fillProps : {}),
        })}
      }
      ${Checkmark} {
        ${getCheckmarkStyle({
          ...props?.checkmarkProps,
          ...(state ? props.states?.[state]?.checkmarkProps : {}),
        })}
      }
    `

const Container = styled.div<CheckboxStyleProps>`
  border: none;
  display: inline-flex;
  ${getBoxStyle}
  ${getStateStyles()}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &: ${state} {
          ${getStateStyles(state)}
        }
      `,
    )}
`

export const Checkbox: FunctionComponent<
  CheckboxProps & CheckboxStyleProps
> = ({
  value,
  setValue,

  states,
  containerProps,
  fillProps,
  checkmarkProps,

  ...rest
}) => (
  <Container
    onClick={() => setValue(!value)}
    states={states}
    {...checkboxDefaultStyle}
    containerProps={{
      ...checkboxDefaultStyle.containerProps,
      ...containerProps,
    }}
    fillProps={{
      ...checkboxDefaultStyle.fillProps,
      ...fillProps,
    }}
    checkmarkProps={{
      ...checkboxDefaultStyle.checkmarkProps,
      ...checkmarkProps,
    }}
  >
    <Input
      {...rest}
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
    />
    {value && (
      <Fill style={{ position: 'absolute' }}>
        <Checkmark />
      </Fill>
    )}
  </Container>
)
