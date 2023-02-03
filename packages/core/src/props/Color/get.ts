import { DefaultTheme } from 'styled-components'
import { ColorProps } from '@shallot-ui/theme'

import getColor from './utils/getColor'

export const getColors =
  (colorProps: ColorProps) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const settings = { ...theme.defaults, ...colorProps }
    const text = getColor(settings.textColor, theme)
    const background = getColor(settings.backgroundColor, theme)
    const border = getColor(settings.borderColor, theme)
    const fill = getColor(settings.fillColor, theme)

    return `
    ${text ? `color: ${text};` : ''}
    ${background ? `background-color: ${background};` : ''}
    ${border ? `border-color: ${border};` : ''}
    ${fill ? `fill: ${fill};` : ''}
  `
  }
