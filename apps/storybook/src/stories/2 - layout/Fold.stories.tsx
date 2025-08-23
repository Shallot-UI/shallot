import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Fold, Box, Text, Button, Column, Row, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '📐 Layout / Fold',
  component: Fold,
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
    
    // Gap
    unitGap: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
    },
  },
} as Meta<typeof Fold>

const Template: StoryFn<typeof Fold> = (args) => (
  <ShallotProvider>
    <Fold {...args} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Column unitGap={2}>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Fold Component
        </Text>
        <Text fontSize="md" color="white" style={{ opacity: 0.9 }}>
          A full-viewport container (100vh × 100vw) perfect for landing pages and hero sections
        </Text>
        <Row unitGap={1}>
          <Button title="Get Started" color="Success" />
          <Button title="Learn More" outline />
        </Row>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {
  alignCenter: true,
  alignMiddle: true,
}

export const TopAligned = Template.bind({})
TopAligned.args = {
  alignCenter: true,
  alignTop: true,
  unitsAbove: 4,
}

export const BottomAligned = Template.bind({})
BottomAligned.args = {
  alignCenter: true,
  alignBottom: true,
  unitsBelow: 4,
}

const HeroTemplate: StoryFn<typeof Fold> = () => (
  <ShallotProvider>
    <Fold 
      alignCenter 
      alignMiddle
      style={{ 
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <Column unitGap={3} alignCenter style={{ position: 'relative', zIndex: 1 }}>
        <Text 
          fontSize="3xl" 
          fontWeight="bold" 
          color="white"
          textAlign="center"
          style={{ fontSize: '48px', lineHeight: 1.2 }}
        >
          Welcome to Shallot UI
        </Text>
        <Text 
          fontSize="lg" 
          color="white" 
          textAlign="center"
          style={{ opacity: 0.8, maxWidth: '600px' }}
        >
          Build beautiful, responsive interfaces with our comprehensive component library.
          Designed for modern web applications.
        </Text>
        <Row unitGap={2}>
          <Button title="Start Building" color="Primary" />
          <Button title="View Documentation" outline />
        </Row>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const HeroSection = HeroTemplate.bind({})

const SplitTemplate: StoryFn<typeof Fold> = () => (
  <ShallotProvider>
    <Fold style={{ display: 'flex', flexDirection: 'row' }}>
      <Box 
        style={{ 
          flex: 1,
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px'
        }}
      >
        <Column unitGap={2} maxUnitWidth={40}>
          <Text fontSize="2xl" fontWeight="bold">
            Split Screen Layout
          </Text>
          <Text color="Shading.600">
            The Fold component can be used to create split-screen layouts that take up
            the full viewport. Perfect for login screens, onboarding flows, or any
            two-panel interface.
          </Text>
          <Box>
            <Button title="Learn More" color="Primary" />
          </Box>
        </Column>
      </Box>
      <Box 
        style={{ 
          flex: 1,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          Visual Content Area
        </Text>
      </Box>
    </Fold>
  </ShallotProvider>
)

export const SplitScreen = SplitTemplate.bind({})

const MultipleFoldsTemplate: StoryFn<typeof Fold> = () => (
  <ShallotProvider>
    <div>
      <Fold 
        alignCenter 
        alignMiddle
        style={{ background: '#3b82f6' }}
      >
        <Column unitGap={2} alignCenter>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Section 1
          </Text>
          <Text color="white" style={{ opacity: 0.9 }}>
            Scroll down to see more sections
          </Text>
        </Column>
      </Fold>
      
      <Fold 
        alignCenter 
        alignMiddle
        style={{ background: '#10b981' }}
      >
        <Column unitGap={2} alignCenter>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Section 2
          </Text>
          <Text color="white" style={{ opacity: 0.9 }}>
            Each fold takes up the full viewport
          </Text>
        </Column>
      </Fold>
      
      <Fold 
        alignCenter 
        alignMiddle
        style={{ background: '#f59e0b' }}
      >
        <Column unitGap={2} alignCenter>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Section 3
          </Text>
          <Text color="white" style={{ opacity: 0.9 }}>
            Perfect for storytelling websites
          </Text>
        </Column>
      </Fold>
    </div>
  </ShallotProvider>
)

export const MultipleSections = MultipleFoldsTemplate.bind({})