import { TextInputProps } from 'react-native'

import { withStyleProps } from '../../../utils'
import { StatefulInput } from './Components'
import { getInputStyles } from './getStyles'
import { InputProps, InputStyleProps } from './types'

export * from './Components'
export * from './getStyles'
export * from './types'

export const Input = withStyleProps<
  InputStyleProps,
  InputProps,
  TextInputProps
>(StatefulInput, getInputStyles)
