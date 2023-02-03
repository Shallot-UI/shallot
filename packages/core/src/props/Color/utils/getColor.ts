import { DefaultTheme } from 'styled-components'

const getColor = (
  name: keyof DefaultTheme['colors'] | undefined,
  theme: DefaultTheme,
) => name && theme.colors[name]

export default getColor
