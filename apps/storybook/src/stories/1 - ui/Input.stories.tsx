import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {
  Fold,
  Input,
  Row,
  Column,
  Box,
  Text,
  Button,
  ShallotProvider,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Input',
  component: Input,
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
      options: [
        'Default',
        'Primary',
        'Success',
        'Danger',
        'Warning',
        'Shading',
      ],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },

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

    // Variant
    variant: {
      control: 'select',
      options: ['Default'],
    },

    // Standard input props
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },

    // Internal props (disabled in controls)
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} as Meta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Row maxUnitWidth={40} fullWidth alignCenter>
          <Input
            {...args}
            defaultValue={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder="Your Text Here"
          />
        </Row>
      </Fold>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
