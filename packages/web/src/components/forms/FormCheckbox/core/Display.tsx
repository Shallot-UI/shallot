import { forwardRef } from 'react'

import { CoreCheckbox } from '../../../controls/Checkbox'
import { CoreFormControlRow } from '../../FormControlRow'
import { DisplayFormCheckboxProps } from './types'

const DisplayFormCheckbox = forwardRef<
  HTMLLabelElement,
  DisplayFormCheckboxProps
>(
  (
    { errorText, helperText, label, required, styles, ...rest },
    checkboxRef,
  ) => (
    <CoreFormControlRow.Presentation
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      styles={styles.control}
    >
      <CoreCheckbox.Presentation
        ref={checkboxRef}
        styles={styles.checkbox}
        {...rest}
      />
    </CoreFormControlRow.Presentation>
  ),
)

export default DisplayFormCheckbox
