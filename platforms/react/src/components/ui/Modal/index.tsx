import React, { ComponentProps } from 'react'
import { ModalShallot, withModalStyleProps } from '@shallot-ui/component-modal'
import { withBoxLayoutProps, BoxLayoutProps } from '@shallot-ui/core-props'

import S from './styles'

const Base = (
  props: ComponentProps<typeof S.Container> & {
    shallot?: ModalShallot
    onClose?: () => void
  },
) => {
  const { title, shallot, children, onClose, ...rest } = props

  return (
    <S.Wrapper shallot={shallot?.Wrapper}>
      <S.Curtain shallot={shallot?.Curtain} onClick={() => onClose?.()} />
      <S.Container shallot={shallot?.Container} {...rest}>
        {children}
      </S.Container>
    </S.Wrapper>
  )
}

/**
 * Props interface for Shallot Modal component (web)
 * @public
 */
export interface ShallotModalProps extends ComponentProps<typeof S.Container>, BoxLayoutProps {
  shallot?: ModalShallot
  onClose?: () => void
  variant?: string
}

/**
 * Modal component with Shallot styling capabilities and layout props (web)
 */
export const Modal: React.ComponentType<ShallotModalProps> = withBoxLayoutProps(
  // The style props are common utilities to extend the component's shallot prop
  // in common ways. For example, changing the component's color.
  withModalStyleProps(Base) as any,
  // These are style overrides sent to the component's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // component. The box is the outermost element that wraps the component's
  // content and it will be extended with any layout props passed to the
  // component.
  'Container',
)
