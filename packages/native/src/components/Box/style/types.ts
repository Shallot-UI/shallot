import { StyleProp, ViewStyle } from 'react-native'
import {
  BorderProps,
  ColorProps,
  DisplayProps,
  ElevationProps,
  FlexProps,
  RadiusProps,
  SizingProps,
  UnitsAroundProps,
} from '@shallot-ui/theme'

export interface BoxStyleProps
  extends ColorProps,
    DisplayProps,
    ElevationProps,
    FlexProps,
    RadiusProps,
    SizingProps,
    UnitsAroundProps,
    BorderProps {
  style?: StyleProp<ViewStyle>
}
