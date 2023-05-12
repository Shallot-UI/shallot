import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Fold = styled.View<{ shallot?: ShallotProp }>(
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
