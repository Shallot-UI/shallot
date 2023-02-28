import { FunctionComponent } from 'react'

import { rowConfig } from '../../containers'
import { DisplayButtonProps } from './types'
import { makeComponent } from '../../../utils'
import { textConfig } from '../../content'
import { Text, TouchableOpacity, View } from 'react-native'

const Container = makeComponent(
  View,
  rowConfig,
  `display: flex; flex-direction: row; border-style: solid;`,
)

const Label = makeComponent(Text, textConfig)

export const DisplayButton: FunctionComponent<DisplayButtonProps> = ({
  styles,
  children,
  startAdornment,
  endAdornment,
  title,
  ...rest
}) => (
  <TouchableOpacity>
    <Container {...styles?.container} {...rest}>
      {startAdornment}
      <Label {...styles?.label}>{title ?? ''}</Label>
      {endAdornment}
    </Container>
  </TouchableOpacity>
)
