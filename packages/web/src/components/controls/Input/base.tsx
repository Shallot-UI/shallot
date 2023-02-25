import { FunctionComponent, useRef } from 'react'

import { DisplayInput } from './display'
import { InputProps } from './types'

// Hooks
import { useHover } from '../../../hooks/useHover'
import { useFocus } from '../../../hooks/useFocus'

export const BaseInput: FunctionComponent<InputProps> = ({
  styles,
  ...rest
}) => {
  const displayRef = useRef<HTMLInputElement>(null)

  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const stateSelector = [
    'default',
    hovered ? 'hovered' : undefined,
    focused ? 'focused' : undefined,
  ]
    .filter(Boolean)
    .join(':')

  return (
    <DisplayInput
      ref={displayRef}
      placeholder="This is a test."
      styles={styles?.[stateSelector as 'default']}
      {...rest}
    />
  )
}
