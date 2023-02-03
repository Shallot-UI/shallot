import { RadiusProps } from '@shallot-ui/theme'

// Separate the radius props from the rest of the props.
// This is useful for components that need to pass the radius props
// or the rest of the props to a specific component.
// For example, the radius might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullRadiusProps = <T extends RadiusProps>(
  props: T,
): [RadiusProps, Omit<T, keyof RadiusProps>] => {
  const { radius, ...rest } = props
  return [{ radius }, rest]
}
