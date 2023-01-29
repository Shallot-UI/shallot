import { FunctionComponent, useCallback, useState } from 'react'
import { useStyleProps } from '../../hooks'
import { Box, Column } from '../primitives'
import CheckmarkIcon from './icons/CheckmarkIcon'
import { CheckboxProps } from './types'

export const BaseCheckbox: FunctionComponent<CheckboxProps> = ({
  disabled,
  onFocus,
  onBlur,
  onChange,
  Icon = CheckmarkIcon,
  error,
  styles,
  ...rest
}) => {
  const [checked, setChecked] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  const handleChange = useCallback((e: any) => {
    setChecked(e.target.checked)
    onChange?.(e)
  }, [])

  const state = {
    disabled,
    focused,
    error,
    checked,
  }

  const containerStyles = useStyleProps('container', styles, state, rest)
  const fillStyles = useStyleProps('fill', styles, state)
  const iconStyles = useStyleProps('icon', styles, state)

  return (
    <Column
      {...containerStyles}
      onClick={() => setChecked((current) => !current)}
    >
      <Box
        as="input"
        type="checkbox"
        checked={checked}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        display="hidden"
        {...rest}
      />
      <Column {...fillStyles} style={{ position: 'absolute' }} />
      <Box as={Icon} {...iconStyles} style={{ position: 'absolute' }} />
    </Column>
  )
}
