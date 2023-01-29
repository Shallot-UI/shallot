import { UnitPaddingProps } from '@shallot-ui/theme'

// Separate the unit padding props from the rest of the props.
// This is useful for components that need to pass the unit padding props
// or the rest of the props to a specific component.
// For example, the unit padding might be passed to a wrapper component,
// while the rest of the props are passed to some inner component.
export const pullUnitPaddingProps = <T extends UnitPaddingProps>(
  props: T,
): [UnitPaddingProps, Omit<T, keyof UnitPaddingProps>] => {
  const {
    unitPadding,
    unitPaddingAbove,
    unitPaddingBelow,
    unitPaddingLeft,
    unitPaddingRight,
    ...rest
  } = props
  return [
    {
      unitPadding,
      unitPaddingAbove,
      unitPaddingBelow,
      unitPaddingLeft,
      unitPaddingRight,
    },
    rest,
  ]
}
