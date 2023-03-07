import { withStyleProps } from '../../../utils'

// Core
import StatefulFormInput from './core/Stateful'
import DisplayFormInput from './core/Display'

// Styles
import getFormInputStyles from './styles/getStyles'

// Types
export * from './core/types'

// The CoreFormInput object is used to export the core components and
// styles for the FormInput component. This is used to create the
// FormInput component with the withStyleProps HOC.
export const CoreFormInput = {
  Stateful: StatefulFormInput,
  Presentation: DisplayFormInput,
  getStyles: getFormInputStyles,
  splitProps: (props: any) => props,
}

// We export a styled version of the FormInput component using the
// withStyleProps HOC and some default styling logic.
export const FormInput = withStyleProps(
  CoreFormInput.Stateful,
  CoreFormInput.getStyles,
  CoreFormInput.splitProps,
)
