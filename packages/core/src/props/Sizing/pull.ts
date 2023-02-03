import { SizingProps } from '@shallot-ui/theme'

// Separate the sizing props from the rest of the props.
// This is useful for components that need to pass the sizing props
// or the rest of the props to a specific component.
// For example, the sizing props might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullSizingProps = <T extends SizingProps>(
  props: T,
): [SizingProps, Omit<T, keyof SizingProps>] => {
  const {
    unitWidth,
    minUnitWidth,
    maxUnitWidth,
    unitHeight,
    minUnitHeight,
    maxUnitHeight,
    ...rest
  } = props
  return [
    {
      unitWidth,
      minUnitWidth,
      maxUnitWidth,
      unitHeight,
      minUnitHeight,
      maxUnitHeight,
    },
    rest,
  ]
}
