import { makePropPuller } from '@shallot-ui/core'

import { CheckboxProps } from '../core/types'
import checkboxConfig from '../core/config'
import { CheckboxStyleProps } from './types'

const splitCheckboxProps = (
  props: Omit<CheckboxProps, 'getStyles'> & CheckboxStyleProps,
): [Omit<CheckboxProps, 'getStyles'>, CheckboxStyleProps] => {
  const { color, size, iconSize, radius, ...rest } = props
  const [checkboxProps, nonStyleProps] = makePropPuller(checkboxConfig)(rest)

  return [nonStyleProps, { ...checkboxProps, color, size, iconSize, radius }]
}

export default splitCheckboxProps
