import { BorderProps } from '@shallot-ui/theme'

const renderBorder = (
  width = 0,
  position: BorderProps['borderPosition'] = 'all',
) => {
  if (position === 'all') {
    return `border-width: ${width}px;`
  }
  return `
    border-width: 0;
    border-${position}-width: ${width}px;
  `
}

export default renderBorder
