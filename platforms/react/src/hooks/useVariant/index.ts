import { useTheme } from 'styled-components'
import { getVariant } from '@shallot-ui/core-mixins'
import { ShallotProp } from '@shallot-ui/core-theme'

export const useVariant = <Variant extends ShallotProp = ShallotProp>(
  namespace: string,
  name?: string,
) => {
  const theme = useTheme()
  return getVariant<Variant>(namespace, name)({ theme })
}
