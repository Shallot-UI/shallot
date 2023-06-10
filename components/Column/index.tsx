import { ComponentType } from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { ColumnProps } from './types'
export * from './types'

export const withColumnStyleProps =
  <T,>(ColumnComponent: ComponentType<T>) =>
  (props: ColumnProps<T>) =>
    (
      <ColumnComponent
        {...(omitStyleKeys(props) as T)}
        shallot={getShallotProp(props)}
      />
    )
