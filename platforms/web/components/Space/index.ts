import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'

export const Space = styled.div<{ shallot?: ShallotProp }>(
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
