import { withBoxShallot } from '../../utils'

export const Space = withBoxShallot(
  'div',
  { flexDirection: 'column', flexGrow: 1 },
  { scope: 'Box', variant: 'Space' },
)
