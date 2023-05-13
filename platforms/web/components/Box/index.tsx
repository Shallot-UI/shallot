import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withBoxStyleProps } from '@shallot-ui/box'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Box = withBoxStyleProps(Base)
