import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import {
  Row,
  Column,
  Box,
  Text,
  Fold,
  ShallotProvider,
  Switch,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Switch',
  component: Switch,
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

    // Standard switch props
    disabled: { control: 'boolean' },

    // Internal props (disabled in controls)
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as Meta<typeof Switch>

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={2} alignCenter>
          <Row unitGap={3}>
            <Column alignCenter unitGap={1}>
              <Switch
                checked={checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
            </Column>
            <Column alignCenter unitGap={1}>
              <Switch
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

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
