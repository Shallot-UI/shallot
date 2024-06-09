import { Theme } from '@shallot-ui/theme'

export type MixinFunction<T> = (props: { theme: Theme }) => T | undefined
