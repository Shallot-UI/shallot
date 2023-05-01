import { ComponentType } from 'react'
import { makeStyleGetter } from '@shallot-ui/core'
import styled, {
  FlattenInterpolation,
  IntrinsicElementsKeys,
  ThemedStyledProps,
  DefaultTheme,
} from 'styled-components'

export const makeComponent = <
  T extends {},
  C extends IntrinsicElementsKeys | ComponentType<any>,
>(
  component: C,
  config: T,
  baseStyles?:
    | string
    | FlattenInterpolation<ThemedStyledProps<T, DefaultTheme>>,
) => styled(component).withConfig<T>({
  shouldForwardProp: (prop) =>
    !(typeof prop === 'string' && Object.keys(config).includes(prop)),
})`
  ${baseStyles};
  ${makeStyleGetter(config)}
`
