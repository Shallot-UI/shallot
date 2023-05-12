import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled from 'styled-components'

export const AnchorLink = styled('a')<{ shallot?: ShallotProp }>(getStyle)
