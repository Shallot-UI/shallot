import { getVariant } from '@shallot-ui/core'
import { useTheme } from 'styled-components'

export const useVariant = (componentName: string, variant?: string) => {
  const theme = useTheme()
  return getVariant(componentName, variant)({ theme })
}
