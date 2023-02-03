import { css } from 'styled-components'
import { AnimationProps } from '@shallot-ui/theme'

import fadeInKeyframes from './keyframes/fadeIn'
import fadeInUpKeyframes from './keyframes/fadeInUp'
import fadeInDownKeyframes from './keyframes/fadeInDown'

export const getAnimation =
  ({ animation }: AnimationProps) =>
  () => {
    if (animation === 'fadeIn') {
      return css`
        animation: ${fadeInKeyframes} 350ms ease-in-out;
      `
    } else if (animation === 'fadeInUp') {
      return css`
        animation: ${fadeInUpKeyframes} 350ms ease-in-out;
      `
    } else if (animation === 'fadeInDown') {
      return css`
        animation: ${fadeInDownKeyframes} 350ms ease-in-out;
      `
    }

    return ''
  }
