import { FontProps } from '@shallot-ui/theme'

import { PropsConfig } from '../../types'
import { makePropPuller, makeStyleGetter } from '../../utils'

export const fontProps: PropsConfig<FontProps> = {
  font: {
    get: ({ font, typeface }) =>
      font || typeface
        ? ({ theme }) => {
            const typefaceDef =
              (typeface && theme.typefaces[typeface]) ||
              theme.typefaces[theme.defaults.typeface]

            return font && typefaceDef.fonts[font]
              ? typefaceDef.fonts[font]
              : typefaceDef.fonts[typefaceDef.defaults.font]
          }
        : '',
  },
}

export const pullFontProps = makePropPuller(fontProps)
export const getFontStyle = makeStyleGetter(fontProps)
