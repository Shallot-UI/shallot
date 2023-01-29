import { css } from 'styled-components'

import { getBoxStyle } from '../../../../Box'
import { getTextStyle } from '../../../../Text'

import Label from '../components/Label'
import HelperText from '../components/HelperText'
import ErrorText from '../components/ErrorText'
import { FormControlStyleProps } from '../types'

const getStateStyles = (state?: string) => (props: FormControlStyleProps) =>
  css`
    ${getBoxStyle({
      ...props?.containerProps,
      ...(state ? props.states?.[state]?.containerProps : {}),
    })}
    ${Label} {
      ${getTextStyle({
        ...props?.labelProps,
        ...(state ? props.states?.[state]?.labelProps : {}),
      })}
    }
    ${HelperText} {
      ${getTextStyle({
        ...props?.helperTextProps,
        ...(state ? props.states?.[state]?.helperTextProps : {}),
      })}
    }
    ${ErrorText} {
      ${getTextStyle({
        ...props?.errorTextProps,
        ...(state ? props.states?.[state]?.errorTextProps : {}),
      })}
    }
  `

export default getStateStyles
