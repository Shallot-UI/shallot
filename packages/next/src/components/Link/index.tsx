import { FunctionComponent, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { Text, TextProps, TextStyleProps } from '@shallot-ui/web'

export const Link: FunctionComponent<
  LinkProps &
    TextStyleProps &
    TextProps & {
      children: ReactNode
      anchorProps?: TextStyleProps
      target?: '_blank'
    }
> = ({
  as,
  children,
  target,
  anchorProps,

  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
  backgroundColor,
  textColor,
  borderColor,
  font,
  typeface,
  uppercase,
  lowercase,
  capitalize,
  fontSize,
  lineHeight,
  leftText,
  centerText,
  rightText,
  justifyText,
  underline,
  unitWidth,
  minUnitWidth,
  maxUnitWidth,
  unitHeight,
  minUnitHeight,
  maxUnitHeight,
  grow,
  flex,
  shrink,
  letterSpacing,

  ...rest
}) => (
  <NextLink passHref {...rest}>
    <Text
      as="a"
      target={target}
      unitsAround={unitsAround}
      unitsAbove={unitsAbove}
      unitsBelow={unitsBelow}
      unitsLeft={unitsLeft}
      unitsRight={unitsRight}
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      font={font}
      typeface={typeface}
      uppercase={uppercase}
      lowercase={lowercase}
      capitalize={capitalize}
      fontSize={fontSize}
      lineHeight={lineHeight}
      leftText={leftText}
      centerText={centerText}
      rightText={rightText}
      justifyText={justifyText}
      underline={underline}
      unitWidth={unitWidth}
      minUnitWidth={minUnitWidth}
      maxUnitWidth={maxUnitWidth}
      unitHeight={unitHeight}
      minUnitHeight={minUnitHeight}
      maxUnitHeight={maxUnitHeight}
      grow={grow}
      flex={flex}
      shrink={shrink}
      letterSpacing={letterSpacing}
      {...anchorProps}
    >
      {children}
    </Text>
  </NextLink>
)
