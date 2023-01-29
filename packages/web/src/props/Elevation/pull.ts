import { ElevationProps } from '@shallot-ui/theme'

// Separate the elevation props from the rest of the props.
// This is useful for components that need to pass the elevation props
// or the rest of the props to a specific component.
// For example, the elevation might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullElevationProps = <T extends ElevationProps>(
  props: T,
): [ElevationProps, Omit<T, keyof ElevationProps>] => {
  const { elevation, ...rest } = props
  return [{ elevation }, rest]
}
