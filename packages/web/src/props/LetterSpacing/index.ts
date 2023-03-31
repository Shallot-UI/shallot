import { LetterSpacingProps } from '@shallot-ui/theme'

import { PropsConfig } from '@shallot-ui/core/src/types'
import { makePropPuller, makeStyleGetter } from '@shallot-ui/core/src/utils'

export const letterSpacingProps: PropsConfig<LetterSpacingProps> = {
  letterSpacing: {
    get: ({ letterSpacing }) =>
      letterSpacing
        ? ({ theme }) =>
            theme.letterSpacings?.[letterSpacing]
              ? `letter-spacing: ${theme.letterSpacings[letterSpacing]}em;`
              : ''
        : '',
  },
}

export const pullLetterSpacingProps = makePropPuller(letterSpacingProps)
export const getLetterSpacingStyle = makeStyleGetter(letterSpacingProps)
