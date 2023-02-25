import { css } from 'styled-components'
import {
  getTextStyle,
  makeComponent,
  TextProps,
  textConfig,
} from '@shallot-ui/web'

interface CodeTokenProps {
  type?: string
  alias?: string | string[]
  typeStyles?: Record<string, TextProps>
  aliasStyles?: Record<string, TextProps>
}

const CodeToken = makeComponent(
  'span',
  textConfig,
  css`
    ${(props: CodeTokenProps) => {
      let styleProps = { ...props }
      if (props.type) {
        styleProps = { ...styleProps, ...props.typeStyles?.[props.type] }
      }
      if (Array.isArray(props.alias)) {
        props.alias.forEach((alias) => {
          styleProps = { ...styleProps, ...props.aliasStyles?.[alias] }
        })
      } else if (typeof props.alias === 'string') {
        styleProps = { ...styleProps, ...props.aliasStyles?.[props.alias] }
      }
      return getTextStyle(styleProps)
    }}
  `,
)

export default CodeToken
