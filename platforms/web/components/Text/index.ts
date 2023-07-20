import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

const RawText = styled.span(getStyle)
export const Text = withTextStyleProps(RawText)
