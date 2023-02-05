export const useStyleProps = <
  N extends string,
  T extends Record<string, any>,
  O extends Record<string, any>,
>(
  componentName: N,
  stylesProp: T | undefined,
  state: Record<string, boolean | undefined> = {},
  overrides?: O,
) => {
  const baseStyles = stylesProp?.[componentName]
  const activeStates = Object.keys(state).filter((key) => state[key])

  // Accumulate styles from all active states
  let activeStateStyles = {}
  activeStates.forEach((state) => {
    activeStateStyles = {
      ...activeStateStyles,
      ...stylesProp?.states?.[state]?.[componentName],
    }
  })

  const definedOverrides = { ...overrides }
  Object.keys(definedOverrides).forEach(
    (key) =>
      definedOverrides[key] === undefined && delete definedOverrides[key],
  )

  return { ...baseStyles, ...activeStateStyles, ...definedOverrides }
}
