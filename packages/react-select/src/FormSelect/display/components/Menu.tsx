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
    style={{
      borderWidth: 1,
      position: 'absolute',
      width: '100%',
      zIndex: 999,
    }}
  >
    {children}
  </Column>
)

export default FormSelectMenu
