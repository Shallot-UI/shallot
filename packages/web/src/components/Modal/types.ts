import { ReactNode } from 'react'
import { ColumnStyleProps } from '../primitives'
import { FoldStyleProps } from '../Fold'

export interface ModalComponentStyles {
  wrapper?: FoldStyleProps
  curtain?: FoldStyleProps
  container?: ColumnStyleProps
}

export interface ModalStyleProps {
  styles?: ModalComponentStyles & {
    states?: Record<string, ModalComponentStyles | undefined>
  }
}

export interface ModalProps extends ModalStyleProps, ColumnStyleProps {
  onClose?: () => void
  children: ReactNode
}
