import { RefObject, useState } from 'react'
import { useEventListener } from '../useEventListener'

export const useTap = (ref: RefObject<HTMLElement>) => {
  const [tapped, setTapped] = useState(false)

  const handleTouchStart = () => setTapped(true)
  const handleTouchEnd = () => setTapped(false)

  useEventListener(ref, 'touchstart', handleTouchStart)
  useEventListener(ref, 'touchend', handleTouchEnd)

  return tapped
}