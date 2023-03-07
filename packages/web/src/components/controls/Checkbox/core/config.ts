import { PropsConfig, radiusProps, unitsAroundProps } from '@shallot-ui/core'

import { CheckboxStyleProps } from '../styles/types'

const checkboxConfig: PropsConfig<CheckboxStyleProps> = {
  ...radiusProps,
  ...unitsAroundProps,
}

export default checkboxConfig
