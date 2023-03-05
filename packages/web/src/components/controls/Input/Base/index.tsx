import { FunctionComponent, useRef } from 'react'

import { InputProps } from '../types'
import { DisplayInput } from './display'

// Hooks
import { useHover } from '../../../../hooks/useHover'
import { useFocus } from '../../../../hooks/useFocus'
import { getInputStyles } from '../getStyles'

export * from '../types'
export * from '../getStyles'
export * from './display'

export const BaseInput: FunctionComponent<InputProps> = ({
  value,
  onChange,
  getStyles = getInputStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles({ hovered, focused, disabled: false })

  return <DisplayInput ref={displayRef} styles={styles} {...rest} />
}
