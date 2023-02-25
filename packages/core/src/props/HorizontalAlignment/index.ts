import { HorizontalAlignmentProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const rowHorizontalAlignmentProps: PropsConfig<HorizontalAlignmentProps> =
  {
    alignLeft: {
      get: ({ alignLeft }) => (alignLeft ? 'justify-content: flex-start;' : ''),
    },
    alignCenter: {
      get: ({ alignCenter }) => (alignCenter ? 'justify-content: center;' : ''),
    },
    alignRight: {
      get: ({ alignRight }) => (alignRight ? 'justify-content: flex-end;' : ''),
    },
  }

export const pullRowHorizontalAlignmentProps = makePropPuller(
  rowHorizontalAlignmentProps,
)

export const getRowHorizontalAligmentStyle = makeStyleGetter(
  rowHorizontalAlignmentProps,
)

export const columnHorizontalAlignmentProps: PropsConfig<HorizontalAlignmentProps> =
  {
    alignLeft: {
      get: ({ alignLeft }) => (alignLeft ? 'align-items: flex-start;' : ''),
    },
    alignCenter: {
      get: ({ alignCenter }) => (alignCenter ? 'align-items: center;' : ''),
    },
    alignRight: {
      get: ({ alignRight }) => (alignRight ? 'align-items: flex-end;' : ''),
    },
  }

export const pullColumnHorizontalAlignmentProps = makePropPuller(
  columnHorizontalAlignmentProps,
)
export const getColumnHorizontalAligmentStyle = makeStyleGetter(
  columnHorizontalAlignmentProps,
)
