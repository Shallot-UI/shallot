import { makeTheme, Column, GlobalStyle } from '@shallot-ui/web'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FormSelect } from '@shallot-ui/react-select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {},
} as ComponentMeta<typeof FormSelect>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSelect> = () => {
  const [value, setValue] = useState<string | string[]>('')
  return (
    <ThemeProvider theme={makeTheme({})}>
      <GlobalStyle />
      <Column unitWidth={30}>
        <FormSelect
          label="Testing"
          helperText="This is a test"
          errorText="This is an error"
          name="test"
          value={'test'}
          options={[
            { value: 'test', label: 'Test' },
            { value: 'test2', label: 'Test 2' },
          ]}
          onChangeValue={setValue}
          // fullWidth
        />
      </Column>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
