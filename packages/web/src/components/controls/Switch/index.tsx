import { HTMLAttributes, useRef } from 'react'
import { getSwitchStyles, SwitchProps } from '@shallot-ui/switch'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { Box } from '../../containers'

export const Switch = (
  props: SwitchProps<HTMLAttributes<HTMLLabelElement>>,
) => {
  const ref = useRef<HTMLLabelElement>(null)
  const focused = useFocus(ref)
  const hovered = useHover(ref)
  const pressed = usePressed(ref)

  const [styles, switchProps] = getSwitchStyles({
    ...props,
    state: { hovered, focused, pressed, checked: false },
  })

  return (
    <Box as="label" shallot={styles?.container} {...switchProps}>
      <Box shallot={styles?.handle} />
    </Box>
  )
}
