import getInputStyles from '../../../controls/Input/styles/getStyles'
import getFormControlRowStyles from '../../FormControlRow/styles/getStyles'
import { FormInputComponentStyles, FormInputState } from '../core/types'
import { FormInputStyleProps } from './types'

const getFormInputStyles = (
  state: FormInputState = {},
  props: FormInputStyleProps = {},
): FormInputComponentStyles => ({
  input: getInputStyles(state, { unitsAbove: 1 / 2, unitsBelow: 1 / 4 }),
  control: getFormControlRowStyles(state, props),
})

export default getFormInputStyles
