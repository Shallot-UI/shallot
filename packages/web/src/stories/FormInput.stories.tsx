import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Column, FormInput } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Form Input',
  component: FormInput,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // color: {
    //   control: 'select',
    //   options: ['Primary', 'Success', 'Danger', 'Warning'],
    // },
    // radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    errorText: { control: 'text' },
    // setValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof FormInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormInput> = (args) => {
  const [value, setValue] = useState('')
  return (
    <ThemeProvider theme={makeTheme({})}>
      <Column unitWidth={40}>
        <FormInput
          fullWidth
          maxUnitWidth={35}
          label="My test input."
          placeholder="Type something here..."
          helperText="This is a helper text for the input."
          {...args}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </Column>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
