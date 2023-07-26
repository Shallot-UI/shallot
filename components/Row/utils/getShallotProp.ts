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

import { RowProps, RowShallot } from '../types'
import { useTheme } from 'styled-components'
import { Variant } from '@shallot-ui/theme'

const getShallotProp = <T>(props: RowProps<T>): RowShallot => {
  const baseShallot: RowShallot = applyStyles({
    display: 'flex',
    flexDirection: 'row',
    ...props.shallot,
  })

  const theme = useTheme()
  const { variant = 'default' } = props
  const themeVariant = theme?.variants?.Box?.[variant] as
    | Variant<RowShallot>
    | undefined

  console.log(themeVariant)

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
