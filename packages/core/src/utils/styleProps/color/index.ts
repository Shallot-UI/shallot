import { AllColorShades } from '@shallot-ui/theme'

import { getColorShade } from '../../mixins'

// Background Color
// ----------------

export type BackgroundColorProps = { backgroundColor?: AllColorShades }

export const backgroundColorPropKeys = ['backgroundColor'] as const

export const getBackgroundColorShallot = ({
  backgroundColor,
}: BackgroundColorProps) => ({
  ...(backgroundColor && { backgroundColor: getColorShade(backgroundColor) }),
})

export const pullBackgroundColorProps = <T extends BackgroundColorProps>({
  backgroundColor,
  ...rest
}: T) => rest

// Text Color
// ----------

export type TextColorProps = { textColor?: AllColorShades }

export const textColorPropKeys = ['backgroundColor'] as const

export const getTextColorShallot = ({ textColor }: TextColorProps) => ({
  ...(textColor && { textColor: getColorShade(textColor) }),
})

export const pullTextColorProps = <T extends TextColorProps>({
  textColor,
  ...rest
}: T) => rest

// Border Color
// ------------

export type BorderColorProps = { borderColor?: AllColorShades }

export const borderColorPropKeys = ['backgroundColor'] as const

export const getBorderColorShallot = ({ borderColor }: BorderColorProps) => ({
  ...(borderColor && { borderColor: getColorShade(borderColor) }),
})

export const pullBorderColorProps = <T extends BorderColorProps>({
  borderColor,
  ...rest
}: T) => rest

// Fill Color
// ----------

export type FillColorProps = { fillColor?: AllColorShades }

export const fillColorPropKeys = ['backgroundColor'] as const

export const getFillColorShallot = ({ fillColor }: FillColorProps) => ({
  ...(fillColor && { fill: getColorShade(fillColor) }),
})

export const pullFillColorProps = <T extends FillColorProps>({
  fillColor,
  ...rest
}: T) => rest
