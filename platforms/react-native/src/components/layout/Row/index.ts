import React from 'react'
import { ViewProps } from 'react-native'
import { BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withBoxShallot } from '@/utils'

/**
 * Props interface for Shallot Row component
 * @public
 */
export interface ShallotRowProps extends ViewProps, BoxLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Row layout component with horizontal flex direction
 */
export const Row: React.ComponentType<ShallotRowProps> = withBoxShallot({ flexDirection: 'row' }) as any
