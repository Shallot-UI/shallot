import { FunctionComponent, useRef } from 'react'

import { CheckboxProps } from './types'
import { DisplayCheckbox } from './display'
import CheckmarkIcon from './icons/CheckmarkIcon'

// Hooks
import { useHover } from '../../../hooks/useHover'
import { useFocus } from '../../../hooks/useFocus'
import { getCheckboxStyles } from './getStyles'

export * from './types'
export * from './getStyles'
export * from './display'

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  Icon = CheckmarkIcon,
  value,
  setValue,
  getStyles = getCheckboxStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLLabelElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles({
    state: { hovered, focused, disabled: false, checked: value },
    ...rest,
  })

  return (
    <DisplayCheckbox
      ref={displayRef}
      Icon={Icon}
      onClick={() => setValue(!value)}
      styles={styles}
      {...rest}
    />
  )
}
