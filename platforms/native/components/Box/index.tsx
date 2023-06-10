import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { BoxShallot, withBoxStyleProps } from '@shallot-ui/box'

const RawBox = styled.View<{ shallot?: BoxShallot }>(getStyle)
export const Box = withBoxStyleProps(RawBox)
