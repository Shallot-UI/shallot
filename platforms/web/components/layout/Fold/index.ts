import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div')``
export const Fold = withBoxLayoutProps(Base, {
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100vw',
})
