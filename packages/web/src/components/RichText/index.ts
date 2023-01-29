import styled from 'styled-components'
import { Column } from '../Column'
import { getTextStyle, TextStyleProps } from '../Text'

export interface RichTextVariant {
  heading1?: TextStyleProps
  heading2?: TextStyleProps
  heading3?: TextStyleProps
  heading4?: TextStyleProps
  heading5?: TextStyleProps
  heading6?: TextStyleProps
  paragraph?: TextStyleProps
  unorderedList?: TextStyleProps
  orderedList?: TextStyleProps
}

export interface RichTextProps {
  variant?: RichTextVariant
}

export const RichText = styled(Column)<RichTextProps>`
  h1 {
    ${({ variant = {} }) => getTextStyle(variant.heading1)};
  }
  h2 {
    ${({ variant = {} }) => getTextStyle(variant.heading2)};
  }
  h3 {
    ${({ variant = {} }) => getTextStyle(variant.heading3)};
  }
  h4 {
    ${({ variant = {} }) => getTextStyle(variant.heading4)};
  }
  h5 {
    ${({ variant = {} }) => getTextStyle(variant.heading5)};
  }
  h6 {
    ${({ variant = {} }) => getTextStyle(variant.heading6)};
  }
  p {
    ${({ variant = {} }) => getTextStyle(variant.paragraph)};
  }
  ul {
    ${({ variant = {} }) => getTextStyle(variant.unorderedList)};
  }
  ol {
    ${({ variant = {} }) => getTextStyle(variant.orderedList)};
  }
`
