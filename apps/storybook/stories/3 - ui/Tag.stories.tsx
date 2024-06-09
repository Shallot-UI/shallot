import { StoryFn, Meta } from '@storybook/react'
import { Tag, ShallotProvider } from '@repo/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Tag',
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
    fontFamily: {
      control: 'select',
      options: ['Body', 'Monospace', 'Display'],
    },
    font: {
      control: 'select',
      options: ['Regular', 'Bold', 'Italic'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    letterSpacing: { control: 'select', options: ['sm', 'md', 'lg'] },
    fontSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    before: { table: { disable: true } },
    after: { table: { disable: true } },
  },
} as Meta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tag> = (args) => (
  <ShallotProvider>
    <Tag title="Hello World" unitsAround={2} {...args} />
    <Tag title="Hello World" unitsAround={2} {...args} />
    <Tag title="Hello World" unitsAround={2} {...args} />
    <Tag title="Hello World" unitsAround={2} {...args} />
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Variant = Template.bind({})
Variant.args = { variant: 'tagVariant' }

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
