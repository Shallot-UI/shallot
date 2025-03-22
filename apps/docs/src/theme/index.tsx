'use client'

import { createContext, FC, ReactNode, useContext } from 'react'
import {
  getColor,
  getFontFamily,
  getFontSize,
  getGlobal,
  getRadius,
  getUnits,
  makeNextThemeVariants,
  ShallotProvider,
} from '@shallot-ui/next'
import useDynamicTokens from './hooks/useDynamicTokens'
import { DynamicColors } from './hooks/useDynamicColors'

const variants = makeNextThemeVariants({
  Text: {
    H1: {
      fontFamily: getFontFamily('Display'),
      fontSize: getFontSize('xl'),
      color: getGlobal('foregroundFadeColor'),
      fontWeight: 600,
    },
  },
  Box: {
    card: {
      backgroundColor: getColor('Shading', 100),
      padding: getUnits(2),
      borderRadius: getRadius('lg'),
    },
  },
  Button: {
    Default: {
      Container: {
        borderRadius: getRadius('md'),
      },
    },
    Secondary: {
      Container: {
        borderRadius: getRadius('md'),
        backgroundColor: 'transparent',
        borderColor: getColor('Shading', 700),
      },
      Title: {
        color: getColor('Shading', 700),
      },
      ':hover': {
        Container: {
          backgroundColor: 'transparent',
          borderColor: getColor('Shading', 600),
        },
      },
      ':active': {
        Container: {
          backgroundColor: 'transparent',
          borderColor: getColor('Shading', 600),
        },
      },
    },
  },
})

const DynamicThemeContext = createContext<{
  dynamicColors: DynamicColors
} | null>(null)

export const DynamicThemeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { tokens, dynamicColors } = useDynamicTokens()

  return (
    <DynamicThemeContext.Provider value={{ dynamicColors }}>
      <ShallotProvider tokens={tokens} variants={variants}>
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
