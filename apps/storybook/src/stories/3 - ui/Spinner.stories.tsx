import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Spinner, Column, Row, Text, Box, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '💎 UI / Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['Primary', 'Success', 'Warning', 'Danger', 'Shading'],
    },
    shade: {
      control: { type: 'number', min: 100, max: 900, step: 100 },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = (args) => (
  <ShallotProvider>
    <Column alignCenter alignMiddle style={{ minHeight: '100vh' }}>
      <Spinner {...args} />
    </Column>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
  color: 'Primary',
  shade: 500,
}

export const SuccessColor = Template.bind({})
SuccessColor.args = {
  color: 'Success',
  shade: 500,
}

const SizesTemplate: StoryFn<typeof Spinner> = () => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={3} style={{ minHeight: '100vh' }}>
      <Text fontSize="xl" fontWeight="bold">Spinner Sizes</Text>
      <Row unitGap={3} alignMiddle>
        <Column alignCenter unitGap={1}>
          <Spinner size="xs" />
          <Text fontSize="sm" color="Shading.500">xs</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner size="sm" />
          <Text fontSize="sm" color="Shading.500">sm</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner size="md" />
          <Text fontSize="sm" color="Shading.500">md</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner size="lg" />
          <Text fontSize="sm" color="Shading.500">lg</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner size="xl" />
          <Text fontSize="sm" color="Shading.500">xl</Text>
        </Column>
      </Row>
    </Column>
  </ShallotProvider>
)

export const AllSizes = SizesTemplate.bind({})

const ColorsTemplate: StoryFn<typeof Spinner> = () => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={3} style={{ minHeight: '100vh' }}>
      <Text fontSize="xl" fontWeight="bold">Spinner Colors</Text>
      <Row unitGap={3} alignMiddle>
        <Column alignCenter unitGap={1}>
          <Spinner color="Primary" shade={500} />
          <Text fontSize="sm" color="Shading.500">Primary</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner color="Success" shade={500} />
          <Text fontSize="sm" color="Shading.500">Success</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner color="Warning" shade={500} />
          <Text fontSize="sm" color="Shading.500">Warning</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner color="Danger" shade={500} />
          <Text fontSize="sm" color="Shading.500">Danger</Text>
        </Column>
        <Column alignCenter unitGap={1}>
          <Spinner color="Shading" shade={400} />
          <Text fontSize="sm" color="Shading.500">Shading</Text>
        </Column>
      </Row>
    </Column>
  </ShallotProvider>
)

export const AllColors = ColorsTemplate.bind({})

const LoadingStateTemplate: StoryFn<typeof Spinner> = () => (
  <ShallotProvider>
    <Column alignCenter alignMiddle unitGap={3} style={{ minHeight: '100vh' }}>
      <Box 
        style={{ 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          padding: '24px',
          minWidth: '300px'
        }}
      >
        <Column alignCenter unitGap={2}>
          <Spinner size="md" color="Primary" shade={500} />
          <Text fontSize="md" color="Shading.600">Loading content...</Text>
        </Column>
      </Box>
    </Column>
  </ShallotProvider>
)

export const LoadingState = LoadingStateTemplate.bind({})