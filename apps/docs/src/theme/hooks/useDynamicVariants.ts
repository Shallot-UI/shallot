import {
  getColor,
  getFontFamily,
  getFontSize,
  getGlobal,
  getRadius,
  getUnits,
  makeNextThemeVariants,
} from '@shallot-ui/next'
import { useState } from 'react'

type VariantsKey = 'modern' | 'simple'

const options: { label: string; value: VariantsKey }[] = [
  { label: 'Modern', value: 'modern' },
  { label: 'Simple', value: 'simple' },
]

const variantsByKey = {
  modern: {
    Box: {
      card: {
        backgroundColor: getGlobal('backgroundColor'),
        padding: getUnits(1),
        borderRadius: getRadius('sm'),
      },
    },
    Button: {
      Default: {
        Container: {
          borderRadius: getRadius('md'),
          backgroundColor: getColor('Shading', 700),
        },
      },
      Secondary: {
        Container: {
          backgroundColor: 'transparent',
          border: 'none',
        },
        Title: {
          color: getColor('Shading', 700),
          textDecoration: 'underline',
          underlinePosition: 'below',
        },
        ':hover': {
          Container: { backgroundColor: 'transparent' },
          Title: { textDecoration: 'none' },
        },
        ':active': {
          Container: { backgroundColor: 'transparent' },
          Title: { textDecoration: 'none' },
        },
      },
    },
  },
  simple: {
    Text: {
      H1: { color: getGlobal('headingColor') },
      H2: { color: getGlobal('headingColor') },
      H3: { color: getGlobal('headingColor') },
    },
    Box: {
      card: {
        backgroundColor: getGlobal('backgroundColor'),
        padding: getUnits(2),
        borderRadius: getRadius('lg'),
      },
    },
    Button: {
      Default: {
        Container: { borderRadius: getRadius('pill') },
      },
      Secondary: {
        Container: {
          borderRadius: getRadius('pill'),
          backgroundColor: 'transparent',
          borderColor: getColor('Shading', 700),
        },
        Title: { color: getColor('Shading', 700) },
        ':hover': {
          Container: {
            backgroundColor: 'transparent',
            borderColor: getColor('Shading', 600),
          },
        },
        ':active': {
          Container: {
            backgroundColor: 'transparent',
            borderColor: getColor('Shading', 600),
          },
        },
      },
    },
  },
} as const

export type DynamicVariants = {
  options: { label: string; value: VariantsKey }[]
  key: VariantsKey
  setKey: (key: VariantsKey) => void
  value: (typeof variantsByKey)[VariantsKey]
}

const useDynamicVariants = () => {
  const [key, setKey] = useState<VariantsKey>('modern')
  const value = variantsByKey[key]
  const variants = makeNextThemeVariants(value)

  const dynamicVariants: DynamicVariants = {
    key,
    setKey,
    value,
    options,
  }

  return {
    dynamicVariants,
    variants,
  }
}

export default useDynamicVariants
