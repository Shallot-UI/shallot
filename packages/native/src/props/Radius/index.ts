import { RadiusProps } from '@shallot-ui/theme'
import { PropsConfig, makePropPuller, makeStyleGetter } from '@shallot-ui/core'
import { DefaultTheme } from 'styled-components'

export const radiusProps: PropsConfig<RadiusProps> = {
  radius: {
    get:
      ({ radius }) =>
      ({ theme }) => {
        // If a radius is not provided, skip this getter.
        if (!radius) return

        // If a valid radius is provided, set it.
        const value = theme?.radii?.[radius as keyof DefaultTheme['radii']]
        if (typeof value === 'number') return `border-radius: ${value}px;`
      },
  },
}

export const pullRadiusProps = makePropPuller(radiusProps)
export const getRadiusStyle = makeStyleGetter(radiusProps)
