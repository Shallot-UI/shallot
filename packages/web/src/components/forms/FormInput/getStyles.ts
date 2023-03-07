import { FontProps } from '@shallot-ui/theme'

import { RowProps } from '../../containers'
import { getInputStyles } from '../../controls/Input/styles/getStyles'
import { getFormControlRowStyles } from '../FormControlRow/getStyles'
import { FormInputComponentStyles, FormInputState } from './types'

export interface FormInputStyleProps extends RowProps, FontProps {}

export const getFormInputStyles = (
  state: FormInputState = {},
  props: FormInputStyleProps = {},
): FormInputComponentStyles => ({
  input: getInputStyles(state, { unitsAbove: 1 / 2, unitsBelow: 1 / 4 }),
  control: getFormControlRowStyles(state, props),
})
