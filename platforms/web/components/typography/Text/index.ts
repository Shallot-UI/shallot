import { withTextLayoutProps } from '@shallot-ui/core'
import { withShallot } from '../../utils'

const BaseSpan = withShallot('span', 'Text')``
export const Text = withTextLayoutProps(BaseSpan)

const BaseH1 = withShallot('h1', 'Text', 'H1')``
export const H1 = withTextLayoutProps(BaseH1)

const BaseH2 = withShallot('h2', 'Text', 'H2')``
export const H2 = withTextLayoutProps(BaseH2)

const BaseH3 = withShallot('h3', 'Text', 'H3')``
export const H3 = withTextLayoutProps(BaseH3)

const BaseH4 = withShallot('h4', 'Text', 'H4')``
export const H4 = withTextLayoutProps(BaseH4)

const BaseH5 = withShallot('h5', 'Text', 'H5')``
export const H5 = withTextLayoutProps(BaseH5)

const BaseH6 = withShallot('h6', 'Text', 'H6')``
export const H6 = withTextLayoutProps(BaseH6)

const BaseP = withShallot('p', 'Text', 'P')``
export const P = withTextLayoutProps(BaseP)
