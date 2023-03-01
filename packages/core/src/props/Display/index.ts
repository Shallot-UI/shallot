import { DisplayProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const displayProps: PropsConfig<DisplayProps> = {
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

export const pullDisplayProps = makePropPuller(displayProps)
export const getDisplayStyle = makeStyleGetter(displayProps)
