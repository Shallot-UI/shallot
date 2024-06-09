import { ComponentType } from 'react'
import { useTheme } from 'styled-components'
import {
  applyStyles,
  getRadius,
  getUnits,
  getColorShade,
  getVariant,
} from '@repo/core'

import { ModalProps, ModalShallot } from './types'

export * from './types'

export const withModalStyleProps =
  <T,>(ModalComponent: ComponentType<T>) =>
  (props: ModalProps<T>) => {
    const {
      // General
      backgroundColor = 'Shading.100',
      radius = 'md',

      unitHeight,
      unitWidth,

      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,

      shallot,

      variant = 'Default',

      ...modalProps
    } = props

    const theme = useTheme()
    const themeVariant = getVariant<ModalShallot>('Modal', variant)({ theme })

    let modalShallot: ModalShallot = {
      Wrapper: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,

        // Variants (overrides)
        ...themeVariant?.Wrapper,
      },
      Curtain: {
        animation: 'fadeIn',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,

        // Variants (overrides)
        ...themeVariant?.Curtain,
      },
      Container: {
        animation: 'fadeInUp',
        backgroundColor: getColorShade(backgroundColor),
        borderRadius: getRadius(radius),
        ...(unitHeight && { height: getUnits(unitHeight) }),
        ...(unitWidth && { width: getUnits(unitWidth) }),
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),

        // Variants (overrides)
        ...themeVariant?.Container,
      },
    }

    modalShallot = applyStyles(modalShallot, {
      Wrapper: shallot?.Wrapper,
      Curtain: shallot?.Curtain,
      Container: shallot?.Container,
    })

    return <ModalComponent {...(modalProps as T)} shallot={modalShallot} />
  }
