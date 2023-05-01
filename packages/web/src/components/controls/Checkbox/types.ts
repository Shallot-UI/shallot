import { FunctionComponent, SVGProps } from 'react'
import { UnitsAroundProps, RadiusProps, ColorName } from '@shallot-ui/theme'

import { BoxStyleProps, ColumnStyleProps } from '../../containers'
import { StatefulProps, StaticProps } from '../../../types/component'

export interface CheckboxComponentStyles {
  container?: ColumnStyleProps
  icon?: BoxStyleProps
}

type SharedCheckboxProps = {
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  onClick?: () => void
}

export type StaticCheckboxProps = StaticProps<
  SharedCheckboxProps,
  CheckboxComponentStyles
>

export type CheckboxState = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
  checked?: boolean
}

export type CheckboxProps = StatefulProps<
  SharedCheckboxProps & {
    value: boolean
    setValue: (value: boolean) => void
  },
  CheckboxComponentStyles,
  CheckboxState
>

export interface CheckboxStyleProps extends UnitsAroundProps, RadiusProps {
  color?: ColorName
  size?: number
  iconSize?: number
}
