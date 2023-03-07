import { withStyleProps } from '../../../utils'

// Core
import StatefulCheckbox from './core/Stateful'
import DisplayCheckbox from './core/Display'

// Styles
import getCheckboxStyles from './styles/getStyles'
import splitCheckboxProps from './styles/splitProps'

// Types
export * from './core/types'

// The CoreCheckbox object is used to export the core components and styles
// for the Checkbox component. This is used to create the Checkbox component
// with the withStyleProps HOC.
export const CoreCheckbox = {
  Stateful: StatefulCheckbox,
  Presentation: DisplayCheckbox,
  getStyles: getCheckboxStyles,
  splitProps: splitCheckboxProps,
}

// We export a styled version of the Checkbox component using the withStyleProps
// HOC and some default styling logic.
export const Checkbox = withStyleProps(
  CoreCheckbox.Stateful,
  CoreCheckbox.getStyles,
  CoreCheckbox.splitProps,
)
