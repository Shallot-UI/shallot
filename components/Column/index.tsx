import { ComponentType } from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { ColumnProps, ColumnShallot } from './types'
export * from './types'

export const withColumnStyleProps =
  <T,>(ColumnComponent: ComponentType<T & { shallot?: ColumnShallot }>) =>
  (props: ColumnProps<T>) =>
    (
      <ColumnComponent
        {...(omitStyleKeys(props) as T)}
        shallot={getShallotProp(props)}
      />
    )
