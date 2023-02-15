import { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import {
  Image as ShallotImage,
  ImageProps as ShallotImageProps,
} from '@shallot-ui/next'
import { FieldImage } from '../../types'

interface ImageProps extends Omit<ShallotImageProps, 'src'> {
  image: FieldImage
  transformation?: string
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

export const Image: FunctionComponent<ImageProps> = ({
  image,
  alt,
  unitWidth = 10,
  unitHeight,
  transformation = 'native',
  style,
  ...rest
}) => {
  const theme = useTheme()

  const width = unitWidth * theme.gridUnits[0]
  const height = unitHeight ? unitHeight * theme.gridUnits[0] : undefined
  const transformedHeight = getTransformedHeight(image, width, transformation)

  return (
    <ShallotImage
      src={image?.src}
      alt={alt}
      sizes={`${width}px`}
      style={{ width, height: height ?? transformedHeight, ...style }}
      {...rest}
    />
  )
}
