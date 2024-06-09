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
} from '@repo/web'

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
  <ShallotProvider
    theme={{
      variants: {
        Text: {
          H1: {
            fontFamily: getFontFamily('Monospace'),
            fontWeight: 'bold',
            fontSize: getFontSize('xl'),
            color: getColor('Shading', 800),
          },
          H2: {
            fontFamily: getFontFamily('Body'),
            fontSize: getFontSize('lg'),
            color: getColor('Shading', 800),
          },
          H3: {
            fontFamily: getFontFamily('Body'),
            fontSize: getFontSize('md'),
            color: getColor('Shading', 800),
          },
          P: {
            fontFamily: getFontFamily('Body'),
            fontSize: getFontSize('md'),
            color: getColor('Shading', 800),
          },
          Label: {
            fontFamily: getFontFamily('Body'),
            fontSize: getFontSize('sm'),
            color: getColor('Shading', 400),
          },
        },
      },
    }}
  >
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
