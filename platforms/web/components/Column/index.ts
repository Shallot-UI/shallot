import styled from 'styled-components'
import { ShallotProp, getStyle } from '@shallot-ui/core'
import { withColumnStyleProps } from '@shallot-ui/column'

const Base = styled.div<{ shallot?: ShallotProp }>(getStyle)
export const Column = withColumnStyleProps(Base)
