import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Row = styled.div<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexDirection: 'row',
        ...shallot,
      },
      ...rest,
    }),
)
