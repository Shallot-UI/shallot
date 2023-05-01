import {
  CSSObject,
  CSSProp,
  DefaultTheme,
  ThemedCssFunction,
} from 'styled-components'

export type ColorShadingValue =
  | 100
  | 125
  | 150
  | 175
  | 200
  | 225
  | 250
  | 275
  | 300
  | 325
  | 350
  | 375
  | 400
  | 425
  | 450
  | 475
  | 500

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
export type AllColorShades = `${ColorName}.${ColorShadingValue}` | 'transparent'

export interface ColorProps {
  placeholderColor?: AllColorShades
  backgroundColor?: AllColorShades
  textColor?: AllColorShades
  borderColor?: AllColorShades
  fillColor?: AllColorShades
}

export interface CursorProps {
  cursor?: CSSObject['cursor']
}

export interface ElevationProps {
  elevation?: keyof DefaultTheme['elevations']
}

export interface FlexProps {
  direction?: CSSObject['flexDirection']
  flex?: boolean | CSSObject['flex']
  grow?: boolean | CSSObject['flexGrow']
  shrink?: boolean | CSSObject['shrink']
  wrap?: boolean | 'reverse' | CSSObject['flexWrap']
}

export interface RadiusProps {
  radius?: keyof DefaultTheme['radii']
}

export interface TransitionProps {
  transition?: string
}

export interface FontProps {
  font?: string
  typeface?: keyof DefaultTheme['typefaces']
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
  alignLeft?: boolean
  alignRight?: boolean
  alignCenter?: boolean
}

export interface VerticalAlignmentProps {
  alignTop?: boolean
  alignBottom?: boolean
  alignMiddle?: boolean
}

export interface LetterSpacingProps {
  letterSpacing?: keyof DefaultTheme['letterSpacings']
}

type ValueOrGetter<T> = T | ThemedCssFunction<DefaultTheme>

export interface CasingProps {
  casing?: CSSObject['textTransform']
}

export interface TextAlignProps {
  textAlign?: CSSObject['textAlign']
}

export interface SizingProps {
  width?: ValueOrGetter<CSSObject['width']>
  minWidth?: ValueOrGetter<CSSObject['minWidth']>
  maxWidth?: ValueOrGetter<CSSObject['maxWidth']>
  height?: ValueOrGetter<CSSObject['height']>
  minHeight?: ValueOrGetter<CSSObject['minHeight']>
  maxHeight?: ValueOrGetter<CSSObject['maxHeight']>
}

export interface MarginProps {
  fullHeight?: boolean
  fullWidth?: boolean
  margin?: ValueOrGetter<CSSObject['margin']>
  marginTop?: ValueOrGetter<CSSObject['marginTop']>
  marginBottom?: ValueOrGetter<CSSObject['marginBottom']>
  marginLeft?: ValueOrGetter<CSSObject['marginLeft']>
  marginRight?: ValueOrGetter<CSSObject['marginRight']>
}

export interface PaddingProps {
  padding?: ValueOrGetter<CSSObject['padding']>
  paddingTop?: ValueOrGetter<CSSObject['paddingTop']>
  paddingBottom?: ValueOrGetter<CSSObject['paddingBottom']>
  paddingLeft?: ValueOrGetter<CSSObject['paddingLeft']>
  paddingRight?: ValueOrGetter<CSSObject['paddingRight']>
}

export interface DisplayProps {
  display?:
    | boolean
    | 'hidden'
    | 'inline'
    | 'block'
    | 'flex'
    | 'inline-flex'
    | 'none'
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
