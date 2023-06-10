import {
  ComponentType,
  ForwardedRef,
  FunctionComponent,
  RefObject,
  forwardRef,
} from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { BoxProps } from './types'
export * from './types'

export const withBoxStyleProps = <T,>(BoxComponent: ComponentType<T>) =>
  forwardRef((props: BoxProps<T>, ref: ForwardedRef<HTMLDivElement>) => (
    <BoxComponent
      {...(omitStyleKeys(props) as T)}
      ref={ref}
      shallot={getShallotProp(props)}
    />
  )) as FunctionComponent<BoxProps<T> & { ref?: RefObject<HTMLDivElement> }>
