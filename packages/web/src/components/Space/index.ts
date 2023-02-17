import styled from 'styled-components'
import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'

import { Box, BoxStyleProps } from '../primitives'

export const Space = styled(Box).withConfig<BoxStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  flex: 1;
`
