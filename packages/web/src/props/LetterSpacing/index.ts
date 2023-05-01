import { DefaultTheme } from 'styled-components/native'
import { LetterSpacingProps } from '@shallot-ui/theme'

export const letterSpacingProps = {
  letterSpacing: ({ letterSpacing }: LetterSpacingProps) =>
    letterSpacing
      ? ({ theme }: { theme: DefaultTheme }) =>
          theme.letterSpacings?.[letterSpacing]
            ? `letter-spacing: ${theme.letterSpacings[letterSpacing]}em;`
            : ''
      : '',
}
