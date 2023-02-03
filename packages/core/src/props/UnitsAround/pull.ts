import { UnitsAroundProps } from '@shallot-ui/theme'

// Separate the units around props from the rest of the props.
// This is useful for components that need to pass the units around props
// or the rest of the props to a specific component.
// For example, the units around might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullUnitsAroundProps = <T extends UnitsAroundProps>(
  props: T,
): [UnitsAroundProps, Omit<T, keyof UnitsAroundProps>] => {
  const {
    fullWidth,
    fullHeight,
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,
    ...rest
  } = props
  return [
    {
      fullWidth,
      fullHeight,
      unitsAround,
      unitsAbove,
      unitsBelow,
      unitsLeft,
      unitsRight,
    },
    rest,
  ]
}
