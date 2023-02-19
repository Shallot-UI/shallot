export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const picked = {} as Pick<T, K>
  keys.forEach((key) => (picked[key] = obj[key]))
  return picked
}
