import { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { makeTheme, Checkbox, Row } from '@shallot-ui/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controls / Checkbox',
  component: Checkbox,
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
      options: ['Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'pill'] },
    size: { type: 'number', min: 1, max: 5, step: 1 },
    iconSize: { control: 'number', min: 1, max: 5, step: 1 },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as Meta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider
      theme={makeTheme({
        variants: {
          Checkbox: {
            // Edit variants here.
            checkBoxVariant: {
              container: {},
              icon: {},
              state: {
                focused: {
                  container: {},
                  icon: {},
                },
                hovered: {
                  container: {},
                  icon: {},
                },
                checked: {
                  container: {},
                  icon: {},
                },
              },
            },
          },
        },
      })}
    >
      <Row>
        <Checkbox
          unitsAround={1 / 2}
          {...args}
          value={value}
          setValue={setValue}
        />
        <Checkbox
          unitsAround={1 / 2}
          {...args}
          value={!value}
          setValue={(v) => setValue(!v)}
        />
      </Row>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Variant = Template.bind({})
Variant.args = { variant: 'checkBoxVariant' }

export const Success = Template.bind({})
Success.args = { color: 'Success' }

export const Warning = Template.bind({})
Warning.args = { color: 'Warning' }

export const Danger = Template.bind({})
Danger.args = { color: 'Danger' }

export const Larger = Template.bind({})
Larger.args = { size: 3, iconSize: 2, radius: 'lg' }

export const Circular = Template.bind({})
Circular.args = { radius: 'pill', iconSize: 1 }

export const Square = Template.bind({})
Square.args = { radius: 'none' }
