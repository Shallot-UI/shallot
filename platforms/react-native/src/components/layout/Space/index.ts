import React from 'react'
import { ViewProps } from 'react-native'
import { BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withBoxShallot } from '@/utils'

/**
 * Props interface for Shallot Space component
 * @public
 */
export interface ShallotSpaceProps extends ViewProps, BoxLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Space layout component that grows to fill available space
 */
export const Space: React.ComponentType<ShallotSpaceProps> = withBoxShallot({ flexDirection: 'column', flexGrow: 1 }) as any
