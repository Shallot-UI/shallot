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

import { BoxProps, BoxShallot } from '../types'
import { useTheme } from 'styled-components'
import { ShallotProp } from '@shallot-ui/theme'

const getShallotProp = <T>(props: BoxProps<T>): BoxShallot => {
  const baseShallot: BoxShallot = applyStyles({
    display: 'flex',
    flexDirection: 'column',
    ...props.shallot,
  })

  const theme = useTheme()

  return applyStyles(baseShallot, {
    // ...theme?.variants?.Box?.[props.variant],
    ...getAlignmentShallot(baseShallot.flexDirection, props),
    ...getBorderShallot(props),
    ...getBackgroundColorShallot(props),
    ...getBorderColorShallot(props),
    ...getTextColorShallot(props),
    ...getFlexShallot(props),
    ...getMarginShallot(props),
    ...getRadiusShallot(props),
    ...getSizingShallot(props),
  })
}

export default getShallotProp
