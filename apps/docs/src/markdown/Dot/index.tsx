import { getColor, getRadius, getUnits, withBoxShallot } from '@shallot-ui/next'

const Dot = withBoxShallot('div', {
  height: getUnits(1),
  width: getUnits(1),
  borderRadius: getRadius('pill'),
  backgroundColor: getColor('Shading', 600),
})

export default Dot
