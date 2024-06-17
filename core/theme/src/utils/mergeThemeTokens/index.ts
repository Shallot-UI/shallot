import { Merge, ThemeTokens } from '@/types'

export type MergedTokens<T extends ThemeTokens, U extends ThemeTokens> = {
  [key: string]: Merge<T[keyof T], U[keyof U]>
}

export const mergeThemeTokens = <
  T extends Readonly<ThemeTokens>,
  U extends Readonly<ThemeTokens>,
>(
  tokens: T,
  updates?: U,
) =>
  ({
    gridUnit: updates?.gridUnit ?? tokens.gridUnit ?? 12,
    colors: { ...tokens.colors, ...updates?.colors } as Merge<
      T['colors'],
      U['colors']
    >,
    fontFamilies: { ...tokens.fontFamilies, ...updates?.fontFamilies } as Merge<
      T['fontFamilies'],
      U['fontFamilies']
    >,
    fontSizes: { ...tokens.fontSizes, ...updates?.fontSizes } as Merge<
      T['fontSizes'],
      U['fontSizes']
    >,
    letterSpacings: {
      ...tokens.letterSpacings,
      ...updates?.letterSpacings,
    } as Merge<T['letterSpacings'], U['letterSpacings']>,
    lineHeights: { ...tokens.lineHeights, ...updates?.lineHeights } as Merge<
      T['lineHeights'],
      U['lineHeights']
    >,
    radii: { ...tokens.radii, ...updates?.radii } as Merge<
      T['radii'],
      U['radii']
    >,
    shadows: { ...tokens.shadows, ...updates?.shadows } as Merge<
      T['shadows'],
      U['shadows']
    >,
    breakpoints: { ...tokens.breakpoints, ...updates?.breakpoints } as Merge<
      T['breakpoints'],
      U['breakpoints']
    >,
  }) as const
