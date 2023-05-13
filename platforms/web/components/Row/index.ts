import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withRowStyleProps } from '@shallot-ui/row'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Row = withRowStyleProps(Base)
