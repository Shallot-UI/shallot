import { FunctionComponent } from 'react'
import {
  Code as PrismCode,
  CodeProps as PrismCodeProps,
} from '@shallot-ui/prismjs'

interface CodeProps extends PrismCodeProps {
  language: string
  children: string
}

export const Code: FunctionComponent<CodeProps> = (props) => (
  <PrismCode
    textColor="Shading.350"
    typeface="RobotoMono"
    fontSize="md"
    lineHeight="lg"
    typeStyles={{
      punctuation: { textColor: 'Shading.250' },
      keyword: { textColor: 'Primary.400' },
      operator: { textColor: 'Shading.250' },
      string: { textColor: 'Success.400' },
      number: { textColor: 'Danger.400' },
      comment: {
        typeface: 'RobotoMono',
        font: 'RegularItalic',
        textColor: 'Shading.275',
      },
    }}
    {...props}
  />
)
