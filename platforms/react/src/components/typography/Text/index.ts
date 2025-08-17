import React from 'react'
import { TextLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { withTextShallot } from '@/utils'

/**
 * Props interface for Shallot Text components (web)
 * @public
 */
export interface ShallotTextProps extends React.HTMLAttributes<HTMLElement>, TextLayoutProps {
  shallot?: ShallotProp
  variant?: string
  children?: React.ReactNode
}

/**
 * Base text component (span) with Shallot styling capabilities
 */
export const Text: React.ComponentType<ShallotTextProps> = withTextShallot('span') as any

/**
 * H1 heading component with default H1 variant styling
 */
export const H1: React.ComponentType<ShallotTextProps> = withTextShallot('h1', {}, { variant: 'H1' }) as any

/**
 * H2 heading component with default H2 variant styling
 */
export const H2: React.ComponentType<ShallotTextProps> = withTextShallot('h2', {}, { variant: 'H2' }) as any

/**
 * H3 heading component with default H3 variant styling
 */
export const H3: React.ComponentType<ShallotTextProps> = withTextShallot('h3', {}, { variant: 'H3' }) as any

/**
 * H4 heading component with default H4 variant styling
 */
export const H4: React.ComponentType<ShallotTextProps> = withTextShallot('h4', {}, { variant: 'H4' }) as any

/**
 * H5 heading component with default H5 variant styling
 */
export const H5: React.ComponentType<ShallotTextProps> = withTextShallot('h5', {}, { variant: 'H5' }) as any

/**
 * H6 heading component with default H6 variant styling
 */
export const H6: React.ComponentType<ShallotTextProps> = withTextShallot('h6', {}, { variant: 'H6' }) as any

/**
 * Paragraph component with default P variant styling
 */
export const P: React.ComponentType<ShallotTextProps> = withTextShallot('p', {}, { variant: 'P' }) as any
