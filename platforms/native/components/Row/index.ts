import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { RowShallot, withRowStyleProps } from '@shallot-ui/row'

const RawRow = styled.View<{ shallot?: RowShallot }>(getStyle)
export const Row = withRowStyleProps(RawRow)
