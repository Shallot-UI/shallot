import { FunctionComponent, useRef } from 'react'
import { View } from 'react-native'

import { TagProps } from '../types'
import { StaticTag } from './StaticTag'

export const StatefulTag: FunctionComponent<TagProps> = ({
  getStyles,
  disabled,
  ...rest
}) => {
  const displayRef = useRef<View>(null)
  const styles = getStyles({ disabled })

  return (
    <StaticTag ref={displayRef} styles={styles} disabled={disabled} {...rest} />
  )
}
