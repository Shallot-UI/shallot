import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { withColumnStyleProps, ColumnShallot } from '@shallot-ui/column'

const Base = styled.div<{ shallot?: ColumnShallot }>(getStyle)
export const Column = withColumnStyleProps(Base)
