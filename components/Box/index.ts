import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const Box = styled('div')<{ shallot: ShallotProp<CSSObject> }>(getStyle)
