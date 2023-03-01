import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Button, ButtonProps, Column, Row } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={makeTheme()}>
    <Row>
      <Column>
        <Button {...args} unitsAround={1} radius="sm" />
        <Button {...args} unitsAround={1} radius="md" />
        <Button {...args} unitsAround={1} radius="lg" />
        <Button {...args} unitsAround={1} radius="pill" />
      </Column>
      <Column>
        <Button {...args} unitsAround={1} typeface="Monospace" radius="sm" />
        <Button {...args} unitsAround={1} typeface="Monospace" radius="md" />
        <Button {...args} unitsAround={1} typeface="Monospace" radius="lg" />
        <Button {...args} unitsAround={1} typeface="Monospace" radius="pill" />
      </Column>
      <Column>
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="sm"
          alignMiddle
          startAdornment={
            <Column
              unitsLeft={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="md"
          alignMiddle
          startAdornment={
            <Column
              unitsLeft={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="lg"
          alignMiddle
          startAdornment={
            <Column
              unitsLeft={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="pill"
          alignMiddle
          startAdornment={
            <Column
              unitsLeft={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
      </Column>
      <Column>
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="sm"
          alignMiddle
          endAdornment={
            <Column
              unitsRight={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="md"
          alignMiddle
          endAdornment={
            <Column
              unitsRight={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="lg"
          alignMiddle
          endAdornment={
            <Column
              unitsRight={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
        <Button
          {...args}
          unitsAround={1}
          typeface="Monospace"
          radius="pill"
          alignMiddle
          endAdornment={
            <Column
              unitsRight={1 / 2}
              unitHeight={3 / 2}
              unitWidth={3 / 2}
              backgroundColor="Shading.100"
              radius="pill"
            />
          }
        />
      </Column>
      <Column>
        <Button {...args} unitsAround={1} outline radius="sm" />
        <Button {...args} unitsAround={1} outline radius="md" />
        <Button {...args} unitsAround={1} outline radius="lg" />
        <Button {...args} unitsAround={1} outline radius="pill" />
      </Column>
      <Column>
        <Button {...args} unitsAround={1} underline uppercase radius="sm" />
        <Button {...args} unitsAround={1} underline uppercase radius="md" />
        <Button {...args} unitsAround={1} underline uppercase radius="lg" />
        <Button {...args} unitsAround={1} underline uppercase radius="pill" />
      </Column>
    </Row>
  </ThemeProvider>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // backgroundColor: 'Shading.100',
  title: 'Button',
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
  title: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'Danger',
  title: 'Button',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
  title: 'Button',
}
