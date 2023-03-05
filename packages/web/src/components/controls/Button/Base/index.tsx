import { FunctionComponent, useRef } from 'react'

import { ButtonProps } from '../types'
import { DisplayButton } from './display'

// Hooks
import { useHover } from '../../../../hooks/useHover'
import { useFocus } from '../../../../hooks/useFocus'
import { usePressed } from '../../../../hooks'

export const BaseButton: FunctionComponent<ButtonProps> = ({
  getStyles,
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
    disabled: false,
  })

  return <DisplayButton ref={displayRef} styles={styles} {...rest} />
}
