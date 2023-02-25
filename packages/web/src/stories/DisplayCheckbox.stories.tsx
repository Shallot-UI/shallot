import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Checkbox, Column, Row } from '../components'
import { DisplayCheckbox } from '../components/controls/Checkbox/display'
import { getCheckboxStyles } from '../components/controls/Checkbox/getStyles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Display Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DisplayCheckbox> = () => {
  const [value, setValue] = useState(false)
  return (
    <ThemeProvider theme={makeTheme()}>
      <Row>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles()}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({ state: { focused: true } })}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({ state: { hovered: true } })}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({
              state: { focused: true, hovered: true },
            })}
          />
        </Column>
      </Row>
      <Row>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({ state: { checked: true } })}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({
              state: { checked: true, focused: true },
            })}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({
              state: { checked: true, hovered: true },
            })}
          />
        </Column>
        <Column unitsAround={1}>
          <DisplayCheckbox
            value={value}
            onClick={() => setValue(!value)}
            styles={getCheckboxStyles({
              state: { checked: true, hovered: true, focused: true },
            })}
          />
        </Column>
      </Row>
    </ThemeProvider>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // backgroundColor: 'Shading.100',
}

export const Danger = Template.bind({})
Danger.args = {
  // color: 'Danger',
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
