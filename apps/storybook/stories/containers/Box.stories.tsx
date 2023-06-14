import { StoryFn, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import {
  DEFAULT_THEME,
  makeTheme,
  Box,
  Fold,
  Column,
  getColor,
} from '@shallot-ui/web'

const allColorNames = Object.keys(DEFAULT_THEME.colors)
  .map((color) => {
    // Map doesn't properly infer the type of the keys in the object
    const typedColor = color as keyof typeof DEFAULT_THEME.colors
    // Return the name of all the shades of the color (e.g. 'Primary.100')
    return Object.keys(DEFAULT_THEME.colors[typedColor]).map(
      (shade) => `${color}.${shade}`,
    )
  })
  .flat()

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Containers/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'select', options: allColorNames },
    borderColor: { control: 'select', options: allColorNames },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'pill'] },
  },
} as Meta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Box> = (args) => (
  <ThemeProvider theme={makeTheme({})}>
    <Box
      shallot={{
        backgroundColor: getColor('Shading', 150),
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        {...args}
        unitHeight={10}
        unitWidth={10}
        transition="all 0.2s ease-in-out;"
      />
    </Box>
  </ThemeProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: 'Shading.100',
  radius: 'xl',
  elevation: 'pressable',
}
