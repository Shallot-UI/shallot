import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import {
  FormColumnShallot,
  withFormColumnStyleProps,
} from '@shallot-ui/form-column'

const Container = styled.div(getStyle)
const Label = styled.span(getStyle)
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
      <Label shallot={shallot?.label}>
        {label}
        {required && (
          <RequiredStar shallot={shallot?.requiredStar}>*</RequiredStar>
        )}
      </Label>
      {children}
      {errorText && (
        <ErrorText shallot={shallot?.errorText}>{errorText}</ErrorText>
      )}
      {!errorText && helperText && (
        <HelperText shallot={shallot?.helperText}>{helperText}</HelperText>
      )}
    </Container>
  )
}

export const FormColumn = withFormColumnStyleProps(StaticFormColumn)
