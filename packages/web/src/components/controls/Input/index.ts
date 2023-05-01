import { HTMLAttributes } from 'react'
import { withStyleProps } from '@shallot-ui/core'

import { StatefulInput } from './Components'
import { getInputStyles } from './getStyles'
import { InputProps, InputStyleProps } from './types'

export * from './Components'
export * from './getStyles'
export * from './types'

export const Input = withStyleProps<
  InputStyleProps,
  InputProps,
  HTMLAttributes<HTMLInputElement>
>(StatefulInput, getInputStyles)
