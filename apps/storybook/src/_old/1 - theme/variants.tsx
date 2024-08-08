import { StoryFn, Meta } from '@storybook/react'
import {
  Fold,
  H1,
  ShallotProvider,
  getColor,
  getFontSize,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '🎨 Theme / Variants',
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = () => {
  return (
    <ShallotProvider
      variants={{
        Text: {
          H1: {
            fontSize: getFontSize('xl'),
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: getColor('Primary', 800),
          },
        },
      }}
    >
      <Fold alignCenter alignMiddle>
        <H1>With Shallot</H1>
      </Fold>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
