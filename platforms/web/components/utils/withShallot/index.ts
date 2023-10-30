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
  shallot?: ShallotProp,
  {
    scope,
    variant,
  }: {
    scope?: string
    variant?: string
  } = {},
) => {
  const getVariant = (p: ExtendedProps) =>
    scope && (p.variant ?? variant)
      ? getVariantStyle(scope, p.variant ?? variant)
      : ''

  const component = styled(element).withConfig(config)<ExtendedProps>`
    ${getVariant}
    ${(p) => getStyle({ ...p, shallot: { ...shallot, ...p.shallot } })(p)}
    ${(p) =>
      getBreakpointsStyle({ ...p, shallot: { ...shallot, ...p.shallot } })(p)}
  `

  return component
}

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
