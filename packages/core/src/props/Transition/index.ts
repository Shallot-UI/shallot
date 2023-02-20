import { TransitionProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const transitionProps: PropsConfig<TransitionProps> = {
  transition: {
    get: ({ transition }) => (transition ? `transition: ${transition};` : ''),
  },
}

export const pullTransitionProps = makePropPuller(transitionProps)
export const getTransitionStyle = makeStyleGetter(transitionProps)
