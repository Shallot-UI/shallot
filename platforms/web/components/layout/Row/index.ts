import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div', 'Box', 'Row')``
export const Row = withBoxLayoutProps(Base, { flexDirection: 'row' })
