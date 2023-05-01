import { HTMLProps, ReactNode } from 'react'
import {
  AnimationProps,
  CasingProps,
  ColorName,
  ColorProps,
  FontProps,
  FontSizeProps,
  LetterSpacingProps,
  RadiusProps,
  UnderlineProps,
  UnitsAroundProps,
} from '@shallot-ui/theme'

import { RowStyleProps } from '../../containers'
import { TextProps } from '..'

export interface TagComponentStyles {
  container?: RowStyleProps
  label?: TextProps
}

export interface StaticTagProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as' | 'type' | 'wrap'> {
  styles: TagComponentStyles
  title?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  outline?: boolean
  disabled?: boolean
}

export interface TagState {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  pressed?: boolean
}

export interface TagProps extends Omit<StaticTagProps, 'styles'> {
  getStyles: (state: TagState) => TagComponentStyles
}

export interface TagStyleProps
  extends AnimationProps,
    ColorProps,
    RadiusProps,
    FontProps,
    UnitsAroundProps,
    CasingProps,
    UnderlineProps,
    LetterSpacingProps,
    FontSizeProps {
  color?: ColorName
  outline?: boolean
}
