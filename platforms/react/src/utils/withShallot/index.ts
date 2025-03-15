import { ElementType } from 'react'
import styled from 'styled-components'
import { ShallotProp, ThemeVariants } from '@shallot-ui/core-theme'
import { getStyle, getBreakpointsStyle } from '@shallot-ui/core-utils'
import { withBoxLayoutProps, withTextLayoutProps } from '@shallot-ui/core-props'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

export const withShallot = <T extends ElementType>(
  element: T,
  baseShallot?: ShallotProp,
  {
    scope,
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {},
) => styled(element).withConfig(config)<ExtendedProps>`
  ${({ shallot: shallotProp, variant: variantProp, theme }) => {
    // Get any shallot extensions from the theme for the current variant.
    const themeVariants = theme?.variants as ThemeVariants
    const variants = scope ? themeVariants?.[scope] : undefined
    const variantShallot = variants?.[variantProp ?? variant] ?? {}

    // Merge the shallot props and overrides together.
    const shallot = { ...baseShallot, ...variantShallot, ...shallotProp }

    // Get the variant styles.
    const baseStyles = getStyle({ shallot })({ theme })

    // Collect the breakpoint styles.
    const breakpointsStyles = getBreakpointsStyle({ shallot })({ theme })

    // Merge and return all of the rendered styles.
    return { ...baseStyles, ...breakpointsStyles }
  }}
`

export const withBoxShallot = <T extends ElementType>(
  element: T,
  shallot: ShallotProp = {},
  {
    scope = 'Box',
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {
    scope: 'Box',
    variant: 'Default',
  },
) => {
  const Base = withShallot(
    element,
    { display: 'flex', flexDirection: 'column' },
    { scope, variant },
  )
  return withBoxLayoutProps(Base, shallot)
}

export const withTextShallot = <T extends ElementType>(
  element: T,
  shallot: ShallotProp = {},
  {
    scope = 'Text',
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {
    scope: 'Text',
    variant: 'Default',
  },
) => {
  const Base = withShallot(element, {}, { scope, variant })
  return withTextLayoutProps(Base, shallot)
}
