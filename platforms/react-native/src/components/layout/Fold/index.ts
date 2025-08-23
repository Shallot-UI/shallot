import React from 'react'
import { ViewProps } from 'react-native'
import { BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withBoxShallot } from '@/utils'

/**
 * Props interface for Shallot Fold component
 * @public
 */
export interface ShallotFoldProps extends ViewProps, BoxLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Fold layout component for full-screen column layouts
 */
export const Fold: React.ComponentType<ShallotFoldProps> = withBoxShallot({
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100vw',
}) as any
