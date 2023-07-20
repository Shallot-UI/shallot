import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { merge } from 'lodash'
import {
  FormColumnShallot,
  withFormColumnStyleProps,
} from '@shallot-ui/form-column'

import { useVariant } from '../../hooks/useVariant'

const Container = styled.div(getStyle)
const Label = styled.label(getStyle)
const RequiredStar = styled.span(getStyle)
const HelperText = styled.span(getStyle)
const ErrorText = styled.span(getStyle)

const StaticFormColumn = (
  props: HTMLAttributes<HTMLDivElement> & {
    shallot?: FormColumnShallot
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

  const variantStyles = useVariant('FormColumn', variant)
  const styles = merge({}, variantStyles, shallot)

  return (
    <Container shallot={styles?.container} {...rest}>
      <Label shallot={styles?.label}>
        {label}
        {required && (
          <RequiredStar shallot={styles?.requiredStar}>*</RequiredStar>
        )}
      </Label>
      {children}
      {errorText && (
        <ErrorText shallot={styles?.errorText}>{errorText}</ErrorText>
      )}
      {!errorText && helperText && (
        <HelperText shallot={styles?.helperText}>{helperText}</HelperText>
      )}
    </Container>
  )
}

export const FormColumn = withFormColumnStyleProps(StaticFormColumn)
