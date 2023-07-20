import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { merge } from 'lodash'
import { FormRowShallot, withFormRowStyleProps } from '@shallot-ui/form-row'

import { useVariant } from '../../hooks/useVariant'

const Container = styled.div(getStyle)
const Details = styled.div(getStyle)
const Label = styled.label(getStyle)
const RequiredStar = styled.span(getStyle)
const HelperText = styled.span(getStyle)
const ErrorText = styled.span(getStyle)

const StaticFormRow = (
  props: HTMLAttributes<HTMLDivElement> & {
    shallot?: FormRowShallot
    label?: string
    required?: boolean
    helperText?: string
    errorText?: string
    variant?: string
  },
) => {
  const {
    title,
    shallot,
    children,
    label,
    required,
    helperText,
    errorText,
    variant,
    ...rest
  } = props

  const variantStyles = useVariant('FormRow', variant)
  const styles = merge({}, variantStyles, shallot)

  return (
    <Container shallot={styles?.container} {...rest}>
      {children}
      <Details shallot={styles?.details}>
        <Label shallot={styles?.label}>
          {label}
          {required && (
            <RequiredStar shallot={styles?.requiredStar}>*</RequiredStar>
          )}
        </Label>
        {errorText && (
          <ErrorText shallot={styles?.errorText}>{errorText}</ErrorText>
        )}
        {!errorText && helperText && (
          <HelperText shallot={styles?.helperText}>{helperText}</HelperText>
        )}
      </Details>
    </Container>
  )
}

export const FormRow = withFormRowStyleProps(StaticFormRow)
