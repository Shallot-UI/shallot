import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { FormRowShallot, withFormRowStyleProps } from '@shallot-ui/form-row'

const Container = styled.div(getStyle)
const Details = styled.div(getStyle)
const Label = styled.span(getStyle)
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
    ...rest
  } = props

  return (
    <Container shallot={shallot?.container} {...rest}>
      {children}
      <Details shallot={shallot?.details}>
        <Label shallot={shallot?.label}>
          {label}
          {required && (
            <RequiredStar shallot={shallot?.requiredStar}>*</RequiredStar>
          )}
        </Label>
        {errorText && (
          <ErrorText shallot={shallot?.errorText}>{errorText}</ErrorText>
        )}
        {!errorText && helperText && (
          <HelperText shallot={shallot?.helperText}>{helperText}</HelperText>
        )}
      </Details>
    </Container>
  )
}

export const FormRow = withFormRowStyleProps(StaticFormRow)
