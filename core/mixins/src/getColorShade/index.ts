import { MixinFunction } from '@shallot-ui/core-theme'
import { getColor } from '../getColor'
import { valueNotFoundError } from '../utils'

/**
 * Get a color from the theme using its dot notation address.
 * @param address - The dot notation address of the color.
 * @returns A valid CSS color value.
 */
export const getColorShade = (
  address: string | undefined,
): MixinFunction<string> => {
  // if the color is falsy, return an empty string.
  if (!address) return () => undefined

  // If the color is transparent, return the transparent keyword.
  if (address === 'transparent') return () => 'transparent'

  // Split the color key into its color name and shade.
  const [color, shade] = address.split('.') as [string, string]
  if (!shade) console.warn(valueNotFoundError('colors', `${color}.${shade}`))
  return getColor(color, Number(shade))
}
