import { FontSizeProps } from '@shallot-ui/theme'
import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'

import getResponsiveFontSizes from './utils/getResponsiveFontSizes'

export const fontSizeProps: PropsConfig<FontSizeProps> = {
  fontSize: { get: getResponsiveFontSizes },
}

export const pullFontSizeProps = makePropPuller(fontSizeProps)
export const getFontSizeStyle = makeStyleGetter(fontSizeProps)
