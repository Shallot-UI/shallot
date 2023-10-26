import styled from 'styled-components/native'

import { ShallotProp } from '@shallot-ui/theme'
import {
  LayoutShallot,
  getStyle,
  getVariantStyle,
  withTextLayoutProps,
} from '@shallot-ui/core'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

export const withBoxShallot = (
  shallot: LayoutShallot,
  {
    scope = 'Box',
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

  const Component = styled.View.withConfig(config)<ExtendedProps>`
    ${getVariant}
    ${getStyle({ shallot })}
    ${getStyle}
  `

  return withTextLayoutProps(Component, shallot)
}

export const withTextShallot = (
  shallot?: ShallotProp,
  {
    scope = 'Text',
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

  const Component = styled.Text.withConfig(config)<ExtendedProps>`
    ${getVariant}
    ${getStyle({ shallot })}
    ${getStyle}
  `

  return withTextLayoutProps(Component, shallot)
}
