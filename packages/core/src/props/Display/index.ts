import { DisplayProps } from '@shallot-ui/theme'

export const display = ({ display }: DisplayProps) => {
  if (display === 'hidden') {
    return 'visibility: hidden;'
  } else if (typeof display === 'boolean') {
    return `display: ${display === true ? 'flex' : 'none'};`
  } else if (display) {
    return `display: ${display};`
  }
}
