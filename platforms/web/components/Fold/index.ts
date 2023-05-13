import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withFoldStyleProps } from '@shallot-ui/fold'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Fold = withFoldStyleProps(Base)
