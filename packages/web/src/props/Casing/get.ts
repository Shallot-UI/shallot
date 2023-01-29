import { CasingProps } from '@shallot-ui/theme'

export const getCasing = ({
  uppercase,
  lowercase,
  capitalize,
}: CasingProps = {}) => {
  if (uppercase) return 'text-transform: uppercase;'
  if (lowercase) return 'text-transform: lowercase;'
  if (capitalize) return 'text-transform: capitalize;'
  return ''
}
