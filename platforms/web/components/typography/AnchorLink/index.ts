import { withTextLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const BaseLink = withShallot('a', 'Text', 'Link')``
export const AnchorLink = withTextLayoutProps(BaseLink)
