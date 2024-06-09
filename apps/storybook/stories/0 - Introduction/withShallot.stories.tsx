import { StoryFn, Meta } from '@storybook/react'
import {
  ShallotProvider,
  getColor,
  getFontFamily,
  getFontSize,
  getRadius,
  withBoxShallot,
  withTextShallot,
} from '@repo/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'With Shallot',
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = () => {
  const Container = withBoxShallot('div', {
    flexDirection: 'column',
    backgroundColor: getColor('Shading', 200),
    borderRadius: getRadius('lg'),
  })

  const Heading = withTextShallot('h1', {
    fontFamily: getFontFamily('Body'),
    color: getColor('Shading', 500),
    fontSize: getFontSize('xl'),
    fontWeight: 700,
  })

  return (
    <ShallotProvider>
      <Container alignCenter alignMiddle>
        <Heading>With Shallot</Heading>
      </Container>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
