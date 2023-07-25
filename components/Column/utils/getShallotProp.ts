import {
  applyStyles,
  getAlignmentShallot,
  getBackgroundColorShallot,
  getBorderColorShallot,
  getBorderShallot,
  getFlexShallot,
  getMarginShallot,
  getRadiusShallot,
  getSizingShallot,
  getTextColorShallot,
} from '@shallot-ui/core'

import { ColumnProps, ColumnShallot } from '../types'
import { useTheme } from 'styled-components'

const getShallotProp = <T>(props: ColumnProps<T>): ColumnShallot => {
  const baseShallot: ColumnShallot = applyStyles({
    display: 'flex',
    flexDirection: 'column',
    ...props.shallot,
  })

  const theme = useTheme()
  const { variant = 'default' } = props
  const themeVariant = theme?.variants?.Box?.[variant] as ColumnShallot

  return applyStyles(baseShallot, {
    ...getAlignmentShallot(baseShallot.flexDirection, props),
    ...getBorderShallot(props),
    ...getBackgroundColorShallot(props),
    ...getBorderColorShallot(props),
    ...getTextColorShallot(props),
    ...getFlexShallot(props),
    ...getMarginShallot(props),
    ...getRadiusShallot(props),
    ...getSizingShallot(props),

    // Variants (overrides)
    ...themeVariant,
  })
}

export default getShallotProp
