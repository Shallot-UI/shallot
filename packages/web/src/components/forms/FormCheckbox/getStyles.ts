import { FormCheckboxComponentStyles, FormCheckboxState } from './types'
import { getFormControlRowStyles } from '../FormControlRow/getStyles'
import {
  CheckboxStyleProps,
  getCheckboxStyles,
} from '../../controls/Checkbox/getStyles'

export interface FormCheckboxStyleProps extends CheckboxStyleProps {}

export const getFormCheckboxStyles = (
  state: FormCheckboxState = {},
  { color, size, iconSize, radius, ...rowProps }: CheckboxStyleProps = {},
): FormCheckboxComponentStyles => ({
  checkbox: getCheckboxStyles(state, { color, size, iconSize, radius }),
  control: getFormControlRowStyles(state, rowProps),
})
