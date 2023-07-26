import { getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'
import styled from 'styled-components'

export const AnchorLink = styled('a')<{ shallot?: ShallotProp }>(getStyle)
