import { invertPalette } from '../../utils'

const DEFAULT_PRIMARY_COLORS = {
  'Primary.100': '#DAD6FF',
  'Primary.150': '#B5ADFF',
  'Primary.200': '#8F84FF',
  'Primary.250': '#7266FF',
  'Primary.300': '#4233FF',
  'Primary.350': '#3125DB',
  'Primary.400': '#2219B7',
  'Primary.450': '#161093',
  'Primary.500': '#0E097A',
}

const DEFAULT_SUCCESS_COLORS = {
  'Success.100': '#F5FCCB',
  'Success.150': '#E9FA99',
  'Success.200': '#D5F164',
  'Success.250': '#BFE43E',
  'Success.300': '#A0D306',
  'Success.350': '#84B504',
  'Success.400': '#6B9703',
  'Success.450': '#537A01',
  'Success.500': '#426501',
}

const DEFAULT_WARNING_COLORS = {
  'Warning.100': '#FFF5CD',
  'Warning.150': '#FFE89B',
  'Warning.200': '#FFD869',
  'Warning.250': '#FFC943',
  'Warning.300': '#FFAF05',
  'Warning.350': '#DB8F03',
  'Warning.400': '#B77102',
  'Warning.450': '#935601',
  'Warning.500': '#7A4300',
}

const DEFAULT_DANGER_COLORS = {
  'Danger.100': '#FFE4D5',
  'Danger.150': '#FFC2AC',
  'Danger.200': '#FF9982',
  'Danger.250': '#FF7363',
  'Danger.300': '#FF3330',
  'Danger.350': '#DB2330',
  'Danger.400': '#B71831',
  'Danger.450': '#930F2F',
  'Danger.500': '#7A092E',
}

const DEFAULT_SHADING_COLORS = {
  'Shading.100': '#ffffff',
  'Shading.125': '#f9f9f9',
  'Shading.150': '#f0f0f0',
  'Shading.175': '#e4e4e4',
  'Shading.200': '#dbdbdb',
  'Shading.225': '#d1d1d1',
  'Shading.250': '#c2c2c2',
  'Shading.275': '#a8a8a8',
  'Shading.300': '#838383',
  'Shading.325': '#676767',
  'Shading.350': '#4e4e4e',
  'Shading.375': '#3b3b3b',
  'Shading.400': '#2f2f2f',
  'Shading.425': '#232323',
  'Shading.450': '#1a1a1a',
  'Shading.475': '#101010',
  'Shading.500': '#000000',
}

export const DEFAULT_DARK_COLORS = {
  ...invertPalette(DEFAULT_PRIMARY_COLORS),
  ...invertPalette(DEFAULT_SUCCESS_COLORS),
  ...invertPalette(DEFAULT_WARNING_COLORS),
  ...invertPalette(DEFAULT_DANGER_COLORS),
  ...invertPalette(DEFAULT_SHADING_COLORS),
  transparent: 'transparent',
}

export const DEFAULT_COLORS = {
  ...DEFAULT_PRIMARY_COLORS,
  ...DEFAULT_SUCCESS_COLORS,
  ...DEFAULT_WARNING_COLORS,
  ...DEFAULT_DANGER_COLORS,
  ...DEFAULT_SHADING_COLORS,
  transparent: 'transparent',
}
