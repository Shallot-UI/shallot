import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div')``
export const Row = withBoxLayoutProps(Base, { flexDirection: 'row' })
