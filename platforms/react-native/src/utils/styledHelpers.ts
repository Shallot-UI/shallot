import { getStyle as coreGetStyle, getNestedStyle as coreGetNestedStyle } from '@shallot-ui/core-utils'
import { ShallotProp, Theme } from '@shallot-ui/core-theme'

/**
 * Type-safe wrapper for getStyle that works with React Native's styled-components
 * This converts the return type to be compatible with styled-components/native
 */
export const getStyle = <T extends { shallot?: ShallotProp }>(props: T) => {
  return coreGetStyle(props) as any
}

/**
 * Type-safe wrapper for getNestedStyle that works with React Native's styled-components
 * This converts the return type to be compatible with styled-components/native
 */
export const getNestedStyle = (componentName: string, state?: string) => {
  return ((props: any) => {
    const result = coreGetNestedStyle(componentName, state)(props)
    return (themeProps: { theme: Theme }) => result(themeProps)
  }) as any
}

/**
 * Helper to handle shouldForwardProp configuration for styled-components/native
 */
export const createStyledConfig = (propsToOmit: string[] = ['shallot']) => ({
  shouldForwardProp: (prop: string | number | symbol) => 
    typeof prop === 'string' && !propsToOmit.includes(prop),
})