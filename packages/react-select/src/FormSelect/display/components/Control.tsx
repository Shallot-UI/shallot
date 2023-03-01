import { FunctionComponent } from 'react'
import { ControlProps } from 'react-select'
import { Row } from '@shallot-ui/web'

const FormSelectControl: FunctionComponent<ControlProps> = ({
  children,
  // isDisabled,
  // isFocused,
  innerRef,
  innerProps,
  // menuIsOpen,
}) => (
  <Row
    ref={innerRef as any}
    backgroundColor="Shading.100"
    borderColor="Shading.225"
    radius="sm"
    style={{
      borderWidth: 1,
    }}
    {...innerProps}
  >
    {children}
  </Row>
)

export default FormSelectControl
