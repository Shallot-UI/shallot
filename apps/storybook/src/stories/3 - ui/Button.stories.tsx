import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, Column, Row, Box, Text, Fold, ShallotProvider } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Button',
  component: Button,
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
      options: ['Default', 'Primary', 'Success', 'Warning', 'Danger'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'pill'],
    },
    outline: { control: 'boolean' },
    
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
    
    // Padding props
    verticalUnitPadding: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },
    horizontalUnitPadding: {
      control: { type: 'number', min: 0, max: 5, step: 0.25 },
    },
    
    // Variant
    variant: {
      control: 'select',
      options: ['Default'],
    },
    
    // Standard button props
    title: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={1} unitsAround={2}>
        <Button title="Hello World" onClick={fn()} {...args} />
        <Button disabled title="Disabled" onClick={fn()} {...args} />
      </Column>
    </Fold>
  </ShallotProvider>
)

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

export const Outline = Template.bind({})
Outline.args = {
  outline: true,
  color: 'Primary',
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  fontSize: 'lg',
  verticalUnitPadding: 1,
  horizontalUnitPadding: 2,
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  fontSize: 'sm',
  verticalUnitPadding: 0.5,
  horizontalUnitPadding: 1,
}

export const UppercaseButton = Template.bind({})
UppercaseButton.args = {
  uppercase: true,
  letterSpacing: 'lg',
  fontWeight: 'bold',
}

const SizesTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={3} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Button Sizes</Text>
        <Row unitGap={2} alignMiddle>
          <Button 
            title="Small" 
            fontSize="sm"
            verticalUnitPadding={0.5}
            horizontalUnitPadding={1}
            onClick={fn()} 
          />
          <Button 
            title="Medium" 
            onClick={fn()} 
          />
          <Button 
            title="Large" 
            fontSize="lg"
            verticalUnitPadding={1}
            horizontalUnitPadding={2}
            onClick={fn()} 
          />
        </Row>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const AllSizes = SizesTemplate.bind({})

const ColorsTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={3} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Button Colors</Text>
        <Row unitGap={2} alignMiddle wrap>
          <Button title="Default" color="Default" onClick={fn()} />
          <Button title="Primary" color="Primary" onClick={fn()} />
          <Button title="Success" color="Success" onClick={fn()} />
          <Button title="Warning" color="Warning" onClick={fn()} />
          <Button title="Danger" color="Danger" onClick={fn()} />
        </Row>
        <Row unitGap={2} alignMiddle wrap>
          <Button title="Default" color="Default" outline onClick={fn()} />
          <Button title="Primary" color="Primary" outline onClick={fn()} />
          <Button title="Success" color="Success" outline onClick={fn()} />
          <Button title="Warning" color="Warning" outline onClick={fn()} />
          <Button title="Danger" color="Danger" outline onClick={fn()} />
        </Row>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const AllColors = ColorsTemplate.bind({})

const RadiusTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={3} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Button Radius Options</Text>
        <Row unitGap={2} alignMiddle wrap>
          <Button title="None" radius="none" color="Primary" onClick={fn()} />
          <Button title="Small" radius="sm" color="Primary" onClick={fn()} />
          <Button title="Medium" radius="md" color="Primary" onClick={fn()} />
          <Button title="Large" radius="lg" color="Primary" onClick={fn()} />
          <Button title="XL" radius="xl" color="Primary" onClick={fn()} />
          <Button title="Pill" radius="pill" color="Primary" onClick={fn()} />
        </Row>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const AllRadius = RadiusTemplate.bind({})

const StatesTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={3} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Button States</Text>
        <Column unitGap={2} alignCenter>
          <Row unitGap={2}>
            <Button title="Normal" color="Primary" onClick={fn()} />
            <Button title="Disabled" color="Primary" disabled onClick={fn()} />
          </Row>
          <Row unitGap={2}>
            <Button title="Normal Outline" color="Success" outline onClick={fn()} />
            <Button title="Disabled Outline" color="Success" outline disabled onClick={fn()} />
          </Row>
        </Column>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const ButtonStates = StatesTemplate.bind({})

const TypographyTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={3} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Button Typography</Text>
        <Column unitGap={2} alignCenter>
          <Button 
            title="Light Weight" 
            fontWeight="light" 
            color="Primary" 
            onClick={fn()} 
          />
          <Button 
            title="Normal Weight" 
            fontWeight="normal" 
            color="Primary" 
            onClick={fn()} 
          />
          <Button 
            title="Bold Weight" 
            fontWeight="bold" 
            color="Primary" 
            onClick={fn()} 
          />
          <Button 
            title="UPPERCASE" 
            uppercase 
            letterSpacing="lg" 
            fontWeight="bold"
            color="Success" 
            onClick={fn()} 
          />
          <Button 
            title="Heading Font" 
            fontFamily="Heading" 
            fontSize="lg"
            color="Warning" 
            onClick={fn()} 
          />
        </Column>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const Typography = TypographyTemplate.bind({})

const ActionsTemplate: StoryFn<typeof Button> = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Column unitGap={4} alignCenter>
        <Text fontSize="xl" fontWeight="bold">Common Button Actions</Text>
        
        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '12px' }}>Form Actions</Text>
          <Row unitGap={1}>
            <Button title="Save" color="Success" onClick={fn('save')} />
            <Button title="Cancel" color="Default" onClick={fn('cancel')} />
            <Button title="Reset" color="Warning" outline onClick={fn('reset')} />
          </Row>
        </Box>
        
        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '12px' }}>Navigation Actions</Text>
          <Row unitGap={1}>
            <Button title="← Back" color="Default" outline onClick={fn('back')} />
            <Button title="Next →" color="Primary" onClick={fn('next')} />
            <Button title="Skip" color="Default" onClick={fn('skip')} />
          </Row>
        </Box>
        
        <Box>
          <Text fontSize="md" fontWeight="bold" color="Shading.600" style={{ marginBottom: '12px' }}>Destructive Actions</Text>
          <Row unitGap={1}>
            <Button title="Delete" color="Danger" onClick={fn('delete')} />
            <Button title="Remove" color="Danger" outline onClick={fn('remove')} />
            <Button title="Clear All" color="Warning" onClick={fn('clear')} />
          </Row>
        </Box>
      </Column>
    </Fold>
  </ShallotProvider>
)

export const CommonActions = ActionsTemplate.bind({})
