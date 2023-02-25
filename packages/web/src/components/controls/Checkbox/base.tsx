import { FunctionComponent, useRef } from 'react'

import { CheckboxProps } from './types'
import { DisplayCheckbox } from './display'
import CheckmarkIcon from './icons/CheckmarkIcon'

// Hooks
import { useHover } from '../../../hooks/useHover'
import { useFocus } from '../../../hooks/useFocus'
import { getCheckboxStyleProps } from './getStyleProps'

export const BaseCheckbox: FunctionComponent<CheckboxProps> = ({
  disabled,
  Icon = CheckmarkIcon,
  error,
  value,
  setValue,
  ...rest
}) => {
  const displayRef = useRef<HTMLLabelElement>(null)

  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  return (
    <DisplayCheckbox
      ref={displayRef}
      Icon={Icon}
      onClick={() => setValue(!value)}
      styles={getCheckboxStyleProps({
        state: {
          hovered,
          focused,
          disabled: false,
          checked: value,
        },
      })}
    />
  )
}
