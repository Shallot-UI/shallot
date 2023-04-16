import { FunctionComponent, useRef } from 'react'
import { View } from 'react-native'

import { ButtonProps } from '../types'
import { StaticButton } from './StaticButton'

export const StatefulButton: FunctionComponent<ButtonProps> = ({
  getStyles,
  disabled,
  ...rest
}) => {
  const displayRef = useRef<View>(null)
  const styles = getStyles?.({ disabled })

  return (
    <StaticButton
      ref={displayRef}
      styles={styles}
      disabled={disabled}
      {...rest}
    />
  )
}
