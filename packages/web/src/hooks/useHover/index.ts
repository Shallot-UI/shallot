import { RefObject, useState } from 'react'
import { useEventListener } from '../useEventListener'

export const useHover = (ref: RefObject<HTMLElement>) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  useEventListener(ref, 'mouseenter', handleMouseEnter)
  useEventListener(ref, 'mouseleave', handleMouseLeave)

  return hovered
}
