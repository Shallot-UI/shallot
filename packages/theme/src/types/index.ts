import { CSSObject, CSSProp, DefaultTheme } from 'styled-components'

export type Palette = Record<number, string>

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
  borderColor?: AllColorShades
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

export type ColorName = keyof DefaultTheme['colors']

// Combines a color name with each of its shade values.
// E.g., if ColorName is 'Primary' and the DefaultTheme defines a set of shade
// values for the 'Primary' color, the ShadesForColor type would be a union of
// string literal types that represent the different shades of the 'Primary'
// color like 'Primary.100', 'Primary.200', and so on.
export type ShadesForColor<Name extends ColorName> = `${Name}.${number &
  keyof DefaultTheme['colors'][Name]}`

export type AllColorShades = ShadesForColor<ColorName> | 'transparent'

export interface ColorProps {
  placeholderColor?: AllColorShades
  backgroundColor?: AllColorShades
  textColor?: AllColorShades
  borderColor?: AllColorShades
  fillColor?: AllColorShades
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
  unitsPadding?: number
  unitsPaddingAbove?: number
  unitsPaddingBelow?: number
  unitsPaddingLeft?: number
  unitsPaddingRight?: number
}

export interface DisplayProps {
  display?: boolean | 'hidden' | 'inline' | 'block' | 'flex' | 'inline-flex'
}

export interface ThemeOptions {
  defaults?: { typeface?: string }
  gridUnits?: number[]
  colors?: { [name: string]: { [shade: string]: string } }
  fontSizes?: { [name: string]: number }
  lineHeights?: { [name: string]: number }
  radii?: { [name: string]: number }
  letterSpacings?: { [name: string]: number }
  breakpoints?: {
    [point: number]: {
      fontSizes?: { [name: string]: number }
      radii?: { [name: string]: number }
    }
  }
  typefaces?: { [name: string]: Typeface }
  elevations?: { [name: string]: CSSProp }
}
