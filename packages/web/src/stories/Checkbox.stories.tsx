import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Checkbox, CheckboxProps, Row } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme()}>
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

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'Danger',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
}
