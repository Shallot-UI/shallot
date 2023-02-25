import { getCheckboxStyles } from '../../controls/Checkbox/getStyles'
import { getFormControlRowStyles } from '../FormControlRow/getStyles'
import { FormCheckboxComponentStyles, FormCheckboxState } from './types'

export const getFormCheckboxStyles: (props: {
  state?: FormCheckboxState
}) => FormCheckboxComponentStyles = ({ state }) => ({
  checkbox: getCheckboxStyles({ state }),
  control: getFormControlRowStyles({ state }),
})
