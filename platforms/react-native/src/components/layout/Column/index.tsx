import React from 'react'
import { ViewProps } from 'react-native'
import { BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withBoxShallot } from '@/utils'

/**
 * Props interface for Shallot Column component
 * @public
 */
export interface ShallotColumnProps extends ViewProps, BoxLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Column layout component with vertical flex direction
 */
export const Column: React.ComponentType<ShallotColumnProps> = withBoxShallot({ flexDirection: 'column' }) as any
