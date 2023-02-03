import { UnderlineProps } from '@shallot-ui/theme'

export const getUnderline = ({ underline }: UnderlineProps = {}) => {
  if (typeof underline === 'boolean') {
    return `text-decoration: ${underline === true ? 'underline' : 'none'};`
  } else if (underline === 'under') {
    return 'text-decoration: underline; text-underline-position: under;'
  }
  return ''
}
