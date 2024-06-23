import { Merge, ThemeVariants } from '@/types'

export type MergedVariants<T extends ThemeVariants, U extends ThemeVariants> = {
  [key: string]: Merge<T[keyof T], U[keyof U]>
}

export const mergeThemeVariants = <
  T extends Readonly<ThemeVariants>,
  U extends Readonly<ThemeVariants>,
>(
  variants: T,
  updates?: U,
) => {
  const merged: ThemeVariants = { ...variants, ...updates }

  Object.keys({ ...updates }).forEach(
    (key) => (merged[key] = { ...variants[key], ...updates?.[key] }),
  )

  return merged as MergedVariants<T, U>
}
