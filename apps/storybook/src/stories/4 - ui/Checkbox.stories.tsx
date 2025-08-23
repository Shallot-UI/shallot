import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Checkbox, Row, Column, Box, Text, Button, Fold, ShallotProvider } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Checkbox',
  component: Checkbox,
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
    
    // Sizing props
    size: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    iconSize: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.25 },
    },
    
    // Layout props
    unitsAround: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },
    
    // Variant
    variant: {
      control: 'select',
      options: ['Default', 'checkBoxVariant'],
    },
    
    // Standard checkbox props
    disabled: { control: 'boolean' },
    
    // Internal props (disabled in controls)
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={2} alignCenter>
          <Text fontSize="lg" fontWeight="bold">Interactive Checkboxes</Text>
          <Row unitGap={2}>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
              <Text fontSize="sm" color="Shading.500">Checked: {checked ? 'Yes' : 'No'}</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={!checked}
                onChange={() => setChecked((current) => !current)}
                {...args}
              />
              <Text fontSize="sm" color="Shading.500">Checked: {!checked ? 'Yes' : 'No'}</Text>
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

export const Large = Template.bind({})
Large.args = {
  size: 3,
  iconSize: 2,
}

export const Small = Template.bind({})
Small.args = {
  size: 1.5,
  iconSize: 1,
}

export const Circular = Template.bind({})
Circular.args = {
  radius: 'pill',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

const ColorsTemplate: StoryFn<typeof Checkbox> = () => {
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
          <Text fontSize="xl" fontWeight="bold">Checkbox Colors</Text>
          <Column unitGap={2}>
            <Row alignMiddle unitGap={2}>
              <Checkbox
                checked={states.default}
                onChange={handleChange('default')}
                color="Default"
              />
              <Text>Default</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Checkbox
                checked={states.primary}
                onChange={handleChange('primary')}
                color="Primary"
              />
              <Text>Primary</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Checkbox
                checked={states.success}
                onChange={handleChange('success')}
                color="Success"
              />
              <Text>Success</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Checkbox
                checked={states.warning}
                onChange={handleChange('warning')}
                color="Warning"
              />
              <Text>Warning</Text>
            </Row>
            <Row alignMiddle unitGap={2}>
              <Checkbox
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

const SizesTemplate: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(true)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} alignCenter>
          <Text fontSize="xl" fontWeight="bold">Checkbox Sizes</Text>
          <Row unitGap={3} alignMiddle>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                size={1}
                iconSize={0.75}
                color="Primary"
              />
              <Text fontSize="sm" color="Shading.500">Small</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                size={2}
                iconSize={1.5}
                color="Primary"
              />
              <Text fontSize="sm" color="Shading.500">Medium</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                size={3}
                iconSize={2.25}
                color="Primary"
              />
              <Text fontSize="sm" color="Shading.500">Large</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                size={4}
                iconSize={3}
                color="Primary"
              />
              <Text fontSize="sm" color="Shading.500">XL</Text>
            </Column>
          </Row>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const AllSizes = SizesTemplate.bind({})

const ShapesTemplate: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(true)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} alignCenter>
          <Text fontSize="xl" fontWeight="bold">Checkbox Shapes</Text>
          <Row unitGap={3} alignMiddle>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                radius="none"
                color="Primary"
                size={2.5}
              />
              <Text fontSize="sm" color="Shading.500">None</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                radius="sm"
                color="Primary"
                size={2.5}
              />
              <Text fontSize="sm" color="Shading.500">Small</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                radius="md"
                color="Primary"
                size={2.5}
              />
              <Text fontSize="sm" color="Shading.500">Medium</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                radius="lg"
                color="Primary"
                size={2.5}
              />
              <Text fontSize="sm" color="Shading.500">Large</Text>
            </Column>
            <Column alignCenter unitGap={1}>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                radius="pill"
                color="Primary"
                size={2.5}
              />
              <Text fontSize="sm" color="Shading.500">Pill</Text>
            </Column>
          </Row>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const AllShapes = ShapesTemplate.bind({})

const FormTemplate: StoryFn<typeof Checkbox> = () => {
  const [formData, setFormData] = useState({
    newsletter: false,
    terms: false,
    marketing: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    preferences: {
      darkMode: false,
      analytics: true,
      cookies: false,
    },
  })

  const handleChange = (path: string) => () => {
    setFormData(prev => {
      const keys = path.split('.')
      if (keys.length === 1) {
        return { ...prev, [keys[0]]: !prev[keys[0] as keyof typeof prev] }
      } else {
        const [parent, child] = keys
        return {
          ...prev,
          [parent]: {
            ...prev[parent as keyof typeof prev] as object,
            [child]: !(prev[parent as keyof typeof prev] as any)[child],
          },
        }
      }
    })
  }

  const handleSubmit = () => {
    console.log('Form data:', formData)
  }

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={4} maxUnitWidth={50}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Settings Form</Text>
          
          <Column unitGap={3}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">Account Settings</Text>
              <Column unitGap={1.5} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.newsletter}
                    onChange={handleChange('newsletter')}
                    color="Primary"
                  />
                  <Column>
                    <Text fontWeight="medium">Newsletter subscription</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Receive weekly updates about new features
                    </Text>
                  </Column>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.terms}
                    onChange={handleChange('terms')}
                    color="Success"
                  />
                  <Column>
                    <Text fontWeight="medium">Terms and conditions</Text>
                    <Text fontSize="sm" color="Shading.500">
                      I agree to the terms of service and privacy policy
                    </Text>
                  </Column>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.marketing}
                    onChange={handleChange('marketing')}
                    color="Warning"
                  />
                  <Column>
                    <Text fontWeight="medium">Marketing emails</Text>
                    <Text fontSize="sm" color="Shading.500">
                      Receive promotional content and special offers
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Box>
            
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">Notifications</Text>
              <Column unitGap={1.5} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.notifications.email}
                    onChange={handleChange('notifications.email')}
                    color="Primary"
                    size={1.5}
                  />
                  <Text>Email notifications</Text>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.notifications.sms}
                    onChange={handleChange('notifications.sms')}
                    color="Primary"
                    size={1.5}
                  />
                  <Text>SMS notifications</Text>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.notifications.push}
                    onChange={handleChange('notifications.push')}
                    color="Primary"
                    size={1.5}
                  />
                  <Text>Push notifications</Text>
                </Row>
              </Column>
            </Box>
            
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="Shading.700">Privacy Preferences</Text>
              <Column unitGap={1.5} style={{ marginTop: '12px' }}>
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.preferences.darkMode}
                    onChange={handleChange('preferences.darkMode')}
                    color="Success"
                    radius="pill"
                  />
                  <Text>Dark mode</Text>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.preferences.analytics}
                    onChange={handleChange('preferences.analytics')}
                    color="Warning"
                    radius="pill"
                  />
                  <Text>Analytics tracking</Text>
                </Row>
                
                <Row alignMiddle unitGap={2}>
                  <Checkbox
                    checked={formData.preferences.cookies}
                    onChange={handleChange('preferences.cookies')}
                    color="Danger"
                    radius="pill"
                  />
                  <Text>Marketing cookies</Text>
                </Row>
              </Column>
            </Box>
          </Column>
          
          <Row unitGap={2}>
            <Button title="Save Settings" color="Success" onClick={handleSubmit} />
            <Button title="Reset" color="Default" outline />
          </Row>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const FormExample = FormTemplate.bind({})

const StatesTemplate: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false)

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} alignCenter>
          <Text fontSize="xl" fontWeight="bold">Checkbox States</Text>
          <Column unitGap={2}>
            <Row alignMiddle unitGap={3}>
              <Column alignCenter unitGap={1}>
                <Checkbox
                  checked={false}
                  onChange={() => {}}
                  color="Primary"
                />
                <Text fontSize="sm" color="Shading.500">Unchecked</Text>
              </Column>
              <Column alignCenter unitGap={1}>
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  color="Primary"
                />
                <Text fontSize="sm" color="Shading.500">Checked</Text>
              </Column>
              <Column alignCenter unitGap={1}>
                <Checkbox
                  checked={false}
                  onChange={() => {}}
                  color="Primary"
                  disabled
                />
                <Text fontSize="sm" color="Shading.500">Disabled</Text>
              </Column>
              <Column alignCenter unitGap={1}>
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  color="Primary"
                  disabled
                />
                <Text fontSize="sm" color="Shading.500">Disabled + Checked</Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const CheckboxStates = StatesTemplate.bind({})
