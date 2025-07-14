import type { CSS } from '@shallot-ui/core-theme'

import type { MixinFunction } from '@shallot-ui/core-theme'
import { valueNotFoundError } from '../utils'

export const getGlobalColor: MixinFunction<string> = ({
  theme,
}): string => {
  const color = theme?.globals?.color

  if (!color) {
    console.warn(valueNotFoundError('colors', 'globals.color'))
  }

  return typeof color === 'function' ? color({ theme }) : color
}
