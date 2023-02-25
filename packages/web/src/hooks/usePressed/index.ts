import { RefObject, useState } from 'react'
import { useEventListener } from '../useEventListener'

export const usePressed = (ref: RefObject<HTMLElement>) => {
  const [pressed, setPressed] = useState(false)

  useEventListener(ref, 'mousedown', () => setPressed(true))
  useEventListener(ref, 'mouseup', () => setPressed(false))
  useEventListener(ref, 'mouseleave', () => setPressed(false))

  return pressed
}
