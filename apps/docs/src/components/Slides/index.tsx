import { FC, ReactNode } from 'react'
import S from './styles'

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Wrapper>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
)

const Slide: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Slide>{children}</S.Slide>
)

export const Slides = {
  Container,
  Slide,
}
