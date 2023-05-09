import { HTMLAttributes, useRef } from 'react'
import { getButtonStyles, ButtonProps } from '@shallot-ui/button'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { Box } from '../../containers'
import { Text } from '../../content'

export const Button = (
  props: ButtonProps<HTMLAttributes<HTMLButtonElement>>,
) => {
  const ref = useRef<HTMLButtonElement>(null)
  const hovered = useHover(ref)
  const focused = useFocus(ref)
  const pressed = usePressed(ref)

  const [styles, buttonProps] = getButtonStyles({
    ...props,
    state: { hovered, focused, pressed },
  })

  return (
    <Box as="button" shallot={styles?.container} {...buttonProps}>
      <Text shallot={styles?.label}>{props.title}</Text>
    </Box>
  )
}
