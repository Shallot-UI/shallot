import { makePropPuller } from '@shallot-ui/core'

import { InputProps } from '../core/types'
import inputConfig from '../core/config'
import { InputStyleProps } from './types'

export const splitInputProps = (
  props: Omit<InputProps, 'getStyles'> & InputStyleProps,
): [Omit<InputProps, 'getStyles'>, InputStyleProps] => {
  const {
    backgroundColor,
    borderColor,
    focusedBackgroundColor,
    focusedBorderColor,
    ...rest
  } = props

  const [inputProps, nonStyleProps] = makePropPuller(inputConfig)(rest)

  return [
    nonStyleProps,
    {
      ...inputProps,
      backgroundColor,
      borderColor,
      focusedBackgroundColor,
      focusedBorderColor,
    },
  ]
}
