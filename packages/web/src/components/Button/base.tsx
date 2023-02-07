import { FunctionComponent, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  pullCasingProps,
  pullFontProps,
  pullFontSizeProps,
  pullLetterSpacingProps,
  pullLineHeightProps,
  pullProps,
  pullTextAlignProps,
  pullUnderlineProps,
  useStyleProps,
} from '@shallot-ui/core'

import { ButtonComponentStyles, ButtonProps } from './types'
import { Text, getTextStyle } from '../Text'
import { pullRowStyleProps, getRowStyle, RowStyleProps } from '../primitives'

const Title = styled(Text)``

const buildPseudoClass = (name: string) =>
  css<
    RowStyleProps & {
      pseudoClasses: Record<string, ButtonComponentStyles | undefined>
      children: ReactNode
    }
  >`
    ${(props) =>
      props.pseudoClasses[name] &&
      css`
        &${name} {
          ${getRowStyle({
            ...props.pseudoClasses[name]?.container,
          })}
          ${Title} {
            ${getTextStyle({
              ...props.pseudoClasses[name]?.label,
            })}
          }
        }
      `}
  `

const Container = styled.button<
  RowStyleProps & {
    pseudoClasses: Record<string, ButtonComponentStyles | undefined>
    children: ReactNode
  }
>`
  ${getRowStyle}

  ${buildPseudoClass(':hover')}
  ${buildPseudoClass(':focus')}
`

export const BaseButton: FunctionComponent<ButtonProps> = (props) => {
  const [labelOverrides, nonLabelStyleProps] = pullProps(props, [
    pullFontProps,
    pullFontSizeProps,
    pullLetterSpacingProps,
    pullTextAlignProps,
    pullUnderlineProps,
    pullLineHeightProps,
    pullCasingProps,
  ])
  const [containerOverrides, nonStyleProps] =
    pullRowStyleProps(nonLabelStyleProps)

  const { disabled, title, styles, onClick, startAdornment, endAdornment } =
    nonStyleProps

  const state = { disabled }

  const labelStyles = useStyleProps('label', styles, state, labelOverrides)
  const containerStyles = useStyleProps(
    'container',
    styles,
    state,
    containerOverrides,
  )

  // Some states are CSS pseudo-classes, so we need to filter them out and
  // handle them directly in the CSS styles.
  const pseudoClasses = Object.entries(styles?.states ?? {})
    .filter(([key]) => key.startsWith(':'))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

  return (
    <Container
      {...containerStyles}
      onClick={onClick}
      pseudoClasses={pseudoClasses}
    >
      {startAdornment}
      <Title {...labelStyles}>{title}</Title>
      {endAdornment}
    </Container>
  )
}
