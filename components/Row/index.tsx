import {
  ComponentType,
  ForwardedRef,
  FunctionComponent,
  RefObject,
  forwardRef,
} from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { RowProps } from './types'
export * from './types'

export const withRowStyleProps = <T,>(RowComponent: ComponentType<T>) =>
  forwardRef((props: RowProps<T>, ref: ForwardedRef<HTMLDivElement>) => (
    <RowComponent
      {...(omitStyleKeys(props) as T)}
      ref={ref}
      shallot={getShallotProp(props)}
    />
  )) as FunctionComponent<RowProps<T> & { ref?: RefObject<HTMLDivElement> }>
