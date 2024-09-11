import { ComponentProps, FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import NextImage from 'next/image'
import { ShallotProp, Theme } from '@shallot-ui/core-theme'
import { withBoxLayoutProps } from '@shallot-ui/core-props'
import { withBoxShallot } from '@shallot-ui/platform-react'

type NextImageProps = ComponentProps<typeof NextImage> & {
  src?: string
}

export interface ImageProps extends NextImageProps {
  shallot?: ShallotProp
  unitWidth?: number
  unitHeight?: number
}

const Container = withBoxShallot('div')
const InnerImage = withBoxShallot(NextImage)

const Base: FunctionComponent<ImageProps> = (props) => {
  const { ref, shallot, unitWidth, unitHeight, src, ...rest } = props
  const theme = useTheme() as Theme

  const width =
    typeof shallot?.width === 'function'
      ? shallot.width({ theme })
      : shallot?.width

  const height =
    typeof shallot?.height === 'function'
      ? shallot.height({ theme })
      : shallot?.height

  return (
    <Container shallot={shallot}>
      {/* We need to pass the width and height props to the NextImage component
        so that it can calculate the aspect ratio of the image. Note that these
        values might be overridden by the `{...rest}` props. */}
      <InnerImage
        width={width as number | undefined}
        height={height as number | undefined}
        src={src}
        {...rest}
      />
    </Container>
  )
}

export const Image = withBoxLayoutProps(Base, { flexDirection: 'column' })
