export type TextAlignmentProps = {
  alignTextLeft?: boolean
  alignTextCenter?: boolean
  alignTextRight?: boolean
}

export const getTextAlignmentShallot = ({
  alignTextLeft,
  alignTextCenter,
  alignTextRight,
}: TextAlignmentProps) => ({
  ...(alignTextLeft && { textAlign: 'left' }),
  ...(alignTextCenter && { textAlign: 'center' }),
  ...(alignTextRight && { textAlign: 'right' }),
})
