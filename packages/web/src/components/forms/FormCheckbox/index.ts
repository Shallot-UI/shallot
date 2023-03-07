import { withStyleProps } from '../../../utils'

// Core
import StatefulFormCheckbox from './core/Stateful'
import DisplayFormCheckbox from './core/Display'

// Styles
import getFormCheckboxStyles from './styles/getStyles'
import splitFormCheckboxProps from './styles/splitProps'

// Types
export * from './core/types'

// The CoreFormCheckbox object is used to export the core components and
// styles for the FormCheckbox component. This is used to create the
// FormCheckbox component with the withStyleProps HOC.
export const CoreFormCheckbox = {
  Stateful: StatefulFormCheckbox,
  Presentation: DisplayFormCheckbox,
  getStyles: getFormCheckboxStyles,
  splitProps: splitFormCheckboxProps,
}

// We export a styled version of the FormCheckbox component using the
// withStyleProps HOC and some default styling logic.
export const FormCheckbox = withStyleProps(
  CoreFormCheckbox.Stateful,
  CoreFormCheckbox.getStyles,
  CoreFormCheckbox.splitProps,
)
