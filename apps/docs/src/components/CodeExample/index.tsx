import { ComponentProps, FC } from 'react'
import { Refractor, registerLanguage } from 'react-refractor'
import javascript from 'refractor/javascript'
import typescript from 'refractor/typescript'
import tsx from 'refractor/tsx'
import diff from 'refractor/diff'
import shell from 'refractor/shell-session'
import { SyntaxStyles } from './syntax'

registerLanguage(javascript)
registerLanguage(typescript)
registerLanguage(tsx)
registerLanguage(diff)
registerLanguage(shell)

const CodeExample: FC<ComponentProps<typeof Refractor>> = (props) => (
  <SyntaxStyles>
    <Refractor {...props} />
  </SyntaxStyles>
)

export default CodeExample
