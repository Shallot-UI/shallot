import { VerticalAlignmentProps } from '@shallot-ui/theme'

// Separate the vertical alignment props from the rest of the props.
// This is useful for components that need to pass the vertical alignment props
// or the rest of the props to a specific component.
// For example, the vertical alignment might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullVerticalAlignmentProps = <T extends VerticalAlignmentProps>(
  props: T,
): [VerticalAlignmentProps, Omit<T, keyof VerticalAlignmentProps>] => {
  const { alignTop, alignMiddle, alignBottom, ...rest } = props
  return [{ alignTop, alignMiddle, alignBottom }, rest]
}
