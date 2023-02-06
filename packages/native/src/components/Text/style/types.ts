import {
  UnitsAroundProps,
  ColorProps,
  FontProps,
  CasingProps,
  FontSizeProps,
  LineHeightProps,
  TextAlignProps,
  UnderlineProps,
  SizingProps,
  FlexProps,
  LetterSpacingProps,
} from '@shallot-ui/theme'
import { StyleProp, TextStyle } from 'react-native'

export interface TextStyleProps
  extends CasingProps,
    ColorProps,
    FlexProps,
    FontProps,
    FontSizeProps,
    LetterSpacingProps,
    LineHeightProps,
    SizingProps,
    TextAlignProps,
    UnderlineProps,
    UnitsAroundProps {
  style?: StyleProp<TextStyle>
}
