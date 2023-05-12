import NextLink from 'next/link'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled from 'styled-components'

export const Link = styled(NextLink)<{ shallot?: ShallotProp }>(getStyle)
