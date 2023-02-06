import { DefaultTheme } from 'styled-components'
import { LetterSpacingProps } from '@shallot-ui/theme'

export const getLetterSpacing =
  ({ letterSpacing }: LetterSpacingProps = {}) =>
  ({ theme }: { theme: DefaultTheme }) =>
    letterSpacing
      ? `letter-spacing: ${theme.letterSpacings[letterSpacing]};`
      : ''
