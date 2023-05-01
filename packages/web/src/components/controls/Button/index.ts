import { withStyleProps } from '@shallot-ui/core'

import { StatefulButton } from './Components'
import { ButtonProps, ButtonStyleProps } from './types'

export * from './Components'
export * from './types'

export const Button = withStyleProps<
  ButtonStyleProps,
  ButtonProps,
  {
    verticalUnitPadding?: number
    horizontalUnitPadding?: number
    alignText?: 'left' | 'center' | 'right' | 'justify'
  }
>(StatefulButton, (props) => )
