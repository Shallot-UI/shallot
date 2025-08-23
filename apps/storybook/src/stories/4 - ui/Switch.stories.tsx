import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Row, Column, Box, Text, Fold, ShallotProvider, Switch } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Switch',
  component: Switch,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // General props
    color: {
      control: 'select',
      options: ['Default', 'Primary', 'Success', 'Danger', 'Warning'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    
    // Standard switch props
    disabled: { control: 'boolean' },
    
    // Internal props (disabled in controls)
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as Meta<typeof Switch>

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={2} alignCenter>
          <Text fontSize="lg" fontWeight="bold">Interactive Switches</Text>
          <Row unitGap={3}>
            <Column alignCenter unitGap={1}>
              <Switch
                checked={checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
              <Text fontSize="sm" color="Shading.500">On: {checked ? 'Yes' : 'No'}</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Switch
                checked={!checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
              <Text fontSize="sm" color="Shading.500">On: {!checked ? 'Yes' : 'No'}</Text>
            </Column>
          </Row>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  color: 'Primary',
}

export const Success = Template.bind({})
Success.args = {
  color: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'Warning',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'Danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

const ColorsTemplate: StoryFn<typeof Switch> = () => {
  const [states, setStates] = useState({
    default: false,
    primary: true,
    success: false,
    warning: true,
    danger: false,
  })

  const handleChange = (key: string) => () => {
    setStates(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} alignCenter>
          <Text fontSize="xl" fontWeight="bold">Switch Colors</Text>
          <Column unitGap={2}>
            <Row alignMiddle unitGap={2}>
              <Switch
                checked={states.default}
                onChange={handleChange('default')}
                color="Default"
              />
              <Text>Default</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Switch
                checked={states.primary}
                onChange={handleChange('primary')}
                color="Primary"
              />
              <Text>Primary</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Switch
                checked={states.success}
                onChange={handleChange('success')}
                color="Success"
              />
              <Text>Success</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Switch
                checked={states.warning}
                onChange={handleChange('warning')}
                color="Warning"
              />
              <Text>Warning</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Switch
                checked={states.danger}
                onChange={handleChange('danger')}
                color="Danger"
              />
              <Text>Danger</Text>
            </Row>
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const AllColors = ColorsTemplate.bind({})

const SettingsTemplate: StoryFn<typeof Switch> = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
    marketing: true,
    beta: false,
  })

  const handleChange = (key: string) => () => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={4} maxUnitWidth={50}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">App Settings</Text>
          
          <Column unitGap={3}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">General</Text>
              <Column unitGap={2} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.notifications}
                    onChange={handleChange('notifications')}
                    color="Primary"
                  />
                  <Column>
                    <Text fontWeight="medium">Push Notifications</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Receive notifications for important updates
                    </Text>
                  </Column>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.darkMode}
                    onChange={handleChange('darkMode')}
                    color="Success"
                  />
                  <Column>
                    <Text fontWeight="medium">Dark Mode</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Use dark theme throughout the app
                    </Text>
                  </Column>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.autoSave}
                    onChange={handleChange('autoSave')}
                    color="Success"
                  />
                  <Column>
                    <Text fontWeight="medium">Auto Save</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Automatically save your work every 5 minutes
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Box>
            
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">Privacy</Text>
              <Column unitGap={2} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.analytics}
                    onChange={handleChange('analytics')}
                    color="Warning"
                  />
                  <Column>
                    <Text fontWeight="medium">Analytics</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Help us improve by sharing usage data
                    </Text>
                  </Column>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.marketing}
                    onChange={handleChange('marketing')}
                    color="Warning"
                  />
                  <Column>
                    <Text fontWeight="medium">Marketing Communications</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Receive promotional emails and updates
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Box>
            
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">Advanced</Text>
              <Column unitGap={2} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Switch
                    checked={settings.beta}
                    onChange={handleChange('beta')}
                    color="Danger"
                  />
                  <Column>
                    <Text fontWeight="medium">Beta Features</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Enable experimental features (may be unstable)
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Box>
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const SettingsExample = SettingsTemplate.bind({})
