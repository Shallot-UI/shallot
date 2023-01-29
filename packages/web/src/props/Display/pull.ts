import { DisplayProps } from '@shallot-ui/theme'

// Separate the display props from the rest of the props.
// This is useful for components that need to pass the display props
// or the rest of the props to a specific component.
// For example, the display props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullDisplayProps = <T extends DisplayProps>(
  props: T,
): [DisplayProps, Omit<T, keyof DisplayProps>] => {
  const { display, ...rest } = props
  return [{ display }, rest]
}
