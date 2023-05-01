import { TransitionProps } from '@shallot-ui/theme'

export const transitionProps = {
  transition: ({ transition }: TransitionProps) =>
    transition ? `transition: ${transition};` : '',
}
