export type BorderProps = {
  borderWidth?: number
  borderPosition?: 'top' | 'right' | 'bottom' | 'left' | 'all'
}

export const borderPropKeys = ['borderWidth', 'borderPosition'] as const

export const getBorderShallot = ({
  borderPosition = 'all',
  borderWidth,
}: BorderProps) => ({
  ...(borderPosition === 'top' &&
    borderWidth !== undefined && { borderTopWidth: borderWidth }),
  ...(borderPosition === 'right' &&
    borderWidth !== undefined && { borderRightWidth: borderWidth }),
  ...(borderPosition === 'bottom' &&
    borderWidth !== undefined && { borderBottomWidth: borderWidth }),
  ...(borderPosition === 'left' &&
    borderWidth !== undefined && { borderLeftWidth: borderWidth }),
  ...(borderPosition === 'all' && borderWidth !== undefined && { borderWidth }),
})
