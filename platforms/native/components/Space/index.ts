import styled from 'styled-components/native'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Space = styled.View<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        ...shallot,
      },
      ...rest,
    }),
)
