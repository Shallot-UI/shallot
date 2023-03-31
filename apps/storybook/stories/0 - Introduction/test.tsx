import { Meta, Story, Canvas } from '@storybook/addon-docs'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import {
  StatefulButton,
  getInputStyles,
  InputState,
  applyStyles,
  makeTheme,
} from '@shallot-ui/web'

;<ThemeProvider theme={makeTheme({})}>
  <StatefulButton
    title="Hello World!"
    getStyles={(state) => {
      let styles = {
        container: {
          backgroundColor: 'Primary.300',
          elevation: 'pressable',
          cursor: 'pointer',
          transition:
            '\
            background-color 200ms ease-in-out, \
            transform 300ms ease-in-out, \
            box-shadow 300ms ease-in-out \
          ',
        },
        label: {
          fontSize: 'md',
          textColor: 'Shading.100',
          lineHeight: 'md',
          transition: 'color 300ms ease-in-out',
          unitsAround: 2,
          unitsAbove: 1,
          unitsBelow: 1,
          centerText: true,
          flex: 1,
          cursor: 'pointer',
        },
      }

      return styles
    }}
  />
</ThemeProvider>
