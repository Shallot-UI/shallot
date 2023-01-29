import { HorizontalAlignmentProps } from '@shallot-ui/theme'

// Separate the horizontal align props from the rest of the props.
// This is useful for components that need to pass the horizontal align props
// or the rest of the props to a specific component.
// For example, the horizontal align might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullHorizontalAlignmentProps = <
  T extends HorizontalAlignmentProps,
>(
  props: T,
): [HorizontalAlignmentProps, Omit<T, keyof HorizontalAlignmentProps>] => {
  const { alignLeft, alignRight, alignCenter, ...rest } = props
  return [{ alignLeft, alignRight, alignCenter }, rest]
}
