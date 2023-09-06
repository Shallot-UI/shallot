import { withBoxLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const Base = withShallot('div', 'Box')``
export const Box = withBoxLayoutProps(Base, { flexDirection: 'row' })
