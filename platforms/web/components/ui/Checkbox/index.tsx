import { FunctionComponent, InputHTMLAttributes } from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core'
import {
  CheckboxProps,
  CheckboxShallot,
  withCheckboxStyleProps,
} from '@shallot-ui/checkbox'

import S from './styles'

const Base: FunctionComponent<
  CheckboxProps<InputHTMLAttributes<HTMLInputElement>> & {
    shallot?: CheckboxShallot
  }
> = ({ shallot, type, ...rest }) => (
  <S.Wrapper>
    <S.Checkbox {...rest} />
    <S.Container shallot={shallot}>
      <S.Icon />
    </S.Container>
  </S.Wrapper>
)

export const Checkbox = withBoxLayoutProps(
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
