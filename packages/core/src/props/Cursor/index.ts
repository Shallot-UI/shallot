import { CursorProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const cursor: PropConfigs<CursorProps> = {
  cursor: {
    get: ({ cursor }) => (cursor ? `cursor: ${cursor};` : ''),
  },
}

export const pullCursorProps = makePropPuller(cursor)
export const getCursorProps = makePropGetter(cursor)
