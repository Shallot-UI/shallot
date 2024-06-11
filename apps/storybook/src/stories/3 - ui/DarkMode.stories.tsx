import { StoryFn, Meta } from '@storybook/react'
import {
  Button,
  Checkbox,
  Input,
  Column,
  H1,
  Row,
  ShallotProvider,
  Switch,
  Tag,
  useShallot,
  P,
} from '@shallot-ui/next'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '💎 UI / Dark Mode',
  component: Switch,
  parameters: { layout: 'centered' },
} as Meta<typeof Switch>

const DarkModeSwitch = () => {
  const { theme, setThemeMode } = useShallot()

  return (
    <Column alignCenter unitGap={1 / 2}>
      <H1>{theme.mode}</H1>
      <P maxUnitWidth={24} alignTextCenter>
        This is a demonstration of the dark mode functionality in Shallot.
      </P>
      <Switch
        checked={theme.mode === 'dark'}
        onChange={() =>
          setThemeMode(theme.mode === 'dark' ? 'default' : 'dark')
        }
      />
      <Row unitGap={1 / 2} unitsAbove={2}>
        <Button title="Button" />
        <Button title="Button" color="Primary" />
      </Row>
      <Row unitGap={1 / 2}>
        <Tag title="Tag" />
        <Tag title="Tag" color="Primary" />
      </Row>
      <Row unitGap={1 / 2}>
        <Checkbox />
        <Checkbox color="Success" />
        <Checkbox color="Success" checked />
        <Checkbox checked />
      </Row>
      <Input placeholder="Test Input" />
    </Column>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Switch> = (args) => (
  <ShallotProvider>
    <DarkModeSwitch />
  </ShallotProvider>
)

export const Default = Template.bind({})
Default.args = {}
