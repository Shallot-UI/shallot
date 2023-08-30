import styled from 'styled-components/native'
import { scopeGetStyle, withTextLayoutProps } from '@shallot-ui/core'
import { ShallotProp } from '@shallot-ui/theme'

export const Text = withTextLayoutProps(
  styled.Text<{ shallot?: ShallotProp }>(scopeGetStyle('Text')),
)

export const H1 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H1' })(
    scopeGetStyle('Text'),
  ),
)

export const H2 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H2' })(
    scopeGetStyle('Text'),
  ),
)

export const H3 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H3' })(
    scopeGetStyle('Text'),
  ),
)

export const H4 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H4' })(
    scopeGetStyle('Text'),
  ),
)

export const H5 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H5' })(
    scopeGetStyle('Text'),
  ),
)

export const H6 = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'H6' })(
    scopeGetStyle('Text'),
  ),
)

export const P = withTextLayoutProps(
  styled.Text.attrs<{ shallot?: ShallotProp }>({ variant: 'P' })(
    scopeGetStyle('Text'),
  ),
)
