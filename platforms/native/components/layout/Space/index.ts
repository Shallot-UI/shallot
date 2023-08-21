import styled from 'styled-components/native'
import { withBoxLayoutProps, getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.View<{ shallot?: ShallotProp }>(getStyle)
export const Space = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  flexGrow: 1,
})
