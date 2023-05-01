import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

import { ColumnStyleProps } from '../Column'

export interface ModalComponentStyles {
  wrapper?: ColumnStyleProps & { style?: CSSObject }
  curtain?: ColumnStyleProps & { style?: CSSObject }
  container?: ColumnStyleProps & { style?: CSSObject }
}

export interface ModalProps extends ColumnStyleProps {
  onClose?: () => void
  children: ReactNode
  style?: CSSObject
  styles?: ModalComponentStyles & {
    states?: Record<string, ModalComponentStyles | undefined>
  }
}
