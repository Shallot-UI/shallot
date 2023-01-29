import { FontProps } from '@shallot-ui/theme'

// Separate the font props from the rest of the props.
// This is useful for components that need to pass the font props
// or the rest of the props to a specific component.
// For example, the font props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullFontProps = <T extends FontProps>(
  props: T,
): [FontProps, Omit<T, keyof FontProps>] => {
  const { font, typeface, ...rest } = props
  return [{ font, typeface }, rest]
}
