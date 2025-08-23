import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Modal, Button, Column, Text, Row, ShallotProvider } from '@shallot-ui/next'

export default {
  title: '💎 UI / Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: ['Shading.100', 'Shading.200', 'Primary.100', 'Success.100', 'Danger.100'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    unitWidth: {
      control: { type: 'number', min: 10, max: 80, step: 5 },
    },
    unitHeight: {
      control: { type: 'number', min: 10, max: 60, step: 5 },
    },
    unitsAround: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    variant: {
      control: 'select',
      options: ['Default'],
    },
  },
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ShallotProvider>
      <Column alignCenter alignMiddle style={{ minHeight: '100vh' }}>
        <Button title="Open Modal" onClick={() => setIsOpen(true)} />
        
        {isOpen && (
          <Modal {...args} onClose={() => setIsOpen(false)}>
            <Column unitGap={2} unitsAround={3}>
              <Text fontSize="xl" fontWeight="bold">Modal Title</Text>
              <Text color="Shading.500">
                This is a modal window. You can put any content here. The modal
                supports various background colors, border radius options, and
                custom sizing through unit props.
              </Text>
              <Row unitGap={1} alignRight>
                <Button 
                  title="Cancel" 
                  color="Default"
                  onClick={() => setIsOpen(false)} 
                />
                <Button 
                  title="Confirm" 
                  color="Success"
                  onClick={() => {
                    fn('Confirmed')()
                    setIsOpen(false)
                  }} 
                />
              </Row>
            </Column>
          </Modal>
        )}
      </Column>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const LargeModal = Template.bind({})
LargeModal.args = {
  unitWidth: 60,
  unitHeight: 40,
}

export const RoundedModal = Template.bind({})
RoundedModal.args = {
  radius: 'xl',
  backgroundColor: 'Primary.100',
}

export const CompactModal = Template.bind({})
CompactModal.args = {
  unitWidth: 30,
  unitsAround: 1,
  radius: 'sm',
}

const AlertTemplate: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ShallotProvider>
      <Column alignCenter alignMiddle style={{ minHeight: '100vh' }}>
        <Button title="Show Alert" color="Danger" onClick={() => setIsOpen(true)} />
        
        {isOpen && (
          <Modal {...args} onClose={() => setIsOpen(false)}>
            <Column unitGap={2} unitsAround={2} alignCenter>
              <Text fontSize="lg" fontWeight="bold" color="Danger.500">
                ⚠️ Warning
              </Text>
              <Text color="Shading.500" textAlign="center">
                This action cannot be undone. Are you sure you want to proceed?
              </Text>
              <Row unitGap={1}>
                <Button 
                  title="Cancel" 
                  color="Default"
                  onClick={() => setIsOpen(false)} 
                />
                <Button 
                  title="Delete" 
                  color="Danger"
                  onClick={() => {
                    fn('Deleted')()
                    setIsOpen(false)
                  }} 
                />
              </Row>
            </Column>
          </Modal>
        )}
      </Column>
    </ShallotProvider>
  )
}

export const AlertModal = AlertTemplate.bind({})
AlertModal.args = {
  unitWidth: 35,
  backgroundColor: 'Danger.100',
  radius: 'md',
}