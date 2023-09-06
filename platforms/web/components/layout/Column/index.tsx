import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div', 'Box', 'Column')``
export const Column = withBoxLayoutProps(Base, { flexDirection: 'column' })
