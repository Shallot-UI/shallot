import styled from 'styled-components/native'
import { getStyle } from '@shallot-ui/core'
import { ColumnShallot, withColumnStyleProps } from '@shallot-ui/column'

const RawColumn = styled.View<{ shallot?: ColumnShallot }>(getStyle)
export const Column = withColumnStyleProps(RawColumn)
