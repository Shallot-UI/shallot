import { FormCheckboxComponentStyles, FormCheckboxState } from '../core/types'
import getFormControlRowStyles from '../../FormControlRow/styles/getStyles'
import getCheckboxStyles from '../../../controls/Checkbox/styles/getStyles'
import { CheckboxStyleProps } from '../../../controls/Checkbox/styles/types'

const getFormCheckboxStyles = (
  state: FormCheckboxState = {},
  { color, size, iconSize, radius, ...rowProps }: CheckboxStyleProps = {},
): FormCheckboxComponentStyles => ({
  checkbox: getCheckboxStyles(state, { color, size, iconSize, radius }),
  control: getFormControlRowStyles(state, rowProps),
})

export default getFormCheckboxStyles
