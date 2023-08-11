import styled from 'styled-components'
import { withBoxLayoutProps, getStyle } from '@shallot-ui/core'

const Base = styled.div(getStyle)
export const Space = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  flexGrow: 1,
})
