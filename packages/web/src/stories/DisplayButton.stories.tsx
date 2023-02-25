import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { Column, DisplayButtonProps, Row } from '../components'

import { DisplayButton } from '../components/controls/Button/display'
import { buttonStyles } from '../components/controls/Button/styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Display Button',
  component: DisplayButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DisplayButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayButton> = (
  args: DisplayButtonProps,
) => (
  <ThemeProvider theme={makeTheme()}>
    <Row>
      <Column unitsAround={1}>
        <DisplayButton title="Hello Button" styles={buttonStyles.default} />
      </Column>
      <Column unitsAround={1}>
        <DisplayButton
          title="Hello Button"
          styles={buttonStyles['default:focused']}
        />
      </Column>
      <Column unitsAround={1}>
        <DisplayButton
          title="Hello Button"
          styles={buttonStyles['default:hovered']}
        />
      </Column>
      <Column unitsAround={1}>
        <DisplayButton
          title="Hello Button"
          styles={buttonStyles['default:hovered:pressed']}
        />
      </Column>
    </Row>
  </ThemeProvider>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {}

export const Small = Template.bind({})
Small.args = {}
