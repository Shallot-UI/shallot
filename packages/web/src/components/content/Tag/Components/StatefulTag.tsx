import { FunctionComponent, useRef } from 'react'

import { TagProps } from '../types'
import { StaticTag } from './StaticTag'

// Hooks
import { usePressed, useHover, useFocus } from '../../../../hooks'

export const StatefulTag: FunctionComponent<TagProps> = ({
  getStyles,
  disabled,
  ...rest
}) => {
  const displayRef = useRef<HTMLDivElement>(null)
  const hovered = useHover(displayRef)
  const focused = useFocus(displayRef)
  const pressed = usePressed(displayRef)

  const styles = getStyles?.({ hovered, focused, pressed, disabled })

  return (
    <StaticTag ref={displayRef} styles={styles} disabled={disabled} {...rest} />
  )
}
