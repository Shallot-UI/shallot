import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const Column = styled('div')<{ shallot: ShallotProp<CSSObject> }>(
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
