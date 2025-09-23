import {
  FunctionComponent,
  TextareaHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core-props'
import { ShallotProp } from '@shallot-ui/core-theme'
import {
  TextareaShallot,
  withTextareaStyleProps,
} from '@shallot-ui/component-textarea'

import S from './styles'

const Base: FunctionComponent<
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    shallot?: TextareaShallot & { label?: ShallotProp }
    inputRef?: RefObject<HTMLTextAreaElement>
    before?: ReactNode
    after?: ReactNode
  }
> = ({ shallot, inputRef, before, after, ...rest }) => (
  <S.Container shallot={shallot}>
    {before}
    <S.Textarea ref={inputRef} {...rest} />
    {after}
  </S.Container>
)

export const Textarea = withBoxLayoutProps(
  // The style props are common utilities to extend the component's shallot prop
  // in common ways. For example, changing the component's color.
  withTextareaStyleProps(Base),
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
