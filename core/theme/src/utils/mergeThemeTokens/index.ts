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
    colors: { ...updates?.colors, ...tokens.colors } as Merge<
      T['colors'],
      U['colors']
    >,
    fontFamilies: { ...updates?.fontFamilies, ...tokens.fontFamilies } as Merge<
      T['fontFamilies'],
      U['fontFamilies']
    >,
    fontSizes: { ...updates?.fontSizes, ...tokens.fontSizes } as Merge<
      T['fontSizes'],
      U['fontSizes']
    >,
    letterSpacings: {
      ...updates?.letterSpacings,
      ...tokens.letterSpacings,
    } as Merge<T['letterSpacings'], U['letterSpacings']>,
    lineHeights: { ...updates?.lineHeights, ...tokens.lineHeights } as Merge<
      T['lineHeights'],
      U['lineHeights']
    >,
    radii: { ...tokens.radii, ...updates?.radii } as Merge<
      T['radii'],
      U['radii']
    >,
    shadows: { ...updates?.shadows, ...tokens.shadows } as Merge<
      T['shadows'],
      U['shadows']
    >,
    breakpoints: { ...updates?.breakpoints, ...tokens.breakpoints } as Merge<
      T['breakpoints'],
      U['breakpoints']
    >,
  }) as const
