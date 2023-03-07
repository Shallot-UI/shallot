import { FunctionComponent, useRef } from 'react'

import { CheckboxProps } from './types'
import DisplayCheckbox from './Display'
import CheckmarkIcon from './icons/CheckmarkIcon'

// Hooks
import { useHover } from '../../../../hooks/useHover'
import { useFocus } from '../../../../hooks/useFocus'

const StatefulCheckbox: FunctionComponent<CheckboxProps> = ({
  Icon = CheckmarkIcon,
  value,
  setValue,
  getStyles,
  ...rest
}) => {
  const displayRef = useRef<HTMLLabelElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles({
    hovered,
    focused,
    disabled: false,
    checked: value,
  })

  return (
    <DisplayCheckbox
      ref={displayRef}
      Icon={Icon}
      onClick={() => setValue(!value)}
      styles={styles}
      {...rest}
    />
  )
}

export default StatefulCheckbox
