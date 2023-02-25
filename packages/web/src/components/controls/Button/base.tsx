import { FunctionComponent, useRef } from 'react'

import { ButtonProps } from './types'
import { DisplayButton } from './display'
import { buttonStyles } from './styles'

import { useHover } from '../../../hooks/useHover'
import { usePressed } from '../../../hooks/usePressed'
import { useFocus } from '../../../hooks/useFocus'

export const BaseButton: FunctionComponent<ButtonProps> = (props) => {
  const displayRef = useRef<HTMLButtonElement>(null)

  const hovered = useHover(displayRef)
  const focused = useFocus(displayRef)
  const pressed = usePressed(displayRef)

  const stateSelector = [
    'default',
    hovered ? 'hovered' : undefined,
    focused ? 'focused' : undefined,
    pressed ? 'pressed' : undefined,
  ]
    .filter(Boolean)
    .join(':')

  return (
    <DisplayButton
      ref={displayRef}
      styles={buttonStyles[stateSelector]}
      title={props.title}
    />
  )
}
