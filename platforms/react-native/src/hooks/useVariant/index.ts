import { useTheme } from 'styled-components/native'
import type { ShallotProp } from '@shallot-ui/core-theme'
import { getVariant } from '@shallot-ui/core-mixins'

export const useVariant = <Variant extends ShallotProp = ShallotProp>(
  namespace: string,
  name?: string,
) => {
  const theme = useTheme()
  return getVariant<Variant>(namespace, name)({ theme })
}
