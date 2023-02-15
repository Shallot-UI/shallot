import { ComponentProps, FunctionComponent } from 'react'
import NextImage from 'next/image'
import { Column, ColumnStyleProps, pullColumnStyleProps } from '@shallot-ui/web'
import { useTheme } from 'styled-components'

type NextImageProps = ComponentProps<typeof NextImage>

export interface ImageProps extends NextImageProps, ColumnStyleProps {}

export const Image: FunctionComponent<ImageProps> = (props) => {
  const theme = useTheme()
  const [columnStyle, rest] = pullColumnStyleProps(props)

  // If the user has specified a unitWidth, we need to convert it to a pixel width
  // for the NextImage component.
  const width =
    columnStyle?.unitWidth && columnStyle.unitWidth * theme.gridUnits[0]

  // If the user has specified a unitHeight, we need to convert it to a pixel height
  // for the NextImage component.
  const height =
    columnStyle?.unitHeight && columnStyle.unitHeight * theme.gridUnits[0]

  return (
    <Column
      {...columnStyle}
      style={{ position: 'relative', overflow: 'hidden', ...columnStyle.style }}
    >
      {/* We need to pass the width and height props to the NextImage component
      so that it can calculate the aspect ratio of the image. Note that these
      values might be overridden by the `{...rest}` props. */}
      <NextImage width={width} height={height} {...rest} />
    </Column>
  )
}
