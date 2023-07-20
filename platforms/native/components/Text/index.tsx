import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.Text<{ shallot?: ShallotProp }>(getStyle)
export const Text = withTextStyleProps(Base)
