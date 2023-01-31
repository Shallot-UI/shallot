import { FunctionComponent, useCallback, useState } from 'react'
import { useStyleProps } from '../../hooks'
import { Box, Column } from '../primitives'
import CheckmarkIcon from './icons/CheckmarkIcon'
import { CheckboxProps } from './types'

export const BaseCheckbox: FunctionComponent<CheckboxProps> = ({
  disabled,
  onFocus,
  onBlur,
  Icon = CheckmarkIcon,
  error,
  styles,
  value,
  setValue,
  ...rest
}) => {
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
    setValue(e.target.checked)
  }, [])

  const state = {
    disabled,
    focused,
    error,
    checked: value,
  }

  const containerStyles = useStyleProps('container', styles, state, rest)
  const fillStyles = useStyleProps('fill', styles, state)
  const iconStyles = useStyleProps('icon', styles, state)

  return (
    <Column {...containerStyles} onClick={() => setValue(!value)}>
      <Box
        as="input"
        type="checkbox"
        checked={value}
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
