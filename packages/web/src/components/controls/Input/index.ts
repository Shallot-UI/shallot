import { withStyleProps } from '../../../utils'

// Core
import StatefulInput from './core/Stateful'
import DisplayInput from './core/Display'

// Styles
import { inputConfig } from './styles/config'
import { getInputStyles } from './styles/getStyles'
import { splitInputProps } from './styles/splitProps'

// Types
export * from './core/types'

// The CoreInput object is used to export the core components and styles
// for the Input component. This is used to create the Input component
// with the withStyleProps HOC.
export const CoreInput = {
  Stateful: StatefulInput,
  Presentation: DisplayInput,
  getStyles: getInputStyles,
  splitProps: splitInputProps,
  config: inputConfig,
}

// We export a styled version of the Input component using the withStyleProps
// HOC and some default styling logic.
export const Input = withStyleProps(
  CoreInput.Stateful,
  getInputStyles,
  splitInputProps,
)
