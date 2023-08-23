import styled from 'styled-components/native'
import { withBoxLayoutProps, getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.View<{ shallot?: ShallotProp }>(getStyle)
export const Fold = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100vw',
})
