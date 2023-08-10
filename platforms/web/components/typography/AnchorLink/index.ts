import styled from 'styled-components'
import { scopeGetStyle, withTextLayoutProps } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export const AnchorLink = withTextLayoutProps(
  styled.a<{ shallot?: ShallotProp }>(scopeGetStyle('Text')),
)
