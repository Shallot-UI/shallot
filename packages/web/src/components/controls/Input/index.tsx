import { FunctionComponent, useRef } from 'react'

import { InputProps } from './types'
import { DisplayInput } from './display'

// Hooks
import { useHover } from '../../../hooks/useHover'
import { useFocus } from '../../../hooks/useFocus'
import { getInputStyles } from './getStyles'

export * from './types'
export * from './getStyles'
export * from './display'

export const Input: FunctionComponent<InputProps> = ({
  value,
  setValue,
  getStyles = getInputStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles({
    state: { hovered, focused, disabled: false, checked: value },
    ...rest,
  })

  return (
    <DisplayInput
      ref={displayRef}
      onClick={() => setValue(!value)}
      styles={styles}
      {...rest}
    />
  )
}
