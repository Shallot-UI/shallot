import { makeTheme, Column, GlobalStyle, Fold } from '@shallot-ui/web'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Text } from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content / Text',
  component: Text,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    typeface: {
      control: 'select',
      options: ['Body', 'Monospace', 'Display'],
    },
    font: {
      control: 'select',
      options: ['Regular', 'Bold', 'Italic'],
    },
    underline: { control: 'boolean' },
    letterSpacing: { control: 'select', options: ['sm', 'md', 'lg'] },
    lineHeight: { control: 'select', options: ['sm', 'md', 'lg'] },
    fontSize: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <ThemeProvider theme={makeTheme({})}>
    <GlobalStyle />
    <Fold alignCenter alignMiddle>
      <Column unitWidth={30}>
        <Text {...args}>
          This is {`<Text />`} component. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent convallis enim vitae tempus
          mollis. Quisque fringilla tortor risus, in elementum neque convallis
          sit amet. {JSON.stringify(args)}
        </Text>
      </Column>
    </Fold>
  </ThemeProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
