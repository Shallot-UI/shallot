import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

const RawText = styled.span<{ shallot?: ShallotProp }>(getStyle)
export const Text = withTextStyleProps(RawText)
