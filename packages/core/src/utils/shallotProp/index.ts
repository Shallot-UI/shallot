import { CSSProperties, CSSPseudos, DefaultTheme } from 'styled-components'

export type ShallotProp<T> = Omit<CSSProperties, keyof T> &
  Omit<CSSPseudos, keyof T> & {
    [K in keyof T]: T[K] | ((props: { theme: DefaultTheme }) => T[K])
  }

export const getStyle =
  <T extends { shallot: {} }>({ shallot = {} }: T) =>
  ({ theme }: { theme: DefaultTheme }) =>
    Object.entries(shallot).map(([key, value]) => ({
      [key]: typeof value === 'function' ? value({ theme }) : value,
    }))
