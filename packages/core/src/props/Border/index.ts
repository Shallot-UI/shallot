import { BorderProps } from '@shallot-ui/theme'
import renderBorder from './utils/renderBorder'

export const borderWidth = ({
  borderWidth,
  borderPosition,
  borderColor,
}: BorderProps) => `
  ${renderBorder(borderWidth ?? 1, borderPosition)}
  border-color: ${borderColor ?? 'transparent'};
`
