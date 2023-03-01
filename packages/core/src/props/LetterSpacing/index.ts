import { LetterSpacingProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const letterSpacingProps: PropsConfig<LetterSpacingProps> = {
  letterSpacing: {
    get: ({ letterSpacing }) =>
      letterSpacing
        ? ({ theme }) =>
            `letter-spacing: ${theme.letterSpacings[letterSpacing]};`
        : '',
  },
}

export const pullLetterSpacingProps = makePropPuller(letterSpacingProps)
export const getLetterSpacingStyle = makeStyleGetter(letterSpacingProps)
