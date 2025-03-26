'use client'

import { getColor, getUnits, withBoxShallot } from '@shallot-ui/next'

const Ribbon = withBoxShallot('div', {
  position: 'sticky',
  top: 0,
  borderBottom: '1px solid',
  backgroundColor: getColor('Shading', 50),
  borderColor: getColor('Shading', 100),
  marginLeft: getUnits(-2),
  marginRight: getUnits(-2),
})

export default {
  Ribbon,
}
