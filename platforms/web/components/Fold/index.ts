import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { withFoldStyleProps } from '@shallot-ui/fold'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Fold = withFoldStyleProps(Base)
