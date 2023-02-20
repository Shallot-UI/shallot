import { VerticalAlignmentProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const rowVerticalAlignmentProps: PropsConfig<VerticalAlignmentProps> = {
  alignTop: {
    get: ({ alignTop }) => (alignTop ? 'align-items: flex-start;' : ''),
  },
  alignMiddle: {
    get: ({ alignMiddle }) => (alignMiddle ? 'align-items: center;' : ''),
  },
  alignBottom: {
    get: ({ alignBottom }) => (alignBottom ? 'align-items: flex-end;' : ''),
  },
}

export const pullRowVerticalAlignmentProps = makePropPuller(
  rowVerticalAlignmentProps,
)

export const getRowVerticalAligmentStyle = makeStyleGetter(
  rowVerticalAlignmentProps,
)

export const columnVerticalAlignmentProps: PropsConfig<VerticalAlignmentProps> =
  {
    alignTop: {
      get: ({ alignTop }) => (alignTop ? 'justify-content: flex-start;' : ''),
    },
    alignMiddle: {
      get: ({ alignMiddle }) => (alignMiddle ? 'justify-content: center;' : ''),
    },
    alignBottom: {
      get: ({ alignBottom }) =>
        alignBottom ? 'justify-content: flex-end;' : '',
    },
  }

export const pullColumnVerticalAlignmentProps = makePropPuller(
  columnVerticalAlignmentProps,
)
export const getColumnVerticalAligmentStyle = makeStyleGetter(
  columnVerticalAlignmentProps,
)
