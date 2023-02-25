import { RefObject, useEffect, useRef } from 'react'

export const useEventListener = (
  ref: RefObject<HTMLElement>,
  eventName: string,
  handler: (event: Event) => void,
) => {
  const savedHandler = useRef<(event: Event) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    console.log('useEventListener', eventName, ref.current)
    const element = ref.current
    if (!element) return

    const isSupported = element.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event)
      }
    }

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, ref])
}
