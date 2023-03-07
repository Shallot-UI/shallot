import { makePropPuller, fontProps } from '@shallot-ui/core'

import { pullRowProps } from '../../../containers'
import { FormInputProps } from '../core/types'
import { FormInputStyleProps } from './types'

const splitFormInputProps = (
  props: Omit<FormInputProps, 'getStyles'> & FormInputStyleProps,
): [Omit<FormInputProps, 'getStyles'>, FormInputStyleProps] => {
  const [rowProps, nonRowProps] = pullRowProps(props)
  const [font, nonFontProps] = makePropPuller({ ...fontProps })(nonRowProps)

  return [nonFontProps, { ...rowProps, ...font }]
}

export default splitFormInputProps
