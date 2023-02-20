import { makeComponent } from '../../../utils/makeComponent'
import { anchorLinkConfig } from './config'

export const AnchorLink = makeComponent('a', anchorLinkConfig)

export * from './types'
export * from './config'
