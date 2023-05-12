import { FunctionComponent } from 'react'
import { useTheme } from 'styled-components/native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { RadiusProps, SizingProps, UnitsAroundProps } from '@shallot-ui/theme'

import { Column } from '../../containers'

type FastImageComponentProps = Omit<FastImageProps, 'source'> & {
  source: FastImageProps['source'] | undefined
}

export interface ImageProps
  extends FastImageComponentProps,
    SizingProps,
    RadiusProps,
    UnitsAroundProps {}

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

  const theme = useTheme()

  // If the user has specified a unitWidth, we need to convert it to a pixel
  // width for the FastImage component.
  const width = unitWidth && unitWidth * theme.gridUnits[0]

  // If the user has specified a unitHeight, we need to convert it to a pixel
  // height for the FastImage component.
  const height = unitHeight && unitHeight * theme.gridUnits[0]

  return (
    <Column
      unitHeight={unitHeight}
      unitWidth={unitWidth}
      radius={radius}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      style={{ overflow: 'hidden' }}
    >
      {rest.source && <FastImage style={{ width, height }} {...rest} />}
    </Column>
  )
}
