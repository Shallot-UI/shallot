import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { AnchorLink, Column, Text, Box, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '📝 Typography / AnchorLink',
  component: AnchorLink,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    // Typography props
    fontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'bold', 'black'],
    },
    fontFamily: {
      control: 'select',
      options: ['Body', 'Heading'],
    },
    letterSpacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    
    // Color
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Warning', 'Danger', 'Shading'],
    },
    shade: {
      control: { type: 'number', min: 100, max: 900, step: 100 },
    },
    
    // Text props
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    uppercase: { control: 'boolean' },
    
    // Standard anchor props
    href: { control: 'text' },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
} as Meta<typeof AnchorLink>

const Template: StoryFn<typeof AnchorLink> = (args) => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={2} style={{ minHeight: '100vh' }}>
      <AnchorLink 
        href="https://shallot-ui.com" 
        target="_blank" 
        {...args}
      >
        Click me to visit Shallot UI
      </AnchorLink>
    </Column>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  color: 'Primary',
  shade: 500,
}

export const Large = Template.bind({})
Large.args = {
  fontSize: 'xl',
  fontWeight: 'bold',
}

export const Uppercase = Template.bind({})
Uppercase.args = {
  uppercase: true,
  letterSpacing: 'lg',
}

const InTextTemplate: StoryFn<typeof AnchorLink> = () => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={4} style={{ minHeight: '100vh', padding: '24px' }}>
      <Box maxUnitWidth={50}>
        <Text fontSize="lg" textAlign="center">
          Welcome to our platform! Please read our{' '}
          <AnchorLink 
            href="/terms" 
            color="Primary" 
            shade={600}
          >
            terms of service
          </AnchorLink>
          {' '}and{' '}
          <AnchorLink 
            href="/privacy" 
            color="Primary" 
            shade={600}
          >
            privacy policy
          </AnchorLink>
          {' '}before getting started.
        </Text>
      </Box>
    </Column>
  </ShallotProvider>
)

export const InlineWithText = InTextTemplate.bind({})

const StyleVariationsTemplate: StoryFn<typeof AnchorLink> = () => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={3} style={{ minHeight: '100vh', padding: '24px' }}>
      <Text fontSize="xl" fontWeight="bold">AnchorLink Style Variations</Text>
      
      <Column unitGap={2} alignCenter>
        <AnchorLink href="#" fontSize="xs" color="Shading" shade={500}>
          Extra Small Link
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="sm" color="Shading" shade={600}>
          Small Link
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="md" color="Primary" shade={500}>
          Medium Link (Default)
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="lg" color="Primary" shade={600}>
          Large Link
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="xl" fontWeight="bold" color="Primary" shade={700}>
          Extra Large Bold Link
        </AnchorLink>
        
        <AnchorLink 
          href="#" 
          fontSize="lg" 
          fontWeight="bold" 
          uppercase 
          letterSpacing="md"
          color="Success" 
          shade={600}
        >
          Uppercase Success Link
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="md" color="Danger" shade={500}>
          Danger Link
        </AnchorLink>
        
        <AnchorLink href="#" fontSize="md" color="Warning" shade={600}>
          Warning Link
        </AnchorLink>
      </Column>
    </Column>
  </ShallotProvider>
)

export const StyleVariations = StyleVariationsTemplate.bind({})

const NavigationTemplate: StoryFn<typeof AnchorLink> = () => (
  <ShallotProvider>
    <Box style={{ minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <Box 
        style={{ 
          background: 'white',
          borderBottom: '1px solid #e0e0e0',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text fontSize="lg" fontWeight="bold">Shallot UI</Text>
        <Box style={{ display: 'flex', gap: '24px' }}>
          <AnchorLink href="#home" color="Shading" shade={700}>Home</AnchorLink>
          <AnchorLink href="#about" color="Shading" shade={700}>About</AnchorLink>
          <AnchorLink href="#services" color="Shading" shade={700}>Services</AnchorLink>
          <AnchorLink href="#contact" color="Primary" shade={600}>Contact</AnchorLink>
        </Box>
      </Box>
      
      {/* Content Area */}
      <Column alignCenter alignMiddle style={{ padding: '48px' }}>
        <Column unitGap={3} maxUnitWidth={50} alignCenter>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Navigation with AnchorLinks
          </Text>
          <Text fontSize="md" color="Shading.600" textAlign="center">
            This example shows how AnchorLinks can be used in navigation bars
            and content areas to create consistent linking styles throughout
            your application.
          </Text>
          
          <Box style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <AnchorLink 
              href="https://github.com" 
              target="_blank"
              fontSize="md"
              color="Primary"
              shade={600}
            >
              View on GitHub →
            </AnchorLink>
            <AnchorLink 
              href="/documentation" 
              fontSize="md"
              color="Success"
              shade={600}
            >
              Read Documentation
            </AnchorLink>
          </Box>
        </Column>
      </Column>
      
      {/* Footer */}
      <Box 
        style={{ 
          background: '#f8f9fa',
          borderTop: '1px solid #e0e0e0',
          padding: '24px',
          textAlign: 'center',
          marginTop: 'auto'
        }}
      >
        <Text fontSize="sm" color="Shading.500">
          © 2024 Shallot UI. Built with ❤️ by the community.{' '}
          <AnchorLink href="/license" fontSize="sm" color="Primary" shade={500}>
            MIT License
          </AnchorLink>
        </Text>
      </Box>
    </Box>
  </ShallotProvider>
)

export const NavigationExample = NavigationTemplate.bind({})