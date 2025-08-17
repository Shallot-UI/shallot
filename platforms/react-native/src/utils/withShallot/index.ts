import styled from 'styled-components/native'
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ViewProps, TextProps } from 'react-native'

import { ShallotProp } from '@shallot-ui/core-theme'
import { getStyle, getVariantStyle } from '@shallot-ui/core-utils'
import { withBoxLayoutProps, withTextLayoutProps, BoxLayoutProps, TextLayoutProps } from '@shallot-ui/core-props'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

/**
 * Creates a box component with Shallot styling and layout props
 */
export const withBoxShallot: any = (
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

/**
 * Creates a text component with Shallot styling and layout props
 */
export const withTextShallot: any = (
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
