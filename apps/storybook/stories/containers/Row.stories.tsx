import { DEFAULT_THEME, makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Row, Fold, Column } from '@shallot-ui/web'

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
  title: 'Containers/Row',
  component: Row,
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
} as ComponentMeta<typeof Row>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args) => (
  <ThemeProvider theme={makeTheme({})}>
    <Fold backgroundColor="Shading.150" alignCenter alignMiddle>
      <Row
        {...args}
        unitHeight={10}
        unitWidth={40}
        transition="all 0.2s ease-in-out;"
      >
        <Column
          backgroundColor="Shading.150"
          radius={args.radius}
          unitsAround={1}
          unitsRight={1 / 2}
          fullHeight
          fullWidth
        />
        <Column
          backgroundColor="Shading.150"
          radius={args.radius}
          unitsAround={1}
          unitsLeft={1 / 2}
          unitsRight={1 / 2}
          fullHeight
          fullWidth
        />
        <Column
          backgroundColor="Shading.150"
          radius={args.radius}
          unitsAround={1}
          unitsLeft={1 / 2}
          fullHeight
          fullWidth
        />
      </Row>
    </Fold>
  </ThemeProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  backgroundColor: 'Shading.100',
  radius: 'xl',
}
