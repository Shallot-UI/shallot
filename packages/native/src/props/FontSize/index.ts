import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'
import { FontSizeProps } from '@shallot-ui/theme'

export const fontSizeProps: PropsConfig<FontSizeProps> = {
  fontSize: {
    get:
      ({ fontSize }) =>
      ({ theme }) =>
        fontSize && typeof theme?.fontSizes?.[fontSize] === 'number'
          ? `font-size: ${theme?.fontSizes?.[fontSize]}px;`
          : undefined,
  },
}

export const pullFontSizeProps = makePropPuller(fontSizeProps)
export const getFontSizeStyle = makeStyleGetter(fontSizeProps)
