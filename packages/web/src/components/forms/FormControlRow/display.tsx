import { FunctionComponent } from 'react'

import { DisplayFormControlRowProps } from './types'
import { Row, Column } from '../../containers'
import { Text } from '../../content'

export const DisplayFormControlRow: FunctionComponent<
  DisplayFormControlRowProps
> = ({ errorText, helperText, label, required, children, styles }) => (
  <Row {...styles?.container}>
    {children}
    <Column {...styles?.details}>
      <Text {...styles?.label}>
        {label}
        {required && <Text {...styles?.requiredStar}>*</Text>}
      </Text>
      {errorText && <Text {...styles?.errorText}>{errorText}</Text>}
      {!errorText && helperText && (
        <Text {...styles?.helperText}>{helperText}</Text>
      )}
    </Column>
  </Row>
)
