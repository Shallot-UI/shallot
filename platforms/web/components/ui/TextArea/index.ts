import { getStyle } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'
import styled from 'styled-components'

export const TextArea = styled('textarea').withConfig({
  shouldForwardProp: (prop) => !['shallot'].includes(prop),
})<{ shallot?: ShallotProp }>(({ shallot, ...rest }) =>
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
