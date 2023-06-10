import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

const Base = styled.Text<{ shallot?: ShallotProp }>(getStyle)
export const Text = withTextStyleProps(Base)
