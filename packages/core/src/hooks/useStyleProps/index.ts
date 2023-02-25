// Remove undefined values from an object
const removeUndefined = <T extends Record<string, any>>(obj: T) => {
  const defined = { ...obj }
  Object.keys(defined).forEach(
    (key) => defined[key] === undefined && delete defined[key],
  )
  return defined
}

export const useStyleProps = <N extends string, T extends Record<string, any>>(
  componentName: N,
  stylesProp: T | undefined,
  state: Record<string, boolean | undefined> = {},
  overrides?: T[N],
): T[N] => {
  const baseStyles = stylesProp?.[componentName]
  const activeStates = Object.keys(state).filter((key) => state[key])

  // Accumulate styles from all active states
  const activeStateStyles = activeStates.reduce(
    (acc, state) => ({
      ...acc,
      ...stylesProp?.states?.[state]?.[componentName],
    }),
    {} as T[N],
  )

  // const definedOverrides = { ...overrides }
  // Object.keys(definedOverrides).forEach(
  //   (key) =>
  //     definedOverrides[key] === undefined && delete definedOverrides[key],
  // )

  return {
    ...removeUndefined(baseStyles ?? {}),
    ...removeUndefined(activeStateStyles),
    ...removeUndefined(overrides ?? {}),
  }
}
