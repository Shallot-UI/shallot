import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const Space = styled('div')<{ shallot: ShallotProp<CSSObject> }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        ...shallot,
      },
      ...rest,
    }),
)
