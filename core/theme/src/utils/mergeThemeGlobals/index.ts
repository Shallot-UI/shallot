import { Merge, ThemeGlobals } from '@/types'

export type MergedGlobals<
  T extends ThemeGlobals,
  U extends ThemeGlobals,
> = Merge<T, U> & { [key: `mode:${string}`]: Merge<T[keyof T], U[keyof U]> }

const getModeKeys = (globals?: ThemeGlobals) =>
  Object.keys({ ...globals }).filter((key) => key.indexOf('mode:') === 0)

export const mergeThemeGlobals = <
  T extends Readonly<ThemeGlobals>,
  U extends Readonly<ThemeGlobals>,
>(
  globals: T,
  updates?: U,
) => {
  const merged: ThemeGlobals = { ...globals, ...updates }

  getModeKeys(updates).forEach(
    (key) => (merged[key] = { ...globals[key], ...updates?.[key] }),
  )

  return merged as MergedGlobals<T, U>
}
