import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react'
import { withBoxLayoutProps, BoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import { InputShallot, withInputStyleProps } from '@shallot-ui/component-input'

import S from './styles'

const Base: FunctionComponent<
  InputHTMLAttributes<HTMLInputElement> & {
    shallot?: InputShallot & { label?: ShallotProp }
    inputRef?: RefObject<HTMLInputElement>
    before?: ReactNode
    after?: ReactNode
  }
> = ({ shallot, inputRef, before, after, ...rest }) => (
  <S.Container shallot={shallot}>
    {before}
    <S.Input ref={inputRef} {...rest} />
    {after}
  </S.Container>
)

/**
 * Props interface for Shallot Input component (web)
 * @public
 */
export interface ShallotInputProps extends InputHTMLAttributes<HTMLInputElement>, BoxLayoutProps {
  shallot?: InputShallot & { label?: ShallotProp }
  inputRef?: RefObject<HTMLInputElement>
  before?: ReactNode
  after?: ReactNode
  variant?: string
}

/**
 * Input component with Shallot styling capabilities and layout props (web)
 */
export const Input: React.ComponentType<ShallotInputProps> = withBoxLayoutProps(
  // The style props are common utilities to extend the component's shallot prop
  // in common ways. For example, changing the component's color.
  withInputStyleProps(Base) as any,
  // These are style overrides sent to the component's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // component. The box is the outermost element that wraps the component's
  // content and it will be extended with any layout props passed to the
  // component.
  'Container',
) as any
