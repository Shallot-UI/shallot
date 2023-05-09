import { HTMLAttributes, useRef } from 'react'
import { getCheckboxStyles, CheckboxProps } from '@shallot-ui/checkbox'

import { useFocus, useHover, usePressed } from '../../../hooks'
import { Box } from '../../containers'

export const Checkbox = (
  props: CheckboxProps<HTMLAttributes<HTMLLabelElement>>,
) => {
  const ref = useRef<HTMLLabelElement>(null)
  const focused = useFocus(ref)
  const hovered = useHover(ref)
  const pressed = usePressed(ref)

  const [styles, checkboxProps] = getCheckboxStyles({
    ...props,
    state: { hovered, focused, pressed, checked: false },
  })

  return (
    <Box as="label" shallot={styles?.container} {...checkboxProps}>
      <Box shallot={styles?.icon} />
    </Box>
  )
}
