import { FunctionComponent, useEffect, useState } from 'react'
import Prism from 'prismjs'
import { Column, ColumnStyleProps, Text, TextProps } from '@shallot-ui/web'
import {
  FontProps,
  FontSizeProps,
  LineHeightProps,
  LetterSpacingProps,
} from '@shallot-ui/theme'

import CodeTokenContents from './parts/CodeTokenContents'

export interface CodeProps
  extends ColumnStyleProps,
    FontProps,
    FontSizeProps,
    LineHeightProps,
    LetterSpacingProps {
  language: string
  children: string
  tokenStyle?: TextProps
  typeStyles?: Record<string, TextProps>
  aliasStyles?: Record<string, TextProps>
}

export const Code: FunctionComponent<CodeProps> = ({
  language,
  children = '',
  tokenStyle,
  typeStyles,
  aliasStyles,

  // Font Props
  font,
  typeface,
  fontSize,
  lineHeight,
  letterSpacing,

  ...rest
}) => {
  const [content, setContent] = useState<(string | Prism.Token)[]>([])

  useEffect(() => {
    setContent(Prism.tokenize(children, Prism.languages[language]))
  }, [children])

  return (
    <Column
      as="pre"
      unitsAround={3}
      backgroundColor="Shading.150"
      radius="lg"
      style={{ overflowX: 'auto' }}
      {...rest}
    >
      <Text
        as="code"
        unitsAround={3}
        font={font}
        typeface={typeface}
        fontSize={fontSize}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
      >
        <CodeTokenContents
          content={content}
          tokenStyle={tokenStyle}
          typeStyles={typeStyles}
          aliasStyles={aliasStyles}
        />
      </Text>
    </Column>
  )
}
