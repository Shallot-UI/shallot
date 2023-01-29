import { HorizontalAlignmentProps } from '@shallot-ui/theme'

export const getHorizontalAlignment =
  (flexDirection: 'row' | 'column') =>
  ({ alignLeft, alignRight, alignCenter }: HorizontalAlignmentProps) => {
    if (alignLeft) {
      return flexDirection === 'row'
        ? 'justify-content: flex-start;'
        : 'align-items: flex-start;'
    }
    if (alignRight) {
      return flexDirection === 'row'
        ? 'justify-content: flex-end;'
        : 'align-items: flex-end;'
    }
    if (alignCenter) {
      return flexDirection === 'row'
        ? 'justify-content: center;'
        : 'align-items: center;'
    }
    return undefined
  }
