import { FunctionComponent, ReactNode } from 'react'
import { css } from 'styled-components'
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
import { getTextStyle, textConfig } from '../../content'
import {
  RowProps,
  getRowStyle,
  pullRowProps,
  rowConfig,
} from '../../containers'
import { makeComponent } from '../../../utils/makeComponent'

export const Label = makeComponent('span', textConfig)

const buildPseudoClass = (name: string) =>
  css<
    RowProps & {
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
          ${Label} {
            ${getTextStyle({
              ...props.pseudoClasses[name]?.label,
            })}
          }
        }
      `}
  `

export const Container = makeComponent(
  'button',
  rowConfig,
  css`
    ${getRowStyle}

    ${buildPseudoClass(':hover')}
    ${buildPseudoClass(':focus')}
  `,
)

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
  const [containerOverrides, nonStyleProps] = pullRowProps(nonLabelStyleProps)

  const {
    disabled,
    title,
    styles,
    onClick,
    startAdornment,
    endAdornment,

    // Pull some props that we don't want to pass down to the DOM element.
    as,
    ref,

    ...rest
  } = nonStyleProps

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
      {...rest}
    >
      {startAdornment}
      <Label {...labelStyles}>{title ?? ''}</Label>
      {endAdornment}
    </Container>
  )
}
