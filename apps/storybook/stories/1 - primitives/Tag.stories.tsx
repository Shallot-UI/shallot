import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Tag, makeTheme } from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controls / Tag',
  component: Tag,
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
    typeface: {
      control: 'select',
      options: ['Body', 'Monospace', 'Display'],
    },
    font: {
      control: 'select',
      options: ['Regular', 'Bold', 'Italic'],
    },
    underline: { control: 'boolean' },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    letterSpacing: { control: 'select', options: ['sm', 'md', 'lg'] },
    fontSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => (
  <ThemeProvider theme={makeTheme({})}>
    <Tag label="Hello World" {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = { color: 'Primary' }

export const Success = Template.bind({})
Success.args = { color: 'Success' }

export const Warning = Template.bind({})
Warning.args = { color: 'Warning' }

export const Danger = Template.bind({})
Danger.args = { color: 'Danger' }

export const Pill = Template.bind({})
Pill.args = { radius: 'pill' }

export const Square = Template.bind({})
Square.args = { radius: 'none' }