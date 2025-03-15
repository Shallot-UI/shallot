import {
  getColor,
  getFontFamily,
  getRadius,
  getUnits,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  withTextShallot,
} from '@shallot-ui/next'
import type { MDXComponents } from 'mdx/types'

const UL = withTextShallot('ul', {
  marginLeft: getUnits(2),
})

const LI = withTextShallot('li', {
  listStyle: 'disc',
  marginTop: getUnits(1 / 2),
})

const Code = withTextShallot('code', {
  fontFamily: getFontFamily('Monospace'),
  backgroundColor: getColor('Warning', 50),
  color: getColor('Warning', 700),
  borderRadius: getRadius('md'),
  padding: getUnits(1 / 4),
})

const Anchor = withTextShallot('a', {
  color: getColor('Primary', 700),
  textDecoration: 'underline',
  underlinePosition: 'below',
  marginLeft: getUnits(1 / 4),
  marginRight: getUnits(1 / 4),
})

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <H1 unitsAbove={3} unitsBelow={1} {...props} />,
    h2: (props) => <H2 unitsAbove={3} unitsBelow={1} {...props} />,
    h3: (props) => <H3 unitsAbove={2} unitsBelow={1 / 2} {...props} />,
    h4: (props) => <H4 unitsAbove={1} unitsBelow={1 / 2} {...props} />,
    h5: (props) => <H5 unitsAbove={1} unitsBelow={1 / 2} {...props} />,
    h6: (props) => <H6 unitsAbove={1} unitsBelow={1 / 2} {...props} />,
    p: (props) => <P unitsAbove={1 / 2} unitsBelow={1 / 2} {...props} />,
    ul: (props) => <UL {...props} />,
    li: (props) => <LI {...props} />,
    code: (props) => <Code {...props} />,
    a: (props) => <Anchor {...props} />,
  }
}
