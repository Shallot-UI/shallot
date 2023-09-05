import { ElementType } from 'react'
import styled from 'styled-components'
import { getStyle, getVariantStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export const withShallot =
  <T extends ElementType>(element: T) =>
  (...args: any) =>
    styled(element).withConfig({
      shouldForwardProp: (prop) =>
        typeof prop === 'string' && !['shallot'].includes(prop),
    })<{ shallot?: ShallotProp }>`
      ${args}
      ${getStyle}
    `

export const withComponentShallot =
  <T extends ElementType>(element: T, scope: string, variant?: string) =>
  (...args: any) =>
    styled(element).withConfig({
      shouldForwardProp: (prop) =>
        typeof prop === 'string' && !['shallot'].includes(prop),
    })<{ shallot?: ShallotProp }>`
      ${getVariantStyle(scope, variant)}
      ${args}
      ${getStyle}
    `
