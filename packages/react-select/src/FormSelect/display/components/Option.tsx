import { FunctionComponent } from 'react'
import { OptionProps } from 'react-select'
import { Column, Text } from '@shallot-ui/web'

const FormSelectOption: FunctionComponent<OptionProps> = ({
  children,
  isDisabled,
  // isFocused,
  // isSelected,
  innerRef,
  innerProps,
}) => (
  <Column
    {...innerProps}
    cursor="pointer"
    ref={innerRef}
    aria-disabled={isDisabled}
  >
    <Text
      unitsAround={2 / 3}
      unitsLeft={1}
      unitsRight={1}
      fontSize="md"
      textColor="Shading.500"
    >
      {children}
    </Text>
  </Column>
)

export default FormSelectOption
