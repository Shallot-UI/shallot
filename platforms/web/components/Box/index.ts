import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { BoxShallot, withBoxStyleProps } from '@shallot-ui/box'

const Base = styled.div<{ shallot?: BoxShallot }>(getStyle)
export const Box = withBoxStyleProps(Base)
