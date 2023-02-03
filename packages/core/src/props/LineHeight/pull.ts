import { LineHeightProps } from '@shallot-ui/theme'

// Separate the line height props from the rest of the props.
// This is useful for components that need to pass the line height props
// or the rest of the props to a specific component.
// For example, the line height props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullLineHeightProps = <T extends LineHeightProps>(
  props: T,
): [LineHeightProps, Omit<T, keyof LineHeightProps>] => {
  const { lineHeight, fontSize, ...rest } = props
  return [{ lineHeight, fontSize }, rest]
}
