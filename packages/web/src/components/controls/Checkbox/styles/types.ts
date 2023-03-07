import { UnitsAroundProps, RadiusProps, ColorName } from '@shallot-ui/theme'

export interface CheckboxStyleProps extends UnitsAroundProps, RadiusProps {
  color?: ColorName
  size?: number
  iconSize?: number
  outline?: boolean
}
