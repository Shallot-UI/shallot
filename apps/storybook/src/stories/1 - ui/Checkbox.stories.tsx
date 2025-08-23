import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {
  Checkbox,
  Row,
  Column,
  Box,
  Text,
  Button,
  Fold,
  ShallotProvider,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Checkbox',
  component: Checkbox,
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
      options: ['Default', 'Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },

    // Sizing props
    size: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    iconSize: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.25 },
    },

    // Layout props
    unitsAround: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },

    // Variant
    variant: {
      control: 'select',
      options: ['Default', 'checkBoxVariant'],
    },

    // Standard checkbox props
    disabled: { control: 'boolean' },

    // Internal props (disabled in controls)
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={2} alignCenter>
          <Row unitGap={2}>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={!checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
            </Column>
          </Row>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

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
