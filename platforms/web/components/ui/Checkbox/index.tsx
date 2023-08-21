import {
  ComponentType,
  Dispatch,
  HTMLAttributes,
  RefObject,
  SetStateAction,
  useRef,
  ReactNode,
  ComponentProps,
} from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  CheckboxProps,
  CheckboxShallot,
  withCheckboxStyleProps,
} from '@shallot-ui/checkbox'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { CheckIcon } from './Icons/CheckIcon'
import S from './styles'
import { withBoxLayoutProps } from '@shallot-ui/core'


const Base = (
  props: ComponentProps<typeof S.Container> & {
    shallot?: CheckboxShallot  },
) => (
      <S.Container  {...props}>
        <S.Icon />
      </S.Container>
  )


export const Input = withBoxLayoutProps(
  // The style props are common utilities to extend the component's shallot prop
  // in common ways. For example, changing the component's color.
  withCheckboxStyleProps(Base),
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
