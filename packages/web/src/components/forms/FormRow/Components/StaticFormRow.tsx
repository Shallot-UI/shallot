import { forwardRef } from 'react'

import { StaticFormRowProps } from '../types'
import { Row, Column } from '../../../containers'
import { Text } from '../../../content'

export const StaticFormRow = forwardRef<HTMLDivElement, StaticFormRowProps>(
  (
    { errorText, helperText, label, required, children, styles, onClick },
    ref,
  ) => (
    <Row {...styles?.container} ref={ref} onClick={onClick}>
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
  ),
)
