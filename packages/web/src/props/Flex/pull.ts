import { FlexProps } from '@shallot-ui/theme'

// Separate the flex props from the rest of the props.
// This is useful for components that need to pass the flex props
// or the rest of the props to a specific component.
// For example, the flex might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullFlexProps = <T extends FlexProps>(
  props: T,
): [FlexProps, Omit<T, keyof FlexProps>] => {
  const { grow, flex, shrink, wrap, ...rest } = props
  return [{ grow, flex, shrink, wrap }, rest]
}
