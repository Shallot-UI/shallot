import { withStyleProps } from '../../../utils'

// Core
import StatefulFormControlRow from './core/Stateful'
import DisplayFormControlRow from './core/Display'

// Styles
import getFormControlRowStyles from './styles/getStyles'

// Types
export * from './core/types'

// The CoreFormControlRow object is used to export the core components and
// styles for the FormControlRow component. This is used to create the
// FormControlRow component with the withStyleProps HOC.
export const CoreFormControlRow = {
  Stateful: StatefulFormControlRow,
  Presentation: DisplayFormControlRow,
  getStyles: getFormControlRowStyles,
  splitProps: (props: any) => props,
}

// We export a styled version of the FormControlRow component using the
// withStyleProps HOC and some default styling logic.
export const FormControlRow = withStyleProps(
  CoreFormControlRow.Stateful,
  CoreFormControlRow.getStyles,
  CoreFormControlRow.splitProps,
)
