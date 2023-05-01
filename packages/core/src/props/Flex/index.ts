import { FlexProps } from '@shallot-ui/theme'

export const direction = ({ direction }: FlexProps) =>
  direction ? `flex-direction: ${direction};` : ''

export const flex = ({ flex }: FlexProps) =>
  flex ? `flex: ${flex === true ? 1 : flex};` : ''

export const grow = ({ grow }: FlexProps) =>
  grow ? `flex-grow: ${grow === true ? 1 : grow};` : ''

export const shrink = ({ shrink }: FlexProps) =>
  shrink ? `flex-shrink: ${shrink === true ? 1 : shrink};` : ''

export const wrap = ({ wrap }: FlexProps) => `
  ${wrap === 'reverse' ? `flex-wrap: wrap-reverse;` : ''}
  ${typeof wrap === 'boolean' ? `flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};` : ''}
`
