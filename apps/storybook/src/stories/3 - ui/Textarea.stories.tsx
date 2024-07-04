import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Fold, Textarea, Row, ShallotProvider } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Textarea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['Shading', 'Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} as Meta<typeof Textarea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Textarea> = (args) => {
  const [value, setValue] = useState('')

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Row maxUnitWidth={40} fullWidth alignCenter>
          <Textarea
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

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  color: 'Success',
}
