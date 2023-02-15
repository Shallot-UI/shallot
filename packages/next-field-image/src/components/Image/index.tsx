import { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import {
  Image as ShallotImage,
  ImageProps as ShallotImageProps,
} from '@shallot-ui/next'

import { FieldImage } from '../../types'

interface ImageProps extends Omit<ShallotImageProps, 'src'> {
  image: FieldImage
  unitWidth: number
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

export const Image: FunctionComponent<ImageProps> = (props) => {
  const theme = useTheme()
  const baseUnit = theme.gridUnits[0]

  const { unitWidth, image, transformation } = props
  const pixelWidth = unitWidth * baseUnit
  const pixelHeight = getTransformedHeight(image, pixelWidth, transformation)

  return (
    <ShallotImage
      src={image?.src}
      sizes={`${pixelWidth}px`}
      unitHeight={pixelHeight / baseUnit}
      {...props}
    />
  )
}
