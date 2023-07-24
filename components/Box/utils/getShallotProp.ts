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

const getShallotProp = <T>(props: BoxProps<T>): BoxShallot => {
  const baseShallot: BoxShallot = applyStyles({
    display: 'flex',
    flexDirection: 'column',
    ...props.shallot,
  })

  const theme = useTheme()
  const { variant } = props

  console.log('theme', theme?.variants.Box[variant])
  console.log('variant', variant)

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
    ...(variant && theme?.variants?.Box?.[variant]),
  })
}

export default getShallotProp
