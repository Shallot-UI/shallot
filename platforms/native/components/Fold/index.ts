import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

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
