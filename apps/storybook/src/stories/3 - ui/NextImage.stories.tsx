import { StoryFn, Meta } from '@storybook/react'
import { Fold, Input, Row, ShallotProvider, Image } from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Next Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Image> = (args) => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Row maxUnitWidth={40} fullWidth alignCenter>
        <Image
          {...args}
          src="https://via.placeholder.com/150"
          unitWidth={10}
          unitHeight={10}
        />
      </Row>
    </Fold>
  </ShallotProvider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
