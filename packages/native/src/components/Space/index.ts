import { INTERNAL_shouldForwardProp } from '@shallot-ui/theme'
import styled from 'styled-components/native'
import { Box, BoxStyleProps } from '../Box'

export const Space = styled(Box).withConfig<BoxStyleProps>({
  shouldForwardProp: INTERNAL_shouldForwardProp,
})`
  flex-grow: 1;
`
