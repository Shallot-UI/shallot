import styled from 'styled-components/native'

import { ShallotProp } from '@shallot-ui/core-theme'
import { getStyle, getVariantStyle } from '@shallot-ui/core-utils'
import { withBoxLayoutProps, withTextLayoutProps } from '@shallot-ui/core-props'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

export const withBoxShallot = (
  shallot: ShallotProp,
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

  return withBoxLayoutProps(Component, { flexDirection: 'column', ...shallot })
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
