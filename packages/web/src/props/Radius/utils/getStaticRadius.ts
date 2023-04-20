import { ThemeGetter } from '@shallot-ui/core'
import { RadiusProps } from '@shallot-ui/theme'
import { DefaultTheme } from 'styled-components'

const getStaticRadius: ThemeGetter<RadiusProps> = ({ radius, theme }) => {
  // If a radius is not provided, skip this getter.
  if (!radius) return

  // If a valid radius is provided, set it.
  const value = theme?.radii?.[radius as keyof DefaultTheme['radii']]
  if (typeof value === 'number') return `border-radius: ${value}px;`
}

export default getStaticRadius
