import { ElementType } from 'react'
import styled from 'styled-components'

import {
  LayoutShallot,
  getBreakpointsStyle,
  getStyle,
  getVariantStyle,
  withBoxLayoutProps,
  withTextLayoutProps,
} from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

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
    variant,
  }: {
    scope?: string
    variant?: string
  } = {},
) => styled(element).withConfig(config)<ExtendedProps>`
  ${({ shallot: shallotProp, variant, theme }) => {
    // Get any shallot extensions from the theme for the current variant.
    const variantShallot = scope
      ? theme?.variants?.[scope]?.[variant] ?? {}
      : {}

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
  shallot: LayoutShallot,
  {
    scope,
    variant,
  }: {
    scope?: string
    variant?: string
  } = {},
) => {
  const Base = withShallot(element, {}, { scope, variant })
  return withBoxLayoutProps(Base, shallot)
}

export const withTextShallot = <T extends ElementType>(
  element: T,
  shallot?: ShallotProp,
  {
    scope,
    variant,
  }: {
    scope?: string
    variant?: string
  } = {},
) => {
  const Base = withShallot(element, {}, { scope, variant })
  return withTextLayoutProps(Base, shallot)
}
