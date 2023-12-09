import { StoryFn, Meta } from '@storybook/react'
import { Row, ShallotProvider, Switch } from '@shallot-ui/web'
import { useState } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Switch',
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
} as Meta<typeof Switch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Row>
        <Switch
          checked={checked}
          onChange={() => setChecked((current) => !current)}
          unitsAround={1 / 2}
          {...args}
        />
        <Switch
          checked={!checked}
          onChange={() => setChecked((current) => !current)}
          unitsAround={1 / 2}
          {...args}
        />
      </Row>
    </ShallotProvider>
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
