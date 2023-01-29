import { UnderlineProps } from '@shallot-ui/theme'

// Separate the underline props from the rest of the props.
// This is useful for components that need to pass the underline props
// or the rest of the props to a specific component.
// For example, the underline props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullUnderlineProps = <T extends UnderlineProps>(
  props: T,
): [UnderlineProps, Omit<T, keyof UnderlineProps>] => {
  const { underline, ...rest } = props
  return [{ underline }, rest]
}
