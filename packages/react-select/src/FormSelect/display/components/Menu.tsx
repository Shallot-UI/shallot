import { FunctionComponent } from 'react'
import { MenuProps } from 'react-select'
import { Column } from '@shallot-ui/web'

const FormSelectMenu: FunctionComponent<MenuProps> = ({
  children,
  innerRef,
  innerProps,
}) => (
  <Column
    ref={innerRef as any}
    {...innerProps}
    backgroundColor="Shading.100"
    borderColor="Shading.225"
    radius="sm"
    unitsAbove={1 / 2}
    borderWidth={1}
    fullWidth
    style={{ position: 'absolute', zIndex: 999 }}
  >
    {children}
  </Column>
)

export default FormSelectMenu
