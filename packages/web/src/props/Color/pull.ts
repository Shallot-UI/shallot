import { ColorProps } from '@shallot-ui/theme'

// Separate the color props from the rest of the props.
// This is useful for components that need to pass the color props
// or the rest of the props to a specific component.
// For example, the color props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullColorProps = <T extends ColorProps>(
  props: T,
): [ColorProps, Omit<T, keyof ColorProps>] => {
  const { textColor, backgroundColor, borderColor, fillColor, ...rest } = props
  return [{ textColor, backgroundColor, borderColor, fillColor }, rest]
}
