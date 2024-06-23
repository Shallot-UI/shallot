import type { CSS } from '@shallot-ui/core-theme'

export type AlignmentProps = {
  alignTop?: boolean
  alignMiddle?: boolean
  alignBottom?: boolean
  alignLeft?: boolean
  alignCenter?: boolean
  alignRight?: boolean
}

export const getAlignmentShallot = (
  flexDirection: CSS.Properties['flexDirection'],
  {
    alignTop,
    alignMiddle,
    alignBottom,
    alignLeft,
    alignCenter,
    alignRight,
  }: AlignmentProps,
) => {
  const direction = flexDirection?.startsWith('row') ? 'row' : 'column'
  const verticalProp = direction === 'row' ? 'alignItems' : 'justifyContent'
  const horizontalProp = direction === 'row' ? 'justifyContent' : 'alignItems'

  return {
    ...(alignTop && { [verticalProp]: 'flex-start' }),
    ...(alignMiddle && { [verticalProp]: 'center' }),
    ...(alignBottom && { [verticalProp]: 'flex-end' }),
    ...(alignLeft && { [horizontalProp]: 'flex-start' }),
    ...(alignCenter && { [horizontalProp]: 'center' }),
    ...(alignRight && { [horizontalProp]: 'flex-end' }),
  }
}
