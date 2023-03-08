import { ComponentProps, forwardRef } from 'react'
import ReactSelect, { GroupBase } from 'react-select'
import Select from 'react-select/dist/declarations/src/Select'

import Control from './components/Control'
import Menu from './components/Menu'
import Option from './components/Option'
import SingleValue from './components/SingleValue'

export const DisplayFormSelect = forwardRef<
  Select<unknown, boolean, GroupBase<unknown>>,
  ComponentProps<ReactSelect>
>((props, ref) => (
  <ReactSelect
    {...props}
    ref={ref}
    components={{
      // Placeholder,
      Control,
      SingleValue,
      Option,
      Menu,
    }}
  />
))
