import { ComponentType, FunctionComponent } from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { BoxProps } from './types'
export * from './types'

export const withBoxStyleProps =
  <T,>(BoxComponent: ComponentType<T>): FunctionComponent<BoxProps<T>> =>
  (props) =>
    (
      <BoxComponent
        {...(omitStyleKeys(props) as T)}
        shallot={getShallotProp(props)}
      />
    )
