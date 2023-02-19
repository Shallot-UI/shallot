import { CasingProps } from '@shallot-ui/theme'

import { PropConfigs } from '../../types'
import { makePropPuller, makePropGetter } from '../../utils'

const casing: PropConfigs<CasingProps> = {
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

export const pullCasingProps = makePropPuller(casing)
export const getCasingProps = makePropGetter(casing)
