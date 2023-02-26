import { getInputStyles } from '../../controls/Input/getStyles'
import { getFormControlRowStyles } from '../FormControlRow/getStyles'
import { FormInputComponentStyles, FormInputState } from './types'

export const getFormInputStyles: (props: {
  state?: FormInputState
}) => FormInputComponentStyles = ({ state }) => ({
  input: getInputStyles({ unitsAbove: 1 / 3, unitsBelow: 1 / 3, state }),
  control: getFormControlRowStyles({ state }),
})
