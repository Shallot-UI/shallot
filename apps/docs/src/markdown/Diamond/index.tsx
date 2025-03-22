import { getColor, getRadius, getUnits, withShallot } from '@shallot-ui/next'

const Diamond = withShallot('div', {
  height: getUnits(1),
  width: getUnits(1),
  borderRadius: getRadius('sm'),
  backgroundColor: getColor('Shading', 600),
  transform: 'rotate(45deg)',
})

export default Diamond
