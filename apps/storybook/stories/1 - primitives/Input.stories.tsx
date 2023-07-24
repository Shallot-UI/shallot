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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (...args) => {
  const [value, setValue] = useState('')
  return (
    <ThemeProvider
      theme={makeTheme({
        variants: {
          Input: {
            inputVariant: {
              container: {
                state: {
                  focused: {},
                  error: {},
                },
              },
              input: {},
            },
          },
        },
      })}
    >
      <Input
        {...args}
        variant="inputVariant"
        defaultValue={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Your Text Here"
        label="label"
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const Variant = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Variant.args = {
  variant: 'inputVariant',
}
