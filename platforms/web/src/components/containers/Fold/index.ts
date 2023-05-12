import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Fold = styled.div<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        ...shallot,
      },
      ...rest,
    }),
)
