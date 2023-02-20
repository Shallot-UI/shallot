import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

import { ColumnProps } from '../Column'

export interface ModalComponentStyles {
  wrapper?: ColumnProps & { style?: CSSObject }
  curtain?: ColumnProps & { style?: CSSObject }
  container?: ColumnProps & { style?: CSSObject }
}

export interface ModalProps extends ColumnProps {
  onClose?: () => void
  children: ReactNode

  style?: CSSObject
  styles?: ModalComponentStyles & {
    states?: Record<string, ModalComponentStyles | undefined>
  }
}
