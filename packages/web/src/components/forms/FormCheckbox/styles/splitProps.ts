import { makePropPuller } from '@shallot-ui/core'

import { FormCheckboxProps } from '../core/types'
import { FormCheckboxStyleProps } from './types'
import checkboxConfig from '../../../controls/Checkbox/core/config'

const splitFormCheckboxProps = (
  props: Omit<FormCheckboxProps, 'getStyles'> & FormCheckboxStyleProps,
): [Omit<FormCheckboxProps, 'getStyles'>, FormCheckboxStyleProps] => {
  const { color, size, iconSize, radius, ...rest } = props
  const [inputProps, nonStyleProps] = makePropPuller(checkboxConfig)(rest)
  return [nonStyleProps, { ...inputProps, color, size, iconSize, radius }]
}

export default splitFormCheckboxProps
