import { getFormControlRowStyles, RowProps } from '@shallot-ui/web'
import { FormSelectComponentStyles, FormSelectState } from './types'

export const getFormSelectStyles: (
  props: RowProps & { state?: FormSelectState },
) => FormSelectComponentStyles = ({ state, ...props }) => ({
  control: getFormControlRowStyles({ state, ...props }),
})
