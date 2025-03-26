'use client'

import {
  getColor,
  getRadius,
  getUnits,
  withTextShallot,
} from '@shallot-ui/next'

export const Callout = withTextShallot('div', {
  display: 'block',
  backgroundColor: getColor('Shading', 100),
  color: getColor('Shading', 700),
  borderRadius: getRadius('md'),
  padding: getUnits(1 / 2),
})
