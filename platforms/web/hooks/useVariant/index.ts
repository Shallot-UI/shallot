import { DefaultTheme, useTheme } from 'styled-components'

const getVariant = (
  theme: DefaultTheme,
  componentName: string,
  variant: string = 'default',
) => theme.variants?.[componentName]?.[variant] ?? {}

export const useVariant = (componentName: string, variant?: string) => {
  const theme = useTheme()
  return getVariant(theme, componentName, variant)
}
