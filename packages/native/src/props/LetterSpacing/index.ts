import { LetterSpacingProps } from '@shallot-ui/theme'
import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'

export const letterSpacingProps: PropsConfig<LetterSpacingProps> = {
  letterSpacing: {
    get: ({ letterSpacing }) =>
      letterSpacing
        ? ({ theme }) =>
            theme.letterSpacings?.[letterSpacing]
              ? `letter-spacing: ${theme.letterSpacings[letterSpacing]}px;`
              : ''
        : '',
  },
}

export const pullLetterSpacingProps = makePropPuller(letterSpacingProps)
export const getLetterSpacingStyle = makeStyleGetter(letterSpacingProps)
