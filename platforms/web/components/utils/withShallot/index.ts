import { ElementType } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
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
