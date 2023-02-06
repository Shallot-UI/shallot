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
  TransitionProps,
} from '@shallot-ui/theme'
import { StyleProp, ViewStyle } from 'react-native'

export interface InputStyleProps
  extends UnitsAroundProps,
    ColorProps,
    FontProps,
    CasingProps,
    FontSizeProps,
    LineHeightProps,
    RadiusProps,
    SizingProps,
    UnitPaddingProps,
    BorderProps,
    TransitionProps {
  style?: StyleProp<ViewStyle>
}
