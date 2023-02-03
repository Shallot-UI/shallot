import { TransitionProps } from '@shallot-ui/theme'

// Separate the transition props from the rest of the props.
// This is useful for components that need to pass the transition props
// or the rest of the props to a specific component.
// For example, the transition might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullTransitionProps = <T extends TransitionProps>(
  props: T,
): [TransitionProps, Omit<T, keyof TransitionProps>] => {
  const { transition, ...rest } = props
  return [{ transition }, rest]
}
