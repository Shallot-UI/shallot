import styled from 'styled-components/native'
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'
import { ViewProps, TextProps } from 'react-native'

import { ShallotProp } from '@shallot-ui/core-theme'
import { getVariantStyle } from '@shallot-ui/core-utils'
import { withBoxLayoutProps, withTextLayoutProps, BoxLayoutProps, TextLayoutProps } from '@shallot-ui/core-props'
import { getStyle, createStyledConfig } from '@/utils/styledHelpers'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = createStyledConfig(['shallot', 'variant'])

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
