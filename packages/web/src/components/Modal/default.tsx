import { FunctionComponent } from 'react'
import { BaseModal } from './base'
import { ModalProps } from './types'

export const Modal: FunctionComponent<ModalProps> = (props) => (
  <BaseModal
    styles={{
      curtain: {
        animation: 'fadeIn',
        fullHeight: true,
        fullWidth: true,
        style: {
          backgroundColor: 'rgba(0,0,0,0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
        },
      },
      container: {
        animation: 'fadeInUp',
        backgroundColor: 'Shading.100',
        radius: 'md',
      },
      wrapper: {
        alignCenter: true,
        alignMiddle: true,
        style: {
          position: 'fixed',
          zIndex: 9999,
        },
      },
    }}
    {...props}
  />
)
