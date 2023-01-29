import { TextAlignProps } from '@shallot-ui/theme'

// Separate the text align props from the rest of the props.
// This is useful for components that need to pass the text align props
// or the rest of the props to a specific component.
// For example, the text align props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullTextAlignProps = <T extends TextAlignProps>(
  props: T,
): [TextAlignProps, Omit<T, keyof TextAlignProps>] => {
  const { leftText, centerText, rightText, justifyText, ...rest } = props
  return [{ leftText, centerText, rightText, justifyText }, rest]
}
