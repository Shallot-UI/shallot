import { ElementType } from 'react'
import styled from 'styled-components'

import { getStyle, getVariantStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

export const withShallot =
  <T extends ElementType>(element: T, scope?: string, variant?: string) =>
  (...args: any) => {
    const getVariant = (p: ExtendedProps) =>
      scope && (p.variant ?? variant)
        ? getVariantStyle(scope, p.variant ?? variant)
        : ''

    const component = styled(element).withConfig(config)<ExtendedProps>`
      ${getVariant}
      ${args}
      ${getStyle}
    `

    return component
  }
