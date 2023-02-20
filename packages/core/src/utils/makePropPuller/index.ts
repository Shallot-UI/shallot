import { PropsConfig } from '../../types'
import { omit } from '../omit'
import { pick } from '../pick'

export const makePropPuller =
  <T>(config: PropsConfig<T>) =>
  <P extends T>(props: P): [T, Omit<P, keyof T>] => {
    const propNames = Object.keys(config) as (keyof T)[]
    const pickedProps = pick(props, propNames)
    const restProps = omit(props, propNames)
    return [pickedProps, restProps]
  }
