import { BorderProps } from '@shallot-ui/theme'
import renderBorder from './utils/renderBorder'

export const getBorder =
  ({ borderWidth, borderPosition, borderColor = 'transparent' }: BorderProps) =>
  () => {
    if (borderWidth) {
      return `
      ${renderBorder(borderWidth, borderPosition)}
      border-color: ${borderColor};
    `
    } else if (borderColor) {
      return `
      ${renderBorder(1, borderPosition)}
      border-color: ${borderColor};
    `
    }

    return ''
  }
