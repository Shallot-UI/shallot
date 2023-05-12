import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

const RawText = styled.Text<{ shallot?: ShallotProp }>(getStyle)
export const Text = withTextStyleProps(RawText)
