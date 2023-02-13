import { Code } from '@/components'
import { Row } from '@shallot-ui/next'

export const ComponentsCode = () => (
  <Row unitsAround={2}>
    <Code
      language="javascript"
      unitsAround={2}
      grow
    >{`const ReactWebExample = () => (
  <Row wrap>
    <Column>
      <Text
        typeface="Heading"
        textColor="Shading.450"
        fontSize="lg"
        unitsAround={2}
      >
        👋 Hello Browser
      </Text>
      <Text>
        This is a React component rendered in the browser.
      </Text>
    </Column>
    <Column>
      <img src="/react.png" alt="React Logo" />
    </Column>
  </Row>
)`}</Code>
    <Code
      language="javascript"
      unitsAround={2}
      grow
    >{`const ReactNativeExample = () => (
  <Row wrap>
    <Column>
      <Text
        typeface="Heading"
        textColor="Shading.450"
        fontSize="lg"
        unitsAround={2}
      >
        👋 Hello Mobile
      </Text>
      <Text>
        This is a React component rendered in react-native.
      </Text>
    </Column>
    <Column>
      <Image source={reactNativeLogo} alt="React Native Logo" />
    </Column>
  </Row>
)`}</Code>
  </Row>
)
