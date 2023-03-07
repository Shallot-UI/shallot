import { useState } from 'react'
import { makeTheme } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FormCheckbox } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Form Checkbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof FormCheckbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormCheckbox> = () => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme({})}>
      <FormCheckbox
        fullWidth
        maxUnitWidth={35}
        value={value}
        setValue={setValue}
        label="My test checkbox."
        helperText="This is a helper text for the checkbox."
      />
      <FormCheckbox
        unitsAbove={2}
        fullWidth
        maxUnitWidth={35}
        required
        value={!value}
        setValue={(v: boolean) => setValue(!v)}
        label="My test checkbox."
        helperText="This is a helper text for the checkbox."
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
