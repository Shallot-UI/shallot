export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const omitted = { ...obj }
  keys.forEach((key) => delete omitted[key])
  return omitted
}
