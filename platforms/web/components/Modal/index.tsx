import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { ModalShallot, withModalStyleProps } from '@shallot-ui/modal'

const Wrapper = styled.div(getStyle)
const Curtain = styled.div(getStyle)
const Container = styled.div(getStyle)

const StaticModal = (
  props: HTMLAttributes<HTMLDivElement> & {
    shallot?: ModalShallot
    onClose?: () => void
  },
) => {
  const { title, shallot, children, onClose, ...rest } = props

  return (
    <Wrapper shallot={shallot?.wrapper}>
      <Curtain shallot={shallot?.curtain} onClick={() => onClose?.()} />
      <Container shallot={shallot?.container} {...rest}>
        {children}
      </Container>
    </Wrapper>
  )
}

export const Modal = withModalStyleProps(StaticModal)