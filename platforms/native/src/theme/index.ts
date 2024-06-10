import { makeTheme } from '@repo/theme'
import nativeVariants from './variants'

export { nativeVariants }
export const DEFAULT_NATIVE_THEME = makeTheme({}, nativeVariants)
export type NativeTheme = typeof DEFAULT_NATIVE_THEME
