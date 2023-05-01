import { MarginProps } from '@shallot-ui/theme'
import { getProportion } from '../../utils'

export const fullWidth = ({
  fullWidth,
  marginLeft,
  marginRight,
  margin,
}: MarginProps) => {
  if (!fullWidth) return {}
  if (
    typeof marginLeft !== 'number' ||
    typeof marginRight !== 'number' ||
    typeof margin !== 'number'
  )
    return {}
  const left = marginLeft ?? margin ?? 0
  const right = marginRight ?? margin ?? 0
  return `width: calc(100% - ${left + right}px);`
}

export const fullHeight = ({
  fullHeight,
  marginTop,
  marginBottom,
  margin,
}: MarginProps) => {
  if (!fullHeight) return {}
  if (
    typeof marginTop !== 'number' ||
    typeof marginBottom !== 'number' ||
    typeof margin !== 'number'
  )
    return {}
  const top = marginTop ?? margin ?? 0
  const bottom = marginBottom ?? margin ?? 0
  return `width: calc(100% - ${top + bottom}px);`
}

export const margin = getProportion<MarginProps>('margin')
export const marginRight = getProportion<MarginProps>('marginRight')
export const marginLeft = getProportion<MarginProps>('marginLeft')
export const marginTop = getProportion<MarginProps>('marginTop')
export const marginBottom = getProportion<MarginProps>('marginBottom')
