import { withTextLayoutProps } from '@shallot-ui/core'
import { withComponentShallot } from '../../utils'

const BaseLink = withComponentShallot('a', 'Text', 'Link')``
export const AnchorLink = withTextLayoutProps(BaseLink)
