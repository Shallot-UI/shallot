import { withStyleProps } from '../../../utils'

// Core
import StatefulFormControlColumn from './core/Stateful'
import DisplayFormControlColumn from './core/Display'

// Styles
import getFormControlColumnStyles from './styles/getStyles'

// Types
export * from './core/types'

// The CoreFormControlColumn object is used to export the core components and
// styles for the FormControlColumn component. This is used to create the
// FormControlColumn component with the withStyleProps HOC.
export const CoreFormControlColumn = {
  Stateful: StatefulFormControlColumn,
  Presentation: DisplayFormControlColumn,
  getStyles: getFormControlColumnStyles,
  splitProps: (props: any) => props,
}

// We export a styled version of the FormControlColumn component using the
// withStyleProps HOC and some default styling logic.
export const FormControlColumn = withStyleProps(
  CoreFormControlColumn.Stateful,
  CoreFormControlColumn.getStyles,
  CoreFormControlColumn.splitProps,
)
