import { FunctionComponent, useRef } from 'react'

import DisplayInput from './Display'
import { InputProps } from './types'

// Hooks
import { useHover } from '../../../../hooks/useHover'
import { useFocus } from '../../../../hooks/useFocus'

const StatefulInput: FunctionComponent<InputProps> = ({
  value,
  getStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLInputElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles({ hovered, focused, disabled: false })

  return <DisplayInput ref={displayRef} styles={styles} {...rest} />
}

export default StatefulInput
