import { FunctionComponent } from 'react'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { PixelRatio, StyleProp } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  Column,
  ColumnStyleProps,
  pullColumnStyleProps,
} from '@shallot-ui/native'

import { FieldImage } from './type'

export interface FieldImageProps
  extends Omit<FastImageProps, 'source' | 'height' | 'width' | 'style'>,
    ColumnStyleProps {
  image?: FieldImage
  params?: any
  transformation?: 'native' | 'square' | string

  // Unit width must be provided. It's optional in `columnStyleProps`.
  unitWidth: number
  style?: StyleProp<any>
}

const getTransformation = (
  image: FieldImage,
  width: number,
  transformation: 'native' | 'square' | string = 'native',
) => {
  const widths = image?.transforms?.[transformation]
  if (!widths) {
    return image.src
  }

  const pixelWidths = Object.keys(widths)
    .map((w) => Number(w))
    .sort((a, b) => a - b)

  const largestWidth = pixelWidths[pixelWidths.length - 1]
  const nearestWidth = pixelWidths.find((w) => w >= width) || largestWidth
  return widths[`${nearestWidth}`]
}

const getTransformedHeight = (
  image: FieldImage,
  width: number,
  transformation: string = 'native',
) => {
  const transformConfig = image.config?.transforms?.[transformation]
  const defaultAr = [image?.config?.dimensions?.aspectRatio, 1].join(':')
  const [w, h] = (transformConfig?.params?.ar || defaultAr).split(':')
  const aspectRatio = w && h ? Number(w) / Number(h) : 1
  return width / aspectRatio
}

export const Image: FunctionComponent<FieldImageProps> = (props) => {
  const theme = useTheme()
  const [columnStyle, nonStyleProps] = pullColumnStyleProps(props)
  const {
    image,
    transformation = 'native',
    params,
    style,
    ...rest
  } = nonStyleProps

  if (!columnStyle.unitWidth) {
    throw new Error('Image component requires a unitWidth prop')
  }

  const { unitWidth, unitHeight, ...columnStyleWithoutDimensions } = columnStyle

  const width = unitWidth * theme.gridUnits[0]
  const height = unitHeight && unitHeight * theme.gridUnits[0]

  if (!image) return null
  const uri = getTransformation(image, width * PixelRatio.get(), transformation)
  const transformedHeight = getTransformedHeight(image, width, transformation)

  return (
    <Column
      {...columnStyleWithoutDimensions}
      style={{
        height: height ?? transformedHeight,
        width,
        overflow: 'hidden',
        ...style,
      }}
    >
      <FastImage
        source={{ uri }}
        style={{ height: '100%', width: '100%' }}
        {...rest}
      />
    </Column>
  )
}
