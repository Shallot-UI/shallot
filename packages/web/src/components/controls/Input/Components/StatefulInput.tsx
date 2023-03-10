import { FunctionComponent, useRef } from 'react'

import { StaticInput } from './StaticInput'
import { InputProps } from '../types'

// Hooks
import { useHover } from '../../../../hooks/useHover'
import { useFocus } from '../../../../hooks/useFocus'

export const StatefulInput: FunctionComponent<InputProps> = ({
  getStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)
  const styles = getStyles({ hovered, focused, disabled: false })

  return <StaticInput ref={displayRef} styles={styles} {...rest} />
}
