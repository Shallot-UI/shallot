import { CasingProps } from '@shallot-ui/theme'

// Separate the casing props from the rest of the props.
// This is useful for components that need to pass the casing props
// or the rest of the props to a specific component.
// For example, the casing props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullCasingProps = <T extends CasingProps>(
  props: T,
): [CasingProps, Omit<T, keyof CasingProps>] => {
  const { uppercase, lowercase, capitalize, ...rest } = props
  return [{ uppercase, lowercase, capitalize }, rest]
}
