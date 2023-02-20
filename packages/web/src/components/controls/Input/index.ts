import { makeComponent } from '../../../utils/makeComponent'
import { inputConfig } from './config'

export const Input = makeComponent(
  'input',
  inputConfig,
  `display: flex; border-style: solid; outline: none;`,
)

export * from './types'
export * from './config'
