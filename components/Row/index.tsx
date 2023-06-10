import { ComponentType } from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { RowProps } from './types'
export * from './types'

export const withRowStyleProps =
  <T,>(RowComponent: ComponentType<T>) =>
  (props: RowProps<T>) =>
    (
      <RowComponent
        {...(omitStyleKeys(props) as T)}
        shallot={getShallotProp(props)}
      />
    )
