import React from 'react'
import { ViewProps } from 'react-native'
import { BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withBoxShallot } from '@/utils'

/**
 * Props interface for Shallot Box component
 * @public
 */
export interface ShallotBoxProps extends ViewProps, BoxLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Basic box layout component with Shallot styling capabilities
 */
export const Box: React.ComponentType<ShallotBoxProps> = withBoxShallot({ flexDirection: 'column' }) as any
