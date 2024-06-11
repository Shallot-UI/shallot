import type { MixinFunction } from '@shallot-ui/core-theme'
import { valueNotFoundError } from '../utils'

export const getGlobal =
  (property: string): MixinFunction<string> =>
  ({ theme }) => {
    // Check first if there's a mode-specific value for this property.
    const mode = theme?.mode ?? 'default'
    const modeValue = theme?.globals?.[`mode:${mode}`]?.[property]

    // If there's no mode-specific value, check the default value.
    const value = modeValue ?? theme?.globals?.[property]

    if (!value) {
      console.warn(valueNotFoundError('globals', property))
    }

    return typeof value === 'function' ? value({ theme }) : value
  }
