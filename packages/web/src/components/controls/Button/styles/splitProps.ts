import { makePropPuller } from '@shallot-ui/core'

import { ButtonProps } from '../core/types'
import buttonConfig from '../core/config'
import { ButtonStyleProps } from './types'

const splitButtonProps = (
  props: Omit<ButtonProps, 'getStyles'> & ButtonStyleProps,
): [Omit<ButtonProps, 'getStyles'>, ButtonStyleProps] => {
  const { color, outline, ...rest } = props
  const [buttonProps, nonStyleProps] = makePropPuller(buttonConfig)(rest)

  return [nonStyleProps, { ...buttonProps, color, outline }]
}

export default splitButtonProps
