import styled from 'styled-components'
import { withBoxLayoutProps, getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Fold = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100vw',
})
