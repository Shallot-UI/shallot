import { FunctionComponent, useEffect, useState } from 'react'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
import chroma from 'chroma-js'

import { makeTheme } from '@shallot-ui/theme'
import { FormSelect } from '@shallot-ui/react-select'
import {
  BaseFormInput,
  Checkbox,
  Column,
  Fold,
  FormCheckbox,
  FormInput,
  GlobalStyle,
  Row,
  Text,
} from '@shallot-ui/web'

import { ThemeCode } from './parts/ThemeCode'
import { ComponentsCode } from './parts/ComponentsCode'
import { VariantCode } from './parts/Variant'

export const invertColor = (color: any) => {
  const [palette, shade] = color.split('.')
  const shadeValue = parseInt(shade)
  const reversedShade = Math.abs(500 - shadeValue) + 100
  return `${palette}.${reversedShade}` as any
}

export const invertPalette = (palette: any) => {
  const reversedPalette: any = {}
  Object.keys(palette).forEach((color) => {
    reversedPalette[invertColor(color)] = palette[color]
  })
  return reversedPalette as any
}

const convertPalette = (key: string, original: string[]) => {
  const shadeValues = [
    100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450,
    475, 500,
  ] as const

  const shades = chroma.scale(original).colors(shadeValues.length)

  const palette: Record<string, string> = {}
  shadeValues.forEach((shade, index) => {
    palette[`${key}.${shade}`] = shades[index]
  })

  return palette
}

const colorPalettes = {
  tailwindBlue: convertPalette('Primary', [
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa',
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
  ]),
  tailwindRed: convertPalette('Primary', [
    '#fef2f2',
    '#fee2e2',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
    '#991b1b',
    '#7f1d1d',
  ]),
  tailwindEmerald: convertPalette('Primary', [
    '#ecfdf5',
    '#d1fae5',
    '#a7f3d0',
    '#6ee7b7',
    '#34d399',
    '#10b981',
    '#059669',
    '#047857',
    '#065f46',
    '#064e3b',
  ]),
}

const shadingPalettes = {
  materialGray: convertPalette('Shading', [
    '#FAFAFA',
    '#F5F5F5',
    '#EEEEEE',
    '#E0E0E0',
    '#BDBDBD',
    '#9E9E9E',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
  ]),
  materialBlueGray: convertPalette('Shading', [
    '#ECEFF1',
    '#CFD8DC',
    '#B0BEC5',
    '#90A4AE',
    '#78909C',
    '#607D8B',
    '#546E7A',
    '#455A64',
    '#37474F',
    '#263238',
  ]),
  tailwindSlate: convertPalette('Shading', [
    '#f8fafc',
    '#f1f5f9',
    '#e2e8f0',
    '#cbd5e1',
    '#94a3b8',
    '#64748b',
    '#475569',
    '#334155',
    '#1e293b',
    '#0f172a',
  ]),
  tailwindGray: convertPalette('Shading', [
    '#f9fafb',
    '#f3f4f6',
    '#e5e7eb',
    '#d1d5db',
    '#9ca3af',
    '#6b7280',
    '#4b5563',
    '#374151',
    '#1f2937',
    '#111827',
  ]),
  tailwindZinc: convertPalette('Shading', [
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#71717a',
    '#52525b',
    '#3f3f46',
    '#27272a',
    '#18181b',
  ]),
  tailwindNeutral: convertPalette('Shading', [
    '#fafafa',
    '#f5f5f5',
    '#e5e5e5',
    '#d4d4d4',
    '#a3a3a3',
    '#737373',
    '#525252',
    '#404040',
    '#262626',
    '#171717',
  ]),
  tailwindStone: convertPalette('Shading', [
    '#fafaf9',
    '#f5f5f4',
    '#e7e5e4',
    '#d6d3d1',
    '#a8a29e',
    '#78716c',
    '#57534e',
    '#44403c',
    '#292524',
    '#1c1917',
  ]),
}

const GlobalAnimations = createGlobalStyle`
  * {
    transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  }
`

const defaultTheme = makeTheme({
  colors: {
    ...colorPalettes.tailwindBlue,
    ...shadingPalettes.tailwindGray,
  },
  typefaces: {
    RobotoMono: {
      name: 'RobotoMono',
      alternates: ['monospace'],
      defaults: {
        font: 'Regular',
      },
      fonts: {
        Regular: {
          fontFamily: 'Roboto Mono',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        RegularItalic: {
          fontFamily: 'Roboto Mono',
          fontWeight: '400',
          fontStyle: 'italic',
        },
      },
    },
  },
})

export const HomeLayout: FunctionComponent = () => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)

  const [paletteName, setPaletteName] = useState<string>('tailwindBlue')
  const [shadingName, setShadingName] = useState<string>('tailwindGray')
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const colorPalette = colorPalettes[paletteName]
    const shadingPalette = shadingPalettes[shadingName]
    setTheme(
      makeTheme({
        colors: {
          ...(darkMode ? invertPalette(colorPalette) : colorPalette),
          ...(darkMode ? invertPalette(shadingPalette) : shadingPalette),
        },
        typefaces: {
          RobotoMono: {
            name: 'RobotoMono',
            alternates: ['monospace'],
            defaults: {
              font: 'Regular',
            },
            fonts: {
              Regular: {
                fontFamily: 'Roboto Mono',
                fontWeight: '400',
                fontStyle: 'normal',
              },
              RegularItalic: {
                fontFamily: 'Roboto Mono',
                fontWeight: '400',
                fontStyle: 'italic',
              },
            },
          },
        },
      }),
    )
  }, [paletteName, shadingName, darkMode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalAnimations />
        <Fold>
          <Row>
            <Column unitsAround={4} maxUnitWidth={48}>
              <Text>shallot-ui</Text>
              <Text
                fontSize="lg"
                lineHeight="md"
                unitsBelow={1}
                textColor="Shading.400"
                transition="color 0.2s ease-in-out"
              >
                Shallot is a simple set of utilties for design-minded developers
                building themeable experiences on web & mobile.
              </Text>
              <Text
                fontSize="md"
                lineHeight="md"
                unitsBelow={1}
                textColor="Shading.500"
                transition="color 0.2s ease-in-out, line-height 0.2s ease-in-out"
              >
                Quickly build themeable apps and experiences in react and
                react-native, using a design system that will scale with your
                app.
              </Text>
              <Text
                fontSize="md"
                lineHeight="md"
                unitsBelow={1}
                textColor="Shading.500"
                transition="color 0.2s ease-in-out, line-height 0.2s ease-in-out"
              >
                Shallot is a set of utilities for styled-components, designed to
                make it simple to adapt common components to your theme.
              </Text>
              <Column unitsAbove={2}>
                <FormSelect
                  instanceId="shading"
                  label="Shading Palette"
                  helperText='Try "Material Gray" or "Tailwind Slate"'
                  value={shadingName}
                  onChangeValue={setShadingName}
                  options={[
                    { label: 'Material Gray', value: 'materialGray' },
                    { label: 'Material Blue Gray', value: 'materialBlueGray' },
                    { label: 'Tailwind Slate', value: 'tailwindSlate' },
                    { label: 'Tailwind Gray', value: 'tailwindGray' },
                    { label: 'Tailwind Zinc', value: 'tailwindZinc' },
                    { label: 'Tailwind Neutral', value: 'tailwindNeutral' },
                    { label: 'Tailwind Stone', value: 'tailwindStone' },
                  ]}
                />
              </Column>
              <FormInput
                label="Testing Input"
                helperText="This is a test"
                initialValue="Hello"
                unitsAbove={2}
                typeface="RobotoMono"
              />
              <FormCheckbox
                label="Testing Input"
                helperText="This is a test"
                initialValue="Hello"
                unitsAbove={2}
              />
              <Column unitsAbove={2}>
                <FormSelect
                  instanceId="palette"
                  label="Palette"
                  value={paletteName}
                  onChangeValue={setPaletteName}
                  options={[
                    { label: 'Tailwind Emerald', value: 'tailwindEmerald' },
                    { label: 'Tailwind Blue', value: 'tailwindBlue' },
                    { label: 'Tailwind Red', value: 'tailwindRed' },
                  ]}
                />
              </Column>
              <Column unitsAbove={1}>
                <FormSelect
                  instanceId="theme"
                  label="Theme"
                  value={darkMode ? 'dark' : 'light'}
                  onChangeValue={(value) => {
                    setDarkMode(value === 'dark')
                  }}
                  options={[
                    { label: 'Dark', value: 'dark' },
                    { label: 'Light', value: 'light' },
                  ]}
                />
              </Column>
              <Row unitsAbove={2}>
                {Object.values({
                  ...colorPalettes[paletteName || 'tailwindGray'],
                }).map((backgroundColor) => (
                  <Column
                    key={backgroundColor}
                    unitHeight={2}
                    unitWidth={2}
                    unitsRight={1 / 2}
                    unitsBelow={1 / 2}
                    radius="sm"
                    style={{ backgroundColor }}
                  />
                ))}
              </Row>
              <Row>
                {Object.values({
                  ...shadingPalettes[shadingName || 'tailwindBlue'],
                }).map((backgroundColor) => (
                  <Column
                    key={backgroundColor}
                    unitHeight={2}
                    unitWidth={2}
                    unitsRight={1 / 2}
                    unitsBelow={1 / 2}
                    radius="sm"
                    style={{ backgroundColor }}
                  />
                ))}
              </Row>
            </Column>
            <ThemeCode />
          </Row>
        </Fold>
        <Fold>
          <Column>
            <Column unitsLeft={4} unitsRight={4}>
              <Text fontSize="lg">Share conventions on web & native.</Text>
              <Text unitsAbove={1}>This is it.</Text>
            </Column>
            <ComponentsCode />
          </Column>
        </Fold>
        <VariantCode />
      </ThemeProvider>
    </>
  )
}
