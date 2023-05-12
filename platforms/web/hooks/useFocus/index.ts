import { RefObject, useState } from 'react'
import { useEventListener } from '../useEventListener'

export const useFocus = (ref: RefObject<HTMLElement>) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  useEventListener(ref, 'focus', handleFocus)
  useEventListener(ref, 'blur', handleBlur)

  return focused
}
