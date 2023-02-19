import { DisplayProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const display: PropConfigs<DisplayProps> = {
  display: {
    get: ({ display }) => {
      if (display === 'hidden') {
        return 'visibility: hidden;'
      } else if (typeof display === 'boolean') {
        return `display: ${display === true ? 'flex' : 'none'};`
      } else if (display) {
        return `display: ${display};`
      }
    },
  },
}

export const pullDisplayProps = makePropPuller(display)
export const getDisplayProps = makePropGetter(display)
