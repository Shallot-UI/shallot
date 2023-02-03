import { FunctionComponent, ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

import { Text, TextStyleProps } from '../Text'
import { Row, RowStyleProps } from '../Row'

interface ButtonStateProps {
  containerProps?: RowStyleProps
  labelProps?: TextStyleProps
}

export interface ButtonStyleProps extends ButtonStateProps, RowStyleProps {
  states?: { [stateName: string]: ButtonStateProps }
}

interface ButtonProps {
  title?: string
  onPress: () => void | Promise<void>
  LeftDecoration?: ReactNode
  RightDecoration?: ReactNode
  disabled?: boolean
}

export const Button: FunctionComponent<ButtonProps & ButtonStyleProps> = ({
  title,
  LeftDecoration,
  RightDecoration,
  containerProps,
  labelProps,
  disabled,
  ...rest
}) => (
  <TouchableOpacity {...rest}>
    <Row {...containerProps}>
      {LeftDecoration}
      {title ? <Text {...labelProps}>{title}</Text> : null}
      {RightDecoration}
    </Row>
  </TouchableOpacity>
)
