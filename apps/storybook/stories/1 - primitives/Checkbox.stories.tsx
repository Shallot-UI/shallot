import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Checkbox, Row } from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    size: { type: 'number', min: 1, max: 5, step: 1 },
    iconSize: { control: 'number', min: 1, max: 5, step: 1 },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme({})}>
      <Row>
        <Checkbox
          unitsAround={1 / 2}
          {...args}
          value={value}
          setValue={setValue}
        />
        <Checkbox
          unitsAround={1 / 2}
          {...args}
          value={!value}
          setValue={(v) => setValue(!v)}
        />
      </Row>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
