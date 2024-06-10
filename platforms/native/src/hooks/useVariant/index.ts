import { useTheme } from 'styled-components/native'
import type { ShallotProp } from '@repo/theme'
import { getVariant } from '@repo/core'

export const useVariant = <Variant extends ShallotProp = ShallotProp>(
  namespace: string,
  name?: string,
) => {
  const theme = useTheme()
  return getVariant<Variant>(namespace, name)({ theme })
}
