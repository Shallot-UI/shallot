import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { makeTheme, Switch, Row } from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controls / Switch',
  component: Switch,
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
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof Switch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme({})}>
      <Row>
        <Switch
          unitsAround={1 / 2}
          {...args}
          value={value}
          onChangeValue={setValue}
        />
        <Switch
          inverted
          unitsAround={1 / 2}
          {...args}
          value={value}
          onChangeValue={setValue}
        />
      </Row>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Success = Template.bind({})
Success.args = { color: 'Success' }

export const Warning = Template.bind({})
Warning.args = { color: 'Warning' }

export const Danger = Template.bind({})
Danger.args = { color: 'Danger' }

export const Larger = Template.bind({})
Larger.args = { size: 3 }
