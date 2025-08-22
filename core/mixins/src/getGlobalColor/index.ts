import type { CSS } from '@shallot-ui/core-theme'

import type { MixinFunction } from '@shallot-ui/core-theme'
import { valueNotFoundError } from '../utils'

export const getGlobalBackgroundColor: MixinFunction<string> = ({
  theme,
}): string => {
  const color = theme?.globals?.backgroundColor

  if (!color) {
    console.warn(valueNotFoundError('colors', 'globals.backgroundColor'))
  }

  return typeof color === 'function' ? color({ theme }) : color || ''
}
