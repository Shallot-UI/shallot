import { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { getColor } from '@shallot-ui/core-mixins'
import { ColorName } from '@shallot-ui/core-theme'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

type SpinnerProps = {
  color?: ColorName
  shade?: number
  size?: SizeName
}

const sizes = {
  xs: 12,
  sm: 24,
  md: 36,
  lg: 60,
  xl: 80,
} as const

type SizeName = keyof typeof sizes

const SpinnerRing: any = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = 'md' }) => sizes[size]}px;
  height: ${({ size = 'md' }) => sizes[size]}px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size = 'md' }) => Math.floor(sizes[size] * 0.8)}px;
    height: ${({ size = 'md' }) => Math.floor(sizes[size] * 0.8)}px;
    margin: ${({ size = 'md' }) => Math.ceil(sizes[size] * 0.1)}px;
    border: ${({ size = 'md' }) => Math.ceil(sizes[size] * 0.1)}px solid
      ${({ color, shade }: any) =>
        getColor(color ?? 'Shading', shade ?? 200)};
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color, shade }: any) =>
        getColor(color ?? 'Shading', shade ?? 200)}
      transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const Spinner: any = ({
  color,
  shade,
  size,
}: SpinnerProps) => (
  <SpinnerRing color={color} shade={shade} size={size}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerRing>
)
