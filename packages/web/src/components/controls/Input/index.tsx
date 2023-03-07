import { FunctionComponent } from 'react'

import { InputStyleProps, getInputStyles } from './getStyles'
import { InputProps } from './types'
import { BaseInput } from './Base'

export * from './types'
export * from './getStyles'

export const Input: FunctionComponent<
  Omit<InputProps, 'getStyles'> & InputStyleProps
> = (props) => (
  <BaseInput getStyles={(state) => getInputStyles(state, props)} {...props} />
)
