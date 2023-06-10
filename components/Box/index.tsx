import { ComponentType } from 'react'

import omitStyleKeys from './utils/omitStyleKeys'
import getShallotProp from './utils/getShallotProp'
import { BoxProps, BoxShallot } from './types'
export * from './types'

export const withBoxStyleProps =
  <T,>(BoxComponent: ComponentType<T & { shallot?: BoxShallot }>) =>
  (props: BoxProps<T>) =>
    (
      <BoxComponent
        {...(omitStyleKeys(props) as T)}
        shallot={getShallotProp(props)}
      />
    )
