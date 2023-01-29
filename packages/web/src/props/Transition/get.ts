import { TransitionProps } from '@shallot-ui/theme'

export const getTransition =
  ({ transition }: TransitionProps) =>
  () =>
    transition ? `transition: ${transition};` : ''
