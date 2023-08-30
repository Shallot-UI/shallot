import { FunctionComponent } from 'react'
import styled, { DefaultTheme } from 'styled-components/native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { getStyle, getUnits, getRadius } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export interface ImageProps extends Omit<FastImageProps, 'source'> {
  source: FastImageProps['source'] | undefined
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

const Container = styled.View(getStyle)
const InnerImage = styled(FastImage)(getStyle)

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
        overflow: 'hidden',
      }}
    >
      {rest.source && (
        <InnerImage
          shallot={{
            ...(unitWidth && { width: getUnits(unitWidth) }),
            ...(unitHeight && { height: getUnits(unitHeight) }),
          }}
          {...rest}
        />
      )}
    </Container>
  )
}
