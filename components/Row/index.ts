import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const Row = styled('div')<{ shallot?: ShallotProp }>(
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
