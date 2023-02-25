import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { Input, Column } from '../components'
import { DisplayInput } from '../components/controls/Input/display'
import { inputStyles } from '../components/controls/Input/styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Display Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayInput> = () => (
  <ThemeProvider theme={makeTheme()}>
    <Column>
      <Column unitsAround={1}>
        <DisplayInput
          placeholder="Display Input"
          styles={inputStyles.default}
        />
      </Column>
      <Column unitsAround={1}>
        <DisplayInput
          placeholder="Display Input"
          styles={inputStyles['default:focused']}
        />
      </Column>
      <Column unitsAround={1}>
        <DisplayInput
          placeholder="Display Input"
          styles={inputStyles['default:hovered']}
        />
      </Column>
      <Column unitsAround={1}>
        <DisplayInput
          placeholder="Display Input"
          styles={inputStyles['default:hovered:focused']}
        />
      </Column>
    </Column>
  </ThemeProvider>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // backgroundColor: 'Shading.100',
}

export const Secondary = Template.bind({})
Secondary.args = {
  // backgroundColor: 'Shading.200',
}

export const Large = Template.bind({})
Large.args = {
  // backgroundColor: 'Danger.300',
  // textColor: 'Shading.500',
}

export const Small = Template.bind({})
Small.args = {
  // backgroundColor: 'Shading.400',
  // borderColor: 'Shading.500',
  // borderWidth: 2,
}
