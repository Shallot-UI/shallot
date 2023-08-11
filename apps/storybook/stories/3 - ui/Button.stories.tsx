import { StoryFn, Meta } from '@storybook/react'
import {
  Button,
  Column,
  Fold,
  getColor,
  getRadius,
  ShallotProvider,
} from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: ['Shading', 'Primary', 'Success', 'Danger', 'Warning'],
    },
    alignText: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    fontFamily: {
      control: 'select',
      options: ['Body', 'Monospace', 'Display'],
    },
    font: {
      control: 'select',
      options: ['Regular', 'Bold', 'Italic'],
    },
    underline: { control: 'boolean' },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    letterSpacing: { control: 'select', options: ['sm', 'md', 'lg'] },
    fontSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
    verticalUnitPadding: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
    },
    horizontalUnitPadding: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
    },
    unitsAround: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
    },
    fullWidth: { control: 'boolean' },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => (
  <ShallotProvider
    theme={{
      variants: {
        Button: {
          // Edit variants here.
          buttonVariant1: {
            container: {},
            title: {},
            state: {
              focused: {
                container: {},
              },
              pressed: {
                container: {},
              },
              hovered: {
                container: {},
              },
            },
          },
        },
      },
    }}
  >
    <Fold alignCenter alignMiddle>
      <Column
        fullWidth
        maxUnitWidth={30}
        shallot={{
          backgroundColor: getColor('Shading', 200),
          borderRadius: getRadius('xl'),
        }}
      >
        <Button title="Hello World" fullWidth {...args} />
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Variant = Template.bind({})
Variant.args = {
  variant: 'buttonVariant1',
}

export const Success = Template.bind({})
Success.args = { color: 'Success' }

export const Warning = Template.bind({})
Warning.args = { color: 'Warning' }

export const Danger = Template.bind({})
Danger.args = { color: 'Danger' }

export const Pill = Template.bind({})
Pill.args = { radius: 'pill' }

export const Square = Template.bind({})
Square.args = { radius: 'none' }

export const Outline = Template.bind({})
Outline.args = { outline: true }

export const FontFamily = Template.bind({})
FontFamily.args = { fontFamily: 'Monospace' }
