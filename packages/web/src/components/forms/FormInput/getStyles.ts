import { RowProps } from '../../containers'
import { getInputStyles } from '../../controls/Input/getStyles'
import { getFormControlRowStyles } from '../FormControlRow/getStyles'
import { FormInputComponentStyles, FormInputState } from './types'

export const getFormInputStyles: (
  props: RowProps & { state?: FormInputState },
) => FormInputComponentStyles = ({ state, ...props }) => ({
  input: getInputStyles(state, { unitsAbove: 1 / 2, unitsBelow: 1 / 4 }),
  control: getFormControlRowStyles(state, props),
})
