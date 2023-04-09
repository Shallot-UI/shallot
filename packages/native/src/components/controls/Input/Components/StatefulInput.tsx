import { FunctionComponent, useRef } from 'react'
import { TextInput } from 'react-native'

import { StaticInput } from './StaticInput'
import { InputProps } from '../types'

export const StatefulInput: FunctionComponent<InputProps> = ({
  getStyles,
  ...rest
}) => {
  const displayRef = useRef<TextInput>(null)
  const styles = getStyles({ disabled: false })
  return <StaticInput ref={displayRef} styles={styles} {...rest} />
}
