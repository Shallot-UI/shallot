import { CasingProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const casingProps: PropsConfig<CasingProps> = {
  uppercase: {
    get: ({ uppercase }) => (uppercase ? 'text-transform: uppercase;' : ''),
  },
  lowercase: {
    get: ({ lowercase }) => (lowercase ? 'text-transform: lowercase;' : ''),
  },
  capitalize: {
    get: ({ capitalize }) => (capitalize ? 'text-transform: capitalize;' : ''),
  },
}

export const pullCasingProps = makePropPuller(casingProps)
export const getCasingStyle = makeStyleGetter(casingProps)
