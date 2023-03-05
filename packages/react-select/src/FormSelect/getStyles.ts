import { getFormControlRowStyles, RowProps } from '@shallot-ui/web'
import { FormSelectComponentStyles, FormSelectState } from './types'

export const getFormSelectStyles: (
  state?: FormSelectState,
  props?: RowProps,
) => FormSelectComponentStyles = (state, props) => ({
  control: getFormControlRowStyles(state, props),
})
