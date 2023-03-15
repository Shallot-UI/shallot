import { FunctionComponent } from 'react'
import { BaseModal } from './base'
import { ModalProps } from './types'

export const Modal: FunctionComponent<ModalProps> = (props) => (
  <BaseModal
    styles={{
      wrapper: {
        alignCenter: true,
        alignMiddle: true,
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        },
      },
      curtain: {
        animation: 'fadeIn',
        fullHeight: true,
        fullWidth: true,
        style: {
          backgroundColor: 'rgba(0,0,0,0.6)',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        },
      },
      container: {
        animation: 'fadeInUp',
        backgroundColor: 'Shading.100',
        radius: 'md',
      },
    }}
    {...props}
  />
)
