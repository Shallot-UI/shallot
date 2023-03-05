import { makeComponent } from '../../../utils/makeComponent'
import { textAreaConfig } from './config'

export const TextArea = makeComponent(
  'textarea',
  textAreaConfig,
  `
    display: flex;
    width: 100%;
    border: 1px solid transparent;
  `,
)

export * from './types'
export * from './config'
