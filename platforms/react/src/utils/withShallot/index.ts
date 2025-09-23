import {
  ComponentPropsWithRef,
  ComponentType,
  ElementType,
  JSX,
  ReactNode,
} from 'react'
import styled from 'styled-components'
import { ShallotProp, ThemeVariants } from '@shallot-ui/core-theme'
import { getStyle, getBreakpointsStyle } from '@shallot-ui/core-utils'
import { withBoxLayoutProps, withTextLayoutProps } from '@shallot-ui/core-props'

type ExtendedProps = {
  shallot?: ShallotProp
  variant?: string
}

const config = {
  shouldForwardProp: (prop: string | number | symbol) =>
    typeof prop === 'string' && !['shallot', 'variant'].includes(prop),
}

// Helper type to determine the props for either a component or intrinsic element
type ElementProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] // If T is a string tagname, get its intrinsic props
  : T extends ComponentType<infer P>
    ? P // If T is a component, extract its props
    : T extends ElementType
      ? ComponentPropsWithRef<T> // Fallback for other element types
      : {}

export const withShallot = <
  T extends ElementType | keyof JSX.IntrinsicElements,
>(
  element: T,
  baseShallot?: ShallotProp,
  {
    scope,
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {},
) =>
  styled(element).withConfig(config)<ExtendedProps>`
    ${({ shallot: shallotProp, variant: variantProp, theme }) => {
      // Get any shallot extensions from the theme for the current variant.
      const themeVariants = theme?.variants as ThemeVariants
      const variants = scope ? themeVariants?.[scope] : undefined
      const variantShallot = variants?.[variantProp ?? variant] ?? {}

      // Merge the shallot props and overrides together.
      const shallot = { ...baseShallot, ...variantShallot, ...shallotProp }

      // Get the variant styles.
      const baseStyles = getStyle({ shallot })({ theme })

      // Collect the breakpoint styles.
      const breakpointsStyles = getBreakpointsStyle({ shallot })({ theme })

      // Merge and return all of the rendered styles.
      return { ...baseStyles, ...breakpointsStyles }
    }}
  ` as ComponentType<ElementProps<T> & { children?: ReactNode }>

/**
 * Creates a box component with Shallot styling and layout props (web)
 */
export const withBoxShallot = <T extends ElementType>(
  element: T,
  shallot: ShallotProp = {},
  {
    scope = 'Box',
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {
    scope: 'Box',
    variant: 'Default',
  },
) => {
  const Base = withShallot<T>(
    element,
    { display: 'flex', flexDirection: 'column' },
    { scope, variant },
  )
  return withBoxLayoutProps(Base, shallot)
}

/**
 * Creates a text component with Shallot styling and layout props (web)
 */
export const withTextShallot = <T extends ElementType>(
  element: T,
  shallot: ShallotProp = {},
  {
    scope = 'Text',
    variant = 'Default',
  }: {
    scope?: string
    variant?: string
  } = {
    scope: 'Text',
    variant: 'Default',
  },
) => {
  const Base = withShallot<T>(element, {}, { scope, variant })
  return withTextLayoutProps(Base, shallot)
}
