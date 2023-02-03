import { CSSObject, DefaultTheme } from 'styled-components'

export type Palette = Record<keyof DefaultTheme['colors'], string>

export type Typeface = {
  name: string
  alternates?: string[]
  fonts: Record<string, CSSObject>
  defaults: {
    font: string
  }
}

export interface BorderProps {
  borderWidth?: number
  borderColor?: keyof DefaultTheme['colors']
  borderPosition?: 'all' | 'top' | 'right' | 'bottom' | 'left'
}

export interface AnimationProps {
  animation?:
    | 'fadeIn'
    | 'fadeOut'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
}

export interface ColorProps {
  backgroundColor?: keyof DefaultTheme['colors']
  textColor?: keyof DefaultTheme['colors']
  borderColor?: keyof DefaultTheme['colors']
  fillColor?: keyof DefaultTheme['colors']
}

export interface CursorProps {
  cursor?: string
}

export interface ElevationProps {
  elevation?: keyof DefaultTheme['elevations']
}

export interface FlexProps {
  grow?: number | true
  flex?: number | true
  shrink?: number | true
  wrap?: boolean | 'reverse'
}

export interface HorizontalAlignmentProps {
  alignLeft?: true
  alignRight?: true
  alignCenter?: true
}

export interface RadiusProps {
  radius?: string
}

export interface SizingProps {
  unitWidth?: number
  minUnitWidth?: number
  maxUnitWidth?: number
  unitHeight?: number
  minUnitHeight?: number
  maxUnitHeight?: number
}

export interface TransitionProps {
  transition?: string
}

export interface FontProps {
  font?: string
  typeface?: keyof DefaultTheme['typefaces']
}

export interface UnitsAroundProps {
  fullHeight?: boolean
  fullWidth?: boolean
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

export interface VerticalAlignmentProps {
  alignTop?: true
  alignBottom?: true
  alignMiddle?: true
}

export interface CasingProps {
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean
}

export interface FontSizeProps {
  fontSize?: keyof DefaultTheme['fontSizes']
}

export interface LineHeightProps extends FontSizeProps {
  lineHeight?: keyof DefaultTheme['lineHeights']
}

export interface UnderlineProps {
  underline?: boolean | 'under'
}

export interface HorizontalAlignmentProps {
  alignLeft?: true
  alignRight?: true
  alignCenter?: true
}

export interface VerticalAlignmentProps {
  alignTop?: true
  alignBottom?: true
  alignMiddle?: true
}

export interface LetterSpacingProps {
  letterSpacing?: keyof DefaultTheme['letterSpacings']
}

export interface TextAlignProps {
  leftText?: boolean
  centerText?: boolean
  rightText?: boolean
  justifyText?: boolean
}

export interface UnitPaddingProps {
  unitPadding?: number
  unitPaddingAbove?: number
  unitPaddingBelow?: number
  unitPaddingLeft?: number
  unitPaddingRight?: number
}

export interface DisplayProps {
  display?: boolean | 'hidden' | 'inline' | 'block' | 'flex' | 'inline-flex'
}
