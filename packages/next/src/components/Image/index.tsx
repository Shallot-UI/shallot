import { ComponentProps, FunctionComponent } from 'react'
import NextImage from 'next/image'
import { ShallotProp, getStyle, getUnits, getRadius } from '@shallot-ui/web'
import styled, { DefaultTheme } from 'styled-components'

type NextImageProps = ComponentProps<typeof NextImage>

export interface ImageProps extends NextImageProps {
  shallot?: ShallotProp
  radius?: keyof DefaultTheme['radii']
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
    ...rest
  } = props

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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* We need to pass the width and height props to the NextImage component
        so that it can calculate the aspect ratio of the image. Note that these
        values might be overridden by the `{...rest}` props. */}
      <InnerImage
        shallot={{
          ...(unitWidth && { width: getUnits(unitWidth) }),
          ...(unitHeight && { height: getUnits(unitHeight) }),
        }}
        {...rest}
      />
    </Container>
  )
}
