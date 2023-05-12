import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Column = styled.View<{ shallot?: ShallotProp }>(
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
