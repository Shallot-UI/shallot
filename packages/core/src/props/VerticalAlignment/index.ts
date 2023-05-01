import { FlexProps, VerticalAlignmentProps } from '@shallot-ui/theme'

const isRow = (direction: FlexProps['direction']) =>
  direction === 'row' || direction === 'row-reverse'

export const alignTop = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'justifyContent' : 'alignItems'
  return { [key]: 'flex-start' }
}

export const alignMiddle = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'justifyContent' : 'alignItems'
  return { [key]: 'center' }
}

export const alignBottom = ({
  alignTop,
  direction,
}: VerticalAlignmentProps & FlexProps) => {
  if (!alignTop) return
  const key = isRow(direction) ? 'justifyContent' : 'alignItems'
  return { [key]: 'flex-end' }
}
