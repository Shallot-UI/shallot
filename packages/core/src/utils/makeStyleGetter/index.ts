import { CSSObject } from 'styled-components'
import { PropsConfig, ThemeGetter } from '../../types'

export const makeStyleGetter =
  <T>(config: PropsConfig<T>) =>
  (props: T): (string | ThemeGetter<T> | CSSObject)[] =>
    Object.values(config)
      .map(({ get }) => get(props))
      .flatMap((value) => (value ? [value] : []))
