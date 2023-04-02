import { FunctionComponent } from 'react'

import { StaticFormColumnProps } from '../types'
import { Column } from '../../../../web/src/components/containers'
import { Text } from '../../../../web/src/components/content'

export const StaticFormColumn: FunctionComponent<StaticFormColumnProps> = ({
  errorText,
  helperText,
  label,
  required,
  children,
  styles,
  onClick,
}) => (
  <Column {...styles?.container} onClick={onClick}>
    <Text {...styles?.label}>
      {label}
      {required && <Text {...styles?.requiredStar}>*</Text>}
    </Text>
    {children}
    {errorText && <Text {...styles?.errorText}>{errorText}</Text>}
    {!errorText && helperText && (
      <Text {...styles?.helperText}>{helperText}</Text>
    )}
  </Column>
)
