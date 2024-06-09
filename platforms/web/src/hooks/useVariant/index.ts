import { useTheme } from 'styled-components'
import { getVariant } from '@repo/core'
import { ShallotProp } from '@repo/theme'

export const useVariant = <Variant extends ShallotProp = ShallotProp>(
  namespace: string,
  name?: string,
) => {
  const theme = useTheme()
  return getVariant<Variant>(namespace, name)({ theme })
}
