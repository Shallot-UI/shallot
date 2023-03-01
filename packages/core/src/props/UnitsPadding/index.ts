import { UnitPaddingProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const unitsPaddingProps: PropsConfig<UnitPaddingProps> = {
  unitsPadding: {
    get: ({ unitsPadding }) =>
      unitsPadding
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `padding: ${baseUnit * unitsPadding}px;`
          }
        : '',
  },
  unitsPaddingAbove: {
    get: ({ unitsPaddingAbove }) =>
      unitsPaddingAbove
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `padding-top: ${baseUnit * unitsPaddingAbove}px;`
          }
        : '',
  },
  unitsPaddingBelow: {
    get: ({ unitsPaddingBelow }) =>
      unitsPaddingBelow
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `padding-bottom: ${baseUnit * unitsPaddingBelow}px;`
          }
        : '',
  },
  unitsPaddingLeft: {
    get: ({ unitsPaddingLeft }) =>
      unitsPaddingLeft
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `padding-left: ${baseUnit * unitsPaddingLeft}px;`
          }
        : '',
  },
  unitsPaddingRight: {
    get: ({ unitsPaddingRight }) =>
      unitsPaddingRight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `padding-right: ${baseUnit * unitsPaddingRight}px;`
          }
        : '',
  },
}

export const pullUnitsPaddingProps = makePropPuller(unitsPaddingProps)
export const getUnitsPaddingStyle = makeStyleGetter(unitsPaddingProps)
