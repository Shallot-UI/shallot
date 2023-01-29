import React, { FunctionComponent } from 'react'
import styled, { DefaultTheme, keyframes } from 'styled-components'

import { color as getColor } from '../../props'

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const DEFAULT_COLOR: keyof DefaultTheme['colors'] = 'Shading.200'
const sizes = {
  xs: 12,
  sm: 24,
  md: 36,
  lg: 60,
  xl: 80,
} as const
type SizeName = keyof typeof sizes

const SpinnerRing = styled.div<{
  color?: keyof DefaultTheme['colors']
  size?: SizeName
}>`
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
      ${({ color }) => getColor(color ?? DEFAULT_COLOR)};
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => getColor(color ?? DEFAULT_COLOR)} transparent
      transparent transparent;
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

interface SpinnerProps {
  color?: keyof DefaultTheme['colors']
  size?: SizeName
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ color, size }) => (
  <SpinnerRing color={color} size={size}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </SpinnerRing>
)
