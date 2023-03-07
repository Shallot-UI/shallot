import { withStyleProps } from '../../../utils'

// Core
import StatefulButton from './core/Stateful'
import DisplayButton from './core/Display'

// Styles
import getButtonStyles from './styles/getStyles'
import splitButtonProps from './styles/splitProps'

// Types
export * from './core/types'

// The CoreButton object is used to export the core components and styles
// for the Button component. This is used to create the Button component
// with the withStyleProps HOC.
export const CoreButton = {
  Stateful: StatefulButton,
  Presentation: DisplayButton,
  getStyles: getButtonStyles,
  splitProps: splitButtonProps,
}

// We export a styled version of the Button component using the withStyleProps
// HOC and some default styling logic.
export const Button = withStyleProps(
  CoreButton.Stateful,
  CoreButton.getStyles,
  CoreButton.splitProps,
)
