import styled, { css, DefaultTheme, ThemeProps } from 'styled-components'

import { getBoxStyle } from '../../primitives/Box'
import { getTextStyle } from '../../Text'
import { ButtonStyleProps } from './types'

const Label = styled.span``

const getStateStyles =
  (state?: string) => (props: ButtonStyleProps & ThemeProps<DefaultTheme>) =>
    css`
      ${getBoxStyle({
        ...props?.containerProps,
        ...(state ? props.states?.[state]?.containerProps : {}),
      })}
      ${Label} {
        ${getTextStyle({
          ...props?.labelProps,
          ...(state ? props.states?.[state]?.labelProps : {}),
        })}
      }
    `

const Container = styled.button<ButtonStyleProps>`
  border: none;
  display: inline-flex;
  ${getBoxStyle}
  ${getStateStyles()}

  ${({ states = {} }) =>
    Object.keys(states).map(
      (state) => css`
        &: ${state} {
          ${getStateStyles(state)}
        }
      `,
    )}
`

export default { Container, Label }
