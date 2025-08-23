import React, { ComponentProps, FC, ReactNode, RefObject, useState } from 'react'
import { withBoxLayoutProps, BoxLayoutProps } from '@shallot-ui/core-props'
import { InputProps, withInputStyleProps } from '@shallot-ui/component-input'
import { TextInput } from 'react-native'
import { ShallotProp } from '@shallot-ui/core-theme'

import S from './style'

const Base: FC<
  InputProps<ComponentProps<typeof S.InnerInput>> & {
    before?: ReactNode
    after?: ReactNode
    inputRef?: RefObject<TextInput>
    hasError?: boolean
  }
> = ({ before, after, shallot, inputRef, hasError, ...rest }) => {
  const [focused, setFocused] = useState(false)

  return (
    <S.Container $focused={focused} $error={hasError} shallot={shallot}>
      {before}
      <S.InnerInput
        shallot={shallot}
        // ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        $focused={focused}
        $error={hasError}
        {...rest}
      />
      {after}
    </S.Container>
  )
}

/**
 * Props interface for Shallot Input component
 * @public
 */
export interface ShallotInputProps extends InputProps<ComponentProps<typeof S.InnerInput>>, BoxLayoutProps {
  before?: ReactNode
  after?: ReactNode
  inputRef?: RefObject<TextInput>
  hasError?: boolean
  shallot?: ShallotProp
  variant?: string
}

/**
 * Input component with Shallot styling capabilities and layout props
 */
export const Input: React.ComponentType<ShallotInputProps> = withBoxLayoutProps(
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
