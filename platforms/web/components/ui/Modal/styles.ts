import styled, { css } from 'styled-components'
import { getNestedStyle, getStyle } from '@shallot-ui/core'
import { ModalShallot } from '@shallot-ui/modal'

const Wrapper = styled.div(getStyle)
const Curtain = styled.div(getStyle)

const Container = styled.div<{ shallot?: ModalShallot }>`
  // Default Shallot Styles
  ${getNestedStyle('Container')}
`

export default {
  Wrapper,
  Container,
  Curtain,
}
