import { CSSProperties, FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import {
  colorProps,
  ColorProps,
  CursorProps,
  ElevationProps,
  flexProps,
  FlexProps,
  makeComponent,
  RadiusProps,
  TransitionProps,
  UnitsAroundProps,
  unitsAroundProps,
  radiusProps,
  elevationProps,
  cursorProps,
  transitionProps,
  PropsConfig,
} from '@shallot-ui/web'

import { FieldImage } from '../../types'

const makeSrcSet = (image: FieldImage, transformation: string = 'native') => {
  const widths = image?.transforms?.[transformation]
  if (!widths) {
    return image.src
  }
  return Object.keys(widths)
    .map((w) => `${widths[w]} ${w}w`)
    .join(', ')
}

const makeSrc = (
  image: FieldImage,
  size: number,
  transformation: string = 'native',
) => {
  const widths = image?.transforms?.[transformation]
  if (!widths) {
    return image.src
  }

  const nums = Object.keys(widths)
    .map((w) => Number(w))
    .sort((a, b) => a - b)

  const nearest = nums.find((w) => w >= size) || nums[nums.length - 1]
  return widths[`${nearest}`]
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

export interface FieldImageStyleProps
  extends UnitsAroundProps,
    RadiusProps,
    ElevationProps,
    ColorProps,
    FlexProps,
    CursorProps,
    TransitionProps {
  style?: Partial<CSSProperties>
}

export interface FieldImageProps {
  image: FieldImage | null
  transformation?: 'native' | 'square' | string
  unitWidth: number
  unitHeight?: number
}

const baseImageConfig: PropsConfig<FieldImageStyleProps> = {
  ...flexProps,
  ...colorProps,
  ...unitsAroundProps,
  ...radiusProps,
  ...elevationProps,
  ...cursorProps,
  ...transitionProps,
}

const BaseImage = makeComponent('img', baseImageConfig)

export const Image: FunctionComponent<
  FieldImageProps & FieldImageStyleProps
> = ({ image, unitWidth = 10, unitHeight, transformation, style, ...rest }) => {
  const theme = useTheme()
  if (!image) return null

  const width = unitWidth * theme.gridUnits[0]
  const height = unitHeight ? unitHeight * theme.gridUnits[0] : undefined
  const transformedHeight = getTransformedHeight(image, width, transformation)

  return (
    <BaseImage
      src={image && makeSrc(image, width, transformation)}
      srcSet={image && makeSrcSet(image, transformation)}
      sizes={`${width}px`}
      style={{ width, height: height ?? transformedHeight, ...style }}
      {...rest}
    />
  )
}
