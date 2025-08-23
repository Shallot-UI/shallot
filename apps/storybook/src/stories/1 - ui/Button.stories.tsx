import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  Button,
  Column,
  Row,
  Box,
  Text,
  Fold,
  ShallotProvider,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // General props
    color: {
      control: 'select',
      options: ['Default', 'Primary', 'Success', 'Warning', 'Danger'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    outline: { control: 'boolean' },

    // Typography props
    fontFamily: {
      control: 'select',
      options: ['Body', 'Heading'],
    },
    fontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'bold', 'black'],
    },
    letterSpacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },

    // Text props
    uppercase: { control: 'boolean' },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },

    // Padding props
    verticalUnitPadding: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },
    horizontalUnitPadding: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },

    // Variant
    variant: {
      control: 'select',
      options: ['Default'],
    },

    // Standard button props
    title: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={1} unitsAround={2}>
        <Button title="Hello World" onClick={fn()} {...args} />
        <Button disabled title="Disabled" onClick={fn()} {...args} />
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  color: 'Primary',
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'Danger',
}
