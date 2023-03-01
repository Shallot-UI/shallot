import { TransitionProps } from '@shallot-ui/theme'

import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'

export const transitionProps: PropsConfig<TransitionProps> = {
  transition: {
    get: ({ transition }) => (transition ? `transition: ${transition};` : ''),
  },
}

export const pullTransitionProps = makePropPuller(transitionProps)
export const getTransitionStyle = makeStyleGetter(transitionProps)
