import { HTMLAttributes, MutableRefObject, useRef } from 'react'
import { getInputStyles, InputProps } from '@shallot-ui/input'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { Box, Row } from '../../containers'

export const Input = (props: InputProps<HTMLAttributes<HTMLInputElement>>) => {
  const ref = useRef<HTMLInputElement>(null)
  const hovered = useHover(ref)
  const focused = useFocus(ref)
  const pressed = usePressed(ref)

  const [styles, nonStyleProps] = getInputStyles({
    ...props,
    state: { hovered, focused, pressed },
  })

  return (
    <Row
      shallot={styles?.container}
      onClick={() =>
        (ref as MutableRefObject<HTMLInputElement>)?.current?.focus()
      }
    >
      {/* {startAdornment} */}
      <Box as="input" ref={ref} shallot={styles?.input} {...nonStyleProps} />
      {/* {endAdornment} */}
    </Row>
  )
}
