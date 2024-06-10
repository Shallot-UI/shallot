import { Theme } from '@shallot-ui/core-theme'

export type MixinFunction<T> = (props: { theme: Theme }) => T | undefined
