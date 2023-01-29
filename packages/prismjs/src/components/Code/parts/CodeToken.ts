import styled from 'styled-components'
import { getTextStyle, Text, TextStyleProps } from '@shallot-ui/web'

interface CodeTokenProps {
  type?: string
  alias?: string | string[]
  typeStyles?: Record<string, TextStyleProps>
  aliasStyles?: Record<string, TextStyleProps>
}

const CodeToken = styled(Text)<CodeTokenProps>`
  ${(props) => {
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
`

export default CodeToken
