import { LetterSpacingProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const letterSpacing: PropConfigs<LetterSpacingProps> = {
  letterSpacing: {
    get: ({ letterSpacing }) =>
      letterSpacing
        ? ({ theme }) =>
            `letter-spacing: ${theme.letterSpacings[letterSpacing]};`
        : '',
  },
}

export const pullLetterSpacingProps = makePropPuller(letterSpacing)
export const getLetterSpacingProps = makePropGetter(letterSpacing)
