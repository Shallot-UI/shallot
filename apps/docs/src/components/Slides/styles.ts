import { getColor, getRadius, getUnits, withBoxShallot } from '@shallot-ui/next'

const Wrapper = withBoxShallot('div', {
  width: '100%',
})

const Container = withBoxShallot('div', {
  flexDirection: 'row',
  width: '100%',
  overflowX: 'scroll',
  position: 'relative',
})

const Slide = withBoxShallot('div', {
  width: '90%',
  flexShrink: 0,
  overflowX: 'hidden',
  padding: getUnits(1),
  margin: getUnits(1),
  border: '1px solid',
  borderColor: getColor('Shading', 200),
  backgroundColor: getColor('Shading', 0),
  borderRadius: getRadius('lg'),
})

export default {
  Wrapper,
  Container,
  Slide,
}
