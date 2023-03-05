import { makeTheme } from '@shallot-ui/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  AnchorLink,
  Button,
  Column,
  Fold,
  FormCheckbox,
  FormInput,
  Input,
  Row,
  Space,
  Text,
} from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Login Form',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  return (
    <ThemeProvider theme={makeTheme({})}>
      <Fold alignCenter alignMiddle backgroundColor="Shading.125">
        <Column maxUnitWidth={32} unitsAround={2} fullWidth>
          <Column
            radius="md"
            backgroundColor="Shading.100"
            borderWidth={1}
            borderColor="Shading.150"
          >
            <Column unitsAround={3}>
              <Text
                typeface="Body"
                font="Bold"
                fontSize="lg"
                unitsBelow={3}
                centerText
                fullWidth
              >
                Sign In
              </Text>
              <FormInput
                label="Email"
                placeholder="you@email.com"
                type="email"
                value={email}
                setValue={setEmail}
                typeface="Monospace"
                unitsBelow={2}
                fullWidth
              />
              <FormInput
                label="Password"
                placeholder="••••••••"
                type="password"
                value={password}
                setValue={setPassword}
                typeface="Monospace"
                unitsBelow={2}
                fullWidth
              />
              <Row>
                <FormCheckbox
                  label="Remember me"
                  value={remember}
                  setValue={setRemember}
                  unitsBelow={2}
                />
                <Space />
                <AnchorLink href="#" typeface="Body">
                  Forgot password?
                </AnchorLink>
              </Row>
              <Button title="Sign In" radius="md" />
            </Column>
          </Column>
          <Row alignCenter unitsAround={1}>
            <Text unitsAround={1 / 2} typeface="Body" textColor="Shading.300">
              Don't have an account?
            </Text>
            <AnchorLink href="#" unitsAround={1 / 2} typeface="Body">
              Sign Up
            </AnchorLink>
          </Row>
        </Column>
      </Fold>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
