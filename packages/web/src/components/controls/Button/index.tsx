import { FunctionComponent, useRef } from 'react'

import { ButtonProps } from './types'
import { DisplayButton } from './display'

// Hooks
import { useHover } from '../../../hooks/useHover'
import { useFocus } from '../../../hooks/useFocus'
import { getButtonStyles } from './getStyles'
import { usePressed } from '../../../hooks'

export * from './types'
export * from './getStyles'
export * from './display'

export const Button: FunctionComponent<ButtonProps> = ({
  getStyles = getButtonStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLButtonElement>(null)
  const hovered = useHover(displayRef)
  const focused = useFocus(displayRef)
  const pressed = usePressed(displayRef)

  const styles = getStyles({
    state: { hovered, focused, pressed, disabled: false },
  })

  return <DisplayButton ref={displayRef} styles={styles} {...rest} />
}
