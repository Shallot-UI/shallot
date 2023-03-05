import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { FormInput } from '../components'

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
    // value: { table: { disable: true } },
    // setValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof FormInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormInput> = () => {
  const [value, setValue] = useState('')
  return (
    <ThemeProvider theme={makeTheme({})}>
      <FormInput
        fullWidth
        maxUnitWidth={35}
        value={value}
        setValue={setValue}
        label="My test input."
        placeholder="Type something here..."
        helperText="This is a helper text for the input."
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
