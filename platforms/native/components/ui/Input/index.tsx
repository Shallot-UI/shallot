import { ComponentProps, ReactNode, RefObject, useState } from 'react'
import { withBoxLayoutProps } from '@shallot-ui/core'
import { InputProps, withInputStyleProps } from '@shallot-ui/input'
import { TextInput } from 'react-native'

import S from './style'

const Base = (
  props: InputProps<ComponentProps<typeof S.InnerInput>> & {
    title?: string
    before?: ReactNode
    after?: ReactNode
    inputRef?: RefObject<TextInput>
    hasError?: boolean
  },
) => {
  const { title, before, after, shallot, inputRef, hasError, ...rest } = props
  const [focused, setFocused] = useState(false)

  return (
    <S.Container $focused={focused} $error={hasError} shallot={shallot}>
      {before}
      {title && (
        <S.InnerInput
          shallot={shallot}
          ref={inputRef}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          $focused={focused}
          $error={hasError}
          {...rest}
        />
      )}
      {after}
    </S.Container>
  )
}

export const Input = withBoxLayoutProps(
  // The style props are common utilities to extend the tag's shallot prop
  // in common ways. For example, changing the tag's color.
  withInputStyleProps(Base),
  // These are style overrides sent to the Tag's container component. They
  // must contain at least a `flexDirection` so that the flex alignment
  // properties will be applied correctly.
  { flexDirection: 'row' },
  // This is the name of the component that will be used as the Box for the
  // tag. The box is the outermost element that wraps the tag's content
  // and it will be extended with any layout props passed to the tag.
  'Container',
)
