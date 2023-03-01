import { BorderProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'
import renderBorder from './utils/renderBorder'

export const borderProps: PropsConfig<BorderProps> = {
  borderWidth: {
    get: ({ borderWidth, borderPosition, borderColor }) => `
      ${renderBorder(borderWidth, borderPosition)}
      border-color: ${borderColor ?? 'transparent'};
    `,
  },
  borderColor: {
    get: ({ borderPosition, borderColor }) => `
      ${renderBorder(1, borderPosition)}
      border-color: ${borderColor};
    `,
  },
}

export const pullBorderProps = makePropPuller(borderProps)
export const getBorderStyle = makeStyleGetter(borderProps)
