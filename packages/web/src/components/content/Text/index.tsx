import styled, { CSSObject } from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

const RawText = styled.span<{ shallot?: ShallotProp<CSSObject> }>(getStyle)
export const Text = withTextStyleProps(RawText)
