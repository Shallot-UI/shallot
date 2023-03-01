import { css } from 'styled-components'
import { makePropPuller, makeStyleGetter, PropsConfig } from '@shallot-ui/core'

export interface UserSelectProps {
  userSelect?:
    | 'auto'
    | 'none'
    | 'text'
    | 'contain'
    | 'all'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export const userSelectProps: PropsConfig<UserSelectProps> = {
  userSelect: {
    get: ({ userSelect }: UserSelectProps) =>
      userSelect
        ? css`
            user-select: ${userSelect};
          `
        : '',
  },
}

export const pullUserSelectProps = makePropPuller(userSelectProps)
export const getUserSelectStyle = makeStyleGetter(userSelectProps)
