import { UnderlineProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const underlineProps: PropsConfig<UnderlineProps> = {
  underline: {
    get: ({ underline }) => (underline ? 'text-decoration: underline;' : ''),
  },
}

export const pullUnderlineProps = makePropPuller(underlineProps)
export const getUnderlineStyle = makeStyleGetter(underlineProps)
