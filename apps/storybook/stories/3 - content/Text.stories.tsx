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
  H4,
  H5,
  H6,
  P,
} from '@shallot-ui/web'
import { StoryFn, Meta } from '@storybook/react'

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
  <ShallotProvider
    theme={{
      variants: {
        Text: {
          H1: {
            fontFamily: getFontFamily('Body', 'Bold'),
            fontSize: getFontSize('xl'),
            color: getColor('Shading', 800),
          },
          H2: {
            fontFamily: getFontFamily('Body', 'Bold'),
            fontSize: getFontSize('lg'),
            color: getColor('Shading', 800),
          },
          H3: {
            fontFamily: getFontFamily('Body', 'Bold'),
            fontSize: getFontSize('md'),
            color: getColor('Shading', 800),
          },
          P: {
            fontFamily: getFontFamily('Body', 'Regular'),
            fontSize: getFontSize('md'),
            color: getColor('Shading', 800),
          },
        },
      },
    }}
  >
    <GlobalStyle />
    <Fold alignCenter alignMiddle>
      <Column unitWidth={40}>
        <H1 {...args}>Heading 1</H1>
        <H2 {...args}>Heading 2</H2>
        <H3 {...args}>Heading 3</H3>
        <P {...args}>Paragraph</P>
        <Text {...args}>Text</Text>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
