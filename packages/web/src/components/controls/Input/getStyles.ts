import { AllColorShades } from '@shallot-ui/theme'
import {
  AnimationProps,
  BorderProps,
  ColorProps,
  CursorProps,
  DisplayProps,
  ElevationProps,
  FlexProps,
  RadiusProps,
  SizingProps,
  TransitionProps,
  UnitsAroundProps,
  UnitPaddingProps,
  FontProps,
  FontSizeProps,
  LineHeightProps,
  LetterSpacingProps,
} from '@shallot-ui/theme'

import { pullColumnProps } from '../../containers'
import { InputState, DisplayInputProps } from './types'

export interface InputStyleProps
  extends BorderProps,
    ColorProps,
    CursorProps,
    DisplayProps,
    ElevationProps,
    FlexProps,
    FontProps,
    FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    TransitionProps,
    UnitPaddingProps,
    UnitsAroundProps,
    AnimationProps {
  backgroundColor?: AllColorShades
  borderColor?: AllColorShades
  focusedBackgroundColor?: AllColorShades
  focusedBorderColor?: AllColorShades
}

export const getInputStyles = (
  state: InputState = {},
  {
    backgroundColor = 'Shading.125',
    borderColor = 'Shading.200',
    focusedBackgroundColor = 'Shading.100',
    focusedBorderColor = 'Primary.300',
    ...rest
  }: InputStyleProps = {},
) => {
  const [containerOverrides] = pullColumnProps(rest)

  let styles: DisplayInputProps['styles'] = {
    container: {
      backgroundColor,
      borderColor,
      radius: 'sm',
      cursor: 'pointer',
      borderWidth: 1,
      transition: `
        border-color 0.2s ease-in-out,
        background-color 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out
      `,
    },
    input: {
      unitWidth: 1,
      backgroundColor: 'transparent',
      fontSize: 'md',
      unitsAround: 3 / 4,
      grow: true,
      letterSpacing: 'md',
    },
  }

  if (state.focused) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        elevation: 'focused',
        backgroundColor: focusedBackgroundColor,
        borderColor: focusedBorderColor,
      },
    }
  }

  if (state.error) {
    styles = {
      ...styles,
      container: {
        ...styles.container,
        borderColor: 'Danger.300',
        backgroundColor: 'Danger.100',
      },
    }
  }

  styles = {
    ...styles,
    container: { ...styles.container, ...containerOverrides },
  }

  return styles
}
