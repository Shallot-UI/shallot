import { LetterSpacingProps } from '@shallot-ui/theme'

// Separate the letter spacing props from the rest of the props.
// This is useful for components that need to pass the letter spacing props
// or the rest of the props to a specific component.
// For example, the letter spacing props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullLetterSpacingProps = <T extends LetterSpacingProps>(
  props: T,
): [LetterSpacingProps, Omit<T, keyof LetterSpacingProps>] => {
  const { letterSpacing, ...rest } = props
  return [{ letterSpacing }, rest]
}
