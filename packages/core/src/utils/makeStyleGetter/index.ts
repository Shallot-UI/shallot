import { PropsConfig } from '../../types'

export const makeStyleGetter =
  <T>(config: PropsConfig<T>) =>
  (props: T) =>
    Object.values(config)
      .map(({ get }) => get(props))
      .flatMap((value) => (value ? [value] : []))
