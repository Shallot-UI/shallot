import { FunctionComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  pullCasingProps,
  pullFontProps,
  pullFontSizeProps,
  pullLetterSpacingProps,
  pullLineHeightProps,
  pullProps,
  pullTextAlignProps,
  pullUnderlineProps,
  useStyleProps,
} from '@shallot-ui/core'

import { Column, pullColumnStyleProps } from '../Column'
import { ButtonProps } from './types'
import { Text } from '../Text'

export const BaseButton: FunctionComponent<ButtonProps> = (props) => {
  const [labelOverrides, nonLabelStyleProps] = pullProps(props, [
    pullFontProps,
    pullFontSizeProps,
    pullLetterSpacingProps,
    pullTextAlignProps,
    pullUnderlineProps,
    pullLineHeightProps,
    pullCasingProps,
  ])
  const [containerOverrides, nonStyleProps] =
    pullColumnStyleProps(nonLabelStyleProps)

  const { disabled, title, styles, onPress } = nonStyleProps
  const state = { disabled }

  const labelStyles = useStyleProps('label', styles, state, labelOverrides)
  const containerStyles = useStyleProps(
    'container',
    styles,
    state,
    containerOverrides,
  )

  return (
    <TouchableOpacity onPress={onPress}>
      <Column {...containerStyles}>
        <Text {...labelStyles}>{title}</Text>
      </Column>
    </TouchableOpacity>
  )
}
