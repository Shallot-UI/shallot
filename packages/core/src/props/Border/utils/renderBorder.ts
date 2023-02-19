import { BorderProps } from '@shallot-ui/theme'

const renderBorder = (
  width = 0,
  position: BorderProps['borderPosition'] = 'all',
) =>
  position === 'all'
    ? `border-width: ${width}px;`
    : `
      border-width: 0;
      border-${position}-width: ${width}px;
    `

export default renderBorder
