import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Column = styled.div<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexDirection: 'column',
        ...shallot,
      },
      ...rest,
    }),
)
