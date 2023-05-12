import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withBoxStyleProps } from '@shallot-ui/box'

const RawBox = styled.View<{ shallot?: ShallotProp }>(getStyle)
export const Box = withBoxStyleProps(RawBox)
