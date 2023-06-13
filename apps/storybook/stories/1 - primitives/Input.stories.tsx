import { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { makeTheme, Input } from '@shallot-ui/web'
import { InputProps } from '@shallot-ui/input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controls / Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} as Meta<typeof Input>

interface TemplateProps {
  label: string
  args: InputProps
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<TemplateProps> = ({ label, ...args }) => {
  const [value, setValue] = useState('')
  return (
    <ThemeProvider theme={makeTheme({})}>
      <Input
        {...args}
        defaultValue={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Your Text Here"
        fullWidth
        maxUnitWidth={35}
        label="labeddddfl"
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'label',
}
