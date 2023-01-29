import { Column } from '@shallot-ui/web'
import { Code } from '@/components'

export const VariantCode = () => (
  <Column unitsAround={2}>
    <Code language="javascript" unitsAround={2} grow>
      {`// Variants are just objects of style props
const baseHeadingStyle: TextStyleProps = {
  typeface: 'Heading',
  textColor: 'Shading.450',
  letterSpacing: 'md',
}

// They can be extended just like any other object
const postTitleStyle: TextStyleProps = {
  ...baseHeadingStyle,
  fontSize: 'xl',
  unitsAbove: 1/2,
  unitsBelow: 3/2
}

// They can be spread into props
const PostTitle: FunctionComponent<TextProps> = ({ children, ...rest }) => (
  <Text {...postTitleStyle} {...rest}>
    {children}
  </Text>
)

// Or abstracted into a component
const MyPage = () => (
  <PostTitle>Hello World</PostTitle>
)

// And then extended
const MyPage = () => (
  <PostTitle textColor="Primary.300">Hello World</PostTitle>
)`}
    </Code>
  </Column>
)
