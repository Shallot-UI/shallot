import { withTextLayoutProps } from '@shallot-ui/core'
import { withComponentShallot } from '../../utils'

const BaseSpan = withComponentShallot('span', 'Text')``
export const Text = withTextLayoutProps(BaseSpan)

const BaseH1 = withComponentShallot('h1', 'Text', 'H1')``
export const H1 = withTextLayoutProps(BaseH1)

const BaseH2 = withComponentShallot('h2', 'Text', 'H2')``
export const H2 = withTextLayoutProps(BaseH2)

const BaseH3 = withComponentShallot('h3', 'Text', 'H3')``
export const H3 = withTextLayoutProps(BaseH3)

const BaseH4 = withComponentShallot('h4', 'Text', 'H4')``
export const H4 = withTextLayoutProps(BaseH4)

const BaseH5 = withComponentShallot('h5', 'Text', 'H5')``
export const H5 = withTextLayoutProps(BaseH5)

const BaseH6 = withComponentShallot('h6', 'Text', 'H6')``
export const H6 = withTextLayoutProps(BaseH6)

const BaseP = withComponentShallot('p', 'Text', 'P')``
export const P = withTextLayoutProps(BaseP)
