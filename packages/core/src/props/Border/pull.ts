import { BorderProps } from '@shallot-ui/theme'

// Pull Border Props
// -----------------
// Separate the border props from the rest of the props.
// This is useful for components that need to pass the border props
// or the rest of the props to a specific component.

// For example, the cursor might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.

export const pullBorderProps = <T extends BorderProps>(
  props: T,
): [BorderProps, Omit<T, keyof BorderProps>] => {
  const { borderWidth, borderPosition, borderColor, ...rest } = props
  return [{ borderWidth, borderPosition, borderColor }, rest]
}
