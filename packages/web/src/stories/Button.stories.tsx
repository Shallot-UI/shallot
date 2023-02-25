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

export const Secondary = Template.bind({})
Secondary.args = {
  // backgroundColor: 'Shading.200',
  title: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: 'Danger.300',
  textColor: 'Shading.500',
  title: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  // backgroundColor: 'Shading.400',
  // borderColor: 'Shading.500',
  // borderWidth: 2,
  title: 'Button',
}
