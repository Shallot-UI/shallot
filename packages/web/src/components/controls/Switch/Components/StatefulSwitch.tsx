import { FunctionComponent, useRef } from 'react'

import { SwitchProps } from '../types'
import { StaticSwitch } from './StaticSwitch'
import { useFocus, useHover } from '../../../../hooks'

export const StatefulSwitch: FunctionComponent<SwitchProps> = ({
  value,
  onChangeValue,
  getStyles,
  inverted,
  ...rest
}) => {
  const displayRef = useRef<HTMLLabelElement>(null)
  const focused = useFocus(displayRef)
  const hovered = useHover(displayRef)

  const styles = getStyles?.({
    hovered,
    focused,
    disabled: false,
    checked: inverted ? !value : value,
  })

  return (
    <StaticSwitch
      ref={displayRef}
      onClick={() => onChangeValue(!value)}
      styles={styles}
      {...rest}
    />
  )
}
