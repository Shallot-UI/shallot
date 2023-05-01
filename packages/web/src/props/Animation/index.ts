import { AnimationProps } from '@shallot-ui/theme'
import { css } from 'styled-components'

import fadeInKeyframes from './keyframes/fadeIn'
import fadeInDownKeyframes from './keyframes/fadeInDown'
import fadeInUpKeyframes from './keyframes/fadeInUp'

export const animationProps = {
  animation: ({ animation }: AnimationProps) => {
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
  },
}
