import { TextAlignProps } from '@shallot-ui/theme'

export const getTextAlign = ({
  leftText,
  centerText,
  rightText,
  justifyText,
}: TextAlignProps = {}) => {
  if (leftText) return 'text-align: left;'
  if (centerText) return 'text-align: center;'
  if (rightText) return 'text-align: right;'
  if (justifyText) return 'text-align: justify;'
  return ''
}
