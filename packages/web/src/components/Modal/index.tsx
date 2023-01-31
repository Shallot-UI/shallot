import { CSSProperties, FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { getColors, getRadius } from '../../props'
import { getAnimation } from '../../props/Animation'
import { ColumnStyleProps, getColumnStyle } from '../primitives/Column'
import { Fold } from '../Fold'

const Curtain = styled.div`
  ${getAnimation({ animation: 'fadeIn' })}
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  ${getAnimation({ animation: 'fadeInUp' })}
  ${getColors({ backgroundColor: 'Shading.100' })}
  ${getRadius({ radius: 'md' })}
`

const Wrapper = styled(Fold)<ModalStyleProps>`
  position: fixed;
  z-index: 9999;

  ${Curtain} {
    ${(props) =>
      props?.curtainProps ? getColumnStyle(props?.curtainProps) : ''}
  }
  ${Container} {
    ${(props) => getColumnStyle(props)}
  }
`

export interface ModalStyleProps extends ColumnStyleProps {
  curtainProps?: ColumnStyleProps
}

export interface ModalProps extends ModalStyleProps {
  onClose?: () => void
  children: ReactNode
  style?: CSSProperties
}

export const Modal: FunctionComponent<ModalProps> = ({
  onClose,
  children,

  curtainProps,

  ...rest
}) => {
  useLockBodyScroll()
  return (
    <Wrapper alignCenter alignMiddle>
      <Curtain {...curtainProps} onClick={onClose} />
      <Container {...rest}>{children}</Container>
    </Wrapper>
  )
}
