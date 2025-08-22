import {
  FunctionComponent,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core-props'
import {
  CheckboxProps,
  CheckboxShallot,
  withCheckboxStyleProps,
} from '@shallot-ui/component-checkbox'

import S from './styles'

const Base: FunctionComponent<
  CheckboxProps<InputHTMLAttributes<HTMLInputElement>> & {
    shallot?: CheckboxShallot
    icon?: ReactNode
  }
> = ({ shallot, type, icon, ...checkboxProps }) => {
  // Manage the checkbox's checked state locally so that it can be controlled
  // or uncontrolled.
  const [localChecked, setLocalChecked] = useState(false)

  // If the checkbox is controlled, use the controlled value. Otherwise, use the
  // local value.
  const checked = checkboxProps.checked ?? localChecked

  // When the checkbox changes, update the local value and call the onChange
  // prop.
  const onChange = (e: any) => {
    setLocalChecked(e.target.checked)
    checkboxProps.onChange?.(e)
  }

  return (
    <S.Wrapper shallot={shallot} checked={checked}>
      <S.Checkbox {...checkboxProps} checked={checked} onChange={onChange} />
      <S.Container>{icon ? icon : <S.Icon />}</S.Container>
    </S.Wrapper>
  )
}

export const Checkbox: any = withBoxLayoutProps(
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
