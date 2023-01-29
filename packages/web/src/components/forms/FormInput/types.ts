import { InputProps } from '../../Input'
import { FormControlProps } from '../FormControl'
import { FormInputStyleProps } from './style/types'

export type FormInputState = 'disabled' | 'focused' | 'populated' | 'error'

export interface FormInputProps
  extends Omit<FormControlProps, 'states'>,
    FormInputStyleProps,
    InputProps {
  initialValue?: string
}
