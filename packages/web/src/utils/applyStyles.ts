export const applyStyles = <T extends Record<string, any>>(
  base: T,
  overrides: Partial<T> = {},
) => {
  let styles: T = { ...base }

  Object.keys(overrides).forEach((key) => {
    styles[key as keyof T] =
      typeof overrides[key] === 'object'
        ? applyStyles(base[key] ?? {}, overrides[key] ?? {})
        : overrides[key]
  })

  return styles
}
