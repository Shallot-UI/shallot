import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { FormCheckbox } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Form Checkbox',
  component: FormCheckbox,
} as ComponentMeta<typeof FormCheckbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormCheckbox> = () => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme()}>
      <FormCheckbox
        fullWidth
        maxUnitWidth={35}
        value={value}
        setValue={setValue}
        label="My test checkbox."
        helperText="This is a helper text for the checkbox."
      />
      <FormCheckbox
        unitsAbove={2}
        fullWidth
        maxUnitWidth={35}
        required
        value={value}
        setValue={setValue}
        label="My test checkbox."
        helperText="This is a helper text for the checkbox."
      />
    </ThemeProvider>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {}

export const Small = Template.bind({})
Small.args = {}
