import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div', 'Box', 'Space')``
export const Space = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  flexGrow: 1,
})
