'use client'

import { FC, ReactNode } from 'react'
import { ShallotProvider } from '@shallot-ui/next'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ShallotProvider>{children}</ShallotProvider>
)
