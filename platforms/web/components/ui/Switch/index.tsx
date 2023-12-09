import { FunctionComponent, InputHTMLAttributes, useState } from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core'
import {
  SwitchProps,
  SwitchShallot,
  withSwitchStyleProps,
} from '@shallot-ui/switch'

import S from './styles'

const Base: FunctionComponent<
  SwitchProps<InputHTMLAttributes<HTMLInputElement>> & {
    shallot?: SwitchShallot
  }
> = ({ shallot, type, ...checkboxProps }) => {
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
    <S.Wrapper checked={checked} shallot={shallot}>
      <S.Checkbox {...checkboxProps} checked={checked} onChange={onChange} />
      <S.Container>
        <S.Handle />
      </S.Container>
    </S.Wrapper>
  )
}

export const Switch = withBoxLayoutProps(
  // The style props are common utilities to extend the component's shallot prop
  // in common ways. For example, changing the component's color.
  withSwitchStyleProps(Base),
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
