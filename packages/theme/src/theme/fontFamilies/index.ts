import { FontFamily } from '../../types'

const System: FontFamily = {
  name: 'System',
  alternates: ['sans-serif'],
  defaults: {
    font: 'Regular',
  },
  fonts: {
    Regular: {
      fontFamily: 'system-ui',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    Italic: {
      fontFamily: 'system-ui',
      fontWeight: '400',
      fontStyle: 'italic',
    },
    Bold: {
      fontFamily: 'system-ui',
      fontWeight: '700',
      fontStyle: 'normal',
    },
  },
}

const Monospace: FontFamily = {
  name: 'ui-monospace',
  alternates: [
    'Menlo',
    'Monaco',
    'Cascadia Mono',
    'Segoe UI Mono',
    'Roboto Mono',
    'Oxygen Mono',
    'Ubuntu Monospace',
    'Source Code Pro',
    'Fira Mono',
    'Droid Sans Mono',
    'Courier New',
    'monospace',
  ],
  defaults: {
    font: 'Regular',
  },
  fonts: {
    Regular: {
      fontFamily: `
        ui-monospace, 
        Menlo, Monaco, 
        "Cascadia Mono", "Segoe UI Mono", 
        "Roboto Mono", 
        "Oxygen Mono", 
        "Ubuntu Monospace", 
        "Source Code Pro",
        "Fira Mono", 
        "Droid Sans Mono", 
        "Courier New", monospace
      `,
      fontWeight: '400',
      fontStyle: 'normal',
    },
    Italic: {
      fontFamily: `
        ui-monospace, 
        Menlo, Monaco, 
        "Cascadia Mono", "Segoe UI Mono", 
        "Roboto Mono", 
        "Oxygen Mono", 
        "Ubuntu Monospace", 
        "Source Code Pro",
        "Fira Mono", 
        "Droid Sans Mono", 
        "Courier New", monospace
      `,
      fontWeight: '400',
      fontStyle: 'italic',
    },
    Bold: {
      fontFamily: `
        ui-monospace, 
        Menlo, Monaco, 
        "Cascadia Mono", "Segoe UI Mono", 
        "Roboto Mono", 
        "Oxygen Mono", 
        "Ubuntu Monospace", 
        "Source Code Pro",
        "Fira Mono", 
        "Droid Sans Mono", 
        "Courier New", monospace
      `,
      fontWeight: '700',
      fontStyle: 'normal',
    },
  },
}

export const DEFAULT_FONT_FAMILIES = {
  System,
  Body: System,
  Monospace,
}
