import { useTheme } from 'styled-components'
import { getVariant } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export const useVariant = <Variant = ShallotProp>(
  namespace: string,
  name: string,
) => {
  const theme = useTheme()
  return getVariant<Variant>(namespace, name)({ theme })
}
