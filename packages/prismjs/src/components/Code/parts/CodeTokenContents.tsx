import { TokenStream } from 'prismjs'
import { TextProps } from '@shallot-ui/web'
import CodeToken from './CodeToken'

const CodeTokenContents = ({
  content,
  tokenStyle,
  typeStyles,
  aliasStyles,
}: {
  content: TokenStream
  tokenStyle?: TextProps
  typeStyles?: Record<string, TextProps>
  aliasStyles?: Record<string, TextProps>
}) => {
  const tokenContentsList = !Array.isArray(content) ? [content] : content
  return (
    <>
      {tokenContentsList.map((token, index) => (
        <CodeToken
          key={index}
          type={typeof token !== 'string' ? token.type : undefined}
          alias={typeof token !== 'string' ? token.alias : undefined}
          typeStyles={typeStyles}
          aliasStyles={aliasStyles}
          {...tokenStyle}
        >
          {typeof token === 'string' ? (
            token
          ) : (
            <CodeTokenContents
              content={token.content}
              tokenStyle={tokenStyle}
              typeStyles={typeStyles}
              aliasStyles={aliasStyles}
            />
          )}
        </CodeToken>
      ))}
    </>
  )
}

export default CodeTokenContents
