// Custom CSS type definitions to replace csstype
// This file contains the essential CSS properties and pseudos used in Shallot UI

export type CSSGlobalValues = 'inherit' | 'initial' | 'revert' | 'unset'

export type CSSColorValue = string | 'transparent' | 'currentColor' | CSSGlobalValues

export type CSSFontValue = string | 'inherit' | 'initial' | 'revert' | 'unset'

export type CSSBoxShadowValue = string | 'none' | CSSGlobalValues

export type CSSFlexDirectionValue = 'row' | 'row-reverse' | 'column' | 'column-reverse' | CSSGlobalValues

export type CSSFlexWrapValue = 'wrap' | 'nowrap' | 'wrap-reverse' | CSSGlobalValues

export type CSSTextAlignValue = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'match-parent' | CSSGlobalValues

export type CSSLineHeightValue = number | string | 'normal' | CSSGlobalValues

export type CSSDisplayValue = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'table' | 'table-row' | 'table-cell' | 'none' | CSSGlobalValues

export interface CSSProperties {
  color?: CSSColorValue
  backgroundColor?: CSSColorValue
  fontFamily?: CSSFontValue
  fontSize?: string | number
  fontWeight?: string | number
  lineHeight?: CSSLineHeightValue
  boxShadow?: CSSBoxShadowValue
  textAlign?: CSSTextAlignValue
  
  // Layout
  display?: CSSDisplayValue
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | CSSGlobalValues
  
  // Flexbox
  flexDirection?: CSSFlexDirectionValue
  flexWrap?: CSSFlexWrapValue
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | CSSGlobalValues
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | CSSGlobalValues
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | CSSGlobalValues
  flex?: string | number
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string | number
  
  // Box model
  width?: string | number
  height?: string | number
  minWidth?: string | number
  minHeight?: string | number
  maxWidth?: string | number
  maxHeight?: string | number
  
  // Spacing
  margin?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginBottom?: string | number
  marginLeft?: string | number
  padding?: string | number
  paddingTop?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  
  // Borders
  border?: string
  borderTop?: string
  borderRight?: string
  borderBottom?: string
  borderLeft?: string
  borderRadius?: string | number
  borderWidth?: string | number
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none' | 'hidden'
  borderColor?: CSSColorValue
  
  // Positioning
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: number
  
  // Typography
  textDecoration?: string
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana' | CSSGlobalValues
  letterSpacing?: string | number
  wordSpacing?: string | number
  
  // Visibility
  opacity?: number
  visibility?: 'visible' | 'hidden' | 'collapse' | CSSGlobalValues
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | CSSGlobalValues
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto' | CSSGlobalValues
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | CSSGlobalValues
  
  // Transforms
  transform?: string
  transformOrigin?: string
  
  // Transitions
  transition?: string
  transitionProperty?: string
  transitionDuration?: string
  transitionTimingFunction?: string
  transitionDelay?: string
  
  // Animations
  animation?: string
  animationName?: string
  animationDuration?: string
  animationTimingFunction?: string
  animationDelay?: string
  animationIterationCount?: string | number
  animationDirection?: string
  animationFillMode?: string
  animationPlayState?: string
  
  // Cursor
  cursor?: string
  
  // User interaction
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all' | CSSGlobalValues
  pointerEvents?: 'none' | 'auto' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | CSSGlobalValues
  
  // Grid
  gridTemplate?: string
  gridTemplateAreas?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridArea?: string
  gridColumn?: string
  gridRow?: string
  gridColumnStart?: string | number
  gridColumnEnd?: string | number
  gridRowStart?: string | number
  gridRowEnd?: string | number
  gap?: string | number
  rowGap?: string | number
  
  // Box decoration
  background?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  
  // Content
  content?: string
  
  // Outline
  outline?: string
  outlineColor?: CSSColorValue
  outlineStyle?: string
  outlineWidth?: string | number
  
  // Lists
  listStyle?: string
  listStyleType?: string
  listStylePosition?: string
  listStyleImage?: string
  
  // Tables
  borderCollapse?: 'collapse' | 'separate' | CSSGlobalValues
  borderSpacing?: string | number
  emptyCells?: 'show' | 'hide' | CSSGlobalValues
  
  // Text
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | CSSGlobalValues
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word' | CSSGlobalValues
  wordWrap?: 'normal' | 'break-word' | CSSGlobalValues
  
  // Flexbox order
  order?: number
  
  // Alignment
  verticalAlign?: string
  
  // Filters
  filter?: string
  backdropFilter?: string
  
  // Resize
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | CSSGlobalValues
  
  // Scroll
  scrollBehavior?: 'auto' | 'smooth' | CSSGlobalValues
  
  // Will change
  willChange?: string
  
  // Aspect ratio
  aspectRatio?: string | number
  
  // Appearance
  appearance?: string
  
  // Float
  float?: 'left' | 'right' | 'none' | CSSGlobalValues
  clear?: 'left' | 'right' | 'both' | 'none' | CSSGlobalValues
  
  // Clip
  clip?: string
  clipPath?: string
  
  // Mask
  mask?: string
  maskImage?: string
  maskPosition?: string
  maskRepeat?: string
  maskSize?: string
  
  // Mix blend mode
  mixBlendMode?: string
  
  // Object fit
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | CSSGlobalValues
  objectPosition?: string
  
  // Scroll snap
  scrollSnapType?: string
  scrollSnapAlign?: string
  
  // Touch action
  touchAction?: string
  
  // Contain
  contain?: string
  
  // Isolation
  isolation?: 'auto' | 'isolate' | CSSGlobalValues
  
  // Box sizing
  boxSizing?: 'content-box' | 'border-box' | CSSGlobalValues
  
  // Direction
  direction?: 'ltr' | 'rtl' | CSSGlobalValues
  
  // Text orientation
  textOrientation?: string
  
  // Writing mode
  writingMode?: string
  
  // Word break
  overflowWrap?: 'normal' | 'break-word' | 'anywhere' | CSSGlobalValues
  
  // Tab size
  tabSize?: number | string
  
  // Caption side
  captionSide?: 'top' | 'bottom' | 'left' | 'right' | CSSGlobalValues
  
  // Counter
  counterIncrement?: string
  counterReset?: string
  
  // Quotes
  quotes?: string
  
  // Speak
  speak?: string
  
  // Widows and orphans
  widows?: number
  orphans?: number
  
  // Page break
  pageBreakAfter?: string
  pageBreakBefore?: string
  pageBreakInside?: string
  
  // Break
  breakAfter?: string
  breakBefore?: string
  breakInside?: string
  
  // Columns
  columns?: string
  columnCount?: number | string
  columnWidth?: string | number
  columnGap?: string | number
  columnRule?: string
  columnRuleColor?: CSSColorValue
  columnRuleStyle?: string
  columnRuleWidth?: string | number
  columnSpan?: 'none' | 'all' | CSSGlobalValues
  columnFill?: 'auto' | 'balance' | 'balance-all' | CSSGlobalValues
  
  // Hyphens
  hyphens?: 'none' | 'manual' | 'auto' | CSSGlobalValues
  
  // Overscroll
  overscrollBehavior?: string
  overscrollBehaviorX?: string
  overscrollBehaviorY?: string
  
  // Scroll margin
  scrollMargin?: string | number
  scrollMarginTop?: string | number
  scrollMarginRight?: string | number
  scrollMarginBottom?: string | number
  scrollMarginLeft?: string | number
  
  // Scroll padding
  scrollPadding?: string | number
  scrollPaddingTop?: string | number
  scrollPaddingRight?: string | number
  scrollPaddingBottom?: string | number
  scrollPaddingLeft?: string | number
  
  // Text decoration
  textDecorationLine?: string
  textDecorationColor?: CSSColorValue
  textDecorationStyle?: string
  textDecorationThickness?: string | number
  textUnderlineOffset?: string | number
  textUnderlinePosition?: string
  
  // Text emphasis
  textEmphasis?: string
  textEmphasisColor?: CSSColorValue
  textEmphasisStyle?: string
  textEmphasisPosition?: string
  
  // Text shadow
  textShadow?: string
  
  // Image rendering
  imageRendering?: string
  
  // Shape
  shapeOutside?: string
  shapeMargin?: string | number
  shapeImageThreshold?: number
  
  // Placeholder
  '::placeholder'?: CSSProperties
  
  // Allow any other CSS properties as strings
  [key: string]: any
}

export interface CSSPseudos {
  ':active'?: CSSProperties
  ':after'?: CSSProperties
  ':before'?: CSSProperties
  ':checked'?: CSSProperties
  ':disabled'?: CSSProperties
  ':empty'?: CSSProperties
  ':enabled'?: CSSProperties
  ':first-child'?: CSSProperties
  ':first-of-type'?: CSSProperties
  ':focus'?: CSSProperties
  ':focus-visible'?: CSSProperties
  ':focus-within'?: CSSProperties
  ':hover'?: CSSProperties
  ':invalid'?: CSSProperties
  ':last-child'?: CSSProperties
  ':last-of-type'?: CSSProperties
  ':link'?: CSSProperties
  ':not'?: CSSProperties
  ':nth-child'?: CSSProperties
  ':nth-last-child'?: CSSProperties
  ':nth-last-of-type'?: CSSProperties
  ':nth-of-type'?: CSSProperties
  ':only-child'?: CSSProperties
  ':only-of-type'?: CSSProperties
  ':optional'?: CSSProperties
  ':required'?: CSSProperties
  ':root'?: CSSProperties
  ':target'?: CSSProperties
  ':valid'?: CSSProperties
  ':visited'?: CSSProperties
  
  // Pseudo-elements
  '::after'?: CSSProperties
  '::before'?: CSSProperties
  '::first-letter'?: CSSProperties
  '::first-line'?: CSSProperties
  '::placeholder'?: CSSProperties
  '::selection'?: CSSProperties
  
  // Allow any other pseudo selectors
  [key: string]: CSSProperties | undefined
}

export namespace CSS {
  export interface Properties extends CSSProperties {}
  export interface Pseudos extends CSSPseudos {}
}