import { Theme } from '@repo/theme'

export type MixinFunction<T> = (props: { theme: Theme }) => T | undefined
