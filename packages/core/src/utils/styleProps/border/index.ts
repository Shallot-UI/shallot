import { BorderColorProps } from '../color'

export type BorderProps = {
  borderWidth?: number
  borderPosition?: 'top' | 'right' | 'bottom' | 'left' | 'all'
  borderStyle?: 'solid' | 'dashed' | 'dotted' | string
}

export const borderPropKeys = [
  'borderWidth',
  'borderPosition',
  'borderStyle',
] as const

export const getBorderShallot = ({
  borderPosition = 'all',
  borderWidth,
  borderColor,
  borderStyle = 'solid',
}: BorderProps & BorderColorProps) => {
  let width = borderWidth
  if (width === undefined && borderColor) width = 1

  // We don't want to return a border if there is no width
  if (width === undefined) return

  return {
    borderStyle,
    ...(borderPosition === 'top' && { borderTopWidth: width }),
    ...(borderPosition === 'right' && { borderRightWidth: width }),
    ...(borderPosition === 'bottom' && { borderBottomWidth: width }),
    ...(borderPosition === 'left' && { borderLeftWidth: width }),
    ...(borderPosition === 'all' && { borderWidth: width }),
  }
}
