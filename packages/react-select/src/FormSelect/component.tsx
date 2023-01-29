import { ComponentProps, FunctionComponent, useCallback, useState } from 'react'
import ReactSelect, {
  ControlProps,
  MenuProps,
  OptionProps,
  SingleValueProps,
} from 'react-select'

import { FormSelectProps, FormSelectStyleProps } from './types'
import { optionForValue } from './utils'
import { DEFAULT_FORM_SELECT_SKIN } from './skin'
import S from './style'
import { Column, Row, Text } from '@shallot-ui/web'
import { useTheme } from 'styled-components'

export const RawFormSelect: FunctionComponent<
  FormSelectProps & FormSelectStyleProps
> = ({
  ref,

  value,
  options,
  multiple,
  disabled,

  onChangeValue,
  onFocus,
  onBlur,

  label,
  errorText,
  helperText,

  states,
  wrapperProps,
  labelProps,
  errorTextProps,
  helperTextProps,

  grow,
  flex,
  shrink,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,

  required,

  ...rest
}) => {
  const [focused, setFocused] = useState(false)
  const theme = useTheme()

  const handleFocus = useCallback((e: any) => {
    setFocused(true)
    onFocus?.(e)
  }, [])

  const handleBlur = useCallback((e: any) => {
    setFocused(false)
    onBlur?.(e)
  }, [])

  const handleChange = useCallback(
    (selection: any) =>
      multiple
        ? onChangeValue(selection.map(({ value }: any) => value))
        : onChangeValue(selection.value),
    [onChangeValue, multiple],
  )

  const selectedOption = optionForValue(value, options, multiple)

  const SingleValue: FunctionComponent<SingleValueProps> = ({
    children,
    isDisabled,
    innerProps,
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
      {...innerProps}
    >
      {children}
    </Text>
  )

  const Option: FunctionComponent<OptionProps> = ({
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

  const Menu: FunctionComponent<MenuProps> = ({
    children,
    innerRef,
    innerProps,
  }) => (
    <Column
      ref={innerRef}
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

  const Control: FunctionComponent<ControlProps> = ({
    children,
    isDisabled,
    isFocused,
    innerRef,
    innerProps,
    menuIsOpen,
  }) => (
    <Row
      ref={innerRef}
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

  return (
    <S.Container
      focused={focused}
      disabled={disabled}
      populated={Boolean(value)}
      error={Boolean(errorText)}
      // Styles
      states={states}
      wrapperProps={wrapperProps}
      labelProps={labelProps}
      errorTextProps={errorTextProps}
      helperTextProps={helperTextProps}
      // Container Style Props
      grow={grow}
      flex={flex}
      shrink={shrink}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      unitWidth={unitWidth}
      minUnitWidth={minUnitWidth}
      maxUnitWidth={maxUnitWidth}
      unitHeight={unitHeight}
      minUnitHeight={minUnitHeight}
      maxUnitHeight={maxUnitHeight}
    >
      <S.Label>
        {label}
        {required && <S.RequiredStar />}
      </S.Label>
      <Text>
        <ReactSelect
          {...rest}
          value={selectedOption}
          options={options}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isMulti={multiple}
          isDisabled={disabled}
          required={required}
          components={{
            // Placeholder,
            Control,
            SingleValue,
            Option,
            Menu,
          }}
        />
      </Text>
      {errorText && <S.ErrorText>{errorText}</S.ErrorText>}
      {!errorText && helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Container>
  )
}

export const FormSelect: FunctionComponent<
  ComponentProps<typeof RawFormSelect>
> = (props) => <RawFormSelect {...DEFAULT_FORM_SELECT_SKIN} {...props} />
