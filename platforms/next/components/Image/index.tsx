import { ComponentProps, FunctionComponent } from 'react'
import styled, { DefaultTheme, useTheme } from 'styled-components'
import NextImage from 'next/image'
import {
  getStyle,
  getUnits,
  getRadius,
  AllColorShades,
  getColorShade,
  ShallotProp,
} from '@shallot-ui/web'

type NextImageProps = ComponentProps<typeof NextImage>

export interface ImageProps extends NextImageProps {
  shallot?: ShallotProp
  radius?: keyof DefaultTheme['radii']
  backgroundColor?: AllColorShades
  unitHeight?: number
  unitWidth?: number
  unitsAround?: number
  unitsAbove?: number
  unitsBelow?: number
  unitsLeft?: number
  unitsRight?: number
}

const Container = styled.div(getStyle)
const InnerImage = styled(NextImage)(getStyle)

export const Image: FunctionComponent<ImageProps> = (props) => {
  const {
    unitHeight,
    unitWidth,
    radius,
    unitsAround,
    unitsAbove,
    unitsBelow,
    unitsLeft,
    unitsRight,
    backgroundColor,
    shallot,
    ...rest
  } = props

  const theme = useTheme()

  return (
    <Container
      shallot={{
        ...(unitHeight && { height: getUnits(unitHeight) }),
        ...(unitWidth && { width: getUnits(unitWidth) }),
        ...(radius && { borderRadius: getRadius(radius) }),
        ...(unitsAround && { margin: getUnits(unitsAround) }),
        ...(unitsAbove && { marginTop: getUnits(unitsAbove) }),
        ...(unitsBelow && { marginBottom: getUnits(unitsBelow) }),
        ...(unitsLeft && { marginLeft: getUnits(unitsLeft) }),
        ...(unitsRight && { marginRight: getUnits(unitsRight) }),
        ...(backgroundColor && {
          backgroundColor: getColorShade(backgroundColor),
        }),
        position: 'relative',
        overflow: 'hidden',
        ...shallot,
      }}
    >
      {/* We need to pass the width and height props to the NextImage component
        so that it can calculate the aspect ratio of the image. Note that these
        values might be overridden by the `{...rest}` props. */}
      <InnerImage
        width={unitWidth && unitWidth * theme.gridUnits[0]}
        height={unitHeight && unitHeight * theme.gridUnits[0]}
        {...rest}
      />
    </Container>
  )
}
