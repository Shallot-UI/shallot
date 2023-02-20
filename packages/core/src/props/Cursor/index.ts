import { CursorProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const cursorProps: PropsConfig<CursorProps> = {
  cursor: {
    get: ({ cursor }) => (cursor ? `cursor: ${cursor};` : ''),
  },
}

export const pullCursorProps = makePropPuller(cursorProps)
export const getCursorStyle = makeStyleGetter(cursorProps)
