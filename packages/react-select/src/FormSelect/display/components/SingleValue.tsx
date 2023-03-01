import { Text } from '@shallot-ui/web'
import { FunctionComponent } from 'react'
import { SingleValueProps } from 'react-select'

const FormSelectSingleValue: FunctionComponent<SingleValueProps> = ({
  children,
  innerProps,
  // isDisabled,
}) => (
  <Text
    fontSize="md"
    textColor="Shading.500"
    style={{
      gridArea: '1 / 1 / 2 / 3',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
    {...(innerProps as any)}
  >
    {children}
  </Text>
)

export default FormSelectSingleValue
