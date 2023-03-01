import { PropsConfig } from '../../types'
import { omit } from '../omit'
import { pick } from '../pick'

// Remove all undefined values from an object
const removeUndefined = (obj: any) => {
  const newObj: any = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key]
    }
  })
  return newObj
}

export const makePropPuller =
  <T>(config: PropsConfig<T>) =>
  <P extends T>(props: P): [T, Omit<P, keyof T>] => {
    const propNames = Object.keys(config) as (keyof T)[]
    const pickedProps = removeUndefined(pick(props, propNames))
    const restProps = omit(props, propNames)
    return [pickedProps, restProps]
  }
