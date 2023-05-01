import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const Text = styled('span')<{ shallot: ShallotProp<CSSObject> }>(
  getStyle,
)
