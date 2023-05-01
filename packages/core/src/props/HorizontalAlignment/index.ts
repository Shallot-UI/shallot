import { FlexProps, VerticalAlignmentProps } from '@shallot-ui/theme'

const isRow = (direction: FlexProps['direction']) =>
  direction === 'row' || direction === 'row-reverse'

export const alignLeft = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'alignItems' : 'justifyContent'
  return { [key]: 'flex-start' }
}

export const alignCenter = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'alignItems' : 'justifyContent'
  return { [key]: 'center' }
}

export const alignRight = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'alignItems' : 'justifyContent'
  return { [key]: 'flex-end' }
}
