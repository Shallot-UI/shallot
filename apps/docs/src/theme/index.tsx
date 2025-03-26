'use client'

import { createContext, FC, ReactNode, useContext } from 'react'
import { getColor, makeThemeGlobals, ShallotProvider } from '@shallot-ui/next'
import useDynamicTokens from './hooks/useDynamicTokens'
import { DynamicColors } from './hooks/useDynamicColors'
import useDynamicVariants, { DynamicVariants } from './hooks/useDynamicVariants'

const DynamicThemeContext = createContext<{
  dynamicColors: DynamicColors
  dynamicVariants: DynamicVariants
} | null>(null)

export const DynamicThemeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { tokens, dynamicColors } = useDynamicTokens()
  const { variants, dynamicVariants } = useDynamicVariants()

  const globals = makeThemeGlobals({
    backgroundColor: getColor('Shading', 100),
    headingColor: getColor('Shading', 950),
    'mode:dark': {
      backgroundColor: getColor('Shading', 950),
      headingColor: getColor('Shading', 50),
    },
  })

  return (
    <DynamicThemeContext.Provider value={{ dynamicColors, dynamicVariants }}>
      <ShallotProvider tokens={tokens} variants={variants} globals={globals}>
        {children}
      </ShallotProvider>
    </DynamicThemeContext.Provider>
  )
}

export const useDynamicTheme = () => {
  const context = useContext(DynamicThemeContext)
  if (!context) {
    throw new Error(
      'useDynamicTheme must be used within a DynamicThemeProvider',
    )
  }
  return context
}
