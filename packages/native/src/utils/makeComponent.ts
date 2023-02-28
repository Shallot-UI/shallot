import { ComponentType } from 'react'
import { makeStyleGetter, PropsConfig } from '@shallot-ui/core'
import styled from 'styled-components/native'

export const makeComponent = <T extends {}, C extends ComponentType<any>>(
  component: C,
  config: PropsConfig<T>,
  baseStyles?: string,
) => styled(component)`
  ${baseStyles};
  ${makeStyleGetter(config)}
`
