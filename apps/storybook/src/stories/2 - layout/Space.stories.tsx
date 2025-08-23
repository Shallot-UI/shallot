import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Space, Box, Text, Button, Column, Row, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '📐 Layout / Space',
  component: Space,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // Flex props
    grow: { control: 'boolean' },
    shrink: { control: 'boolean' },
    
    // Sizing
    unitHeight: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
    },
    unitWidth: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
    },
    minUnitHeight: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
    },
    minUnitWidth: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
    },
  },
} as Meta<typeof Space>

const Template: StoryFn<typeof Space> = (args) => (
  <ShallotProvider>
    <Box 
      style={{ 
        minHeight: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px'
      }}
    >
      <Box 
        style={{ 
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px'
        }}
      >
        <Text fontSize="md" fontWeight="bold">Header Content</Text>
      </Box>
      
      <Space 
        {...args}
        style={{ 
          background: '#e3f2fd',
          border: '2px dashed #2196f3',
          borderRadius: '8px',
          margin: '16px 0',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text color="Primary.600" fontWeight="bold">
          Space Component (flexGrow: 1)
        </Text>
      </Space>
      
      <Box 
        style={{ 
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px'
        }}
      >
        <Text fontSize="md" fontWeight="bold">Footer Content</Text>
      </Box>
    </Box>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

const FlexibleSpacingTemplate: StoryFn<typeof Space> = () => (
  <ShallotProvider>
    <Column style={{ minHeight: '100vh', background: '#f5f5f5', padding: '24px' }}>
      <Text fontSize="xl" fontWeight="bold" style={{ marginBottom: '16px' }}>
        Space Component Examples
      </Text>
      
      <Box style={{ marginBottom: '24px' }}>
        <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '8px' }}>
          Pushing Content Apart
        </Text>
        <Row 
          style={{ 
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            height: '80px'
          }}
        >
          <Button title="Left Button" color="Primary" />
          <Space />
          <Button title="Right Button" color="Success" />
        </Row>
      </Box>

      <Box style={{ marginBottom: '24px' }}>
        <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '8px' }}>
          Creating Flexible Layouts
        </Text>
        <Row 
          style={{ 
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            height: '80px'
          }}
        >
          <Box style={{ background: '#e3f2fd', padding: '12px', borderRadius: '4px' }}>
            <Text fontSize="sm">Fixed Width</Text>
          </Box>
          <Space style={{ margin: '0 8px' }} />
          <Box style={{ background: '#e8f5e9', padding: '12px', borderRadius: '4px' }}>
            <Text fontSize="sm">Fixed Width</Text>
          </Box>
          <Space style={{ margin: '0 8px' }} />
          <Box style={{ background: '#fff3e0', padding: '12px', borderRadius: '4px' }}>
            <Text fontSize="sm">Fixed Width</Text>
          </Box>
        </Row>
      </Box>

      <Box style={{ marginBottom: '24px' }}>
        <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '8px' }}>
          Vertical Spacing
        </Text>
        <Column 
          style={{ 
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            height: '300px'
          }}
        >
          <Box style={{ background: '#fce4ec', padding: '12px', borderRadius: '4px' }}>
            <Text fontSize="sm">Top Content</Text>
          </Box>
          <Space />
          <Box style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px' }}>
            <Text fontSize="sm">Bottom Content</Text>
          </Box>
        </Column>
      </Box>
    </Column>
  </ShallotProvider>
)

export const FlexibleSpacing = FlexibleSpacingTemplate.bind({})

const NavigationTemplate: StoryFn<typeof Space> = () => (
  <ShallotProvider>
    <Box style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Row 
        style={{ 
          background: 'white',
          borderBottom: '1px solid #e0e0e0',
          padding: '16px 24px',
          alignItems: 'center'
        }}
      >
        <Text fontSize="lg" fontWeight="bold">Logo</Text>
        <Space />
        <Row unitGap={2}>
          <Text color="Shading.600">Home</Text>
          <Text color="Shading.600">About</Text>
          <Text color="Shading.600">Services</Text>
          <Text color="Shading.600">Contact</Text>
        </Row>
        <Space />
        <Button title="Sign In" color="Primary" />
      </Row>
      
      <Column alignCenter alignMiddle style={{ padding: '48px' }}>
        <Text fontSize="xl" color="Shading.600">
          Space components are used in the navigation to create flexible spacing
        </Text>
      </Column>
    </Box>
  </ShallotProvider>
)

export const NavigationBar = NavigationTemplate.bind({})

const CardLayoutTemplate: StoryFn<typeof Space> = () => (
  <ShallotProvider>
    <Box style={{ minHeight: '100vh', background: '#f5f5f5', padding: '24px' }}>
      <Column unitGap={2}>
        {[1, 2, 3].map(i => (
          <Column
            key={i}
            style={{ 
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px',
              height: '150px'
            }}
          >
            <Text fontSize="lg" fontWeight="bold">Card Title {i}</Text>
            <Text fontSize="sm" color="Shading.500">
              Card description goes here with some sample text.
            </Text>
            <Space />
            <Row>
              <Button title="Action" color="Primary" />
            </Row>
          </Column>
        ))}
      </Column>
    </Box>
  </ShallotProvider>
)

export const CardWithSpace = CardLayoutTemplate.bind({})

const MinHeightTemplate: StoryFn<typeof Space> = () => (
  <ShallotProvider>
    <Column style={{ minHeight: '100vh', background: '#f5f5f5', padding: '24px' }}>
      <Text fontSize="xl" fontWeight="bold" style={{ marginBottom: '16px' }}>
        Space with Minimum Heights
      </Text>
      
      <Row unitGap={2} style={{ height: '400px' }}>
        <Column 
          style={{ 
            flex: 1,
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px'
          }}
        >
          <Text fontSize="md" fontWeight="bold">Column 1</Text>
          <Space minUnitHeight={5} style={{ background: '#e3f2fd' }} />
          <Text fontSize="sm">Bottom text</Text>
        </Column>
        
        <Column 
          style={{ 
            flex: 1,
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px'
          }}
        >
          <Text fontSize="md" fontWeight="bold">Column 2</Text>
          <Space minUnitHeight={10} style={{ background: '#e8f5e9' }} />
          <Text fontSize="sm">Bottom text</Text>
        </Column>
        
        <Column 
          style={{ 
            flex: 1,
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px'
          }}
        >
          <Text fontSize="md" fontWeight="bold">Column 3</Text>
          <Space minUnitHeight={15} style={{ background: '#fff3e0' }} />
          <Text fontSize="sm">Bottom text</Text>
        </Column>
      </Row>
    </Column>
  </ShallotProvider>
)

export const MinimumHeight = MinHeightTemplate.bind({})