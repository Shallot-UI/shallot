import { FunctionComponent, useRef } from 'react'

import { ButtonProps } from '../types'
import { StaticButton } from './StaticButton'

// Hooks
import { usePressed, useHover, useFocus } from '../../../../hooks'

export const StatefulButton: FunctionComponent<ButtonProps> = ({
  getStyles,
  disabled,
  ...rest
}) => {
  const displayRef = useRef<HTMLButtonElement>(null)
  const hovered = useHover(displayRef)
  const focused = useFocus(displayRef)
  const pressed = usePressed(displayRef)

  const styles = getStyles({
    hovered,
    focused,
    pressed,
    disabled,
  })

  return (
    <StaticButton
      ref={displayRef}
      styles={styles}
      disabled={disabled}
      {...rest}
    />
  )
}
