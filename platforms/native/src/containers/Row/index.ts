import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Row = styled.View<{ shallot?: ShallotProp }>(
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
