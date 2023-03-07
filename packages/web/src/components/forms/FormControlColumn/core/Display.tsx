import { FunctionComponent } from 'react'

import { DisplayFormControlColumnProps } from './types'
import { Column } from '../../../containers'
import { Text } from '../../../content'

const DisplayFormControlColumn: FunctionComponent<
  DisplayFormControlColumnProps
> = ({ errorText, helperText, label, required, children, styles, onClick }) => (
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

export default DisplayFormControlColumn
