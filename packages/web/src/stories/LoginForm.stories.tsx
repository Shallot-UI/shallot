import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  Button,
  Column,
  Fold,
  FormCheckbox,
  FormInput,
  Input,
} from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  return (
    <ThemeProvider theme={makeTheme()}>
      <Fold alignCenter alignMiddle backgroundColor="Shading.150">
        <Column
          maxUnitWidth={30}
          unitsAround={2}
          fullWidth
          backgroundColor="Shading.100"
          radius="md"
          elevation="pressable"
          borderColor="Shading.175"
        >
          <Column unitsAround={2}>
            <FormInput
              fullWidth
              maxUnitWidth={35}
              value={email}
              setValue={setEmail}
              label="Email"
              placeholder="Type something here..."
              helperText="This is a helper text for the input."
            />
            <FormInput
              fullWidth
              maxUnitWidth={35}
              value={password}
              setValue={setPassword}
              label="Password"
              placeholder="Type something here..."
              helperText="This is a helper text for the input."
            />
            <FormCheckbox
              value={remember}
              setValue={setRemember}
              label="Remember my email address."
              unitsAbove={2}
            />
            <Button title="Sign In" radius="md" />
          </Column>
        </Column>
      </Fold>
    </ThemeProvider>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Large = Template.bind({})
Large.args = {}

export const Small = Template.bind({})
Small.args = {}
