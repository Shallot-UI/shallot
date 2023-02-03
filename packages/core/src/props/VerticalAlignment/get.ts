import { VerticalAlignmentProps } from '@shallot-ui/theme'

export const getVerticalAlignment =
  (flexDirection: 'row' | 'column') =>
  ({ alignTop, alignMiddle, alignBottom }: VerticalAlignmentProps) => {
    if (alignTop) {
      return flexDirection === 'row'
        ? 'align-items: flex-start;'
        : 'justify-content: flex-start;'
    }
    if (alignBottom) {
      return flexDirection === 'row'
        ? 'align-items: flex-end;'
        : 'justify-content: flex-end;'
    }
    if (alignMiddle) {
      return flexDirection === 'row'
        ? 'align-items: center;'
        : 'justify-content: center;'
    }
    return undefined
  }
