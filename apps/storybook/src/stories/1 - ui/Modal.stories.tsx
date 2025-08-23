import React, { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  Modal,
  Button,
  Column,
  Text,
  Row,
  ShallotProvider,
  H2,
  P,
} from '@shallot-ui/next'

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
      options: [
        'Shading.100',
        'Shading.200',
        'Primary.100',
        'Success.100',
        'Danger.100',
      ],
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
              <H2>Modal Title</H2>
              <P>
                This is a modal window. You can put any content here. The modal
                supports various background colors, border radius options, and
                custom sizing through unit props.
              </P>
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
                    fn()
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
