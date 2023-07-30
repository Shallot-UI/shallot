import styled from 'styled-components'
import { scopeGetStyle } from '@shallot-ui/core'
import { withTextStyleProps } from '@shallot-ui/text'

export const Text = withTextStyleProps(styled.span(scopeGetStyle('Text')))

export const H1 = withTextStyleProps(
  styled.h1.attrs({ variant: 'H1' })(scopeGetStyle('Text')),
)

export const H2 = withTextStyleProps(
  styled.h2.attrs({ variant: 'H2' })(scopeGetStyle('Text')),
)

export const H3 = withTextStyleProps(
  styled.h3.attrs({ variant: 'H3' })(scopeGetStyle('Text')),
)

export const H4 = withTextStyleProps(
  styled.h4.attrs({ variant: 'H4' })(scopeGetStyle('Text')),
)

export const H5 = withTextStyleProps(
  styled.h5.attrs({ variant: 'H5' })(scopeGetStyle('Text')),
)

export const H6 = withTextStyleProps(
  styled.h6.attrs({ variant: 'H6' })(scopeGetStyle('Text')),
)

export const P = withTextStyleProps(
  styled.p.attrs({ variant: 'P' })(scopeGetStyle('Text')),
)
