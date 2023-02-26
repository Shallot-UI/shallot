import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Button, ButtonProps } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={makeTheme()}>
    <Button {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // backgroundColor: 'Shading.100',
  title: 'Button',
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
  title: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'Danger',
  title: 'Button',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
  title: 'Button',
}
