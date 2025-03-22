import {
  Column,
  getColor,
  getFontFamily,
  getFontSize,
  getRadius,
  getUnits,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  withShallot,
} from '@shallot-ui/next'
import type { MDXComponents } from 'mdx/types'
import CodeExample from './components/CodeExample'

const UL = withShallot('ul', {
  listStyle: 'disc',
  listStylePosition: 'outside',
})

const OL = withShallot('ol', {
  listStyle: 'decimal',
  listStylePosition: 'outside',
})

const LI = withShallot('li', {
  marginTop: getUnits(1 / 2),
})

const Code = withShallot('code', {
  fontFamily: getFontFamily('Monospace'),
  fontSize: getFontSize('sm'),
  backgroundColor: getColor('Warning', 50),
  color: getColor('Warning', 700),
  borderRadius: getRadius('md'),
  padding: getUnits(1 / 4),
})

const Anchor = withShallot('a', {
  fontFamily: 'inherit',
  color: getColor('Shading', 700),
  textDecoration: 'underline',
  underlinePosition: 'below',
})

const Blockquote = withShallot('blockquote', {
  display: 'flex',
  fontFamily: getFontFamily('Serif'),
  fontSize: getFontSize('md'),
  marginTop: getUnits(1),
  marginBottom: getUnits(1),
  lineHeight: 1.5,
})

const Strong = withShallot('strong', {
  fontWeight: 600,
})

const P = withShallot('p', {
  marginTop: getUnits(1 / 2),
  marginBottom: getUnits(1 / 2),
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
    ul: (props) => <UL {...props} />,
    ol: (props) => <OL {...props} />,
    li: (props) => <LI {...props} />,
    p: (props) => <P unitsAbove={1 / 2} unitsBelow={1 / 2} {...props} />,
    blockquote: (props) => <Blockquote {...props} />,
    code: (props) => <Code {...props} />,
    a: (props) => <Anchor {...props} />,
    strong: Strong,
    pre: (block) => {
      const { children, className } = block.children.props

      // get the language from the props
      const language =
        className
          ?.split(' ')
          .find((c: string) => c.startsWith('language-'))
          .split('-')[1] ?? 'plaintext'

      return (
        <Column unitsAbove={1} unitsBelow={1}>
          <CodeExample language={language} value={children ?? ''} />
        </Column>
      )
    },
  }
}
