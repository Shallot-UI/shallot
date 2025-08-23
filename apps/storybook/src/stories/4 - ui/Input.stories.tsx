import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Fold, Input, Row, Column, Box, Text, Button, ShallotProvider } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Input',
  component: Input,
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
      options: ['Default', 'Primary', 'Success', 'Danger', 'Warning', 'Shading'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    
    // Typography props
    fontFamily: {
      control: 'select',
      options: ['Body', 'Heading'],
    },
    fontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'bold', 'black'],
    },
    letterSpacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    
    // Text props
    uppercase: { control: 'boolean' },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    
    // Variant
    variant: {
      control: 'select',
      options: ['Default'],
    },
    
    // Standard input props
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    
    // Internal props (disabled in controls)
    value: { table: { disable: true } },
    setValue: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
  },
} as Meta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Row maxUnitWidth={40} fullWidth alignCenter>
          <Input
            {...args}
            defaultValue={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder="Your Text Here"
          />
        </Row>
      </Fold>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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

export const LargeInput = Template.bind({})
LargeInput.args = {
  fontSize: 'lg',
}

export const PillShape = Template.bind({})
PillShape.args = {
  radius: 'pill',
  color: 'Primary',
}

const TypesTemplate: StoryFn<typeof Input> = () => {
  const [values, setValues] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    tel: '',
    url: '',
  })

  const handleChange = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [type]: e.target.value }))
  }

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} maxUnitWidth={50}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Input Types</Text>
          <Column unitGap={2}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Text Input</Text>
              <Input
                type="text"
                placeholder="Enter some text"
                value={values.text}
                onChange={handleChange('text')}
              />
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Email Input</Text>
              <Input
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange('email')}
              />
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Password Input</Text>
              <Input
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange('password')}
              />
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Number Input</Text>
              <Input
                type="number"
                placeholder="Enter a number"
                value={values.number}
                onChange={handleChange('number')}
              />
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Phone Input</Text>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={values.tel}
                onChange={handleChange('tel')}
              />
            </Box>
            
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">URL Input</Text>
              <Input
                type="url"
                placeholder="Enter a website URL"
                value={values.url}
                onChange={handleChange('url')}
              />
            </Box>
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const InputTypes = TypesTemplate.bind({})

const ColorsTemplate: StoryFn<typeof Input> = () => {
  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} maxUnitWidth={50}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Input Colors</Text>
          <Column unitGap={2}>
            <Input
              placeholder="Default Input"
              color="Default"
            />
            <Input
              placeholder="Primary Input"
              color="Primary"
            />
            <Input
              placeholder="Success Input"
              color="Success"
            />
            <Input
              placeholder="Warning Input"
              color="Warning"
            />
            <Input
              placeholder="Danger Input"
              color="Danger"
            />
            <Input
              placeholder="Shading Input"
              color="Shading"
            />
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const AllColors = ColorsTemplate.bind({})

const SizesTemplate: StoryFn<typeof Input> = () => {
  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} maxUnitWidth={50}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Input Sizes</Text>
          <Column unitGap={2}>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Extra Small</Text>
              <Input
                placeholder="Extra small input"
                fontSize="xs"
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Small</Text>
              <Input
                placeholder="Small input"
                fontSize="sm"
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Medium (Default)</Text>
              <Input
                placeholder="Medium input"
                fontSize="md"
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Large</Text>
              <Input
                placeholder="Large input"
                fontSize="lg"
              />
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="Shading.600">Extra Large</Text>
              <Input
                placeholder="Extra large input"
                fontSize="xl"
              />
            </Box>
          </Column>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const AllSizes = SizesTemplate.bind({})

const FormTemplate: StoryFn<typeof Input> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <ShallotProvider>
      <Fold alignCenter alignMiddle>
        <Column unitGap={3} maxUnitWidth={40}>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">Sample Form</Text>
          <form onSubmit={handleSubmit}>
            <Column unitGap={2}>
              <Row unitGap={1}>
                <Column style={{ flex: 1 }}>
                  <Text fontSize="sm" fontWeight="bold" color="Shading.600">First Name</Text>
                  <Input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    required
                  />
                </Column>
                <Column style={{ flex: 1 }}>
                  <Text fontSize="sm" fontWeight="bold" color="Shading.600">Last Name</Text>
                  <Input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    required
                  />
                </Column>
              </Row>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="Shading.600">Email</Text>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                  color="Primary"
                  required
                />
              </Box>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="Shading.600">Phone</Text>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />
              </Box>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="Shading.600">Website</Text>
                <Input
                  type="url"
                  placeholder="https://johndoe.com"
                  value={formData.website}
                  onChange={handleChange('website')}
                />
              </Box>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="Shading.600">Password</Text>
                <Input
                  type="password"
                  placeholder="Enter a strong password"
                  value={formData.password}
                  onChange={handleChange('password')}
                  required
                />
              </Box>
              
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="Shading.600">Confirm Password</Text>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  color={formData.password !== formData.confirmPassword && formData.confirmPassword ? 'Danger' : 'Default'}
                  required
                />
              </Box>
              
              <Row unitGap={1} style={{ marginTop: '16px' }}>
                <Button type="submit" title="Submit" color="Success" />
                <Button 
                  type="button" 
                  title="Reset" 
                  color="Default" 
                  onClick={() => setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    website: '',
                    password: '',
                    confirmPassword: '',
                  })}
                />
              </Row>
            </Column>
          </form>
        </Column>
      </Fold>
    </ShallotProvider>
  )
}

export const FormExample = FormTemplate.bind({})
