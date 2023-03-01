import { FunctionComponent } from 'react'
import { useStyleProps } from '@shallot-ui/core'

import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll'
import { Column } from '../Column'
import { Fold } from '../Fold'
import { ModalProps } from './types'

export const BaseModal: FunctionComponent<ModalProps> = ({
  onClose,
  children,
  style,
  styles,
  ...rest
}) => {
  useLockBodyScroll()

  const wrapperStyles = useStyleProps('wrapper', styles)
  const curtainStyles = useStyleProps('curtain', styles)
  const containerStyles = useStyleProps('container', styles)

  return (
    <Fold {...wrapperStyles}>
      <Fold {...curtainStyles} onClick={onClose} />
      <Column {...containerStyles} {...rest}>
        {children}
      </Column>
    </Fold>
  )
}
