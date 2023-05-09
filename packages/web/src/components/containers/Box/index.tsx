import styled, { CSSObject } from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withBoxStyleProps } from '@shallot-ui/box'

const RawBox = styled.div<{ shallot?: ShallotProp<CSSObject> }>(getStyle)
export const Box = withBoxStyleProps(RawBox)
