import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export const Space = styled.View<{ shallot?: ShallotProp }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexGrow: 1,
        ...shallot,
      },
      ...rest,
    }),
)
