import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {
  Spinner,
  Column,
  Row,
  Text,
  Box,
  ShallotProvider,
} from '@shallot-ui/next'

export default {
  title: '💎 UI / Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Warning', 'Danger', 'Shading'],
    },
    shade: {
      control: { type: 'number', min: 100, max: 900, step: 100 },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args) => (
  <ShallotProvider>
    <Column alignCenter alignMiddle style={{ minHeight: '100vh' }}>
      <Spinner {...args} />
    </Column>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'Primary',
  shade: 500,
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
  shade: 500,
}
