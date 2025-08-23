import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Box, Text, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '📐 Layout / Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // Alignment props
    alignTop: { control: 'boolean' },
    alignMiddle: { control: 'boolean' },
    alignBottom: { control: 'boolean' },
    alignLeft: { control: 'boolean' },
    alignCenter: { control: 'boolean' },
    alignRight: { control: 'boolean' },
    
    // Border props
    borderPosition: {
      control: 'select',
      options: ['all', 'top', 'bottom', 'left', 'right', 'horizontal', 'vertical'],
    },
    borderWidth: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    
    // Flex props
    grow: { control: 'boolean' },
    shrink: { control: 'boolean' },
    flex: { control: 'text' },
    wrap: { control: 'boolean' },
    unitGap: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    unitFlexBasis: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    
    // Margin props
    unitsAround: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    unitsAbove: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    unitsBelow: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    unitsLeft: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    unitsRight: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
    
    // Sizing props
    unitHeight: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    unitWidth: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    maxUnitHeight: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    maxUnitWidth: {
      control: { type: 'number', min: 0, max: 100, step: 5 },
    },
    minUnitHeight: {
      control: { type: 'number', min: 0, max: 50, step: 5 },
    },
    minUnitWidth: {
      control: { type: 'number', min: 0, max: 50, step: 5 },
    },
    fullWidth: { control: 'boolean' },
    fullHeight: { control: 'boolean' },
  },
} as Meta<typeof Box>

const Template: StoryFn<typeof Box> = (args) => (
  <ShallotProvider>
    <Box 
      alignCenter 
      alignMiddle 
      style={{ minHeight: '100vh', background: '#f5f5f5' }}
    >
      <Box 
        {...args}
        style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '24px',
        }}
      >
        <Text>This is a Box component</Text>
        <Text fontSize="sm" color="Shading.500">
          It provides flexible layout capabilities with alignment, spacing, and sizing props.
        </Text>
      </Box>
    </Box>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const WithPadding = Template.bind({})
WithPadding.args = {
  unitsAround: 3,
}

export const WithCustomSize = Template.bind({})
WithCustomSize.args = {
  unitWidth: 40,
  unitHeight: 20,
}

export const CenteredContent = Template.bind({})
CenteredContent.args = {
  alignCenter: true,
  alignMiddle: true,
  unitWidth: 40,
  unitHeight: 20,
}

const GridTemplate: StoryFn<typeof Box> = () => (
  <ShallotProvider>
    <Box 
      alignCenter 
      alignMiddle 
      unitsAround={2}
      style={{ minHeight: '100vh', background: '#f5f5f5' }}
    >
      <Box 
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        unitGap={2}
        maxUnitWidth={80}
      >
        <Box 
          unitWidth={25}
          unitHeight={15}
          alignCenter
          alignMiddle
          style={{ 
            background: '#3b82f6', 
            color: 'white',
            borderRadius: '8px' 
          }}
        >
          <Text color="white" fontWeight="bold">Box 1</Text>
        </Box>
        <Box 
          unitWidth={25}
          unitHeight={15}
          alignCenter
          alignMiddle
          style={{ 
            background: '#10b981', 
            color: 'white',
            borderRadius: '8px' 
          }}
        >
          <Text color="white" fontWeight="bold">Box 2</Text>
        </Box>
        <Box 
          unitWidth={25}
          unitHeight={15}
          alignCenter
          alignMiddle
          style={{ 
            background: '#f59e0b', 
            color: 'white',
            borderRadius: '8px' 
          }}
        >
          <Text color="white" fontWeight="bold">Box 3</Text>
        </Box>
        <Box 
          unitWidth={25}
          unitHeight={15}
          alignCenter
          alignMiddle
          style={{ 
            background: '#ef4444', 
            color: 'white',
            borderRadius: '8px' 
          }}
        >
          <Text color="white" fontWeight="bold">Box 4</Text>
        </Box>
      </Box>
    </Box>
  </ShallotProvider>
)

export const GridLayout = GridTemplate.bind({})

const FlexboxTemplate: StoryFn<typeof Box> = () => (
  <ShallotProvider>
    <Box 
      alignCenter 
      alignMiddle 
      unitsAround={2}
      style={{ minHeight: '100vh', background: '#f5f5f5' }}
    >
      <Box unitGap={3}>
        <Text fontSize="xl" fontWeight="bold">Flexbox Examples</Text>
        
        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600">Row with Gap</Text>
          <Box 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              background: 'white',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}
            unitGap={1}
          >
            {[1, 2, 3, 4].map(i => (
              <Box 
                key={i}
                style={{ 
                  background: '#e0e7ff',
                  padding: '12px',
                  borderRadius: '4px'
                }}
              >
                <Text fontSize="sm">Item {i}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600">Column with Spacing</Text>
          <Box 
            style={{ 
              background: 'white',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}
            unitGap={1}
          >
            {[1, 2, 3].map(i => (
              <Box 
                key={i}
                style={{ 
                  background: '#dcfce7',
                  padding: '12px',
                  borderRadius: '4px'
                }}
              >
                <Text fontSize="sm">Item {i}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600">Grow & Shrink</Text>
          <Box 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              background: 'white',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}
            unitGap={1}
          >
            <Box 
              grow
              style={{ 
                background: '#fef3c7',
                padding: '12px',
                borderRadius: '4px'
              }}
            >
              <Text fontSize="sm">Grow</Text>
            </Box>
            <Box 
              style={{ 
                background: '#fee2e2',
                padding: '12px',
                borderRadius: '4px'
              }}
            >
              <Text fontSize="sm">Fixed</Text>
            </Box>
            <Box 
              shrink
              style={{ 
                background: '#e0e7ff',
                padding: '12px',
                borderRadius: '4px'
              }}
            >
              <Text fontSize="sm">Shrink</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </ShallotProvider>
)

export const FlexboxExamples = FlexboxTemplate.bind({})