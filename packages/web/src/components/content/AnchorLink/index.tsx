import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const AnchorLink = styled('a')<{ shallot: ShallotProp<CSSObject> }>(
  getStyle,
)
