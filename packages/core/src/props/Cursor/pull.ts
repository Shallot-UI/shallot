import { CursorProps } from '@shallot-ui/theme'

// Separate the cursor props from the rest of the props.
// This is useful for components that need to pass the cursor props
// or the rest of the props to a specific component.
// For example, the cursor might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullCursorProps = <T extends CursorProps>(
  props: T,
): [CursorProps, Omit<T, keyof CursorProps>] => {
  const { cursor, ...rest } = props
  return [{ cursor }, rest]
}
