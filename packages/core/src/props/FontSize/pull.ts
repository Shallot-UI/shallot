import { FontSizeProps } from '@shallot-ui/theme'

// Separate the font size props from the rest of the props.
// This is useful for components that need to pass the font size props
// or the rest of the props to a specific component.
// For example, the font size props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullFontSizeProps = <T extends FontSizeProps>(
  props: T,
): [FontSizeProps, Omit<T, keyof FontSizeProps>] => {
  const { fontSize, ...rest } = props
  return [{ fontSize }, rest]
}
