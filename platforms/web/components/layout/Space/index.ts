import styled from 'styled-components'
import { withBoxLayoutProps, getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Space = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  flexGrow: 1,
})
