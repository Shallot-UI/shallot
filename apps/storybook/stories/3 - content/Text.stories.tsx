import {
  makeTheme,
  Column,
  GlobalStyle,
  Fold,
  getColor,
  getFontSize,
  getTypeface,
} from '@shallot-ui/web'
import { StoryFn, Meta } from '@storybook/react'
import { Text, ShallotProvider } from '@shallot-ui/web'

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
} as Meta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Text> = (args) => (
  <ShallotProvider
    theme={{
      variants: {
        Text: {
          H1: {
            ...getTypeface('Body', 'Bold'),
            fontSize: getFontSize('xl'),
            color: getColor('Shading', 800),
          },
          H2: {
            ...getTypeface('Body', 'Bold'),
            fontSize: getFontSize('lg'),
            color: getColor('Shading', 800),
          },
        },
      },
    }}
  >
    <GlobalStyle />
    <Fold alignCenter alignMiddle>
      <Column unitWidth={20}>
        <Text variant="H1" {...args}>
          Heading 1
        </Text>
        <Text variant="H2" {...args}>
          Heading 2
        </Text>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
