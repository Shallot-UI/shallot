import { StoryFn, Meta } from '@storybook/react'
import {
  Column,
  GlobalStyle,
  Fold,
  getColor,
  getFontSize,
  getFontFamily,
  Text,
  ShallotProvider,
  H1,
  H2,
  H3,
  P,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '📐 Layout / Text',
  component: Text,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    fontFamily: {
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
  <ShallotProvider>
    <GlobalStyle />
    <Fold alignCenter alignMiddle>
      <Column unitWidth={40}>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <P>Paragraph</P>
        <Text {...args}>Text</Text>
        <Text variant="Label">Label Variant</Text>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
