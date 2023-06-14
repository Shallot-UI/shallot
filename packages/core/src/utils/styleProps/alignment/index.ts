import { CSSProperties } from 'styled-components'

export type AlignmentProps = {
  alignTop?: boolean
  alignMiddle?: boolean
  alignBottom?: boolean
  alignLeft?: boolean
  alignCenter?: boolean
  alignRight?: boolean
}

export const alignmentPropKeys = [
  'alignTop',
  'alignMiddle',
  'alignBottom',
  'alignLeft',
  'alignCenter',
  'alignRight',
] as const

export const getAlignmentShallot = (
  flexDirection: CSSProperties['flexDirection'],
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
