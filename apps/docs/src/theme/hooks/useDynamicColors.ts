import { useState } from 'react'

type ColorsKey = 'warm' | 'cool' | 'slate'

const options: { label: string; value: ColorsKey }[] = [
  { label: 'Warm', value: 'warm' },
  { label: 'Cool', value: 'cool' },
  { label: 'Slate', value: 'slate' },
]

const colorsByKey = {
  warm: {
    Shading: {
      '50': '#fefdf8',
      '100': '#efedd7',
      '200': '#ded7aa',
      '300': '#cabd7a',
      '400': '#baa655',
      '500': '#ab9347',
      '600': '#93773b',
      '700': '#765a32',
      '800': '#644b2f',
      '900': '#57402c',
      '950': '#312217',
    },
  },
  cool: {
    Shading: {
      '50': '#f4f8f9',
      '100': '#ebf2f4',
      '200': '#dae7eb',
      '300': '#c3d8de',
      '400': '#aac3cf',
      '500': '#94aec0',
      '600': '#849cb2',
      '700': '#6b8197',
      '800': '#586a7b',
      '900': '#4b5864',
      '950': '#2c333a',
    },
    Yellow: {
      '50': '#f5f6f9',
      '100': '#e8ebf1',
      '200': '#d6dce7',
      '300': '#bfc8d9',
      '400': '#99a6c1',
      '500': '#808db1',
      '600': '#6e77a2',
      '700': '#626993',
      '800': '#53577a',
      '900': '#464962',
      '950': '#2d2f3e',
    },
  },
  slate: {
    Shading: {
      '50': '#f8f8f8',
      '100': '#ebebeb',
      '200': '#dcdcdc',
      '300': '#bdbdbd',
      '400': '#989898',
      '500': '#7c7c7c',
      '600': '#656565',
      '700': '#525252',
      '800': '#464646',
      '900': '#3d3d3d',
      '950': '#292929',
    },
    Yellow: {
      '50': '#f7f7f5',
      '100': '#ebebe9',
      '200': '#d6d6d1',
      '300': '#bdbdb4',
      '400': '#a1a096',
      '500': '#8e8c81',
      '600': '#827f74',
      '700': '#6c6a62',
      '800': '#5a5852',
      '900': '#4a4844',
      '950': '#272623',
    },
  },
} as const

export type DynamicColors = {
  options: { label: string; value: ColorsKey }[]
  key: ColorsKey
  setKey: (key: ColorsKey) => void
  value: (typeof colorsByKey)[ColorsKey]
}

const useDynamicColors = (): DynamicColors => {
  const [key, setKey] = useState<ColorsKey>('warm')
  const value = colorsByKey[key]

  return { options, key, setKey, value }
}

export default useDynamicColors
