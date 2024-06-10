import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  Button,
  Column,
  Fold,
  ShallotProvider,
  getColor,
  getLetterSpacing,
  getRadius,
  getUnits,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: ['Default', 'Success', 'Warning', 'Danger'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={1} unitsAround={2}>
        <Button title="Hello World" onClick={fn()} {...args} />
        <Button disabled title="Disabled" onClick={fn()} {...args} />
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const CustomStyling = Template.bind({})
CustomStyling.args = {
  shallot: {
    Container: {
      backgroundColor: getColor('Primary', 500),
      paddingTop: getUnits(1 / 4),
      paddingBottom: getUnits(1 / 4),
      paddingLeft: getUnits(3 / 2),
      paddingRight: getUnits(3 / 2),
      borderRadius: getRadius('pill'),
      borderColor: 'transparent',
      boxShadow: 'none',
    },
    Title: {
      color: getColor('Shading', 50),
      letterSpacing: getLetterSpacing('md'),
      lineHeight: '24px',
      fontWeight: 500,
      margin: 0,
    },
    ':hover': {
      Container: {
        backgroundColor: getColor('Primary', 600),
        borderColor: 'transparent',
        boxShadow: 'none',
      },
    },
    ':active': {
      Container: {
        backgroundColor: getColor('Primary', 700),
        borderColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
}
