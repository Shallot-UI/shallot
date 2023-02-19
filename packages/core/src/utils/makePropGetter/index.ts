import { PropConfigs, ThemeGetter } from '../../types'

export const makePropGetter =
  <T>(config: PropConfigs<T>) =>
  (props: T): (string | ThemeGetter<T>)[] =>
    Object.values(config)
      .map(({ get }) => get(props))
      .flatMap((value) => (value ? [value] : []))
