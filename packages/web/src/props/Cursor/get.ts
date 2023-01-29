import { CursorProps } from '@shallot-ui/theme'

export const getCursor =
  ({ cursor }: CursorProps) =>
  () =>
    cursor ? `cursor: ${cursor};` : ''
