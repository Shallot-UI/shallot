import { UnitsAroundProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const unitsAroundProps: PropsConfig<UnitsAroundProps> = {
  fullWidth: {
    get: ({ fullWidth, unitsLeft, unitsRight, unitsAround }) =>
      fullWidth
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            const leftMargin = baseUnit * (unitsLeft ?? unitsAround ?? 0)
            const rightMargin = baseUnit * (unitsRight ?? unitsAround ?? 0)
            return `width: calc(100% - ${leftMargin + rightMargin}px);`
          }
        : '',
  },
  fullHeight: {
    get: ({ fullHeight, unitsAbove, unitsBelow, unitsAround }) =>
      fullHeight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            const topMargin = baseUnit * (unitsAbove ?? unitsAround ?? 0)
            const bottomMargin = baseUnit * (unitsBelow ?? unitsAround ?? 0)
            return `height: calc(100% - ${topMargin + bottomMargin}px);`
          }
        : '',
  },
  unitsAround: {
    get: ({ unitsAround }) =>
      unitsAround
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `margin: ${baseUnit * unitsAround}px;`
          }
        : '',
  },
  unitsAbove: {
    get: ({ unitsAbove }) =>
      unitsAbove
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `margin-top: ${baseUnit * unitsAbove}px;`
          }
        : '',
  },
  unitsBelow: {
    get: ({ unitsBelow }) =>
      unitsBelow
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `margin-bottom: ${baseUnit * unitsBelow}px;`
          }
        : '',
  },
  unitsLeft: {
    get: ({ unitsLeft }) =>
      unitsLeft
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `margin-left: ${baseUnit * unitsLeft}px;`
          }
        : '',
  },
  unitsRight: {
    get: ({ unitsRight }) =>
      unitsRight
        ? ({ theme }) => {
            const baseUnit = theme.gridUnits?.[0]
            if (typeof baseUnit !== 'number') return ''
            return `margin-right: ${baseUnit * unitsRight}px;`
          }
        : '',
  },
}

export const pullUnitsAroundProps = makePropPuller(unitsAroundProps)
export const getUnitsAroundStyle = makeStyleGetter(unitsAroundProps)
