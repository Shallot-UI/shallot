import { ShallotProp, getStyle } from '@shallot-ui/core'
import styled, { CSSObject } from 'styled-components'

export const TextArea = styled('textarea')<{ shallot: ShallotProp<CSSObject> }>(
  ({ shallot, ...rest }) =>
    getStyle({
      shallot: {
        display: 'flex',
        width: '100%',
        border: '1px solid transparent',
        ...shallot,
      },
      ...rest,
    }),
)
