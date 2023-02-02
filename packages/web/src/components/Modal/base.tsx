import { FunctionComponent } from 'react'

import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { Column } from '../primitives/Column'
import { useStyleProps } from '../../hooks'
import { Fold } from '../Fold'
import { ModalProps } from './types'

export const BaseModal: FunctionComponent<ModalProps> = ({
  onClose,
  children,
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
