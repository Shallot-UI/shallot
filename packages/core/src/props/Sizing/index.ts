import { SizingProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const sizingProps: PropsConfig<SizingProps> = {
  unitWidth: {
    get: ({ unitWidth }) =>
      unitWidth
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `width: ${unitWidth * baseUnit}px;`
          }
        : '',
  },
  maxUnitWidth: {
    get: ({ maxUnitWidth }) =>
      maxUnitWidth
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `max-width: ${maxUnitWidth * baseUnit}px;`
          }
        : '',
  },
  minUnitWidth: {
    get: ({ minUnitWidth }) =>
      minUnitWidth
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `min-width: ${minUnitWidth * baseUnit}px;`
          }
        : '',
  },
  unitHeight: {
    get: ({ unitHeight }) =>
      unitHeight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `height: ${unitHeight * baseUnit}px;`
          }
        : '',
  },
  maxUnitHeight: {
    get: ({ maxUnitHeight }) =>
      maxUnitHeight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `max-height: ${maxUnitHeight * baseUnit}px;`
          }
        : '',
  },
  minUnitHeight: {
    get: ({ minUnitHeight }) =>
      minUnitHeight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `min-height: ${minUnitHeight * baseUnit}px;`
          }
        : '',
  },
}

export const pullSizingProps = makePropPuller(sizingProps)
export const getSizingStyle = makeStyleGetter(sizingProps)
