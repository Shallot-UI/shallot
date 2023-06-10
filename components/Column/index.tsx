import {
  ComponentType,
  ForwardedRef,
  FunctionComponent,
  RefObject,
  forwardRef,
} from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { ColumnProps } from './types'
export * from './types'

export const withColumnStyleProps = <T,>(ColumnComponent: ComponentType<T>) =>
  forwardRef((props: ColumnProps<T>, ref: ForwardedRef<HTMLDivElement>) => (
    <ColumnComponent
      {...(omitStyleKeys(props) as T)}
      ref={ref}
      shallot={getShallotProp(props)}
    />
  )) as FunctionComponent<ColumnProps<T> & { ref?: RefObject<HTMLDivElement> }>
