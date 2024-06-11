import { StoryFn, Meta } from '@storybook/react'
import {
  Column,
  H1,
  Row,
  ShallotProvider,
  Switch,
  useShallot,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Dark Mode',
  component: Switch,
  parameters: {
    layout: 'centered',
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof Switch>

const DarkModeSwitch = () => {
  const { themeMode, setThemeMode } = useShallot()

  return (
    <ShallotProvider>
      <Column alignCenter>
        <H1>Test</H1>
        <Switch
          checked={themeMode === 'dark'}
          onChange={() =>
            setThemeMode(themeMode === 'dark' ? 'default' : 'dark')
          }
          unitsAround={1 / 2}
        />
      </Column>
    </ShallotProvider>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Switch> = (args) => (
  <ShallotProvider>
    <Row>
      <DarkModeSwitch />
    </Row>
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}
