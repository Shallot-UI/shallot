import { AnimationProps } from '@shallot-ui/theme'

// Separate the animation props from the rest of the props.
// This is useful for components that need to pass the animation props
// or the rest of the props to a specific component.
// For example, the animation props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullAnimationProps = <T extends AnimationProps>(
  props: T,
): [AnimationProps, Omit<T, keyof AnimationProps>] => {
  const { animation, ...rest } = props
  return [{ animation }, rest]
}
