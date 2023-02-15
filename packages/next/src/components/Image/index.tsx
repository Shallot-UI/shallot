import { ComponentProps, FunctionComponent } from 'react'
import NextImage from 'next/image'
import { Column, ColumnStyleProps, pullColumnStyleProps } from '@shallot-ui/web'

export const Image: FunctionComponent<
  ColumnStyleProps & ComponentProps<typeof NextImage>
> = (props) => {
  const [columnStyle, rest] = pullColumnStyleProps(props)

  return (
    <Column
      {...columnStyle}
      style={{ position: 'relative', overflow: 'hidden', ...columnStyle.style }}
    >
      <NextImage {...rest} />
    </Column>
  )
}
