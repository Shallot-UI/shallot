import styled from 'styled-components'
import { getStyle } from '@shallot-ui/core'
import { RowShallot, withRowStyleProps } from '@shallot-ui/row'

const Base = styled.div<{ shallot?: RowShallot }>(getStyle)
export const Row = withRowStyleProps(Base)
