import { SizingProps } from '@shallot-ui/theme'
import { getProportion } from '../../utils'

export const width = getProportion<SizingProps>('width')
export const minWidth = getProportion<SizingProps>('minWidth')
export const maxWidth = getProportion<SizingProps>('maxWidth')
export const height = getProportion<SizingProps>('height')
export const maxHeight = getProportion<SizingProps>('maxHeight')
export const minHeight = getProportion<SizingProps>('minHeight')
