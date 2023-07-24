import { ComponentType } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { AllColorShades, ShallotProp } from '@shallot-ui/theme'
import {
  applyStyles,
  getRadius,
  getUnits,
  getColorShade,
} from '@shallot-ui/core'

export type ModalStyleProps = {
  backgroundColor?: AllColorShades
  radius?: keyof DefaultTheme['radii']
  unitHeight?: number
  unitWidth?: number
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

export type ModalShallot = {
  wrapper: ShallotProp
  curtain: ShallotProp
  container: ShallotProp
}

export type ModalProps<T> = T &
  ModalStyleProps & {
    shallot?: ModalShallot
    variant?: string
  }

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

      variant = 'default',

      ...modalProps
    } = props

    const theme = useTheme()
    const themeVariant = theme?.variants?.Modal?.[variant] as ModalShallot

    let modalShallot: ModalShallot = {
      wrapper: {
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
        ...themeVariant?.wrapper,
      },
      curtain: {
        animation: 'fadeIn',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,

        // Variants (overrides)
        ...themeVariant?.curtain,
      },
      container: {
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
        ...themeVariant?.container,
      },
    }

    modalShallot = applyStyles(modalShallot, {
      wrapper: shallot?.wrapper,
      curtain: shallot?.curtain,
      container: shallot?.container,
    })

    return <ModalComponent {...(modalProps as T)} shallot={modalShallot} />
  }
