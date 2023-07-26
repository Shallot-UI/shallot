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
import { Variant } from '@shallot-ui/theme'

const getShallotProp = <T>(props: BoxProps<T>): BoxShallot => {
  const baseShallot: BoxShallot = applyStyles({
    display: 'flex',
    flexDirection: 'column',
    ...props.shallot,
  })

  const theme = useTheme()
  const { variant = 'default' } = props
  const themeVariant = theme?.variants?.Box?.[variant] as
    | Variant<BoxShallot>
    | undefined

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
