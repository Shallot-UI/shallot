export type BorderProps = {
  borderWidth?: number
  borderPosition?: 'top' | 'right' | 'bottom' | 'left' | 'all'
  borderStyle?: 'solid' | 'dashed' | 'dotted' | string
}

export const getBorderShallot = ({
  borderPosition = 'all',
  borderWidth,
}: BorderProps) => {
  let width = borderWidth

  // We don't want to return a border if there is no width
  if (width === undefined) return

  return {
    ...(borderPosition === 'top' && { borderTopWidth: width }),
    ...(borderPosition === 'right' && { borderRightWidth: width }),
    ...(borderPosition === 'bottom' && { borderBottomWidth: width }),
    ...(borderPosition === 'left' && { borderLeftWidth: width }),
    ...(borderPosition === 'all' && { borderWidth: width }),
  }
}
